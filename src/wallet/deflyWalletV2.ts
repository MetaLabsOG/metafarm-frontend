import { SignClient } from '@walletconnect/sign-client';
import { WalletConnectModal } from '@walletconnect/modal';
import { SessionTypes } from '@walletconnect/types';
import { Buffer } from 'buffer';
import { ALGONET } from '../AppContext';

// Algorand CAIP-2 chain identifiers (first 32 bytes of genesis hash, base64)
const ALGORAND_CHAINS: Record<string, string> = {
    MainNet: 'algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73k',
    TestNet: 'algorand:SGO1GKSzyE7IEPItTxCByw9x8FmnrCDe',
};

const ALGORAND_CHAIN = ALGORAND_CHAINS[ALGONET] ?? ALGORAND_CHAINS.MainNet;

export interface SignerTransaction {
    txn: import('algosdk').Transaction;
    signers?: string[];
}

interface DeflyWalletV2Options {
    projectId: string;
}

/**
 * WalletConnect v2 adapter for Defly Wallet.
 * Provides the same API shape as @blockshake/defly-connect (connect, reconnectSession,
 * signTransaction, disconnect) but uses WC v2 sign-client under the hood.
 */
export class DeflyWalletV2 {
    private client: InstanceType<typeof SignClient> | null = null;
    private session: SessionTypes.Struct | null = null;
    private modal: WalletConnectModal | null = null;
    private readonly projectId: string;

    constructor(options: DeflyWalletV2Options) {
        this.projectId = options.projectId;
    }

    /** Expose the underlying SignClient for relay warm-up / keepalive. */
    getClient(): InstanceType<typeof SignClient> | null {
        return this.client;
    }

    private async initClient(): Promise<InstanceType<typeof SignClient>> {
        if (this.client) return this.client;

        this.client = await SignClient.init({
            projectId: this.projectId,
            relayUrl: 'wss://relay.walletconnect.com',
            metadata: {
                name: 'Cometa Farm',
                description: 'Algorand DeFi Platform',
                url: 'https://app.cometa.farm',
                icons: ['https://app.cometa.farm/favicon.ico'],
            },
        });

        return this.client;
    }

    private getModal(): WalletConnectModal {
        if (this.modal) return this.modal;

        this.modal = new WalletConnectModal({
            projectId: this.projectId,
            themeMode: 'dark',
        });

        return this.modal;
    }

    async connect(): Promise<string[]> {
        console.log('[Defly] Initializing WC v2 client...');
        const client = await this.initClient();
        console.log('[Defly] Client ready, creating connection...');
        const modal = this.getModal();

        const { uri, approval } = await client.connect({
            requiredNamespaces: {
                algorand: {
                    methods: ['algo_signTxn'],
                    chains: [ALGORAND_CHAIN],
                    events: [],
                },
            },
        });

        if (!uri) {
            throw new Error('Failed to generate WalletConnect URI');
        }

        modal.openModal({ uri });

        try {
            const APPROVAL_TIMEOUT_MS = 180_000;
            const approvalTimeout = new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('WalletConnect approval timed out after 180s')), APPROVAL_TIMEOUT_MS)
            );
            this.session = await Promise.race([approval(), approvalTimeout]);
            return this.getAccountsFromSession(this.session);
        } finally {
            modal.closeModal();
        }
    }

    async reconnectSession(): Promise<string[]> {
        const client = await this.initClient();
        const sessions = client.session.getAll();

        // Find an active Algorand session
        const algorandSession = sessions.find(
            (s) => s.namespaces.algorand && s.expiry > Math.floor(Date.now() / 1000)
        );

        if (!algorandSession) {
            throw new Error('No active Defly session found');
        }

        this.session = algorandSession;
        return this.getAccountsFromSession(this.session);
    }

    async signTransaction(txGroups: SignerTransaction[][], signerAddress?: string): Promise<Uint8Array[]> {
        if (!this.client || !this.session) {
            throw new Error('Not connected. Call connect() first.');
        }

        // Convert SignerTransaction[][] to WC v2 algo_signTxn params
        // ARC-0025 format: array of arrays of { txn: base64, signers?: string[] }
        const wcTxns = txGroups.flatMap((group) =>
            group.map((st) => {
                const txnBase64 = Buffer.from(st.txn.toByte()).toString('base64');
                if (st.signers && st.signers.length === 0) {
                    // This txn should NOT be signed by the wallet (it's pre-signed or for another signer)
                    return { txn: txnBase64, signers: [] };
                }
                if (signerAddress) {
                    return { txn: txnBase64, signers: [signerAddress] };
                }
                return { txn: txnBase64 };
            })
        );

        // client.request returns the JSON-RPC result directly: (string | null)[]
        const SIGN_TIMEOUT_MS = 120_000;
        const timeout = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('WalletConnect sign request timed out after 120s')), SIGN_TIMEOUT_MS)
        );
        const signedArray = (await Promise.race([
            this.client.request({
                topic: this.session.topic,
                chainId: ALGORAND_CHAIN,
                request: {
                    method: 'algo_signTxn',
                    params: [wcTxns],
                },
            }),
            timeout,
        ])) as (string | null)[];

        return signedArray.map((stxn) => {
            if (!stxn) return new Uint8Array();
            return new Uint8Array(Buffer.from(stxn, 'base64'));
        });
    }

    async disconnect(): Promise<void> {
        if (this.client && this.session) {
            await this.client.disconnect({
                topic: this.session.topic,
                reason: { code: 6000, message: 'User disconnected' },
            });
            this.session = null;
        }
    }

    private getAccountsFromSession(session: SessionTypes.Struct): string[] {
        const accounts = session.namespaces.algorand?.accounts ?? [];
        // Account format: "algorand:chainRef:address"
        return accounts.map((account) => {
            const parts = account.split(':');
            return parts[parts.length - 1];
        });
    }
}
