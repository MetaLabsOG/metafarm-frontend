import { combine, createEffect, createEvent, createStore, forward, sample } from 'effector';
import { Account } from '../../../types';
import { getView } from '../Pool/Pool';
import * as R from 'ramda';
import {
    Contract,
    GlobalInfo,
    GlobalInfoFromCtc,
    InitialInfo,
    InitialInfoFromCtc,
    LocalInfo,
    LocalInfoFromCtc,
} from '../types';
import { convertAmountToUSD } from '../Pool/utils';
import { getLPTokenInfo, TokenInfoT } from '../../../providers/dexesProvider';

interface PoolAggregates {
    tvl: number;
    totalUserStake: number;
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

// TODO should somehow understand if it is a normal token or LP token and get what is needed?
// Or maybe it works already? check it.
const fetchTokenInfoFx = createEffect(async (tokenId: number) => await getLPTokenInfo(tokenId));

export const $pools = createStore<Array<Contract>>([])
    .on(addPools, (state, pools) => pools)
    .reset(clearPools);

export const $initialStates = createStore<Array<InitialInfo>>([]).on(
    fetchInitialPoolStateFx.doneData,
    (state, initialState) => [...state.filter((data) => data.index !== initialState.index), initialState]
);

export const $globalStates = createStore<Array<GlobalInfo>>([]).on(
    fetchGlobalPoolStateFx.doneData,
    (state, globalState) => {
        console.log('fetched global state', globalState, 'was', state);
        return [...state.filter((data) => data.index !== globalState.index), globalState];
    }
);

export const $localStates = createStore<Array<LocalInfo>>([]).on(
    fetchLocalPoolStateFx.doneData,
    (state, localState) => {
        return [...state.filter((data) => data.index !== localState.index), localState];
    }
);

// TODO shall we actually store it by index similar to others and not by ids?
// It will have some duplication but will be easier to use and not slower (or faster)
// prettier-ignore
export const $tokenInfo = createStore<Array<TokenInfoT>>([])
    .on(
        fetchTokenInfoFx.doneData, (state, tokenInfo) => {
        return [...state.filter((data) => data.id !== tokenInfo.id), tokenInfo];
    });

export const $poolAggregates = combine($initialStates, $globalStates, $localStates, $tokenInfo).map((states) => {
    const is = states[0];
    const gs = states[1];
    const ls = states[2];
    const tis = states[3];

    const tvl = R.sum(
        R.range(0, is.length).map((index) => {
            const totalStaked = gs.find((g) => g.index === index)?.totalStaked;
            const stakeToken = is.find((i) => i.index === index)?.stakeToken;
            const tokenInfo = tis.find((ti) => ti.id === stakeToken);

            if (!totalStaked || !stakeToken || !tokenInfo) {
                return 0;
            }

            return convertAmountToUSD(tokenInfo, totalStaked);
        })
    );

    const totalUserStake = R.sum(
        R.range(0, is.length).map((index) => {
            const userStake = ls.find((l) => l.index === index)?.staked;
            const stakeToken = is.find((i) => i.index === index)?.stakeToken;
            const tokenInfo = tis.find((ti) => ti.id === stakeToken);

            if (!userStake || !stakeToken || !tokenInfo) {
                return 0;
            }

            return convertAmountToUSD(tokenInfo, userStake);
        })
    );

    const totalPendingReward = R.sum(
        R.range(0, is.length).map((index) => {
            const userReward = ls.find((l) => l.index === index)?.reward;
            const stakeToken = is.find((i) => i.index === index)?.stakeToken;
            const tokenInfo = tis.find((ti) => ti.id === stakeToken);

            if (!userReward || !stakeToken || !tokenInfo) {
                return 0;
            }

            return convertAmountToUSD(tokenInfo, userReward);
        })
    );

    return { tvl, totalUserStake, totalPendingReward } as PoolAggregates;
});

forward({
    from: updatePool,
    to: [updateInitialInfo, updateGlobalInfo],
});

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

sample({
    clock: fetchInitialPoolStateFx.doneData,
    fn: (i) => i.stakeToken,
    target: fetchTokenInfoFx,
});

// handle retries
sample({
    clock: fetchInitialPoolStateFx.fail,
    fn: ({ params }) => params,
    target: fetchInitialPoolStateFx,
});
sample({
    clock: fetchGlobalPoolStateFx.fail,
    fn: ({ params }) => params,
    target: fetchGlobalPoolStateFx,
});
sample({
    clock: fetchLocalPoolStateFx.fail,
    fn: ({ params }) => params,
    target: fetchLocalPoolStateFx,
});
sample({
    clock: fetchTokenInfoFx.fail,
    fn: ({ params }) => params,
    target: fetchTokenInfoFx,
});
