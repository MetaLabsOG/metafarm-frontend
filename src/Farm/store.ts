import { Map, Set } from 'immutable';
import { createEffect, createStore, sample, combine, Store, createEvent, restore } from 'effector';
import { ascend, descend, min, Ord, sort, zip, zipWith } from 'ramda';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { backend as farmBackend_17_2_4 } from '../vendor/metalabs-farm-17_2_4';
// @ts-ignore
import { backend as farmBackend_17_2_5 } from '../vendor/metalabs-farm-17_2_5';

import {
    Asset,
    AssetId,
    assetId,
    buildContractsStore,
    ContractState,
    Amount,
    Priced,
    assetLoaded,
    registerAsset,
    registerPricedAsset,
    $algoUsdPrice,
    fetchAsset,
    ALGO_ASSET,
    fetchAlgoPriceFx,
    $pricedAssets,
    $networkTime,
    Contract,
    FarmType,
    hasLocalState,
    Time,
    $meanRoundDuration,
} from '../common/store';
import { nonConcurrent } from '../common/store/utils';
import { AllDefined, Backend } from '../types';
import { LPTokenInfo, DexProvider, makeDex } from '../dexes';
import { fromSmallestUnits, YEAR } from '../common/lib';
import { calculateAlgoReward, convertAmountToUSD, getPoolState } from './PoolList/Pool/utils';
import { PoolState } from './PoolList/Pool/types';
import { ColumnType } from './PoolList/PoolList';
import { cachePrice, getCachedPrice } from '../common/priceCache';
import { calculateLPTokenPrice } from '../providers/tinymanPriceProvider';
import { fetchLPTokenInfoFromBackendApi, BackendLPTokenInfo } from '../providers/apiProvider';

const FARM_BACKENDS = {
    '17.2.4': farmBackend_17_2_4 as Backend,
    '17.2.5': farmBackend_17_2_5 as Backend,
};

// TODO: this function is a huge costyl
export function detectAssetProvider({ name }: { name: string }): DexProvider {
    if (name.includes('TinymanPool2.0')) {
        return 'T3';
    }
    name = name.toLowerCase();
    if (name.includes('tinyman')) {
        return 'T2';
    }
    if (name.includes('humble')) {
        return 'H2';
    }
    if (name.includes('liquidity') || name.includes('pact')) {
        return 'PT';
    }

    return 'MOCK';
}

