import { SignClient } from '@walletconnect/sign-client';
import { WalletConnectModal } from '@walletconnect/modal';
import { ALGONET, MAINNET } from '../AppContext';
import { isAndroidDevice, isMobileWalletDevice } from './deviceDetection';

// Minimal structural type for the WC v2 session fields we use. We deliberately
// do NOT import SessionTypes from '@walletconnect/types': Reach stdlib pulls WC
// v1 (@walletconnect/client), which hoists @walletconnect/types@1.8.0 to the top
// level — and v1 has no SessionTypes export, so the import silently fails type
// checking (masked by TSC_COMPILE_ON_ERROR). sign-client's own nested v2 session
// objects satisfy this shape structurally.
type WCSession = {
    topic: string;
    expiry: number;
    namespaces: Record<string, { accounts?: string[]; methods?: string[]; events?: string[] } | undefined>;
};

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

// Sent alongside requiredNamespaces. Today's Pera (iOS WalletConnectSwiftV2 1.9.9,
// Android custom SDK) reads requiredNamespaces, so this is a no-op for current
// wallets — but it is harmless on sign-client 2.20.3 (both fields are forwarded
// verbatim, no auto-migration) and forward-compatible if a wallet later flips to
// reading optionalNamespaces.
const OPTIONAL_NAMESPACES = REQUIRED_NAMESPACES;

export type WalletTarget = 'pera' | 'defly';

// Deep link schemes per wallet per platform.
// iOS: wallet-specific scheme wrapping the WC URI.
// Android: raw WC URI — the OS routes it via intent filters.
// Source: @perawallet/connect src/util/peraWalletUtils.ts
function getWalletDeepLink(wallet: WalletTarget, wcUri: string): string {
    if (isAndroidDevice()) return wcUri;
    const scheme = wallet === 'pera' ? 'perawallet-wc://' : 'defly-wc://';
    return `${scheme}wc?uri=${encodeURIComponent(wcUri)}`;
}

function getWalletScheme(wallet: WalletTarget): string {
    if (isAndroidDevice()) return wallet === 'pera' ? 'algorand://' : 'defly://';
    return wallet === 'pera' ? 'perawallet-wc://' : 'defly-wc://';
}

interface PendingPairing {
    uri: string;
    approval: () => Promise<WCSession>;
    createdAt: number;
}

const PAIRING_MAX_AGE_MS = 4 * 60 * 1000; // Refresh before 5-min WC expiry

// On iOS Safari the relay WebSocket is suspended while the user confirms in the
// wallet app. When the tab returns to visible state and the relayer reports it
// is disconnected, poke it to reopen its transport so pending approvals and
// sign responses actually arrive. SDK heartbeat does this on its own every 5s;
// we just make the reaction immediate on tab-return.
//
// Two wake signals:
//  - visibilitychange → visible: covers app-switch return from deep-linked wallet.
//  - pageshow with event.persisted: covers Safari bfcache restore (swipe-back);
//    pageshow fires on every navigation, so without the persisted check we'd
//    no-op-spam on normal page loads.
function installRelayerWakeListeners(client: SignClient): () => void {
    const relayer = (client as any).core?.relayer;
    const wake = () => {
        if (typeof document === 'undefined' || document.visibilityState !== 'visible') return;
        // NB: do NOT also skip on relayer.connected — that getter reads
        // socket.readyState===1 directly, which stays OPEN for ~5s after iOS WK
        // WebView suspends the backgrounded tab (until the SDK heartbeat marks the
        // socket dead). Skipping there left the transport NOT reopened in exactly
        // the window when Pera's approval / session_settle arrives, dropping the
        // response and producing Pera's "dApp is not responding, scan new QR".
        // restartTransport is idempotent (guards concurrent attempts itself) and
        // these listeners live only for the duration of an active connect/sign,
        // so reopening unconditionally on tab-return is safe.
        if (!relayer) return;
        try {
            const p = relayer.restartTransport?.();
            if (p && typeof p.catch === 'function') {
                p.catch((e: unknown) => console.warn('[WCS] restartTransport rejected:', e));
            }
        } catch (e) {
            console.warn('[WCS] restartTransport threw:', e);
        }
    };
    const onPageShow = (e: PageTransitionEvent) => {
        if (e.persisted) wake();
    };
    document.addEventListener('visibilitychange', wake);
    window.addEventListener('pageshow', onPageShow);
    return () => {
        document.removeEventListener('visibilitychange', wake);
        window.removeEventListener('pageshow', onPageShow);
    };
}

class WalletConnectService {
    private client: SignClient | null = null;
    private session: WCSession | null = null;
    private modal: WalletConnectModal | null = null;
    private pendingPairing: PendingPairing | null = null;
    private initPromise: Promise<SignClient> | null = null;
    private walletTarget: WalletTarget | null = null;

