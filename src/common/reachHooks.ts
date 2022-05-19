import {
    Algodv2,
    assignGroupID,
    Indexer,
    IntDecoding,
    Transaction,
    makeApplicationOptInTxn,
    makeAssetTransferTxnWithSuggestedParamsFromObject,
    waitForConfirmation,
} from 'algosdk';
import { useState, useEffect, useCallback } from 'react';
import { Buffer } from 'buffer';

import { Account, ReachStdlib } from '../types';

// TODO: functions should be put into some kind of... library?

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

async function withAlgodEncoding<N extends Algodv2 | Indexer>(
    algod: N,
    encoding: IntDecoding,
    wrapped: (algod: N) => Promise<any>
): Promise<any> {
    const prevEncoding = algod.getIntEncoding();
    algod.setIntEncoding(encoding);
    const res = await wrapped(algod);
    algod.setIntEncoding(prevEncoding);
    return res;
}

const getAccountInfo = async (reach: ReachStdlib, account: Account): Promise<any> => {
    const provider = await reach.getProvider();
    try {
        const algod = provider.algodClient;
        return await withAlgodEncoding(algod, IntDecoding.DEFAULT, (algod) => {
            return algod.accountInformation(account.networkAccount.addr).do();
        });
    } catch (e: any) {
        const indexer = provider.indexer;
        return withAlgodEncoding(indexer, IntDecoding.DEFAULT, async (indexer) => {
            const res = await indexer.lookupAccountByID(account.networkAccount.addr).do();
            return res.account;
        });
    }
};

const getLocalState = (ai: any, contractId: number): any | undefined => {
    const alss = ai['apps-local-state'] || [];
    const als = alss.find((x: any) => x.id === contractId);
    return als ? als['key-value'] : undefined;
};

const toReachTxn = (txn: Transaction): any => {
    return { txn: Buffer.from(txn.toByte()).toString('base64') };
};

const manualBatchOptIn = async (
    reach: ReachStdlib,
    account: Account,
    contractId: number,
    tokens: number[] = []
): Promise<boolean> => {
    const provider = await reach.getProvider();
    const algod = provider.algodClient;
    const ps = await algod.getTransactionParams().do();

    const appTxn = makeApplicationOptInTxn(account.networkAccount.addr, ps, contractId);
    const txId = appTxn.txID();

    // app optin and token opt in cannot be done in the same transaction group apparently...
    await provider.signAndPostTxns([toReachTxn(appTxn)]);

    if (tokens.length > 0) {
        const txns = tokens.map((t) =>
            makeAssetTransferTxnWithSuggestedParamsFromObject({
                from: account.networkAccount.addr,
                to: account.networkAccount.addr,
                amount: 0,
                assetIndex: t,
                suggestedParams: ps,
            })
        );
        if (txns.length > 1) {
            assignGroupID(txns);
        }
        await provider.signAndPostTxns(txns.map(toReachTxn));
    }

    return withAlgodEncoding(algod, IntDecoding.DEFAULT, (algod) => {
        return waitForConfirmation(algod, txId, 3);
    });
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
    const [state, setState] = useState<any | undefined>(undefined);

    const getCtc = useCallback(() => {
        //@ts-ignore
        return account.contract(backend, contractId);
    }, [account, backend, contractId]);

    // TODO: `initial` view should actually be only fetched once
    const refreshState = useCallback(async (ctc, account) => {
        const viewNames: string[] = Object.keys(ctc.views);

        let state: any = {};
        for (const vName of viewNames) {
            // hacky shit to avoid overparametrization of the hook. could be done better?
            const args = vName === 'local' ? [account.networkAccount.addr] : [];
            state[vName] = await ctc.views[vName](...args)
                .then(maybeToNullable)
                .then(convertBns);
        }
        setState(state);
    }, []);

    useEffect(() => setCtc(getCtc()), [getCtc]);

    useEffect(() => {
        if (ctc !== undefined) {
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

    return { ctc, state, reload: () => refreshState(ctc, account) };
};

export const useContractOptin = (reach: ReachStdlib, account: Account, contractId: number, tokens: number[] = []) => {
    const [userOptedIn, setUserOptedIn] = useState<boolean>(false);

    const isOptedIn = useCallback(async () => {
        const ai = await getAccountInfo(reach, account);
        const appOptedIn = getLocalState(ai, contractId) !== undefined;
        const accAssets = ai.assets || [];
        const tokensOptedIn = tokens.map((t: number) => {
            return accAssets.find((asset: any) => t === asset['asset-id']) !== undefined;
        });
        return appOptedIn && tokensOptedIn.every((v) => v);
    }, [reach, account, contractId, tokens]);

    const optIn = useCallback(async () => {
        await manualBatchOptIn(reach, account, contractId, tokens);
        setUserOptedIn(true);
    }, [reach, account, contractId, tokens]);

    useEffect(() => {
        isOptedIn().then(setUserOptedIn);
    }, [isOptedIn]);

    return { userOptedIn, optIn };
};