export async function getLPTokenInfo(
    lpTokenAsset: Asset,
    asset1Id: AssetId,
    asset2Id: AssetId,
    algoPrice: number | null,
    provider?: DexProvider
): Promise<Priced<LPTokenInfo>> {
    try {
        // This is the primary logic using DEX SDKs
        if (provider === undefined) {
            provider = detectAssetProvider(lpTokenAsset);
        }

        const cachedPrice = getCachedPrice(lpTokenAsset.id);
        if (cachedPrice && cachedPrice.priceInAlgo && cachedPrice.priceInUsd && algoPrice) {
            console.log(`Using cached LP token price for ${lpTokenAsset.id}: ${cachedPrice.priceInAlgo.price} ALGO (DEX path)`);
            const dex = makeDex(provider);
            const pool = await dex.getPoolByAssets(asset1Id, asset2Id);
            return {
                ...lpTokenAsset,
                poolId: pool.poolId,
                asset1: pool.asset1,
                asset2: pool.asset2,
                liquidityAsset: lpTokenAsset.id,
                asset1Reserve: pool.asset1Reserve,
                asset2Reserve: pool.asset2Reserve,
                totalLiquidity: pool.totalLiquidity,
                poolDex: provider,
                dexFeeApr: pool.dexFeeApr || 0,
                price: cachedPrice.priceInUsd.price,
                priceInAlgo: cachedPrice.priceInAlgo.price,
            };
        }

        const dex = makeDex(provider);
        const pool = await dex.getPoolByAssets(asset1Id, asset2Id);
        const fetchedAsset1 = await fetchAsset(pool.asset1);
        const fetchedAsset2 = await fetchAsset(pool.asset2);

        if (!algoPrice) {
            throw new Error('ALGO price is required to calculate LP token price (DEX path)');
        }

        const lpPrice = await calculateLPTokenPrice(
            lpTokenAsset,
            fetchedAsset1,
            fetchedAsset2,
            pool.asset1Reserve,
            pool.asset2Reserve,
            pool.totalLiquidity,
            algoPrice
        );

        if (!lpPrice) {
            throw new Error('Failed to calculate LP token price (DEX path)');
        }
        cachePrice(lpTokenAsset.id, lpPrice.priceInAlgo, lpPrice.priceInUsd);

        return {
            ...lpTokenAsset,
            poolId: pool.poolId,
            asset1: pool.asset1,
            asset2: pool.asset2,
            liquidityAsset: lpTokenAsset.id,
            asset1Reserve: pool.asset1Reserve,
            asset2Reserve: pool.asset2Reserve,
            totalLiquidity: pool.totalLiquidity,
            poolDex: provider,
            dexFeeApr: pool.dexFeeApr || 0,
            price: lpPrice.priceInUsd,
            priceInAlgo: lpPrice.priceInAlgo,
        };
    } catch (dexError) {
        console.warn(`Primary DEX SDK method failed for LP token ${lpTokenAsset.id}:`, dexError);
        console.log(`Attempting fallback to backend API for LP token ${lpTokenAsset.id}...`);

        try {
            const backendData = await fetchLPTokenInfoFromBackendApi(lpTokenAsset.id);
            
            // Ensure lpTokenAsset details (name, unitName, decimals, etc.) are preserved.
            // The backend API provides prices and reserve info, but not necessarily full Asset details for the LP token itself.
            const transformedData: Priced<LPTokenInfo> = {
                ...lpTokenAsset, // Spread the original LP asset to keep its details
                poolId: backendData.id, // Pool AppId from backend
                asset1: backendData.asset1_id,
                asset2: backendData.asset2_id,
                liquidityAsset: backendData.token_id, // This should match lpTokenAsset.id
                asset1Reserve: BigInt(Math.round(backendData.asset1_reserve_micros)),
                asset2Reserve: BigInt(Math.round(backendData.asset2_reserve_micros)),
                totalLiquidity: BigInt(Math.round(backendData.issued_tokens_micros)),
                poolDex: backendData.dex_provider as DexProvider, // Cast, ensure this is a valid DexProvider string
                dexFeeApr: backendData.swap_fee_apr || 0,
                price: backendData.token_price_usd,
                priceInAlgo: backendData.token_price_algo,
            };
            
            // Optionally, cache this backend-derived price too
            cachePrice(lpTokenAsset.id, transformedData.priceInAlgo, transformedData.price);
            console.log(`Successfully fetched LP token ${lpTokenAsset.id} info from backend API fallback.`);
            return transformedData;
        } catch (fallbackError) {
            console.error(`Fallback backend API method also failed for LP token ${lpTokenAsset.id}:`, fallbackError);
            // Re-throw the original DEX error or a new combined error if more context is needed
            // For now, re-throwing original to keep behavior somewhat consistent with prior error propagation
            throw dexError; 
        }
    }
    // Old LP token price calculation code has been replaced with the new implementation above
    // This comment seems out of place now, as the function has significant logic.
    // Consider removing or updating it.
}

const BIG_NUM = BigInt('1000000000000000000');

export const recalculatedReward = (contractState: AllDefined<ContractState<FarmType>>, currentBlock: Time): Amount => {
    const { beginBlock, endBlock, totalRewardAmount } = contractState.initial;
    const { totalStaked, lastUpdateBlock, rewardPerTokenStored } = contractState.global;
    const { staked, reward, rewardPerTokenPaid } = contractState.local;
    const rewardPerBlock = (totalRewardAmount * BIG_NUM) / BigInt(endBlock - beginBlock);

    if (lastUpdateBlock >= currentBlock || totalStaked === BigInt(0) || staked === BigInt(0)) {
        return reward;
    }

    const lastBlockWithRewards = min(currentBlock, endBlock);
    const rewardBlocksPassed = lastBlockWithRewards - lastUpdateBlock;
    const rewardPerTokenStoredNew = rewardPerTokenStored + (BigInt(rewardBlocksPassed) * rewardPerBlock) / totalStaked;

    const rewardToPayNow = (staked * (rewardPerTokenStoredNew - rewardPerTokenPaid)) / BIG_NUM;

    return reward + rewardToPayNow;
};

export const projectState = <T extends FarmType>(
    contractState: ContractState<T>,
    currentBlock: Time
): ContractState<T> => {
    if (!hasLocalState(contractState)) {
        return contractState;
    }

    const projectedReward = recalculatedReward(contractState, currentBlock);
    return { ...contractState, local: { ...contractState.local, reward: projectedReward } };
};

