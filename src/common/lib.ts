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
import { Buffer } from 'buffer';

import { Account, ReachStdlib } from '../types';

export const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const formatDecimalsMeaningful = (value: number, precision: number = 2): string => {
    if (value === 0) {
        return "0";
    }

    const wholeLog = Math.floor(-Math.log10(Math.abs(value)));
    const zeros = wholeLog <= 0 ? 0 : wholeLog;
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 5,
        maximumFractionDigits: 6,
    });

    return formatter.format(value);
};

export const maybeToNullable = (mb: [string, any]) => {
    if (mb[0] === 'Some') return mb[1];
    return null;
};

export const isBigNumber = (n: any): boolean => Object.prototype.hasOwnProperty.call(n, '_isBigNumber');

export const convertBns = (obj: any): any => {
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

export async function withAlgodEncoding<N extends Algodv2 | Indexer>(
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

export const getAccountInfo = async (reach: ReachStdlib, account: Account): Promise<any> => {
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

export const getLocalState = (ai: any, contractId: number): any | undefined => {
    const alss = ai['apps-local-state'] || [];
    const als = alss.find((x: any) => x.id === contractId);
    return als ? als['key-value'] : undefined;
};

export const toReachTxn = (txn: Transaction): any => {
    return { txn: Buffer.from(txn.toByte()).toString('base64') };
};

export const manualBatchOptIn = async (
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

