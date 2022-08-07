import { Buffer } from 'buffer';
import algosdk from 'algosdk';
import { PeraWalletConnect } from '@perawallet/connect';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import type {
    ARC11_Wallet,
    EnableOpts,
    EnableNetworkResult,
    Provider,
    EnableAccountsOpts,
    EnableAccountsResult,
    EnableResult,
    WalletTransaction,
} from '../types';

import { makeProviderByEnv } from '../reachRedefinitions';
import { reach } from '../AppContext';

export type WalletType = 'MyAlgo' | 'WalletConnect';
export type WalletFallbackOpts = any & ({ MyAlgoConnect: MyAlgoConnect } | { WalletConnect: PeraWalletConnect });
export type ARC11_Wallet_Disconnectable = ARC11_Wallet & { disconnect: () => Promise<void> };
export type ARC11_Wallet_Exposed = ARC11_Wallet_Disconnectable & { _impl: MyAlgoConnect | PeraWalletConnect };

/**
 * Another copypaste from Reach, but here we fix a bunch of stuff
 * @param opts
 * @param getAddr
 * @param signTxns_
 * @returns
 */
export const doCustomWalletFallback = (
    options: any,
    getAddr: () => Promise<string>,
    signTxns_: (txns: WalletTransaction[]) => Promise<string[]>,

    disconnect: () => Promise<void> = async () => {}
): ARC11_Wallet_Disconnectable => {
    let p: Provider | undefined;
    const base = options.providerEnv || 'LocalHost';
    const _env = typeof base === 'string' ? reach.providerEnvByName(base) : base;
    const enableNetwork = async (eopts?: EnableOpts): Promise<EnableNetworkResult> => {
        p = makeProviderByEnv(_env);
        const { genesisID, genesisHash } = await p.algodClient.getTransactionParams().do();
        const returnValue = { genesisID, genesisHash };
        return returnValue;
    };
    const enableAccounts = async (eopts?: EnableAccountsOpts): Promise<EnableAccountsResult> => {
        const addr = await getAddr();
        return { accounts: [addr] };
    };
    const enable = async (eopts?: object): Promise<EnableResult> => {
        const nres = await enableNetwork(eopts);
        const ares = await enableAccounts(eopts);
        return { ...nres, ...ares };
    };
    const getAlgodv2Client = async () => {
        if (!p) {
            throw new Error(`must call enable`);
        }
        return p.algod_bc;
    };
    const getIndexerClient = async () => {
        if (!p) {
            throw new Error(`must call enable`);
        }
        return p.indexer_bc;
    };
    const signTxns = async (txns: WalletTransaction[], sopts?: object) => {
        void sopts;
        return signTxns_(txns);
    };
    const postTxns = async (stxns: string[], popts?: object) => {
        if (!p) {
            throw new Error(`must call enable`);
        }
        void popts;
        const bs = stxns.map((stxn) => Buffer.from(stxn, 'base64'));
        await p.algodClient.sendRawTransaction(bs).do();
        return {}; // TODO
    };
    const signAndPostTxns = async (txns: WalletTransaction[], spopts?: object) => {
        const stxns = await signTxns(txns, spopts);
        return postTxns(stxns, spopts);
    };
    return {
        _env,
        enable,
        enableNetwork,
        enableAccounts,
        getAlgodv2Client,
        getIndexerClient,
        signTxns,
        postTxns,
        signAndPostTxns,
        disconnect,
    };
};

export const customWalletFallback = (options: any & { walletType: WalletType }) => {
    if (options.walletType === 'MyAlgo') {
        return walletFallback_MyAlgoWallet(options);
    }
    if (options.walletType === 'WalletConnect') {
        return walletFallback_WalletConnect(options);
    }

    throw new TypeError(`Invalid wallet type: ${options.walletType}`);
};

const walletFallback_MyAlgoWallet = (options: object) => (): ARC11_Wallet_Exposed => {
    if (!window.Buffer) window.Buffer = Buffer;

    const LOCAL_STORAGE_KEY = 'MyAlgoConnect_addr';
    const mac: any = new MyAlgoConnect();

    const getAddr = async (): Promise<string> => {
        const savedAddr = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedAddr !== null) {
            return savedAddr;
        }

        const accts = await mac.connect({ shouldSelectOneAccount: true });
        const addr = accts[0].address;
        localStorage.setItem(LOCAL_STORAGE_KEY, addr);
        return addr;
    };
    const signTxns = async (txns: WalletTransaction[]): Promise<string[]> => {
        const toSign = txns.filter(({ stxn }) => !stxn).map(({ txn }) => txn);
        const signedTxns: Array<{ blob: Uint8Array }> = await mac.signTransaction(toSign);
        return txns.reduce((allStxns: string[], { stxn }) => {
            allStxns.push(
                stxn ? stxn : Buffer.from((signedTxns.shift() as { blob: Uint8Array }).blob).toString('base64')
            );
            return allStxns;
        }, []);
    };
    const wallet = doCustomWalletFallback(options, getAddr, signTxns, async () => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    });
    return { ...wallet, _impl: mac };
};

const walletFallback_WalletConnect = (options: object) => (): ARC11_Wallet_Exposed => {
    const peraWallet = new PeraWalletConnect();

    const getAddr = async (): Promise<string> => {
        let addrs;
        try {
            addrs = await peraWallet.reconnectSession();
            if (addrs.length === 0) {
                throw new Error('could not reconnect');
            }
        } catch {
            addrs = await peraWallet.connect();
        }
        return addrs[0];
    };

    const signTxns = async (txns: WalletTransaction[]): Promise<string[]> => {
        const peraTxns = txns.map((wt) => {
            const txn = algosdk.decodeUnsignedTransaction(Buffer.from(wt.txn, 'base64'));
            return wt.stxn ? { txn, signers: [] } : { txn };
        });

        const signedTxns: string[] = await peraWallet
            .signTransaction([peraTxns])
            .then((stxns) => stxns.map((stxn) => Buffer.from(stxn).toString('base64')));

        return txns.reduce((allStxns: string[], { stxn }) => {
            allStxns.push(stxn ? stxn : signedTxns.shift()!);
            return allStxns;
        }, []);
    };

    const wallet = doCustomWalletFallback(options, getAddr, signTxns, async () => {
        const dc = peraWallet.disconnect();
        if (dc) {
            await dc;
        }
    });
    return { ...wallet, _impl: peraWallet };
};