export const projectContracts = <T extends FarmType>(
    contracts: Array<Contract<T>>,
    currentBlock: Time
): Array<Contract<T>> => {
    return contracts.map((contract) =>
        contract.state === null ? contract : { ...contract, state: projectState(contract.state, currentBlock) }
    );
};

const { $contracts, $contractStatesWithCache, setContractInfos, triggerStateUpdate, initializeContract } =
    buildContractsStore('farm', FARM_BACKENDS);

export type SortBy = {
    type: ColumnType;
    asc: boolean;
};

export const $pools = combine($contracts, $networkTime, projectContracts);
export const $farmPools = $pools.map((pools) => pools.filter((pool) => Boolean(pool.info.metadata.dex)));
export const $stakePools = $pools.map((pools) => pools.filter((pool) => !pool.info.metadata.dex));
export const setPoolInfos = setContractInfos;
export const triggerPoolUpdate = triggerStateUpdate;
export const initializeFarmContract = initializeContract;

// LP token info store
type LPTokenStore = Map<number, Priced<LPTokenInfo>>;

export const $lpTokenInfos = createStore<LPTokenStore>(Map());

export const getLPTokenInfoFx = createEffect(
    nonConcurrent(
        async ({
            lpTokenAsset,
            asset1Id,
            asset2Id,
            provider,
            algoPrice,
        }: {
            lpTokenAsset: Asset;
            asset1Id: AssetId;
            asset2Id: AssetId;
            provider: DexProvider | undefined;
            algoPrice: number | null;
        }) => getLPTokenInfo(lpTokenAsset, asset1Id, asset2Id, algoPrice, provider)
    )
);

$lpTokenInfos.on(getLPTokenInfoFx.done, (state, { params, result }) => state.set(assetId(params.lpTokenAsset), result));

const $lpTokenIds = createStore(Set<AssetId>()).on($farmPools, (state, pools) => {
    const newIds = Set(pools.filter((pool) => pool.state !== null).map((pool) => pool.state!.initial.stakeToken));
    return state.union(newIds);
});

// Automatically fetch LP token infos when general info about them gets fetched the first time
sample({
    clock: assetLoaded,
    source: { farmPools: $farmPools, algoPrice: $algoUsdPrice }, // Added farmPools to source
    filter: ({ farmPools }, lpTokenAsset) => {
        // Check if the loaded asset is an LP token for any of the farm pools
        return farmPools.some(pool => pool.state?.initial.stakeToken === lpTokenAsset.id && pool.info.metadata.dex);
    },
    fn: ({ farmPools, algoPrice }, lpTokenAsset) => {
        const pool = farmPools.find(p => p.state?.initial.stakeToken === lpTokenAsset.id);
        if (!pool || !pool.info.metadata.asset1_id || !pool.info.metadata.asset2_id) {
            // This should ideally not happen if filter is correct
            console.error('Could not find pool or metadata for LP token:', lpTokenAsset.id);
            // How to handle this error case? For now, let's prevent calling the effect.
            // Though Effector's filter should prevent this `fn` from running.
            // To satisfy type-checker for target, we'd need to return a valid payload or have filter be more robust.
            // However, the filter *should* ensure `pool` is found and has `dex`.
            // Let's throw to make it obvious if this case is hit.
            throw new Error(`Critical: Pool metadata not found for LP token ${lpTokenAsset.id} after filter passed.`);
        }
        const asset1Id = Number(pool.info.metadata.asset1_id);
        const asset2Id = Number(pool.info.metadata.asset2_id);
        const provider = pool.info.metadata.dex as DexProvider; // Assuming metadata.dex is a valid DexProvider

        return { lpTokenAsset, asset1Id, asset2Id, algoPrice, provider };
    },
    target: getLPTokenInfoFx,
});

$farmPools.watch((farms) => {
    const farmStates = farms.map((farm) => farm.state).filter((s): s is ContractState<'farm'> => s !== null);
    for (const s of farmStates) {
        registerAsset(s.initial.stakeToken);
        registerPricedAsset(s.initial.rewardToken);
    }
});

$stakePools.watch((farms) => {
    const farmStates = farms.map((farm) => farm.state).filter((s): s is ContractState<'farm'> => s !== null);
    for (const s of farmStates) {
        registerPricedAsset(s.initial.stakeToken);
        registerPricedAsset(s.initial.rewardToken);
    }
});

export const $lpAndSimpleTokens = combine($lpTokenInfos, $pricedAssets, (lpTokens, tokens) => tokens.merge(lpTokens));