    constructor() {
        // Start SignClient init + pre-pairing immediately in background.
        // By the time the user clicks "Connect", client and URI should be ready.
        // Log (don't swallow) init failures — relay/projectId problems here would
        // otherwise be invisible and surface only as a hanging "Connecting...".
        this.ensureClient().catch((e) => console.error('[WCS] background SignClient init failed:', e));
    }

    private async ensureClient(): Promise<SignClient> {
        if (this.client) return this.client;
        if (this.initPromise) return this.initPromise;

        this.initPromise = SignClient.init({
            projectId: WC_PROJECT_ID,
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
                optionalNamespaces: OPTIONAL_NAMESPACES,
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
                explorerExcludedWalletIds: 'ALL',
            });
        }

        return this.modal;
    }

    async connect(walletTarget?: WalletTarget): Promise<string[]> {
        const client = await this.ensureClient();

        if (walletTarget) {
            this.walletTarget = walletTarget;
        }

        let uri: string;
        let approval: () => Promise<WCSession>;

        // Use pre-generated pairing if available and fresh
        if (this.pendingPairing && Date.now() - this.pendingPairing.createdAt < PAIRING_MAX_AGE_MS) {
            uri = this.pendingPairing.uri;
            approval = this.pendingPairing.approval;
            this.pendingPairing = null;
        } else {
            this.pendingPairing = null;
            const result = await client.connect({ requiredNamespaces: REQUIRED_NAMESPACES, optionalNamespaces: OPTIONAL_NAMESPACES });
            if (!result.uri) throw new Error('Failed to generate WalletConnect URI');
            uri = result.uri;
            approval = result.approval;
        }

        // Mobile: open wallet app directly via deep link (skip QR modal)
        if (isMobileWalletDevice() && walletTarget) {
            // Install wake listeners BEFORE navigating away — visibilitychange
            // can fire synchronously as the tab is backgrounded, and we need
            // the handler registered so the relayer reopens on return.
            const removeWakeListeners = installRelayerWakeListeners(client);
            const deepLink = getWalletDeepLink(walletTarget, uri);
            window.location.href = deepLink;

            try {
                this.session = await new Promise<WCSession>((resolve, reject) => {
                    approval().then(resolve, reject);
                    setTimeout(
                        () => reject(new Error('WalletConnect approval timed out after 180s')),
                        180_000
                    );
                });
                return this.getAccountsFromSession(this.session);
            } finally {
                removeWakeListeners();
                void this.preparePairing();
            }
        }

        // Desktop: show QR code in WC modal
        const modal = this.getModal();
        let unsubscribe: (() => void) | undefined;

        // Ensure clean state before opening
        try { modal.closeModal(); } catch { /* may not be open */ }
        modal.openModal({ uri });

        try {
            this.session = await new Promise<WCSession>((resolve, reject) => {
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

        const requestPromise = this.client.request({
            topic: this.session.topic,
            chainId: ALGORAND_CHAIN,
            request: {
                method: 'algo_signTxn',
                params: [txns],
            },
        });

        // Mobile: switching to wallet backgrounds the tab and suspends the relay
        // WebSocket, which can drop the sign response. Reopen the transport when
        // the tab becomes visible again (same class of fix as in connect()).
        let removeWakeListeners: (() => void) | undefined;
        if (isMobileWalletDevice() && this.walletTarget) {
            removeWakeListeners = installRelayerWakeListeners(this.client);
            setTimeout(() => {
                window.location.href = getWalletScheme(this.walletTarget!);
            }, 500);
        }

        try {
            return (await Promise.race([requestPromise, timeout])) as (string | null)[];
        } finally {
            removeWakeListeners?.();
        }
    }

    async disconnect(): Promise<void> {
        const client = this.client;
        const session = this.session;
        if (client && session) {
            try {
                await client.disconnect({
                    topic: session.topic,
                    reason: { code: 6000, message: 'User disconnected' },
                });
            } catch {
                // engine.disconnect() publishes wc_sessionDelete with
                // throwOnFailedPublish:true BEFORE it deletes the local session, so
                // a failed relay publish (remote session already gone — e.g. the
                // wallet app was reinstalled/updated) leaves a dead-but-unexpired
                // session in wc@2: localStorage that reconnect() would later treat
                // as active. Force-remove it locally so reconnect() can't pick it up.
                try {
                    await client.session.delete(session.topic, { code: 6000, message: 'User disconnected' });
                } catch { /* already gone */ }
            } finally {
                this.session = null;
            }
        }

        void this.preparePairing();
    }

    private getAccountsFromSession(session: WCSession): string[] {
        const accounts = session.namespaces.algorand?.accounts ?? [];
        return accounts.map((account) => {
            const parts = account.split(':');
            return parts[parts.length - 1];
        });
    }
}

export const walletConnectService = new WalletConnectService();
