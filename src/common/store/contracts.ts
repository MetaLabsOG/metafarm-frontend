import { Map } from 'immutable';
import { combine, createEffect, createEvent, createStore, sample, Store, Event } from 'effector';
import { Contract, ContractType, ContractInfo, ContractState, AppId } from './types';
import { Account } from '../../types';
import { convertBns, maybeToNullable } from '../lib';
import { $account, refreshAccountInfo } from './account';
import { expBackoff } from './utils';

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
                refreshAccountInfo();
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