// These substores avoid a bug when token infos are not updated in components
export const $farmStakeTokens: Store<Map<number, Priced<LPTokenInfo> | Priced<Asset> | null>> = combine(
    $lpAndSimpleTokens,
    $contractStatesWithCache,
    (allTokens, states) => states.map((state, _) => allTokens.get(state.initial.stakeToken, null))
);

export const $farmRewardTokens = combine($pricedAssets, $contractStatesWithCache, (tokens, states) =>
    states.map((state, _) => tokens.get(state.initial.rewardToken, null))
);

// Price aggregation
const getDollarInfo = <T extends FarmType>(
    states: Array<ContractState<T>>,
    tokens: Map<AssetId, Priced<Asset>>,
    getAmount: (s: ContractState<T>) => Amount | undefined,
    getToken: (s: ContractState<T>) => AssetId
): number[] =>
    states.map((state) => {
        const token = getToken(state);
        const amount = getAmount(state);
        const tokenInfo = tokens.get(token, null);

        if (!amount || !token || !tokenInfo) {
            return 0;
        }

        return convertAmountToUSD(tokenInfo, amount);
    });

export interface PoolDollarInfo {
    tvl: number;
    userStake: number;
    pendingReward: number;
}

export function createDollarInfos<T extends FarmType>($pools: Store<Array<Contract<T>>>): Store<PoolDollarInfo[]> {
    return combine(
        $pools.map((contracts) => contracts.map((c) => c.state).filter((s): s is ContractState<T> => s !== null)),
        $lpTokenInfos,
        $pricedAssets,
        (states, lpTokens, tokens) => {
            const getToken = (s: ContractState<T>) => ('token' in s.initial ? s.initial.token : s.initial.stakeToken);
            const allTokens = tokens.merge(lpTokens);
            const tvls = getDollarInfo(states, allTokens, (s) => s.global.totalStaked, getToken);
            const userStakes: number[] = getDollarInfo(states, allTokens, (s) => s.local?.staked, getToken);
            const pendingRewards = states.map((state) => {
                const token = 'token' in state.initial ? state.initial.token : state.initial.rewardToken;
                const tokenInfo = tokens.get(token, null);
                const algoInfo = tokens.get(0, null);
                const tokenReward = state.local?.reward ?? BigInt(0);

                if (!tokenReward || !token || !tokenInfo || !algoInfo) {
                    return 0;
                }

                const algoReward = calculateAlgoReward(state.initial, tokenReward);

                return convertAmountToUSD(tokenInfo, tokenReward) + convertAmountToUSD(algoInfo, algoReward);
            });

            return zipWith(
                (a, b: number[]) => ({
                    tvl: a,
                    userStake: b[0],
                    pendingReward: b[1],
                }),
                tvls,
                zip(userStakes, pendingRewards)
            );
        }
    );
}

export const $farmPoolDollarInfos = createDollarInfos($farmPools);

export interface PoolAggregates {
    tvl: number;
    totalUserStake: number;
    totalPendingReward: number;
}

export function createAggregates($dollarInfos: Store<PoolDollarInfo[]>) {
    return $dollarInfos.map((infos) => {
        const tvl = infos.reduce((acc, info) => acc + info.tvl, 0);
        const totalUserStake = infos.reduce((acc, info) => acc + info.userStake, 0);
        const totalPendingReward = infos.reduce((acc, info) => acc + info.pendingReward, 0);
        return { tvl, totalUserStake, totalPendingReward };
    });
}

export const $farmPoolAggregates: Store<PoolAggregates> = createAggregates($farmPoolDollarInfos);

export type AprType = {
    reward: number;
    algoReward: number;
    fees: number;
    total: number;
};

