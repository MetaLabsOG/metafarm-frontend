import { Buffer } from 'buffer';
import algosdk from 'algosdk';
import { PeraWalletConnect } from '@perawallet/connect-beta';
import { ALGO_MyAlgoConnect as MyAlgoConnect, ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import { DeflyWalletV2 } from './deflyWalletV2';
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
import { reach, ALGONET, MAINNET } from '../AppContext';

export type WalletType = 'MyAlgo' | 'WalletConnect' | 'WalletConnectDefly';
export type WalletFallbackOpts = any & ({ MyAlgoConnect: MyAlgoConnect } | { WalletConnect: PeraWalletConnect | DeflyWalletV2 });
export type ARC11_Wallet_Disconnectable = ARC11_Wallet & { disconnect: () => Promise<void> };
export type ARC11_Wallet_Exposed = ARC11_Wallet_Disconnectable & { _impl: MyAlgoConnect | PeraWalletConnect | DeflyWalletV2 };

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
        return { genesisID, genesisHash };
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
    if (options.walletType === 'WalletConnectDefly') {
        return walletFallback_WalletConnectDefly(options);
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

const walletFallback_PeraOrDefly =
    (innerWallet: PeraWalletConnect | DeflyWalletV2, options: object) => (): ARC11_Wallet_Exposed => {
        const getAddr = async (): Promise<string> => {
            // Check if there's a persisted session worth reconnecting to.
            // Skip reconnect for fresh connections — saves 1-3 seconds of WC client init.
            const hasPersistedSession = localStorage.getItem('PeraWallet.Wallet') !== null
                || Object.keys(localStorage).some(k => k.startsWith('wc@2:'));

            if (hasPersistedSession) {
                try {
                    console.log('[Wallet] Persisted session found, attempting reconnect...');
                    const addrs = await innerWallet.reconnectSession();
                    if (addrs.length > 0) {
                        console.log('[Wallet] Reconnected:', addrs[0]);
                        return addrs[0];
                    }
                } catch (e) {
                    console.log('[Wallet] Reconnect failed:', e);
                }
            }

            console.log('[Wallet] Calling connect()...');
            const addrs = await innerWallet.connect();
            console.log('[Wallet] Connected:', addrs[0]);
            return addrs[0];
        };

        const signTxns = async (txns: WalletTransaction[]): Promise<string[]> => {
            const peraTxns = txns.map((wt) => {
                const txn = algosdk.decodeUnsignedTransaction(Buffer.from(wt.txn, 'base64'));
                return wt.stxn ? { txn, signers: [] } : { txn };
            });

            const signedTxns: string[] = await innerWallet
                .signTransaction([peraTxns])
                .then((stxns) => stxns.map((stxn) => Buffer.from(stxn).toString('base64')));

            return txns.reduce((allStxns: string[], { stxn }) => {
                allStxns.push(stxn ? stxn : signedTxns.shift()!);
                return allStxns;
            }, []);
        };

        const wallet = doCustomWalletFallback(options, getAddr, signTxns, async () => {
            const dc = innerWallet.disconnect();
            if (dc) {
                await dc;
            }
        });
        return { ...wallet, _impl: innerWallet };
    };

const WC_PROJECT_ID = 'bbdf45a3e6ca9f8da5738d7b854ff2c9';

const PERA_NETWORK = ALGONET === MAINNET ? 'mainnet' : 'testnet';

const walletFallback_WalletConnect = (opts: object) =>
    walletFallback_PeraOrDefly(new PeraWalletConnect({ projectId: WC_PROJECT_ID, network: PERA_NETWORK as any }), opts);

const walletFallback_WalletConnectDefly = (opts: object) =>
    walletFallback_PeraOrDefly(new DeflyWalletV2({ projectId: WC_PROJECT_ID }), opts);
