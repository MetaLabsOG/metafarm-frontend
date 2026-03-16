import { Buffer } from 'buffer';
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
import { walletConnectService } from './walletConnectService';

export type WalletType = 'WalletConnect' | 'WalletConnectDefly';
export type ARC11_Wallet_Disconnectable = ARC11_Wallet & { disconnect: () => Promise<void> };

/**
 * Reach ARC-11 integration layer.
 * Wraps getAddr/signTxns into the wallet interface that Reach stdlib expects.
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
        return {};
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
    if (options.walletType === 'WalletConnect' || options.walletType === 'WalletConnectDefly') {
        return walletFallback_WC(options);
    }

    throw new TypeError(`Invalid wallet type: ${options.walletType}`);
};

/**
 * Unified WalletConnect v2 fallback for both Pera and Defly.
 * Uses a single shared SignClient with pre-generated pairing URI
 * so the QR code appears instantly on click.
 */
const walletFallback_WC = (options: object) => (): ARC11_Wallet_Disconnectable => {
    const getAddr = async (): Promise<string> => {
        // Try reconnecting to an existing session first
        try {
            const addrs = await walletConnectService.reconnect();
            if (addrs.length > 0) return addrs[0];
        } catch {
            // No active session — will show QR modal
        }

        const addrs = await walletConnectService.connect();
        return addrs[0];
    };

    const signTxns = async (txns: WalletTransaction[]): Promise<string[]> => {
        // ARC-0025 format: base64 txn strings sent directly (no decode needed)
        const wcTxns = txns.map((wt) =>
            wt.stxn
                ? { txn: wt.txn, signers: [] as string[] }
                : { txn: wt.txn }
        );

        const signedArray = await walletConnectService.signTransaction(wcTxns);

        return txns.map((wt, i) => {
            if (wt.stxn) return wt.stxn;
            const signed = signedArray[i];
            if (!signed) throw new Error(`Wallet returned null for unsigned transaction at index ${i}`);
            return signed;
        });
    };

    return doCustomWalletFallback(
        options,
        getAddr,
        signTxns,
        () => walletConnectService.disconnect()
    );
};
