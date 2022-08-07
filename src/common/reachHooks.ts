import { BigNumber } from '@ethersproject/bignumber';
import { useState, useEffect, useCallback } from 'react';

import { Account, Backend, Contract, ReachStdlib, ViewVal } from '../types';
import { maybeToNullable, convertBns, getAccountInfo, getLocalState, manualBatchOptIn } from './lib';

type ReachContractHookSettings = {
    launchEventMonitors: boolean;
};

// We can do this because we follow a convention.
type ReachContractState = {
    initial: any;
    global: any;
    local: any;
};

export const useReachContract = (
    backend: Backend,
    account: Account,
    contractId: number,
    settings: ReachContractHookSettings = {
        launchEventMonitors: false,
    }
) => {
    const [ctc, setCtc] = useState<Contract | undefined>(undefined);
    const [state, setState] = useState<ReachContractState | undefined>(undefined);

    const getCtc = useCallback(() => {
        return account.contract(backend, Promise.resolve(BigNumber.from(contractId)));
    }, [account, backend, contractId]);

    // TODO: `initial` view should actually be only fetched once
    const refreshState = useCallback(async (ctc: Contract, account: Account) => {
        const getView = async (name: string, args: string[]) =>
            (ctc.views[name] as ViewVal)(...args)
                .then(maybeToNullable)
                .then(convertBns);

        const state: ReachContractState = {
            initial: await getView('initial', []),
            global: await getView('global', []),
            local: await getView('local', [account.networkAccount.addr]),
        };

        setState(state);
    }, []);

    useEffect(() => {
        setCtc(getCtc());
    }, [getCtc]);

    useEffect(() => {
        if (ctc !== undefined) {
            refreshState(ctc, account);
            // TODO: we could transform Reach event stream to the Effector event stream - is that ever useful?
            // TODO: Reach uses __polling__ for monitoring events - which means many stupid requests.
            // Can we __not__ use it directly? Better update the state after API calls (wrap CTC API functions into a wrapper
            // which triggers state refresh?)
            if (settings.launchEventMonitors) {
                for (const eventStream of Object.values(ctc.events)) {
                    eventStream.monitor(async (_: any) => refreshState(ctc, account));
                }
            }
        }
    }, [account, ctc, refreshState, settings.launchEventMonitors]);

    return {
        ctc,
        state,
        reload() {
            if (ctc !== undefined) {
                refreshState(ctc, account);
            }
        },
    };
};

export const useContractOptin = (reach: ReachStdlib, account: Account, contractId: number, tokens: number[] = []) => {
    const [userOptedIn, setUserOptedIn] = useState<boolean>(false);

    const isOptedIn = useCallback(async () => {
        const ai = await getAccountInfo(account);
        const appOptedIn = getLocalState(ai, contractId) !== undefined;
        const accAssets = ai.assets ?? [];
        const tokensOptedIn = tokens.map((t: number) => {
            return accAssets.find((asset: any) => t === asset['asset-id']) !== undefined;
        });
        return appOptedIn && tokensOptedIn.every(Boolean);
    }, [account, contractId, tokens]);

    const optIn = useCallback(async () => {
        await manualBatchOptIn(account, { appId: contractId, tokens });
        setUserOptedIn(true);
    }, [account, contractId, tokens]);

    useEffect(() => {
        isOptedIn().then(setUserOptedIn);
    }, [isOptedIn]);

    return { userOptedIn, optIn };
};

export const useTimer = (initialSeconds: number) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (seconds > 0) {
            timeout = setTimeout(() => {
                setSeconds((seconds) => Math.max(0, seconds - 1));
            }, 1000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [seconds]);

    useEffect(() => {
        setSeconds(initialSeconds);
    }, [initialSeconds]);

    return [seconds];
};
