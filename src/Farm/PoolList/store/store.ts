import { createEvent, createStore } from 'effector';
import { Contract } from '../types';

export const addPools = createEvent();
const clearPools = createEvent();

export const $pools = createStore<Array<Contract>>([])
    .on(addPools, (state, pools) => pools)
    .reset(clearPools);

$pools.watch((state) => {
    console.log('pools', state);
});
