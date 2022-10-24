import { Buffer } from 'buffer';
import algosdk, {
    Algodv2,
    assignGroupID,
    Indexer,
    IntDecoding,
    Transaction,
    makeApplicationOptInTxn,
    makeAssetTransferTxnWithSuggestedParamsFromObject,
    waitForConfirmation,
    decodeUnsignedTransaction,
} from 'algosdk';
import { BigNumber } from '@ethersproject/bignumber';
import { uniq } from 'ramda';
import { Account, WalletTransaction, WalletTransactionGroup } from '../types';
import { ALGONET, MAINNET, reach } from '../AppContext';
import { Amount, AppId, Asset, AssetId } from './store/types';

export const MINUTE = 60;
export const HOUR = 60 * 60;
export const DAY = HOUR * 24;
// Average year length is 365.25 days
export const YEAR = DAY * 365 + HOUR * 6;

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

export class SentTxError extends Error {
    sendTxIds: string[];
    constructor(message: string, sendTxIds: string[]) {
        super(message);
        this.sendTxIds = sendTxIds;
    }
}

export function resolveBignums(object: Json): JsonWithBignum {
    if (typeof object === 'string' || typeof object === 'number' || typeof object === 'boolean' || object === null) {
        return object;
    }
    if (Array.isArray(object)) {
        return object.map(resolveBignums);
    }

    if (object.type === 'BigNumber' && object.hex !== undefined) {
        return BigNumber.from(object.hex);
    }
    return Object.keys(object).reduce<Record<string, JsonWithBignum>>((newObject, key) => {
        newObject[key] = resolveBignums(object[key]);
        return newObject;
    }, {});
}

export const unsafeFromBigint = (n: bigint): number => {
    if (n > Number.MAX_SAFE_INTEGER) {
        console.warn(
            `This BigInt is too large to be converted to a number: ${n}. Conversion was done with reduction in precision.`
        );
    }
    return Number(n);
};

export const sleep = async (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatDecimalsMeaningful = (value: number, precision?: number): string => {
    if (value === 0) {
        return '0';
    }

    const minPrecision = value < 100 ? 2 : 0;
    const wholeLog = Math.floor(-Math.log10(Math.abs(value)));
    const zeros = wholeLog <= 0 ? 0 : wholeLog;
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: precision ?? Math.max(zeros, minPrecision),
        maximumFractionDigits: precision ?? zeros + minPrecision,
    });

    return formatter.format(value);
};

export const maybeToNullable = <T>(mb: [string, T]): T | null => {
    if (mb[0] === 'Some') return mb[1];
    return null;
};

export const isBigNumber = (n: any): n is BigNumber => Object.prototype.hasOwnProperty.call(n, '_isBigNumber');

export function convertBns(object: any): any {
    if (object === null) {
        return null;
    }
    if (isBigNumber(object)) {
        return object.toBigInt();
    }
    if (Array.isArray(object)) {
        return object.map((e) => convertBns(e));
    }
    if (object instanceof Object) {
        return Object.keys(object).reduce((o: any, k) => {
            o[k] = convertBns(object[k]);
            return o;
        }, {});
    }
    return object;
}

export async function withAlgodEncoding<N extends Algodv2 | Indexer>(
    algod: N,
    encoding: IntDecoding,
    wrapped: (algod: N) => Promise<Record<string, any>>
): Promise<Record<string, any>> {
    const previousEncoding = algod.getIntEncoding();
    algod.setIntEncoding(encoding);
    const res = await wrapped(algod);
    algod.setIntEncoding(previousEncoding);
    return res;
}

type AccountInfo = Record<string, any>;

export const getAccountInfo = async (account: Account | string): Promise<AccountInfo> => {
    const provider = await reach.getProvider();
    const addr = typeof account === 'string' ? account : account.networkAccount.addr;

    try {
        const algod = provider.algodClient;
        return await withAlgodEncoding(algod, IntDecoding.DEFAULT, async (algod) => {
            return algod.accountInformation(addr).do();
        });
    } catch {
        const { indexer } = provider;
        return withAlgodEncoding(indexer, IntDecoding.DEFAULT, async (indexer) => {
            const res = await indexer.lookupAccountByID(addr).do();
            return res.account;
        });
    }
};

// TODO: normal typing for account info (not any)
export const filterOutOptedIn = (
    accountInfo: AccountInfo,
    appIds: number[],
    tokens: number[]
): { appIds: number[]; tokens: number[] } => {
    const optedInAppIds = new Set((accountInfo['apps-local-state'] ?? []).map((x: any) => x.id));
    const optedInTokens = new Set((accountInfo.assets ?? []).map((x: any) => x['asset-id']));

    appIds = appIds.filter((id) => !optedInAppIds.has(id));
    tokens = tokens.filter((id) => !optedInTokens.has(id));
    return { appIds, tokens };
};

export const getLocalState = (ai: AccountInfo, contractId: number): any | undefined => {
    const alss = ai['apps-local-state'] ?? [];
    const als = alss.find((x: any) => x.id === contractId);
    return als ? als['key-value'] : undefined;
};

export const toReachTxn = (txn: Transaction): WalletTransaction => {
    return { txn: Buffer.from(txn.toByte()).toString('base64') };
};

export const toReachTxnGroup = (txs: Transaction[]): WalletTransactionGroup => {
    const firstTxID = txs[0].txID();
    return {
        firstTxID,
        txns: txs.map(toReachTxn),
    };
};

export const parseTxs = (txs: WalletTransactionGroup[]): Transaction[][] => {
    return txs.map(({ txns }) => txns.map(({ txn }) => decodeUnsignedTransaction(Buffer.from(txn, 'base64'))));
};

