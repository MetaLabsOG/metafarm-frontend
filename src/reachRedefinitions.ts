import algosdk from 'algosdk';

import { loadStdlib } from '@reach-sh/stdlib';
import * as RHC from '@reach-sh/stdlib/ALGO_ReachHTTPClient';

import { NonRedundantHTTPClient } from './httpClient';

import {
    Provider,
    Address,
    WalletTransaction,
    ReachStdlib,
    ARC11_Wallet,
    EnableOpts,
    EnableNetworkResult,
    EnableAccountsResult,
} from './types';

/**
 * Lots of copy-paste from Reach here, but this allows us to easily
 * do customizations of the Reach functionality which simply does not
 * fucking work
 */

const localhostProviderEnv = {
    ALGO_SERVER: 'http://localhost',
    ALGO_PORT: '4180',
    ALGO_TOKEN: 'c87f5580d7a866317b4bfe9e8b8d1dda955636ccebfa88c12b414db208dd9705',
    ALGO_INDEXER_SERVER: 'http://localhost',
    ALGO_INDEXER_PORT: '8980',
    ALGO_INDEXER_TOKEN: 'reach-devnet',
    REACH_ISOLATED_NETWORK: 'yes',
    ALGO_NODE_WRITE_ONLY: 'no',
};

function truthyEnv(v: string | undefined | null): v is string {
    if (!v) return false;
    return !['0', 'false', 'f', '#f', 'no', 'off', 'n', ''].includes(v && v.toLowerCase && v.toLowerCase());
}

function envDefaultsALGO(env: any) {
    return { ...localhostProviderEnv, ...env };
}

// These two functions allow us to use PureStake API with Reach without issue
export function indexerFromEnv(env: any): [algosdk.BaseHTTPClient, algosdk.Indexer] {
    const { ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT, ALGO_INDEXER_TOKEN } = env;
    const port = ALGO_INDEXER_PORT || undefined; // UTBC checks for undefined
    const token =
        typeof ALGO_INDEXER_TOKEN === 'string' ? { 'X-Indexer-API-Token': ALGO_INDEXER_TOKEN } : ALGO_INDEXER_TOKEN;

    const utbc = new NonRedundantHTTPClient(token, ALGO_INDEXER_SERVER, port);
    const rhc = new RHC.ReachHTTPClient(utbc, 'indexer', async (e) => {});
    return [rhc, new algosdk.Indexer(rhc)];
}

export function algodClientFromEnv(env: any): [algosdk.BaseHTTPClient, algosdk.Algodv2] {
    const { ALGO_SERVER, ALGO_PORT, ALGO_TOKEN } = env;
    const port = ALGO_PORT || undefined; // UTBC checks for undefiend
    const token = typeof ALGO_TOKEN === 'string' ? { 'X-Algo-API-Token': ALGO_TOKEN } : ALGO_TOKEN;

    const utbc = new NonRedundantHTTPClient(token, ALGO_SERVER, port);
    const rhc = new RHC.ReachHTTPClient(utbc, 'algodv2', async (e) => {});
    return [rhc, new algosdk.Algodv2(rhc)];
}

/**
 * This redefinition allows us to redefine `getProvider` properly, and it also allows us to make
 * a provider synchronously (e.g. to make a default provider and reuse algod client and indexer in `AppContext`)
 */
export function makeProviderByEnv(env: any): Provider {
    const fullEnv = envDefaultsALGO(env);
    const [algod_bc, algodClient] = algodClientFromEnv(fullEnv);
    const [indexer_bc, indexer] = indexerFromEnv(fullEnv);
    const isIsolatedNetwork = truthyEnv(fullEnv.REACH_ISOLATED_NETWORK);
    const nodeWriteOnly = truthyEnv(fullEnv.ALGO_NODE_WRITE_ONLY);
    const errmsg = (s: string) =>
        `Providers created by environment ${s}. Calling setProviderByEnv or setProviderByName removes this capability. Try removing calls to those functions.`;

    const getDefaultAddress = async (): Promise<Address> => {
        throw new Error(errmsg(`do not have default addresses`));
    };

    const signAndPostTxns = async (txns: WalletTransaction[], opts?: object) => {
        void opts;
        const stxns = txns.map((txn) => {
            if (txn.stxn) {
                return txn.stxn;
            }
            throw new Error(errmsg(`cannot interactively sign`));
        });
        const bs = stxns.map((stxn) => Buffer.from(stxn, 'base64'));
        await algodClient.sendRawTransaction(bs).do();
    };

    return {
        algod_bc,
        indexer_bc,
        algodClient,
        indexer,
        nodeWriteOnly,
        isIsolatedNetwork,
        getDefaultAddress,
        signAndPostTxns,
    };
}

