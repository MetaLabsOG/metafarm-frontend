//@ts-ignore
import { backend as farmBackend } from '@metalabsog/farm';
import { Map } from 'immutable';
import { createEffect, createStore, sample, combine } from 'effector';
import { AppId, buildContractsStore, ContractState, Amount } from '../common/store';
import { getLPTokenInfo, LPTokenInfo, DexProvider } from '../providers/dexesProvider';
import { convertAmountToUSD } from './PoolList/Pool/utils';

const { $contracts, $contractStates, setContractInfos, triggerStateUpdate, contractStateUpdated } = buildContractsStore(
    'farm',
    farmBackend
);

export const $pools = $contracts;
export const setPoolInfos = setContractInfos;
export const triggerPoolUpdate = triggerStateUpdate;

// LP token info store
type TokenStore = Map<number, LPTokenInfo>;

export const $lpTokenInfos = createStore<TokenStore>(Map());

export const getLPTokenInfoFx = createEffect(
    ({ assetId, provider }: { assetId: number; provider: DexProvider | undefined }) => getLPTokenInfo(assetId, provider)
);

$lpTokenInfos.on(getLPTokenInfoFx.done, (state, { params, result }) => state.set(params.assetId, result));

sample({
    clock: contractStateUpdated,
    source: $lpTokenInfos,
    filter: (tokenInfos, { id, state }) => !(state.initial.stakeToken in tokenInfos),
    fn: (tokenInfos, { id, state }) => ({ assetId: state.initial.stakeToken, provider: undefined }),
    target: getLPTokenInfoFx,
});

// Price aggregation
const sumMoney = (
    states: Map<AppId, ContractState<'farm'>>,
    tokens: TokenStore,
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

interface PoolAggregates {
    tvl: number;
    totalUserStake: number;
    totalPendingReward: number;
}

export const $poolAggregates = combine($contractStates, $lpTokenInfos, (states, tokens) => {
    const tvl = sumMoney(states, tokens, s => s.global.totalStaked);
    const totalUserStake = sumMoney(states, tokens, s => s.local.staked);
    const totalPendingReward = sumMoney(states, tokens, s => s.local.reward);
    return { tvl, totalUserStake, totalPendingReward };
});
