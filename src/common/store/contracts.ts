import { Map } from 'immutable';
import { combine, createEffect, createEvent, createStore, sample, Store, Event, Effect } from 'effector';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { Transaction } from 'algosdk';

import {
    Account,
    Backend,
    ViewVal,
    ViewMap,
    ViewFunMap,
    Contract as ReachContract,
    Address,
    WalletTransactionGroup,
} from '../../types';
import { reach } from '../../AppContext';
import {
    compileTeal,
    getAccountInfo,
    getLocalState,
    maybeToNullable,
    signAndPostTxnGroups,
    toReachTxnGroup,
} from '../lib';
import { Contract, ContractType, ContractInfo, ContractState, AppId, parseView, AllBignums } from './types';
import { $account, fetchAccountInfoFx, refreshAccountInfo } from './account';
import { expBackoff, waitForEvent } from './utils';

// I'm sorry for this mess.... It can be done better I do believe.
// In the end, it was not particularly necessary (I thought I would need more specific Reach
// types to enable type-based parsing decisions, I don't remember in detail really),
// but I already started using more well-defined type for `Account` from Reach, and the
// old version of code without this does not work anymore

type ReplacedViewMap<V extends ViewFunMap | ViewVal, T> = V extends ViewFunMap
    ? Record<string, T | ReplacedViewMap<ViewVal, T>>
    : Record<string, T>;

type LvlUp<V extends ViewFunMap | ViewVal> = V extends ViewFunMap ? ViewMap : ViewFunMap;

function isViewValue(v: ViewVal | ViewFunMap): v is ViewVal {
    return typeof v === 'function';
}

function mapViewMap<V extends ViewFunMap | ViewVal, T>(
    mp: LvlUp<V>,
    fn: (k: string, v: ViewVal) => T
): ReplacedViewMap<V, T> {
    return Object.keys(mp).reduce((newMp: ReplacedViewMap<V, T>, k) => {
        const value = mp[k];
        if (isViewValue(value)) {
            newMp[k] = fn(k, value);
        } else {
            newMp[k] = mapViewMap<ViewVal, T>(value, fn);
        }
        return newMp;
    }, {});
}

/**
 * Type guard to see if object is really a reach Backend
 * @param backend Backend to check
 */
function isReachBackend(backend: Backend | any): backend is Backend {
    return '_Connectors' in backend;
}

function isTealBackend(backend: TealBackend | any): backend is TealBackend {
    return 'makeCtc' in backend;
}

// This can be passed to or received from smart-contract
type ReachValue = string | BigNumberish;

// TODO
type WrappedContract = {
    views: any;
    apis: Record<string, Effect<ReachValue[], ReachValue[]>>;
};

export type TealConnector = {
    signAndPostTxs: (txns: WalletTransactionGroup[]) => Promise<string[]>;
    getAppInfo: (appId: AppId) => Promise<any>;
    getAppLocalState: (addr: Address, appId: AppId) => Promise<any>;
    getTransaction: (txId: string) => Promise<any>;
    compile: (teal: string) => Promise<Uint8Array>;
};

export const DEFAULT_TEAL_CONNECTOR: TealConnector = {
    signAndPostTxs: signAndPostTxnGroups,
    getAppInfo: async (appId: AppId) => {
        const p = await reach.getProvider();
        return p.algodClient.getApplicationByID(appId).do();
    },
    getAppLocalState: async (addr: Address, appId: AppId) => {
        const accInfo = await getAccountInfo(addr);
        return getLocalState(accInfo, appId);
    },
    getTransaction: async (txId: string) => {
        const p = await reach.getProvider();
        return p.indexer
            .lookupTransactionByID(txId)
            .do()
            .then((data) => data.transaction);
    },
    compile: async (teal: string) => {
        const p = await reach.getProvider();
        return compileTeal(p.algodClient, teal);
    },
};

export type TealCtcWrapper = {
    participants: ViewFunMap;
    p: ViewFunMap;
    views: ViewFunMap;
    v: ViewFunMap;
    apis: ViewFunMap;
    a: ViewFunMap;
    getInfo: () => Promise<AppId>;
};

export type TealBackend = {
    makeCtc: (account: Account, connector: TealConnector, contractId?: AppId) => TealCtcWrapper;
};

export type SomeBackend = Backend | TealBackend;
export type SomeContract = ReachContract | TealCtcWrapper;