/**
 * This is fully a copy-paste from reach stdlib, to enable redefinition of `getProvider`.
 * Could be modified later if we'll want to support some CUSTOM wallet features though.
 * @param wallet
 * @param env
 * @returns
 */
export const makeProviderByWallet = async (wallet: ARC11_Wallet, env: any): Promise<Provider> => {
    const defaults = { REACH_ISOLATED_NETWORK: 'no', ALGO_NODE_WRITE_ONLY: 'yes' }; // pessimistic

    const allEnv = { ...defaults, ...env, ...(wallet._env || {}) }; // rightmost is preferred
    const { ALGO_GENESIS_ID, ALGO_GENESIS_HASH, ALGO_ACCOUNT } = env;
    const { REACH_ISOLATED_NETWORK, ALGO_NODE_WRITE_ONLY } = allEnv;
    const walletOpts: EnableOpts = {
        genesisID: ALGO_GENESIS_ID || undefined,
        genesisHash: ALGO_GENESIS_HASH || undefined,
        accounts: ALGO_ACCOUNT ? [ALGO_ACCOUNT] : undefined,
    };
    const isIsolatedNetwork = truthyEnv(REACH_ISOLATED_NETWORK);
    const nodeWriteOnly = truthyEnv(ALGO_NODE_WRITE_ONLY);
    let enabledNetwork: EnableNetworkResult | undefined;
    let enabledAccounts: EnableAccountsResult | undefined;
    if (wallet.enableNetwork === undefined && wallet.enableAccounts === undefined) {
        const enabled = await wallet.enable(walletOpts);
        enabledNetwork = enabled;
        enabledAccounts = enabled;
    } else if (wallet.enableNetwork === undefined || wallet.enableAccounts === undefined) {
        throw new Error('must have enableNetwork AND enableAccounts OR neither');
    } else {
        enabledNetwork = await wallet.enableNetwork(walletOpts);
    }
    void enabledNetwork;
    const algod_bc = await wallet.getAlgodv2Client();
    const indexer_bc = await wallet.getIndexerClient();
    const algodClient = new algosdk.Algodv2(algod_bc);
    const indexer = new algosdk.Indexer(indexer_bc);
    const getDefaultAddress = async (): Promise<Address> => {
        if (enabledAccounts === undefined) {
            if (wallet.enableAccounts === undefined) {
                throw new Error('impossible: no wallet.enableAccounts');
            }
            enabledAccounts = await wallet.enableAccounts(walletOpts);
            if (enabledAccounts === undefined) {
                throw new Error('Could not enable accounts');
            }
        }
        return enabledAccounts.accounts[0];
    };
    const signAndPostTxns = wallet.signAndPostTxns;
    return {
        algod_bc,
        indexer_bc,
        indexer,
        algodClient,
        nodeWriteOnly,
        getDefaultAddress,
        isIsolatedNetwork,
        signAndPostTxns,
    };
};

/**
 * This redefinition allows us to RESET the provider, enabling LOTS OF STUFF
 */
function actuallyReplaceableThunk<T>(thunk: () => T): [() => T, (val: T) => void, () => void] {
    let called = false;
    let res: T | null = null;
    function get(): T {
        if (!called) {
            called = true;
            res = thunk();
        }
        return res as T;
    }
    function set(val: T): void {
        // Do NOT throw is res is already set!
        res = val;
        called = true;
    }
    function clear(): void {
        res = null;
        called = false;
    }
    return [get, set, clear];
}

const [getProvider, setProvider, clearProvider] = actuallyReplaceableThunk(async () => {
    if (window.algorand) {
        return await makeProviderByWallet(window.algorand as ARC11_Wallet, process.env);
    } else {
        return makeProviderByEnv(process.env);
    }
});

export function loadStdlibShimmed(env: any): ReachStdlib {
    const lib = loadStdlib(env);
    lib.getProvider = getProvider;
    lib.setProvider = setProvider;
    return { ...lib, clearProvider };
}
