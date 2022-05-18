import { useState, useEffect, useCallback } from 'react';

import { ReachStdlib, Account } from '../types';

const maybeToNullable = (mb: [string, any]) => {
    if (mb[0] === 'Some') return mb[1];
    return null;
};

const isBigNumber = (n: any): boolean => Object.prototype.hasOwnProperty.call(n, '_isBigNumber');

const convertBns = (obj: any): any => {
    if (isBigNumber(obj)) {
        return obj.toNumber();
    } else if (obj instanceof Array) {
        return obj.map((e) => convertBns(e));
    } else if (obj instanceof Object) {
        return Object.keys(obj).reduce((o: any, k) => {
            o[k] = convertBns(obj[k]);
            return o;
        }, {});
    } else {
        return obj;
    }
};

type ReachContractHookSettings = {
    launchEventMonitors: boolean;
};

export const useReachContract = (
    backend: any,
    account: Account,
    contractId: number,
    settings: ReachContractHookSettings = {
        launchEventMonitors: false,
    }
) => {
    const [ctc, setCtc] = useState<any | undefined>(undefined);
    const [viewsState, setViewsState] = useState<any>({ initial: null, global: null, local: null });
    const [loaded, setLoaded] = useState<boolean>(false);

    const getCtc = useCallback(() => {
        //@ts-ignore
        return account.contract(backend, contractId);
    }, [account, backend, contractId]);

    // TODO: `initial` view should actually be only fetched once
    const refreshState = useCallback(async (ctc, account) => {
        const viewNames: string[] = Object.keys(ctc.views);
        console.log('REFRESHING CONTRACT STATE');

        let state: any = {};
        for (const vName of viewNames) {
            // hacky shit to avoid overparametrization of the hook. could be done better?
            const args = vName === 'local' ? [account.networkAccount.addr] : [];
            state[vName] = await ctc.views[vName](...args)
                .then(maybeToNullable)
                .then(convertBns);
        }
        setViewsState(state);
        setLoaded(true);
    }, []);

    useEffect(() => setCtc(getCtc()), [getCtc]);

    useEffect(() => {
        if (ctc !== undefined) {
            console.log('EFFECT RECALLED');
            refreshState(ctc, account);
            // TODO: we could transform Reach event stream to the Effector event stream - is that ever useful?
            // TODO: Reach uses __polling__ for monitoring events - which means many stupid requests.
            // Can we __not__ use it directly? Better update the state after API calls (wrap CTC API functions into a wrapper
            // which triggers state refresh?)
            if (settings.launchEventMonitors) {
                for (const eventStream of Object.values(ctc.events)) {
                    //@ts-ignore
                    eventStream.monitor((_) => refreshState(ctc, account));
                }
            }
        }
    }, [account, ctc, refreshState, settings.launchEventMonitors]);

    return { ctc, loaded, ...viewsState };
};