export type TxnGroupsPostOptions = {
    inParallel?: boolean;
};

export const signAndPostTxnGroups = async (
    groups: WalletTransactionGroup[],
    opts: TxnGroupsPostOptions = {}
): Promise<string[]> => {
    const provider = await reach.getProvider();
    const algod = provider.algodClient;
    const ps = await algod.getTransactionParams().do();

    if (!window.algorand) {
        throw new Error('window.algorand is not defined, apparently wallet is not connected!');
    }

    // Optin aggregation
    const appIds = uniq(groups.flatMap(({ usedApps }) => usedApps ?? []));
    const tokens = uniq(groups.flatMap(({ usedAssets }) => usedAssets ?? [])).filter((id) => id !== 0);

    // TODO: I don't like how this window.algorand and provider are accessed separately and how here
    // it is disentangled from the effector app state. It should work without issue but it becomes entangled.
    const walletAddress = await provider.getDefaultAddress();
    const accountInfo = await getAccountInfo(walletAddress);
    const optinParameters = filterOutOptedIn(accountInfo, appIds, tokens);
    const optinTxs = prepareOptinTxs(walletAddress, ps, optinParameters);

    groups = [...optinTxs, ...groups];
    const signedTxns = await window.algorand.signTxns(groups.flatMap((g) => g.txns));

    let offset = 0;
    const signedGroups = [];
    for (const group of groups) {
        signedGroups.push({
            id: group.firstTxID,
            stxns: signedTxns.slice(offset, offset + group.txns.length),
        });
        offset += group.txns.length;
    }

    const postAndWait = async ({ id, stxns }: { id: string; stxns: string[] }) => {
        await window.algorand!.postTxns(stxns);
        const success = await withAlgodEncoding(algod, IntDecoding.DEFAULT, async (algod) => {
            return waitForConfirmation(algod, id, 3);
        });

        if (!success) {
            throw new Error(`Could not wait for confirmation of transaction ${id}`);
        }
        return id;
    };

    if (opts.inParallel) {
        return await Promise.all(signedGroups.map(postAndWait));
    } else {
        const sentTxIds = [];
        try {
            for (const sgroup of signedGroups) {
                sentTxIds.push(await postAndWait(sgroup));
            }
            return sentTxIds;
        } catch (error) {
            throw new SentTxError((error as Error).message, sentTxIds);
        }
    }
};

export const prepareOptinTxs = (
    address: string,
    ps: algosdk.SuggestedParams,
    { appIds, tokens }: { appIds?: AppId[]; tokens?: AssetId[] }
): WalletTransactionGroup[] => {
    let txns: Transaction[] = [];
    if (appIds !== undefined && appIds.length > 0) {
        txns = [...txns, ...appIds.map((appId) => makeApplicationOptInTxn(address, ps, appId))];
    }

    if (tokens !== undefined && tokens.length > 0) {
        txns = [
            ...txns,
            ...tokens.map((t) =>
                makeAssetTransferTxnWithSuggestedParamsFromObject({
                    from: address,
                    to: address,
                    amount: 0,
                    assetIndex: t,
                    suggestedParams: ps,
                })
            ),
        ];
    }

    if (txns.length === 0) {
        return [];
    }
    if (txns.length > 1) {
        txns = assignGroupID(txns);
    }

    const group = {
        firstTxID: txns[0].txID(),
        txns: txns.map(toReachTxn),
    };

    return [group];
};

export const manualBatchOptIn = async (
    account: Account,
    toOptin: { appId?: AppId; tokens?: AssetId[] }
): Promise<string[]> => {
    const provider = await reach.getProvider();
    const algod = provider.algodClient;
    const ps = await algod.getTransactionParams().do();
    const txGroups = prepareOptinTxs(account.networkAccount.addr, ps, toOptin);
    return signAndPostTxnGroups(txGroups);
};

/**
 * Sends TEAL to algo node for compilation
 * @param client Algodv2 client
 * @param tealSource TEAL program source
 * @returns Uint8Array of compiled TEAL
 */
export async function compileTeal(client: Algodv2, tealSource: string): Promise<Uint8Array> {
    const encoder = new TextEncoder();
    const programBytes = encoder.encode(tealSource);
    const compileResponse = await client.compile(programBytes).do();
    return new Uint8Array(Buffer.from(compileResponse.result, 'base64'));
}

export const fromSmallestUnits = (token: { decimals: number }, amount: Amount | null): number => {
    if (amount === null || amount === undefined) {
        return 0;
    }

    return Number(reach.formatWithDecimals(amount.toString(), token.decimals));
};

export const getSmallestUnits = (token: Asset, amount: number | null): Amount => {
    if (amount === null || Number.isNaN(amount)) {
        return BigInt(0);
    }

    return BigInt(Math.floor(amount * 10 ** token.decimals));
};

export function formatNumber(x: number) {
    if (x < 0.01) {
        return Math.floor(x * 1000) / 1000;
    }
    return x > 100 ? Math.floor(x) : Math.floor(x * 100) / 100;
}

export function algoexplorerTxLink(txId: string): string {
    return `https://${ALGONET === MAINNET ? '' : 'testnet.'}algoexplorer.io/tx/${txId}`;
}

export function algoexplorerContractLink(appId: AppId): string {
    return `https://${ALGONET === MAINNET ? '' : 'testnet.'}algoexplorer.io/application/${appId}`;
}

export function algoexplorerLink(type: string, id: AppId): string {
    return `https://${ALGONET === MAINNET ? '' : 'testnet.'}algoexplorer.io/${type}/${id}`;
}
