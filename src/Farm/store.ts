//@ts-ignore
import { backend as farmBackend } from '@metalabsog/farm';
import { Map } from 'immutable';
import { createEffect, createStore, sample, combine, Store } from 'effector';
import {
    AppId,
    Asset,
    AssetId,
    assetId,
    buildContractsStore,
    ContractState,
    Amount,
    Priced,
    registerAsset,
    registerPricedAsset,
    $algoUsdPrice,
    fetchAsset,
    ALGO_ASSET,
    fetchAlgoPrice,
    $pricedAssets,
    $networkTime,
    Contract,
} from '../common/store';
import { groupBy, values } from 'ramda';
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
    asset: AssetId | Asset,
    algoPrice: number | null,
    provider?: DexProvider
): Promise<Priced<LPTokenInfo>> {
    if (typeof asset === 'number') {
        asset = await fetchAsset(asset);
    }
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
        const priceInAlgo = (await dex.getSwapQuote(firstAsset, ALGO_ASSET, 10 ** firstAsset.decimals)).price;
        fstAssetPrice = algoPrice * priceInAlgo;
    }

    const price = (poolInfo.asset1Reserve * fstAssetPrice) / poolInfo.totalLiquidity;
    return { ...asset, ...poolInfo, price, priceInAlgo: price / algoPrice };
}

const { $contracts, $contractStates, setContractInfos, triggerStateUpdate, contractStateUpdated } = buildContractsStore(
    'farm',
    farmBackend
);

export const $pools = $contracts;
export const setPoolInfos = setContractInfos;
export const triggerPoolUpdate = triggerStateUpdate;

$pools.watch((v) => console.log('FARM POOLS', v));

//TODO NEED REFACTOR (quick solution)
export const sortPoolsOnStatus = ({ networkTime, pools }: { networkTime: number; pools: Contract<'farm'>[] }) => {
    const groupedByStatus = groupBy(function (pool: any) {
        if (pool.state) {
            const initial = pool.state.initial;
            return networkTime < initial.beginBlock ? '2' : networkTime > initial.endBlock ? '3' : '1';
        }
        return 'null';
    });
    const sortByTime = values(groupedByStatus(pools)).flat();
    return sortByTime;
};

export const $sortedPools = combine($networkTime, $pools, (networkTime, pools) =>
    sortPoolsOnStatus({ networkTime, pools })
);

$sortedPools.watch((v) => console.log(v));

// LP token info store
type LPTokenStore = Map<number, Priced<LPTokenInfo>>;

export const $lpTokenInfos = createStore<LPTokenStore>(Map());

export const getLPTokenInfoFx = createEffect(
    ({
        asset,
        provider,
        algoPrice,
    }: {
        asset: AssetId | Asset;
        provider: DexProvider | undefined;
        algoPrice: number | null;
    }) => getLPTokenInfo(asset, algoPrice, provider)
);

$lpTokenInfos.on(getLPTokenInfoFx.done, (state, { params, result }) => state.set(assetId(params.asset), result));
$lpTokenInfos.watch((v) => console.log('LP TOKEN INFOS', v.toJS()));

sample({
    clock: contractStateUpdated,
    source: combine({ tokenInfos: $lpTokenInfos, algoPrice: $algoUsdPrice }),
    filter: ({ tokenInfos }, { state }) => !(state.initial.stakeToken in tokenInfos),
    fn: ({ algoPrice }, { state }) => ({ asset: state.initial.stakeToken, algoPrice, provider: undefined }),
    target: getLPTokenInfoFx,
});

$contractStates.watch((states) =>
    states.valueSeq().forEach((s) => {
        registerAsset(s.initial.stakeToken);
        registerPricedAsset(s.initial.rewardToken);
    })
);

// These substores avoid a bug when token infos are not updated in components
export const $farmLPTokens = combine($lpTokenInfos, $contractStates, (lpTokens, states) =>
    states.map((state, _) => lpTokens.get(state.initial.stakeToken, null))
);

export const $farmRewardTokens = combine($pricedAssets, $contractStates, (tokens, states) =>
    states.map((state, _) => tokens.get(state.initial.rewardToken, null))
);

// Price aggregation
const sumMoney = (
    states: Map<AppId, ContractState<'farm'>>,
    tokens: Map<AssetId, Priced<Asset>>,
    getAmount: (s: ContractState<'farm'>) => Amount,
    getToken: (s: ContractState<'farm'>) => AssetId
): number =>
    //@ts-ignore
    states.valueSeq().reduce((sum, state) => {
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

export const $poolAggregates: Store<PoolAggregates> = combine(
    $contractStates,
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
            (s) => s.local.staked,
            (s) => s.initial.stakeToken
        );
        const totalPendingReward = sumMoney(
            states,
            tokens,
            (s) => s.local.reward,
            (s) => s.initial.rewardToken
        );
        return { tvl, totalUserStake, totalPendingReward };
    }
);
