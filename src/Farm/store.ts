//@ts-ignore
import { backend as farmBackend } from '@metalabsog/farm';
import { Map } from 'immutable';
import { createEffect, createStore, createEvent, sample, combine, Store } from 'effector';
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
    fetchAlgoPrice,
    $pricedAssets,
    $networkTime,
    Contract,
    FarmType,
    hasLocalState,
    Time,
} from '../common/store';
import { AllDefined } from '../types';
import { groupBy, min, values } from 'ramda';
import { LPTokenInfo, DexProvider, makeDex } from '../providers/dexesProvider';
import { convertAmountToUSD } from './PoolList/Pool/utils';

// TODO: this function is a huge costyl
export function detectAssetProvider({ name }: { name: string }): DexProvider {
    name = name.toLowerCase();
    if (name.indexOf('tinyman') !== -1) {
        return 'T2';
    } else if (name.indexOf('liquidity') !== -1) {
        return 'PT';
    } else {
        return 'MOCK';
    }
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
        algoPrice = await fetchAlgoPrice();
    }

    const dex = makeDex(provider);
    const poolInfo = await dex.getPoolInfoByAddress(asset.creator);

    let fstAssetPrice;
    if (poolInfo.asset1 === 0) {
        fstAssetPrice = algoPrice;
    } else {
        const firstAsset = await fetchAsset(poolInfo.asset1);
        const priceInAlgo = (await dex.getSwapQuote(firstAsset, ALGO_ASSET, BigInt(10 ** firstAsset.decimals))).price;
        fstAssetPrice = algoPrice * priceInAlgo;
    }

    const price = Number(poolInfo.asset1Reserve / poolInfo.totalLiquidity) * fstAssetPrice;
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

export const projectContracts = <T extends FarmType>(contracts: Contract<T>[], currentBlock: Time): Contract<T>[] => {
    return contracts.map((contract) =>
        contract.state === null ? contract : { ...contract, state: projectState(contract.state, currentBlock) }
    );
};

const { $contracts, $contractStatesWithCache, setContractInfos, triggerStateUpdate } = buildContractsStore(
    'farm',
    farmBackend
);

export const $pools = combine($contracts, $networkTime, projectContracts);
export const $farmPools = $pools.map((pools) => pools.filter((pool) => !!pool.info.metadata.dex));
export const $stakePools = $pools.map((pools) => pools.filter((pool) => !pool.info.metadata.dex));
export const setPoolInfos = setContractInfos;
export const triggerPoolUpdate = triggerStateUpdate;

//TODO NEED REFACTOR (quick solution)
export const sortPoolsOnStatus = ({ networkTime, pools }: { networkTime: number; pools: Contract<FarmType>[] }) => {
    const groupedByStatus = groupBy(function (pool: any) {
        if (pool.state) {
            const initial = pool.state.initial;
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
    ({ asset, provider, algoPrice }: { asset: Asset; provider: DexProvider | undefined; algoPrice: number | null }) =>
        getLPTokenInfo(asset, algoPrice, provider)
);

$lpTokenInfos.on(getLPTokenInfoFx.done, (state, { params, result }) => state.set(assetId(params.asset), result));
$lpTokenInfos.watch((v) => {}); //console.log('LP TOKEN INFOS', v.toJS()));

// Fetching LP token infos similarly to how asset prices are fetched
const markTokenAsLP = createEvent<AssetId>();
const $isLPToken = createStore(Map<AssetId, boolean>()).on(markTokenAsLP, (state, token) => state.set(token, true));

// automatically fetch LP token infos when general info about them gets fetched the first time
sample({
    clock: assetLoaded,
    source: combine({ isLP: $isLPToken, algoPrice: $algoUsdPrice }),
    filter: ({ isLP }, asset) => isLP.get(asset.id, false),
    fn: ({ algoPrice }, asset) => ({ asset, algoPrice, provider: undefined }),
    target: getLPTokenInfoFx,
});

$farmPools.watch((farms) =>
    farms
        .map((farm) => farm.state)
        .filter((s): s is ContractState<'farm'> => s !== null)
        .forEach((s) => {
            markTokenAsLP(s.initial.stakeToken);
            registerAsset(s.initial.stakeToken);
            registerPricedAsset(s.initial.rewardToken);
        })
);

$stakePools.watch((farms) =>
    farms
        .map((farm) => farm.state)
        .filter((s): s is ContractState<'farm'> => s !== null)
        .forEach((s) => {
            registerPricedAsset(s.initial.stakeToken);
            registerPricedAsset(s.initial.rewardToken);
        })
);

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
const sumMoney = (
    states: ContractState<'farm'>[],
    tokens: Map<AssetId, Priced<Asset>>,
    getAmount: (s: ContractState<'farm'>) => Amount | undefined,
    getToken: (s: ContractState<'farm'>) => AssetId
): number =>
    //@ts-ignore
    states.reduce((sum, state) => {
        const token = getToken(state);
        const amount = getAmount(state);
        const tokenInfo = tokens.get(token, null);

        if (!amount || !token || !tokenInfo) {
            return sum;
        }

        return sum + convertAmountToUSD(tokenInfo, amount);
    }, 0);

export interface PoolAggregates {
    tvl: number;
    totalUserStake: number;
    totalPendingReward: number;
}

export const $farmPoolAggregates: Store<PoolAggregates> = combine(
    $farmPools.map((contracts) => contracts.map((c) => c.state).filter((s): s is ContractState<'farm'> => s !== null)),
    $lpTokenInfos,
    $pricedAssets,
    (states, lpTokens, tokens) => {
        const tvl = sumMoney(
            states,
            lpTokens,
            (s) => s.global.totalStaked,
            (s) => s.initial.stakeToken
        );
        const totalUserStake = sumMoney(
            states,
            lpTokens,
            (s) => s.local?.staked,
            (s) => s.initial.stakeToken
        );
        const totalPendingReward = sumMoney(
            states,
            tokens,
            (s) => s.local?.reward,
            (s) => s.initial.rewardToken
        );
        return { tvl, totalUserStake, totalPendingReward };
    }
);
