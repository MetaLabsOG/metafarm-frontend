import { Map } from 'immutable';
import { combine, createEffect, createEvent, createStore, sample, Store, Event, restore, Effect } from 'effector';
import { Contract, ContractType, ContractInfo, ContractState, AppId, TokenId, Amount } from './types';
import { Account } from '../../types';
import { convertBns, maybeToNullable, sleep } from '../lib';
import { reach } from '../../AppContext';
import { zip } from 'ramda';

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

const fetchBalancesFx = createEffect(
    expBackoff(async ({ account, tokens }: { account: Account; tokens: TokenIdOrAlgo[] }) => {
        const bs = await reach.balancesOf(account, tokens);
        return bs.map((b) => b.toNumber());
    })
);

fetchBalancesFx.watch(({ tokens }) => console.log('BALANCES UPDATE START', tokens));

export const registerToken = createEvent<TokenIdOrAlgo>();

export const $balances = createStore(Map<TokenIdOrAlgo, Amount | null>())
    .on(registerToken, (balances, token) => {
        if (balances.has(token)) return balances;
        return balances.set(token, null);
    })
    .on(fetchBalancesFx.done, (balances, { params: { tokens }, result }) =>
        zip(tokens, result)
            .reduce((bs, [token, balance]) => bs.set(token, balance), balances.asMutable())
            .asImmutable()
    );

$balances.watch((bs) => console.log('BALANCES', bs.toJS()));

export const triggerBalancesUpdate = createEvent<void>();

// ts-ignore here because TS cannot guard against null by using `filter`
sample({
    //@ts-ignore
    clock: triggerBalancesUpdate,
    source: combine([fetchBalancesFx.pending, $account, $balances.map((bs) => bs.keySeq().toArray())]),
    filter: ([pending, account, _]) => account !== null && !pending,
    fn: ([_, account, tokens]) => ({ account, tokens }),
    target: fetchBalancesFx,
});

/**
 * Asynchronously gets the value of the store
 */
function fetchStore<T>(store: Store<T>): Promise<T> {
    return new Promise<T>((resolve) => {
        sample({ source: store }).watch((v) => resolve(v));
    });
}

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

/**
 * Create an effect which does not start again if it is already in the pending state.
 * @param callback Async effect function
 */
function createNonConcurrentEffect<V, T>(callback: (a: V) => Promise<T>): Effect<V, T> {
    const innerEff = createEffect(callback);
    return createEffect(
        (a: V) =>
            new Promise<T>((resolve, reject) => {
                fetchStore(innerEff.pending).then((pending) => {
                    if (!pending) {
                        innerEff(a);
                    }
                    innerEff.doneData.watch(resolve);
                    innerEff.failData.watch(reject);
                });
            })
    );
}

type ExpBackoffParams = {
    firstDelay: number;
    multiplier: number;
    maxTries: number;
};

/**
 * Retry the async callback with exponential backoff on promise rejection.
 * TODO: later it would be better to reimplement retries as proper Effector events, if we want
 * to show info about retries somehow.
 */
function expBackoff<V, T>(
    eff: (v: V) => Promise<T>,
    { firstDelay, multiplier, maxTries }: ExpBackoffParams = { firstDelay: 500, multiplier: 2, maxTries: 3 }
): (v: V) => Promise<T> {
    return async (v) => {
        let numTries = 0;
        let delay = firstDelay;

        while (true) {
            try {
                return await eff(v);
            } catch (e) {
                numTries++;
                if (numTries > maxTries) {
                    console.log('END BACKOFF AND THROW', e);
                    throw e;
                }
                console.log(`EXP BACKOFF RETRY (${numTries} ${delay})`, v);
                await sleep(delay);
                delay *= multiplier;
            }
        }
    };
}

/**
 * Wrap the methods of ctc with bignum parsing and callback on api calls.
 */
function makeWrappedCtc(
    account: Account | null,
    backend: any,
    contractId: AppId,
    onWrite: (id: AppId) => Promise<void>
): any {
    // TODO: make read-only ctc when account is null
    //@ts-ignore
    const ctc = account!.contract(backend, contractId);
    const views = ctc.views;
    ctc.views = {};
    for (const k in views) {
        ctc.views[k] = (...args: any[]) =>
            views[k](...args)
                .then(maybeToNullable)
                .then(convertBns);
    }
    ctc.v = ctc.views;

    const apis = ctc.apis;
    ctc.apis = {};
    for (const k in apis) {
        ctc.apis[k] = (...args: any[]) =>
            apis[k](...args).then(async (res: any) => {
                await onWrite(contractId);
                return res;
            });
    }
    ctc.a = ctc.apis;
    return ctc;
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

    // Keep it simple stupid without separation between views (for now)
    // Also don't throw but set state to nulls if `None` arrives - it is probably actually more logical?
    const updateContractStateFx = createEffect(
        expBackoff(async ({ ctc, account, contractId }: { contractId: AppId; ctc: any; account: Account | null }) => {
            return {
                initial: await ctc.views.initial(),
                global: await ctc.views.global(),
                local: await ctc.views.local(account!.networkAccount.addr),
            };
        })
    );

    const ctcInitialized = sample({
        clock: initializeContract,
        source: $account,
        fn: (account, contractId) => [
            contractId,
            makeWrappedCtc(account, backend, contractId, async (id) => {
                triggerStateUpdate(id);
                triggerBalancesUpdate();
                return;
            }),
        ],
    });

    $contractCtcs.on(ctcInitialized, (ctcs, [id, ctc]) => ctcs.set(id, ctc));

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
