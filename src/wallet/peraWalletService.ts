import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';
import { Buffer } from 'buffer';

import { ALGONET, MAINNET } from '../AppContext';
import type { WalletTransaction } from '../types';

// Pera connects over WalletConnect v1 on Pera's own bridge servers — NOT the
// generic WC v2 relay used by walletConnectService.ts. Pera's mobile app no
// longer reliably handles a raw WC v2 session proposal (it freezes / shows
// "App is not responding"), while it works flawlessly through this native SDK,
// which is what every other Algorand dApp uses. Defly stays on raw WC v2 (it
// handles the proposal fine); only Pera is routed here.
//
// @perawallet/connect is pinned to 1.3.5 — the last release whose algosdk peer
// dependency is ^2.1.0 (1.4.0+ requires algosdk v3, which conflicts with the
// Reach stdlib pinning algosdk v2). At runtime 1.3.5 calls only
// algosdk.encodeUnsignedTransaction, present and identical in our algosdk 2.11.0.

// Pera chain IDs: 416001 = MainNet, 416002 = TestNet.
const PERA_CHAIN_ID = ALGONET === MAINNET ? 416001 : 416002;

// Module-level singleton — the Pera SDK requires exactly one instance per app.
export const peraWallet = new PeraWalletConnect({ chainId: PERA_CHAIN_ID });

// The connected address, captured on connect/reconnect. signTransaction needs it
// as the signerAddress hint: in @perawallet/connect@1.3.5 the per-txn signers:[]
// skip marker is only honored when this address is passed, so without it Pera
// would try to sign the pre-signed lsig slots in a mixed Reach group.
let connectedAddress: string | null = null;

export async function peraConnect(): Promise<string[]> {
    const accounts = await peraWallet.connect();
    connectedAddress = accounts[0] ?? null;
    return accounts;
}

export async function peraReconnect(): Promise<string[]> {
    const accounts = await peraWallet.reconnectSession();
    connectedAddress = accounts[0] ?? null;
    return accounts;
}

export async function peraDisconnect(): Promise<void> {
    connectedAddress = null;
    await peraWallet.disconnect();
}

export async function peraSignTxns(txns: WalletTransaction[]): Promise<string[]> {
    if (!connectedAddress) {
        throw new Error('Pera wallet is not connected');
    }
    const signer = connectedAddress;

    // Reach hands us a flat ARC-0025 group: each .txn is a base64 unsigned txn,
    // and .stxn (when present) is a pre-signed slot (e.g. an lsig txn) we must NOT
    // re-sign. Pera's signTransaction wants algosdk.Transaction objects, so decode
    // each one — the same call Reach itself uses on this format. signers:[signer]
    // tells Pera to sign; signers:[] tells it to skip that slot.
    const group = txns.map((wt) => {
        const txn = algosdk.decodeUnsignedTransaction(Buffer.from(wt.txn, 'base64'));
        return wt.stxn ? { txn, signers: [] as string[] } : { txn, signers: [signer] };
    });

    // Pera returns ONLY the signed (non-skipped) txns, compacted in original order.
    // Walk the original group and pull the next signed result for each slot we
    // asked Pera to sign; pass pre-signed slots through unchanged.
    const signed = await peraWallet.signTransaction([group], signer);

    return txns.map((wt) => {
        if (wt.stxn) return wt.stxn;
        const bytes = signed.shift();
        if (!bytes) {
            throw new Error('Pera returned no signature for a transaction it was asked to sign');
        }
        return Buffer.from(bytes).toString('base64');
    });
}
