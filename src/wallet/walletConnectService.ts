import { SignClient } from '@walletconnect/sign-client';
import { WalletConnectModal } from '@walletconnect/modal';
import type { SessionTypes } from '@walletconnect/types';
import { ALGONET, MAINNET } from '../AppContext';

const WC_PROJECT_ID = 'bbdf45a3e6ca9f8da5738d7b854ff2c9';

const ALGORAND_CHAINS: Record<string, string> = {
    MainNet: 'algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73k',
    TestNet: 'algorand:SGO1GKSzyE7IEPItTxCByw9x8FmnrCDe',
};

const ALGORAND_CHAIN = ALGORAND_CHAINS[ALGONET] ?? ALGORAND_CHAINS.MainNet;

const REQUIRED_NAMESPACES = {
    algorand: {
        methods: ['algo_signTxn'],
        chains: [ALGORAND_CHAIN],
        events: [],
    },
};

interface PendingPairing {
    uri: string;
    approval: () => Promise<SessionTypes.Struct>;
    createdAt: number;
}

const PAIRING_MAX_AGE_MS = 4 * 60 * 1000; // Refresh before 5-min WC expiry

class WalletConnectService {
    private client: SignClient | null = null;
    private session: SessionTypes.Struct | null = null;
    private modal: WalletConnectModal | null = null;
    private pendingPairing: PendingPairing | null = null;
    private initPromise: Promise<SignClient> | null = null;

    constructor() {
        // Start SignClient init + pre-pairing immediately in background.
        // By the time the user clicks "Connect", client and URI should be ready.
        this.ensureClient().catch(() => {});
    }

    private async ensureClient(): Promise<SignClient> {
        if (this.client) return this.client;
        if (this.initPromise) return this.initPromise;

        this.initPromise = SignClient.init({
            projectId: WC_PROJECT_ID,
            relayUrl: 'wss://relay.walletconnect.com',
            metadata: {
                name: 'Cometa Farm',
                description: 'Algorand DeFi Platform',
                url: 'https://app.cometa.farm',
                icons: ['https://app.cometa.farm/favicon.ico'],
            },
        }).then(client => {
            this.client = client;
            void this.preparePairing();
            return client;
        }).catch(err => {
            this.initPromise = null; // Allow retry on next call
            throw err;
        });

        return this.initPromise;
    }

    private async preparePairing(): Promise<void> {
        if (!this.client) return;

        try {
            const { uri, approval } = await this.client.connect({
                requiredNamespaces: REQUIRED_NAMESPACES,
            });

            if (uri) {
                this.pendingPairing = { uri, approval, createdAt: Date.now() };
            }
        } catch (e) {
            console.warn('[WCS] Pre-pairing failed:', e);
        }
    }

    private getModal(): WalletConnectModal {
        // Re-create if previous modal was removed from DOM (cleanupWalletModals)
        if (this.modal && !document.querySelector('wcm-modal')) {
            this.modal = null;
        }

        if (!this.modal) {
            this.modal = new WalletConnectModal({
                projectId: WC_PROJECT_ID,
                themeMode: 'dark',
            });
        }

        return this.modal;
    }

    async connect(): Promise<string[]> {
        const client = await this.ensureClient();

        let uri: string;
        let approval: () => Promise<SessionTypes.Struct>;

        // Use pre-generated pairing if available and fresh
        if (this.pendingPairing && Date.now() - this.pendingPairing.createdAt < PAIRING_MAX_AGE_MS) {
            uri = this.pendingPairing.uri;
            approval = this.pendingPairing.approval;
            this.pendingPairing = null;
        } else {
            this.pendingPairing = null;
            const result = await client.connect({ requiredNamespaces: REQUIRED_NAMESPACES });
            if (!result.uri) throw new Error('Failed to generate WalletConnect URI');
            uri = result.uri;
            approval = result.approval;
        }

        const modal = this.getModal();
        let unsubscribe: (() => void) | undefined;

        // Ensure clean state before opening
        try { modal.closeModal(); } catch { /* may not be open */ }
        modal.openModal({ uri });

        try {
            this.session = await new Promise<SessionTypes.Struct>((resolve, reject) => {
                approval().then(resolve, reject);

                setTimeout(
                    () => reject(new Error('WalletConnect approval timed out after 180s')),
                    180_000
                );

                unsubscribe = modal.subscribeModal(({ open }: { open: boolean }) => {
                    if (!open) reject(new Error('User closed wallet connect modal'));
                });
            });

            return this.getAccountsFromSession(this.session);
        } finally {
            unsubscribe?.();
            modal.closeModal();
            void this.preparePairing();
        }
    }

    async reconnect(): Promise<string[]> {
        const client = await this.ensureClient();
        const sessions = client.session.getAll();

        const algorandSession = sessions.find(
            (s) => s.namespaces.algorand && s.expiry > Math.floor(Date.now() / 1000)
        );

        if (!algorandSession) {
            throw new Error('No active WalletConnect session');
        }

        this.session = algorandSession;
        return this.getAccountsFromSession(this.session);
    }

    async signTransaction(txns: Array<{ txn: string; signers?: string[] }>): Promise<(string | null)[]> {
        if (!this.client || !this.session) {
            throw new Error('Not connected. Call connect() first.');
        }

        const SIGN_TIMEOUT_MS = 120_000;
        const timeout = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('WalletConnect sign request timed out after 120s')), SIGN_TIMEOUT_MS)
        );

        return (await Promise.race([
            this.client.request({
                topic: this.session.topic,
                chainId: ALGORAND_CHAIN,
                request: {
                    method: 'algo_signTxn',
                    params: [txns],
                },
            }),
            timeout,
        ])) as (string | null)[];
    }

    async disconnect(): Promise<void> {
        if (this.client && this.session) {
            try {
                await this.client.disconnect({
                    topic: this.session.topic,
                    reason: { code: 6000, message: 'User disconnected' },
                });
            } catch { /* session may already be expired */ }
            this.session = null;
        }

        void this.preparePairing();
    }

    private getAccountsFromSession(session: SessionTypes.Struct): string[] {
        const accounts = session.namespaces.algorand?.accounts ?? [];
        return accounts.map((account) => {
            const parts = account.split(':');
            return parts[parts.length - 1];
        });
    }
}

export const walletConnectService = new WalletConnectService();
