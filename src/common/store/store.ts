import { Map } from 'immutable';
import {
    combine,
    createEffect,
    createEvent,
    createStore,
    sample,
    Store,
    Event,
    restore,
} from 'effector';
import { Contract, ContractType, ContractInfo, ContractState, AppId, TokenId, Amount } from './types';
import { Account } from '../../types';
import { convertBns, maybeToNullable } from '../lib';
import { reach } from '../../AppContext';

// Account store
export const setAccount = createEvent<Account>();

// TODO: there should be default account (null object pattern)
// prettier-ignore
export const $account = createStore<Account | null>(null)
    .on(setAccount, (state, account) => account);

// Time store
export const { $store: $networkTime, update: queryTimeUpdate } = createTimeDeferredStore<void, number>(
    0,
    1000, // update once in a second max
    () => reach.getNetworkTime().then((t) => t.toNumber())
);

// Account balances store
type TokenIdOrAlgo = TokenId | null;
export const $balances = createStore(Map<TokenIdOrAlgo, Amount | null>());


/**
 * Creates a store and an update event for it which updates at most
 * once in `period` time. Needed to reduce amount of API calls when the
 * updated value is not supposed to change over a set period of time.
 */
function createTimeDeferredStore<V, T>(
    initial: T,
    period: number,
    callback: (a: V) => Promise<T>
): { $store: Store<T>; update: Event<V> } {
    const updateFx = createEffect(callback);
    const $store = createStore(initial).on(updateFx.done, (_, { result }) => result);

    const tick = createEvent<number>();
    const lastTick = restore(tick, 0);
    $store.updates.watch((_) => tick(Date.now()));

    const update = createEvent<V>();
    sample({
        clock: update,
        source: lastTick,
        filter: (prevMoment: number, _) => Date.now() - prevMoment > period,
        fn: (_, v: V) => v,
        target: updateFx,
    });
    return { $store, update };
}

// Contracts store
export type ContractsStoreVars<T extends ContractType> = {
    $contracts: Store<Contract<T>[]>;
    $contractInfos: Store<ContractInfo<T>[]>;
    $contractCtcs: Store<Map<AppId, any>>;
    $contractStates: Store<Map<AppId, ContractState<T>>>;
    setContractInfos: Event<ContractInfo<T>[]>;
    triggerStateUpdate: Event<AppId>;
    contractStateUpdated: Event<{ id: AppId; state: ContractState<T> }>;
};

/**
 * Creates a store for the array of contracts of a given type.
 * @param type Contract type
 * @param backend Reach contract backend
 * @returns Relevant stores and events
 */
export function buildContractsStore<T extends ContractType>(type: T, backend: any): ContractsStoreVars<T> {
    const $contractInfos = createStore<ContractInfo<T>[]>([]);
    const $contractStates = createStore(Map<AppId, ContractState<T>>());
    const $contractCtcs = createStore(Map<AppId, any>());
    const $contracts = combine($contractInfos, $contractCtcs, $contractStates, (infos, ctcs, states) => {
        return infos.reduce((contracts, info) => {
            const id = info.id;
            const contract = {
                id: id,
                info: info,
                ctc: ctcs.get(id, null),
                state: states.get(id, null),
            };
            return [...contracts, contract];
        }, [] as Contract<T>[]);
    });

    const setContractInfos = createEvent<ContractInfo<T>[]>();
    $contractInfos.on(setContractInfos, (_, infos) => infos);

    const initializeContract = createEvent<AppId>();
    const triggerStateUpdate = createEvent<AppId>();

    const ctcInitialized = sample({
        clock: initializeContract,
        source: $account,
        //@ts-ignore
        fn: (account, contractId) => [contractId, account!.contract(backend, contractId)],
    });

    $contractCtcs.on(ctcInitialized, (ctcs, [id, ctc]) => ctcs.set(id, ctc));

    // Keep it simple stupid without separation between views (for now)
    // Also don't throw but set state to nulls if `None` arrives - it is probably actually more logical?
    const updateContractStateFx = createEffect(
        async ({ ctc, account, contractId }: { contractId: AppId; ctc: any; account: Account | null }) => {
            console.log('fetching views for contract', contractId);
            return {
                initial: await ctc.views.initial().then(maybeToNullable).then(convertBns),
                global: await ctc.views.global().then(maybeToNullable).then(convertBns),
                local: await ctc.views.local(account!.networkAccount.addr).then(maybeToNullable).then(convertBns),
            };
        }
    );

    sample({
        clock: ctcInitialized,
        source: $account,
        fn: (account, [contractId, ctc]) => {
            return { ctc, account, contractId };
        },
        target: updateContractStateFx,
    });

    sample({
        clock: triggerStateUpdate,
        source: combine([$account, $contractCtcs]),
        fn: ([account, ctcs], contractId) => {
            return { ctc: ctcs.get(contractId, null), contractId, account };
        },
        target: updateContractStateFx,
    });

    updateContractStateFx.fail.watch((p) => console.log('UPDATE CONTRACT FAILED', p));

    const contractStateUpdated = sample({
        source: updateContractStateFx.done,
        fn: ({ params, result }) => ({ id: params.contractId, state: result }),
    });

    $contractStates.on(contractStateUpdated, (states, { id, state }) => states.set(id, state));
    $contractStates.watch((s) => console.log('STATES', s));

    const $contractIds = $contractInfos.map((infos) => infos.map((i) => i.id));

    $contractIds.watch((ids) => {
        for (const id of ids) {
            console.log('initializing contract', id);
            initializeContract(id);
        }
    });

    return {
        $contracts,
        $contractInfos,
        $contractCtcs,
        $contractStates,
        setContractInfos,
        triggerStateUpdate,
        contractStateUpdated,
    };
}
