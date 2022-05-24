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
    $algoUsdPrice,
    fetchAsset,
    ALGO_ASSET,
    fetchAlgoPrice,
} from '../common/store';
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
        const priceInAlgo = (await dex.getSwapCost(firstAsset, ALGO_ASSET, 1)).totalPrice;
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
        registerAsset(s.initial.rewardToken);
    })
);

// Price aggregation
const sumMoney = (
    states: Map<AppId, ContractState<'farm'>>,
    tokens: LPTokenStore,
    getAmount: (s: ContractState<'farm'>) => Amount
): number =>
    states.valueSeq().reduce((sum, state) => {
        const stakeToken = state.initial.stakeToken;
        const amount = getAmount(state);
        const tokenInfo = tokens.get(stakeToken, null);

        if (!amount || !stakeToken || !tokenInfo) {
            return sum;
        }

        return sum + convertAmountToUSD(tokenInfo, amount);
    }, 0);

export interface PoolAggregates {
    tvl: number;
    totalUserStake: number;
    totalPendingReward: number;
}

export const $poolAggregates: Store<PoolAggregates> = combine($contractStates, $lpTokenInfos, (states, tokens) => {
    const tvl = sumMoney(states, tokens, (s) => s.global.totalStaked);
    const totalUserStake = sumMoney(states, tokens, (s) => s.local.staked);
    const totalPendingReward = sumMoney(states, tokens, (s) => s.local.reward);
    return { tvl, totalUserStake, totalPendingReward };
});
