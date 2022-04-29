import { createEvent, createStore } from 'effector';

export const addPools = createEvent();
const clearPools = createEvent();

export const $pools = createStore<Map<string, any>>(new Map())
    .on(addPools, (state, pools) => pools)
    .reset(clearPools);

$pools.watch((state) => {
    console.log('pools', state);
});
