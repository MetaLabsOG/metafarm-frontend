import { attach, combine, createEffect, createEvent, createStore, forward, sample } from 'effector';
import { Account } from '../../../types';
import { getView } from '../Pool/Pool';
import { Contract, InitialInfo, InitialInfoFromCtc } from '../types';

interface PoolAggregates {
    tvl: number;
    totalStaked: number;
    totalPendingReward: number;
}

export const setAccount = createEvent<Account>();

// TODO: there should be default account (null object pattern)
// prettier-ignore
export const $account = createStore<Account | null>(null)
    .on(setAccount, (state, account) => account);

export const updatePool = createEvent<number>();
export const addPools = createEvent<Array<Contract>>();
export const clearPools = createEvent();

export const $pools = createStore<Array<Contract>>([])
    .on(addPools, (state, pools) => pools)
    .reset(clearPools);

interface FetchInitialPoolStateFxParams {
    ctc: Contract;
    index: number;
};
const fetchInitialPoolStateFx = createEffect(async (params: FetchInitialPoolStateFxParams) => {
    console.log("fetching initial state", params)
    const data = (await getView(params.ctc, 'initial')) as InitialInfoFromCtc;
    return new InitialInfo(params.index, data);
});

export const $initialStates = createStore<Array<InitialInfo>>([]).on(
    fetchInitialPoolStateFx.doneData,
    (state, initialState) => [...state.filter((data) => data.id !== initialState.id), initialState]
);

export const $fullPoolStates = combine($pools, $initialStates);

sample({
    clock: updatePool,
    source: $pools,
    fn: (pools, index) => ({ ctc: pools[index], index }),
    target: fetchInitialPoolStateFx,
});

$pools.watch((state) => {
    console.log('pools', state);
});
