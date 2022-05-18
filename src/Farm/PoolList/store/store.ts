import { createEvent, createStore, sample } from 'effector';
import { Account } from '../../../types';
import { Contract } from '../types';

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

export const addPools = createEvent();
export const clearPools = createEvent();

export const $pools = createStore<Array<Contract>>([])
    .on(addPools, (state, pools) => pools)
    .reset(clearPools);

$pools.watch((state) => {
    console.log('pools', state);
});
