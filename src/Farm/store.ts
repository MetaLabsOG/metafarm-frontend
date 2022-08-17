// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { backend as farmBackend } from '@metalabsog/farm';
import { Map, Set } from 'immutable';
import { createEffect, createStore, sample, combine, Store } from 'effector';
import { groupBy, min, values, zip, zipWith } from 'ramda';
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
} from '../common/store';
import { AllDefined, Backend } from '../types';
import { LPTokenInfo, DexProvider, makeDex } from '../providers/dexesProvider';
import { calculateAlgoReward, convertAmountToUSD, getPoolState } from './PoolList/Pool/utils';

// TODO: this function is a huge costyl
export function detectAssetProvider({ name }: { name: string }): DexProvider {
    name = name.toLowerCase();
    if (name.includes('tinyman')) {
        return 'T2';
    }
    if (name.includes('liquidity') || name.includes('pact')) {
        return 'PT';
    }
    return 'MOCK';
}

export async function getLPTokenInfo(
    asset: Asset,
    algoPrice: number | null,
    provider?: DexProvider
): Promise<Priced<LPTokenInfo>> {
    if (provider === undefined) {
        provider = detectAssetProvider(asset);
    }
    if (algoPrice === null) {
        algoPrice = await fetchAlgoPriceFx();
    }

    const dex = makeDex(provider);
    const poolInfo = await dex.getPoolInfoByAddress(asset.creator);

    let fstAssetPrice;
    if (poolInfo.asset1 === 0) {
        fstAssetPrice = algoPrice;
    } else {
        const firstAsset = await fetchAsset(poolInfo.asset1);
        const priceInAlgo = (await dex.getSwapQuote(firstAsset, ALGO_ASSET, BigInt(10 ** firstAsset.decimals), 0.01))
            .price;
        fstAssetPrice = algoPrice * priceInAlgo;
    }

    const price = (Number(poolInfo.asset1Reserve) / Number(poolInfo.totalLiquidity)) * fstAssetPrice * 2;
    return { ...asset, ...poolInfo, price, priceInAlgo: price / algoPrice };
}

const BIG_NUM = BigInt('1000000000000000000');

export const recalculatedReward = (contractState: AllDefined<ContractState<FarmType>>, currentBlock: Time): Amount => {
    const { endBlock, rewardPerBlock } = contractState.initial;
    const { totalStaked, lastUpdateBlock, rewardPerTokenStored } = contractState.global;
    const { staked, reward, rewardPerTokenPaid } = contractState.local;

    if (lastUpdateBlock >= currentBlock || totalStaked === BigInt(0) || staked === BigInt(0)) {
        return reward;
    }

    const lastBlockWithRewards = min(currentBlock, endBlock);
    const rewardBlocksPassed = lastBlockWithRewards - lastUpdateBlock;
    const rewardPerTokenStoredNew =
        rewardPerTokenStored + (BigInt(rewardBlocksPassed) * rewardPerBlock * BIG_NUM) / totalStaked;

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

const { $contracts, $contractStatesWithCache, setContractInfos, triggerStateUpdate } = buildContractsStore(
    'farm',
    farmBackend as Backend
);

export const $pools = combine($contracts, $networkTime, projectContracts);
export const $farmPools = $pools.map((pools) => pools.filter((pool) => Boolean(pool.info.metadata.dex)));
export const $stakePools = $pools.map((pools) => pools.filter((pool) => !pool.info.metadata.dex));
export const setPoolInfos = setContractInfos;
export const triggerPoolUpdate = triggerStateUpdate;

// TODO NEED REFACTOR (quick solution)
export const sortPoolsOnStatus = ({
    networkTime,
    pools,
}: {
    networkTime: number;
    pools: Array<Contract<FarmType>>;
}) => {
    const groupedByStatus = groupBy(function (pool: Contract<FarmType>) {
        if (pool.state) {
            const { initial } = pool.state;
            return networkTime < initial.beginBlock ? '2' : networkTime > initial.endBlock ? '3' : '1';
        }
        return 'null';
    });
    return values(groupedByStatus(pools)).flat();
};

export const $sortedFarmPools = combine($networkTime, $farmPools, (networkTime, pools) =>
    sortPoolsOnStatus({ networkTime, pools })
);

// LP token info store
type LPTokenStore = Map<number, Priced<LPTokenInfo>>;

export const $lpTokenInfos = createStore<LPTokenStore>(Map());

export const getLPTokenInfoFx = createEffect(
    async ({
        asset,
        provider,
        algoPrice,
    }: {
        asset: Asset;
        provider: DexProvider | undefined;
        algoPrice: number | null;
    }) => getLPTokenInfo(asset, algoPrice, provider)
);

$lpTokenInfos.on(getLPTokenInfoFx.done, (state, { params, result }) => state.set(assetId(params.asset), result));

const $lpTokenIds = createStore(Set<AssetId>()).on($farmPools, (state, pools) => {
    const newIds = Set(pools.filter((pool) => pool.state !== null).map((pool) => pool.state!.initial.stakeToken));
    return state.union(newIds);
});

// Automatically fetch LP token infos when general info about them gets fetched the first time
sample({
    clock: assetLoaded,
    source: { lpTokens: $lpTokenIds, algoPrice: $algoUsdPrice },
    filter: ({ lpTokens }, asset) => lpTokens.has(asset.id),
    fn: ({ algoPrice }, asset) => ({ asset, algoPrice, provider: undefined }),
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
            const tvls = getDollarInfo(
                states,
                allTokens,
                (s) => s.global.totalStaked - BigInt(1), // VIRTUAL STAKE!
                getToken
            );
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