export function createAprs<T extends FarmType>(
    $pools: Store<Array<Contract<T>>>,
    $stakeTokens: Store<Map<AssetId, Priced<LPTokenInfo> | Priced<Asset> | null>>
): Store<AprType[]> {
    return combine(
        $pools,
        $networkTime,
        $meanRoundDuration,
        $algoUsdPrice,
        $stakeTokens,
        $farmRewardTokens,
        (pools, time, meanRoundDuration, algoPrice, stakingTokens, farmRewardTokens) =>
            pools
                // TODO: we should never have null pools tbh
                .filter((pool) => pool.state !== null)
                .map((pool) => {
                    const stakeTokenInfo = stakingTokens.get(pool.id, null);
                    const rewardTokenInfo = farmRewardTokens.get(pool.id, null) ?? stakeTokenInfo;
                    const contractState = pool.state!;
                    const period = getPoolState(time, pool.state!.initial);

                    if (stakeTokenInfo === null || rewardTokenInfo === null || period === PoolState.Finished) {
                        return {
                            reward: 0,
                            algoReward: 0,
                            fees: 0,
                            total: 0,
                        };
                    }
                    const blocksInAYear = YEAR / meanRoundDuration;
                    const stakePrice = stakeTokenInfo.price;
                    const totalStaked = fromSmallestUnits(stakeTokenInfo, contractState.global.totalStaked - BigInt(1)); // VIRTUAL STAKE!
                    const { totalRewardAmount, totalAlgoRewardAmount, beginBlock, endBlock } = contractState.initial;
                    const totalBlocks = BigInt(endBlock - beginBlock);
                    const totalRewardInSmallestUnits = fromSmallestUnits(rewardTokenInfo, totalRewardAmount);

                    const extraAlgoRewardPerBlock = totalAlgoRewardAmount / totalBlocks;
                    const algoRewardPerBlock = extraAlgoRewardPerBlock
                        ? fromSmallestUnits(ALGO_ASSET, extraAlgoRewardPerBlock)
                        : 0;

                    const totalStakedUSD = totalStaked * stakePrice;
                    const rewardAPR = totalStakedUSD
                        ? ((totalRewardInSmallestUnits * rewardTokenInfo.price * blocksInAYear) /
                              (totalStakedUSD * Number(totalBlocks))) *
                          100
                        : 0;

                    const algoRewardAPR =
                        totalStakedUSD && algoPrice
                            ? ((algoRewardPerBlock * algoPrice * blocksInAYear) / totalStakedUSD) * 100
                            : 0;

                    const feesAPR = ((stakeTokenInfo as Priced<LPTokenInfo>).dexFeeApr ?? 0) * 100;

                    return {
                        reward: rewardAPR,
                        algoReward: algoRewardAPR,
                        fees: feesAPR,
                        total: rewardAPR + algoRewardAPR + feesAPR,
                    };
                })
    );
}

export const $farmAprs = createAprs($farmPools, $farmStakeTokens);

export type PoolWithStats = {
    pool: Contract<FarmType>;
    apr: AprType;
    dollarInfo: PoolDollarInfo;
};

export const combinePoolsWithInfo = <T extends FarmType>(
    pools: Store<Array<Contract<T>>>,
    aprs: Store<AprType[]>,
    dollarInfos: Store<PoolDollarInfo[]>
) =>
    combine({ pools, aprs, dollarInfos }, ({ pools, aprs, dollarInfos }) => {
        if (pools.length !== aprs.length || pools.length !== dollarInfos.length) {
            return [];
        }
        return [...Array(pools.length).keys()].map((i) => {
            const element: PoolWithStats = {
                pool: pools[i],
                apr: aprs[i],
                dollarInfo: dollarInfos[i],
            };
            return element;
        });
    });

export const $farmsWithStats = combinePoolsWithInfo($farmPools, $farmAprs, $farmPoolDollarInfos);

export const sortPools = createEvent<SortBy>();
const $sortOrder = restore(sortPools, { type: ColumnType.Tvl, asc: false });

export const createSortedPoolsWithStats = ($source: Store<PoolWithStats[]>) => {
    return combine($source, $sortOrder, (farmsWithStats, sortType) => {
        let orderBy: (p: PoolWithStats) => Ord;
        switch (sortType.type) {
            case ColumnType.Name:
                orderBy = (p) => p.pool.info.description ?? '';
                break;
            case ColumnType.Ends:
                orderBy = (p) => p.pool.state?.initial?.endBlock ?? 1e9;
                break;
            case ColumnType.Tvl:
                orderBy = (p) => p.dollarInfo.tvl;
                break;
            case ColumnType.Reward:
                orderBy = (p) => p.dollarInfo.pendingReward;
                break;
            case ColumnType.Stake:
                orderBy = (p) => p.dollarInfo.userStake;
                break;
            case ColumnType.Apr:
                orderBy = (p) => Math.floor(p.apr.total);
                break;
            default:
                throw new Error(`Unsupported sort type, please make 'switch' exhaustive`);
        }

        const ord = sortType.asc ? ascend : descend;
        return sort(ord(orderBy), farmsWithStats);
    });
};

export const $sortedPoolsWithStats = createSortedPoolsWithStats($farmsWithStats);
