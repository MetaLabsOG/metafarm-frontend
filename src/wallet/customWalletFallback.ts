import { Buffer } from 'buffer';
import algosdk from 'algosdk';
import { PeraWalletConnect } from '@perawallet/connect-beta';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
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

export type WalletType = 'WalletConnect' | 'WalletConnectDefly';
export type WalletFallbackOpts = any & { WalletConnect: PeraWalletConnect | DeflyWalletV2 };
export type ARC11_Wallet_Disconnectable = ARC11_Wallet & { disconnect: () => Promise<void> };
export type ARC11_Wallet_Exposed = ARC11_Wallet_Disconnectable & { _impl: PeraWalletConnect | DeflyWalletV2 };

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
        // Genesis params are static per network — skip the blocking algod call
        const genesisID = ALGONET === MAINNET ? 'mainnet-v1.0' : 'testnet-v1.0';
        const genesisHash = ALGONET === MAINNET
            ? 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8='
            : 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=';
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
    if (options.walletType === 'WalletConnect') {
        return walletFallback_WalletConnect(options);
    }
    if (options.walletType === 'WalletConnectDefly') {
        return walletFallback_WalletConnectDefly(options);
    }

    throw new TypeError(`Invalid wallet type: ${options.walletType}`);
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
                    const addrs = await innerWallet.reconnectSession();
                    if (addrs.length > 0) {
                        return addrs[0];
                    }
                } catch {
                    // Reconnect failed — will fall through to fresh connect
                }
            }

            const addrs = await innerWallet.connect();
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

            // Use index-based access: wallet returns one entry per txn in order.
            // Pre-signed txns keep their original stxn; others use wallet-signed value.
            return txns.map((wt, i) => wt.stxn ? wt.stxn : signedTxns[i]);
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

// Pre-create wallet instances at module load so SignClient.init() runs in background
// before the user clicks "Connect". This eliminates the 2-5s cold start delay.
let _peraInstance: PeraWalletConnect | null = null;
let _deflyInstance: DeflyWalletV2 | null = null;

function getPeraInstance(): PeraWalletConnect {
    if (!_peraInstance) {
        _peraInstance = new PeraWalletConnect({ projectId: WC_PROJECT_ID, network: PERA_NETWORK as any });
    }
    return _peraInstance;
}

function getDeflyInstance(): DeflyWalletV2 {
    if (!_deflyInstance) {
        _deflyInstance = new DeflyWalletV2({ projectId: WC_PROJECT_ID });
    }
    return _deflyInstance;
}

// --- Pera config cache ---
// The Pera SDK fetches https://wc.perawallet.app/config-staging.json with {cache:"no-store"}
// on EVERY connect() call, adding 200-3000ms of blocking network time.
// We pre-fetch it once at module load and intercept subsequent requests to return the cached copy.
const PERA_CONFIG_HOST = 'wc.perawallet.app/config';
let _peraConfigCached: string | null = null;

if (typeof window !== 'undefined') {
    const _nativeFetch = window.fetch.bind(window);
    window.fetch = function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
        if (_peraConfigCached) {
            const url = typeof input === 'string' ? input
                : input instanceof URL ? input.href
                : (input as Request).url;
            if (url.includes(PERA_CONFIG_HOST)) {
                return Promise.resolve(new Response(_peraConfigCached, {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                }));
            }
        }
        return _nativeFetch(input, init);
    } as typeof window.fetch;

    // Pre-fetch config immediately (before warm-up, before user interaction)
    _nativeFetch('https://wc.perawallet.app/config-staging.json')
        .then(r => r.ok ? r.text() : null)
        .then(text => { if (text) _peraConfigCached = text; })
        .catch(() => {});
}

// --- Relay WebSocket keepalive ---
// WC relay has an idle timeout (~60-300s). If the user clicks "Connect" after that,
// transportOpen() adds 500-1500ms. Keep-alive prevents this.
function keepRelayAlive(client: unknown): void {
    const relayer = (client as any)?.core?.relayer;
    if (!relayer) return;
    setInterval(async () => {
        try {
            if (!relayer.connected) {
                await relayer.transportOpen();
            }
        } catch { /* ignore */ }
    }, 25_000);
}

// --- Warm-up ---
// Initialize both SignClients and pre-open relay WebSockets in parallel.
// reconnectSession() triggers createClient() internally (the PeraWalletConnect constructor's
// DOMContentLoaded listener has already fired by now, so client stays null without this call).
if (typeof window !== 'undefined') {
    const warmUpPera = async () => {
        const pera = getPeraInstance();
        await pera.reconnectSession().catch(() => {});
        if (pera.client) {
            await (pera.client as any).core?.relayer?.transportOpen?.().catch(() => {});
            keepRelayAlive(pera.client);
        }
    };

    const warmUpDefly = async () => {
        const defly = getDeflyInstance();
        await defly.reconnectSession().catch(() => {});
        const client = defly.getClient();
        if (client) {
            await (client as any).core?.relayer?.transportOpen?.().catch(() => {});
            keepRelayAlive(client);
        }
    };

    // Start ASAP — setTimeout(0) defers to after current task (initial render) completes
    setTimeout(() => void Promise.allSettled([warmUpPera(), warmUpDefly()]), 0);
}

// Reset wallet instance after disconnect so next connect gets a fresh session
export function resetPeraInstance(): void {
    _peraInstance = null;
}

export function resetDeflyInstance(): void {
    _deflyInstance = null;
}

const walletFallback_WalletConnect = (opts: object) =>
    walletFallback_PeraOrDefly(getPeraInstance(), opts);

const walletFallback_WalletConnectDefly = (opts: object) =>
    walletFallback_PeraOrDefly(getDeflyInstance(), opts);
