//@ts-ignore
import { backend as farmBackend } from '@metalabsog/farm';
import { Map } from 'immutable';
import { createEffect, createStore, sample, combine, split, attach } from 'effector';
import { AppId, buildContractsStore, ContractState, Amount, registerToken, $networkTime, Contract } from '../common/store';

import { getLPTokenInfo, LPTokenInfo, DexProvider } from '../providers/dexesProvider';
import { convertAmountToUSD } from './PoolList/Pool/utils';
import { groupBy, values} from 'ramda'


const { $contracts, $contractStates, setContractInfos, triggerStateUpdate, contractStateUpdated } = buildContractsStore(
    'farm',
    farmBackend
);

export const $pools = $contracts;
export const setPoolInfos = setContractInfos;
export const triggerPoolUpdate = triggerStateUpdate;




//TODO NEED REFACTOR (quick solution)
//@ts-ignore
const sortPoolsOnStatus = createEffect(({ networkTime, pools }) => {
     const groupedByStatus = groupBy(function(pool: any){
         if (pool.state) {
             const initial = pool.state.initial;
             return networkTime < initial.beginBlock
                 ? '2'
                 : networkTime > initial.endBlock
                     ? '3'
                     : '1'
         }
             return 'null'
     })
    const sortByTime = values(groupedByStatus(pools)).flat();
    return sortByTime
})
 
sample({
    clock: $pools,
    source: $networkTime,
    fn: (networkTime: number, pools: any) => ({networkTime, pools}),
    target: sortPoolsOnStatus
})


 export const $sortedPools = createStore<Contract<"farm">[] | []>([]).on(sortPoolsOnStatus.doneData, (_, data) => data)
 

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

$contractStates.watch((states) => states.valueSeq().forEach(s => {
    registerToken(s.initial.stakeToken);
    registerToken(s.initial.rewardToken);
}));

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


export const fetchApiCallFx = createEffect(async (params: {index: number, effectName: string, amount?: number}) => {
    return params
})

//@ts-ignore
export const apiCallFx = createEffect(async ({ apiFn, amount, effectName }) => {
    console.log(apiCallFx)
    if (effectName === 'claim') {
        await apiFn()
    } else {
        await apiFn(amount)
    }

    
})


export const withdrawFx = attach({
        effect: apiCallFx,
        mapParams: (payload) => ({ ...payload, uri: '/withdraw' })
    })

export const claimFx = attach({
    effect: apiCallFx,
    mapParams: (payload) => ({ ...payload, uri: '/claim' })
})

export const stakeFx = attach({
    effect: apiCallFx,
    mapParams: (payload) => ({ ...payload, uri: '/stake' })
})


//TODO need will add filter for validation
split({
    source: sample({
        source: $pools,
        clock: fetchApiCallFx,
        fn: (pools, params) => {
            const { index, amount, effectName } = params
            const apiFn = pools[index].ctc.apis[effectName]
            return ({amount, effectName, apiFn })
        },

    }),
    match: {
        claim: (payload) => payload.effectName === 'claim',
        stake: (payload) => payload.effectName === 'stake',
        withdraw: (payload) => payload.effectName === 'unstake'
    },
    cases: {
        claim: claimFx,
        stake: stakeFx,
        withdraw: withdrawFx
    }

})


  