import { Map } from 'immutable';
import { combine, createEffect, createEvent, createStore, sample, Store, Event, Effect } from 'effector';
import { Contract, ContractType, ContractInfo, ContractState, AppId, parseView, AllBignums } from './types';
import { Account, Backend, ViewVal, ViewMap, ViewFunMap, Contract as ReachContract } from '../../types';
import { maybeToNullable } from '../lib';
import { $account, fetchAccountInfoFx, refreshAccountInfo } from './account';
import { expBackoff, waitForEvent } from './utils';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

// I'm sorry for this mess.... It can be done better I do believe.
// In the end, it was not particularly necessary (I thought I would need more specific Reach
// types to enable type-based parsing decisions, I don't remember in detail really),
// but I already started using more well-defined type for `Account` from Reach, and the
// old version of code without this does not work anymore

type ReplacedViewMap<V extends ViewFunMap | ViewVal, T> = V extends ViewFunMap
    ? {
          [key: string]: T | ReplacedViewMap<ViewVal, T>;
      }
    : {
          [key: string]: T;
      };

type LvlUp<V extends ViewFunMap | ViewVal> = V extends ViewFunMap ? ViewMap : ViewFunMap;

function isViewVal(v: ViewVal | ViewFunMap): v is ViewVal {
    return typeof v === 'function';
}

function mapViewMap<V extends ViewFunMap | ViewVal, T>(
    mp: LvlUp<V>,
    fn: (k: string, v: ViewVal) => T
): ReplacedViewMap<V, T> {
    return Object.keys(mp).reduce((newMp: ReplacedViewMap<V, T>, k) => {
        const val = mp[k];
        if (isViewVal(val)) {
            newMp[k] = fn(k, val);
        } else {
            newMp[k] = mapViewMap<ViewVal, T>(val, fn);
        }
        return newMp;
    }, {});
}

// This can be passed to or received from smart-contract
type ReachVal = string | BigNumberish;

// TODO
type WrappedContract = {
    views: any;
    apis: Record<string, Effect<ReachVal[], ReachVal[]>>;
};

/**
 * Wrap the methods of ctc with bignum parsing and callback on api calls.
 * @param type
 * @param account
 * @param backend
 * @param contractId
 * @param onWrite
 * @returns Wrapped contract
 */
function makeWrappedCtc<T extends ContractType>(
    type: T,
    account: Account | null,
    backend: Backend,
    contractId: AppId,
    onWrite: (id: AppId) => Promise<void>
): ReachContract {
    // TODO: make read-only ctc when account is null
    const ctc = account!.contract(backend, Promise.resolve(BigNumber.from(contractId)));

    // TODO: proper typing for wrapped contracts
    // const wCtc: WrappedContract = {
    //     views: Object.keys(ctc.views).map((k: string) => k)
    // }

    ctc.views = mapViewMap(
        ctc.views,
        (k, view) =>
            (...args: any[]) =>
                view(...args)
                    .then(maybeToNullable)
                    .then(parseView(type, k as keyof ContractState<T>))
    );
    ctc.v = ctc.views;

    ctc.apis = mapViewMap(ctc.apis, (_, api) =>
        createEffect(async (args?: any[]) => {
            args = args ?? [];
            // TODO(qumeric): I think this try-catch is useless but I am afraid to remove.
            // eslint-disable-next-line no-useless-catch
            try {
                const res = await api(...args);
                await onWrite(contractId);
                return res;
            } catch (err) {
                // so that errors inside effect are visible in console
                throw err;
            }
        })
    );
    ctc.a = ctc.apis;
    return ctc;
}

function parseBignumState<T extends ContractType>(
    type: T,
    bignumState: AllBignums<ContractState<T>>
): ContractState<T> {
    return Object.keys(bignumState).reduce((newState: ContractState<T>, k: string) => {
        const key = k as keyof ContractState<T>;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        newState[key] = parseView(type, key)(bignumState[key]);
        return newState;
    }, {} as ContractState<T>);
}

// Contracts store
export type ContractsStoreVars<T extends ContractType> = {
    $contracts: Store<Contract<T>[]>;
    $contractInfos: Store<ContractInfo<T>[]>;
    $contractCtcs: Store<Map<AppId, any>>;
    $contractStates: Store<Map<AppId, ContractState<T>>>;
    $contractStatesWithCache: Store<Map<AppId, ContractState<T>>>;
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
export function buildContractsStore<T extends ContractType>(type: T, backend: Backend): ContractsStoreVars<T> {
    const $contractInfos = createStore<ContractInfo<T>[]>([]);
    const $contractStates = createStore(Map<AppId, ContractState<T>>());
    const $contractCtcs = createStore(Map<AppId, any>());

    const $contractStateCaches = $contractInfos.map((infos) =>
        infos
            .reduce(
                (states, info) =>
                    info.metadata.cache ? states.set(info.id, parseBignumState(type, info.metadata.cache)) : states,
                Map<AppId, ContractState<T>>().asMutable()
            )
            .asImmutable()
    );

    const $contractStatesWithCache = combine($contractStateCaches, $contractStates, (caches, states) =>
        caches.merge(states)
    );

    const $contracts = combine($contractInfos, $contractCtcs, $contractStatesWithCache, (infos, ctcs, states) => {
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
        expBackoff(
            async ({
                ctc,
                account,
            }: {
                contractId: AppId;
                ctc: ReachContract;
                account: Account | null;
            }): Promise<ContractState<T>> => {
                return {
                    initial: await (ctc.views.initial as ViewVal)(),
                    global: await (ctc.views.global as ViewVal)(),
                    local: await (ctc.views.local as ViewVal)(account!.networkAccount.addr),
                };
            }
        )
    );

    const ctcInitialized = sample({
        clock: initializeContract,
        source: $account,
        filter: (account, _) => account !== null,
        fn: (account, contractId): [AppId, ReachContract] => [
            contractId,
            makeWrappedCtc(type, account, backend, contractId, async (id) => {
                triggerStateUpdate(id);
                refreshAccountInfo();

                const stateUpdatePromise = waitForEvent(
                    updateContractStateFx.done,
                    updateContractStateFx.fail,
                    (v) => v.params.contractId === id,
                    (p) => p.contractId === id
                );
                const accountRefreshPromise = waitForEvent(fetchAccountInfoFx.done, fetchAccountInfoFx.fail);
                await Promise.all([stateUpdatePromise, accountRefreshPromise]);
            }),
        ],
    });

    $contractCtcs.on(ctcInitialized, (ctcs, [id, ctc]) => ctcs.set(id, ctc));

    sample({
        clock: ctcInitialized,
        source: $account,
        fn: (account, [contractId, ctc]) => {
            return { contractId, ctc, account };
        },
        target: updateContractStateFx,
    });

    sample({
        clock: triggerStateUpdate,
        source: { account: $account, ctcs: $contractCtcs },
        fn: ({ account, ctcs }, contractId) => {
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

    const $contractIds = $contractInfos.map((infos) => infos.map((i) => i.id));

    combine({ account: $account, ids: $contractIds }).watch(({ ids }) => {
        for (const id of ids) {
            initializeContract(id);
        }
    });

    return {
        $contracts,
        $contractInfos,
        $contractCtcs,
        $contractStates,
        $contractStatesWithCache,
        setContractInfos,
        triggerStateUpdate,
        contractStateUpdated,
    };
}
