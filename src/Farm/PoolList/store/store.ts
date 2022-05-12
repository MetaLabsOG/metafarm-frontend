import { createEvent, createStore } from 'effector';

type VFromStore = Array<[string, any]>;
type ProjectionValue = Map<string, number>;

//@ts-ignore
export const selector = ($store): ProjectionValue => {
    return new Map($store.pools);
};

export const addPools = createEvent();
const clearPools = createEvent();

export const $pools = createStore<{ pools: VFromStore }>({ pools: [] })
    .on(addPools, (state, pools) => pools)
    .reset(clearPools);

$pools.watch((state) => {
    console.log('pools', state);
});
