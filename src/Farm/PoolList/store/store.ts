import { createEffect, createEvent, createStore, forward, sample } from 'effector';
import { Account } from '../../../types';
import { getView } from '../Pool/Pool';
import {
    Contract,
    GlobalInfo,
    GlobalInfoFromCtc,
    InitialInfo,
    InitialInfoFromCtc,
    LocalInfo,
    LocalInfoFromCtc,
} from '../types';

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

export const addPools = createEvent<Array<Contract>>();
export const clearPools = createEvent();

export const updateInitialInfo = createEvent<number>();
export const updateGlobalInfo = createEvent<number>();
export const updateLocalInfo = createEvent<{
    index: number;
    addr: string;
}>();

export const updatePool = createEvent<number>();

// Initial state is global too
interface FetchGlobalPoolStateFxParams {
    ctc: Contract;
    index: number;
}
const fetchInitialPoolStateFx = createEffect(async (params: FetchGlobalPoolStateFxParams) => {
    const data = (await getView(params.ctc, 'initial')) as InitialInfoFromCtc;
    return new InitialInfo(params.index, data);
});
const fetchGlobalPoolStateFx = createEffect(async (params: FetchGlobalPoolStateFxParams) => {
    const data = (await getView(params.ctc, 'global')) as GlobalInfoFromCtc;
    return new GlobalInfo(params.index, data);
});

interface FetchLocalPoolStateFxParams {
    ctc: Contract;
    index: number;
    addr: string;
}
const fetchLocalPoolStateFx = createEffect(async (params: FetchLocalPoolStateFxParams) => {
    const data = (await getView(params.ctc, 'local', params.addr)) as LocalInfoFromCtc;
    return new LocalInfo(params.index, data);
});

export const $pools = createStore<Array<Contract>>([])
    .on(addPools, (state, pools) => pools)
    .reset(clearPools);

export const $initialStates = createStore<Array<InitialInfo>>([])
    .on(fetchInitialPoolStateFx.doneData, (state, initialState) => [
        ...state.filter((data) => data.index !== initialState.index),
        initialState,
    ])

export const $globalStates = createStore<Array<GlobalInfo>>([])
    .on(fetchGlobalPoolStateFx.doneData, (state, globalState) => {
        console.log('fetched global state', globalState, 'was', state);
        return [...state.filter((data) => data.index !== globalState.index), globalState];
    })

export const $localStates = createStore<Array<LocalInfo>>([])
    .on(fetchLocalPoolStateFx.doneData, (state, localState) => {
        console.log('fetched global state', localState, 'was', state);
        return [...state.filter((data) => data.index !== localState.index), localState];
    })

forward({
    from: updatePool,
    to: [updateInitialInfo, updateGlobalInfo]
})

sample({
    clock: updateGlobalInfo,
    source: $pools,
    fn: (pools, index) => ({ ctc: pools[index], index }),
    target: fetchGlobalPoolStateFx,
});

sample({
    clock: updateInitialInfo,
    source: $pools,
    fn: (pools, index) => ({ ctc: pools[index], index }),
    target: fetchInitialPoolStateFx,
});

sample({
    clock: updateLocalInfo,
    source: $pools,
    fn: (pools, params) => ({ ctc: pools[params.index], index: params.index, addr: params.addr }),
    target: fetchLocalPoolStateFx,
});

// handle retries
sample({
    clock: fetchInitialPoolStateFx.fail,
    fn: (paramsAndError)  => paramsAndError.params,
    target: fetchInitialPoolStateFx
})
sample({
    clock: fetchGlobalPoolStateFx.fail,
    fn: (paramsAndError)  => paramsAndError.params,
    target: fetchGlobalPoolStateFx
})
sample({
    clock: fetchLocalPoolStateFx.fail,
    fn: (paramsAndError)  => paramsAndError.params,
    target: fetchLocalPoolStateFx
})