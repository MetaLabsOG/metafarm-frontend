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
import { BigNumber } from '@ethersproject/bignumber';
import { Buffer } from 'buffer';
import { Account, ReachStdlib, WalletTransaction, WalletTransactionGroup } from '../types';
import { Amount, AppId, Asset, AssetId } from './store';
import { reach } from '../AppContext';

export const MINUTE: number = 60;
export const HOUR: number = 60 * 60;
export const DAY: number = HOUR * 24;

// BigNumbers from JSON decoding
export type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
export type JsonWithBignum =
    | string
    | number
    | boolean
    | null
    | BigNumber
    | JsonWithBignum[]
    | { [key: string]: JsonWithBignum };

export function resolveBignums(obj: Json): JsonWithBignum {
    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
        return obj;
    } else if (obj instanceof Array) {
        return obj.map(resolveBignums);
    }

    if (obj.type === 'BigNumber' && obj.hex !== undefined) {
        return BigNumber.from(obj.hex);
    } else {
        return Object.keys(obj).reduce((newObj, key) => {
            newObj[key] = resolveBignums(obj[key]);
            return newObj;
        }, {} as { [key: string]: JsonWithBignum });
    }
}

export const unsafeFromBigint = (n: bigint): number => {
    if (n > Number.MAX_SAFE_INTEGER) {
        console.warn(
            `This BigInt is too large to be converted to a number: ${n}. Conversion was done with reduction in precision.`
        );
    }
    return Number(n);
};

export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatDecimalsMeaningful = (value: number, precision: number = 2): string => {
    if (value === 0) {
        return '0';
    }
    const wholeLog = Math.floor(-Math.log10(Math.abs(value)));
    const zeros = wholeLog <= 0 ? 0 : wholeLog;
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: Math.max(zeros, precision),
        maximumFractionDigits: zeros + precision,
    });

    return formatter.format(value);
};

export const maybeToNullable = (mb: [string, any]) => {
    if (mb[0] === 'Some') return mb[1];
    return null;
};

export const isBigNumber = (n: any): n is BigNumber => Object.prototype.hasOwnProperty.call(n, '_isBigNumber');

export function convertBns(obj: any): any {
    if (obj === null) {
        return null;
    } else if (isBigNumber(obj)) {
        return obj.toBigInt();
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
}

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

export const toReachTxn = (txn: Transaction): WalletTransaction => {
    return { txn: Buffer.from(txn.toByte()).toString('base64') };
};

export const signAndPostTxnGroups = async (groups: WalletTransactionGroup[]): Promise<boolean> => {
    const provider = await reach.getProvider();
    const algod = provider.algodClient;

    if (!window.algorand) {
        throw new Error('window.algorand is not defined, apparently wallet is not connected!');
    }

    const signedTxns = await window.algorand.signTxns(groups.map((g) => g.txns).flat());
    let offset = 0;
    for (const group of groups) {
        const toPost = signedTxns.slice(offset, offset + group.txns.length);
        await window.algorand.postTxns(toPost);
        const success = withAlgodEncoding(algod, IntDecoding.DEFAULT, (algod) => {
            return waitForConfirmation(algod, group.firstTxID, 3);
        });

        if (!success) {
            return false;
        }

        offset += group.txns.length;
    }

    return true;
};

export const prepareOptinTxs = async (
    account: Account,
    { appId, tokens }: { appId?: AppId; tokens?: AssetId[] }
): Promise<WalletTransactionGroup[]> => {
    const provider = await reach.getProvider();
    const algod = provider.algodClient;
    const ps = await algod.getTransactionParams().do();

    const groups: WalletTransactionGroup[] = [];
    if (appId !== undefined) {
        const appTxn = makeApplicationOptInTxn(account.networkAccount.addr, ps, appId);
        const txId = appTxn.txID();
        groups.push({
            firstTxID: txId,
            txns: [toReachTxn(appTxn)],
        });
    }

    if (tokens !== undefined && tokens.length > 0) {
        let txns = tokens.map((t) =>
            makeAssetTransferTxnWithSuggestedParamsFromObject({
                from: account.networkAccount.addr,
                to: account.networkAccount.addr,
                amount: 0,
                assetIndex: t,
                suggestedParams: ps,
            })
        );
        if (txns.length > 1) {
            txns = assignGroupID(txns);
        }
        groups.push({
            firstTxID: txns[0].txID(),
            txns: txns.map(toReachTxn),
        });
    }

    return groups;
};

export const manualBatchOptIn = async (
    account: Account,
    toOptin: { appId?: AppId; tokens?: AssetId[] }
): Promise<boolean> => {
    const txGroups = await prepareOptinTxs(account, toOptin);
    return signAndPostTxnGroups(txGroups);
};

export const calculateTokenAmount = (token: Asset, amount: Amount | null): number => {
    if (amount === null) {
        return 0;
    }

    return Number(reach.formatWithDecimals(amount.toString(), token.decimals));
};

export const calculateTokenMicroAmount = (token: Asset, amount: number | null): Amount => {
    if (amount === null || isNaN(amount)) {
        return BigInt(0);
    }

    return BigInt(Math.floor(amount * 10 ** token.decimals));
};

export function formatNumber(x: number) {
    if (x < 0.01) {
        return Math.round(x * 1000) / 1000;
    }
    return x > 100 ? Math.round(x) : Math.round(x * 100) / 100;
}