function makeSomeContract(account: Account, backend: SomeBackend, contractId: AppId): SomeContract {
    if (isReachBackend(backend)) {
        return account.contract(backend, Promise.resolve(BigNumber.from(contractId)));
    } else {
        return backend.makeCtc(account, DEFAULT_TEAL_CONNECTOR, contractId);
    }
}

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
    backend: SomeBackend,
    contractId: AppId,
    onWrite: (id: AppId) => Promise<void>
): SomeContract {
    // TODO: make read-only ctc when account is null
    // const ctc = account!.contract(backend, Promise.resolve(BigNumber.from(contractId)));
    const ctc = makeSomeContract(account!, backend, contractId);

    // TODO: proper typing for wrapped contracts
    // const wCtc: WrappedContract = {
    //     views: Object.keys(ctc.views).map((k: string) => k)
    // }

    ctc.views = mapViewMap(
        ctc.views,
        (k, view) =>
            async (...args: any[]) =>
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
            } catch (error) {
                // So that errors inside effect are visible in console
                throw error;
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
        // @ts-expect-error
        newState[key] = parseView(type, key)(bignumState[key]);
        return newState;
    }, {} as ContractState<T>);
}

// Contracts store
export type ContractsStoreVars<T extends ContractType> = {
    $contracts: Store<Array<Contract<T>>>;
    $contractStatesWithCache: Store<Map<AppId, ContractState<T>>>;
    setContractInfos: Event<Array<ContractInfo<T>>>;
    triggerStateUpdate: Event<AppId>;
    contractStateUpdated: Event<{ id: AppId; state: ContractState<T> }>;
};

export enum LAAS_BACKEND {
    original,
}

/**
 * Creates a store for the array of contracts of a given type.
 * @param type Contract type
 * @param backend Reach/TEAL-wrapper contract backend
 * @returns Relevant stores and events
 */
export function buildContractsStore<T extends ContractType>(
    type: T,
    backend: SomeBackend | Record<string, SomeBackend>
): ContractsStoreVars<T> {
    const getBackendVersion = (v: string): SomeBackend => {
        // fix stupid bug around version number in add farm previously
        if (v.startsWith('^')) {
            v = v.substring(1);
        }

        if (isReachBackend(backend) || isTealBackend(backend)) {
            return backend;
        } else if (v in backend) {
            return backend[v];
        } else {
            throw new Error(`Unknown backend version ${v} for ${type} contract`);
        }
    };

    const $contractInfos = createStore<Array<ContractInfo<T>>>([]);
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
        return infos.reduce<Array<Contract<T>>>((contracts, info) => {
            const { id } = info;
            const contract = {
                id,
                info,
                ctc: ctcs.get(id, null),
                state: states.get(id, null),
            };
            return [...contracts, contract];
        }, []);
    });

    const setContractInfos = createEvent<Array<ContractInfo<T>>>();
    $contractInfos.on(setContractInfos, (_, infos) => infos);

    const initializeContract = createEvent<{ id: AppId; version: string }>();
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
                ctc: SomeContract;
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
        fn: (account, { id, version }): [AppId, SomeContract] => [
            id,
            makeWrappedCtc(type, account, getBackendVersion(version), id, async (id) => {
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
        fn(account, [contractId, ctc]) {
            return { contractId, ctc, account };
        },
        target: updateContractStateFx,
    });

    sample({
        clock: triggerStateUpdate,
        source: { account: $account, ctcs: $contractCtcs },
        fn({ account, ctcs }, contractId) {
            return { ctc: ctcs.get(contractId, null), contractId, account };
        },
        target: updateContractStateFx,
    });

    updateContractStateFx.fail.watch((p) => {
        console.log('UPDATE CONTRACT FAILED', p);
    });

    const contractStateUpdated = sample({
        source: updateContractStateFx.done,
        fn: ({ params, result }) => ({ id: params.contractId, state: result }),
    });

    $contractStates.on(contractStateUpdated, (states, { id, state }) => states.set(id, state));

    const $contractIdsAndVersions = $contractInfos.map((infos) =>
        infos.map(({ id, version }) => ({
            id,
            version,
        }))
    );

    combine({ account: $account, idsAndVersions: $contractIdsAndVersions }).watch(({ idsAndVersions }) => {
        for (const idVersion of idsAndVersions) {
            if (type === 'laas') {
                console.log('LAAS HMM', idVersion);
            }
            initializeContract(idVersion);
        }
    });

    return {
        $contracts,
        $contractStatesWithCache,
        setContractInfos,
        triggerStateUpdate,
        contractStateUpdated,
    };
}
