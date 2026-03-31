// Import polyfills first
import './polyfills';
import { runCacheMigration } from './cacheMigration';

// Clear stale caches before anything else reads localStorage
runCacheMigration();

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useEffect, lazy, Suspense } from 'react';
import { useModal, ModalProvider } from 'react-hooks-use-modal';
import { useStoreMap, useUnit } from 'effector-react';
import { Flip, ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga';
import ReactTooltip from 'react-tooltip';
import GlobalStyle from './common/globalStyles';
import { MeteorsBackground } from './Components/ui/MeteorsBackground';
import { injectMobileOptimizations } from './utils/mobileOptimizations';
import { usePerformanceOptimization } from './hooks';
import { WindowSizeContext, useWindowSizeProvider } from './hooks/useWindowSize';
import { Menu } from './Menu';
import { theme } from './theme';
import { Container, ContentContainer } from './common/styled';
import { $account, ContractInfo, fetchAllPricesFx } from './common/store';
import './css/index.css';
import './css/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { setPoolInfos, prePopulateLpTokenInfos, setFarmPoolsError } from './Farm/store';
import { getContracts, getFarmEnriched, getUserContracts } from './providers/apiProvider';
import { prePopulateAssets, prePopulateAssetPrices } from './common/store';
import { resolveBignums } from './common/lib';
import { setDistributionPoolInfos, setDistributionPoolsError } from './Stake/store';
import { WelcomeModal } from './WelcomeModal';
import { Footer } from './Menu/Footer';
import { notify } from './Components/Notification';
import { ErrorBoundary } from './ErrorBoundary';

const Farm = lazy(() => import('./Farm').then(m => ({ default: m.Farm })));
const Swap = lazy(() => import('./Swap').then(m => ({ default: m.Swap })));
const Zap = lazy(() => import('./Zap').then(m => ({ default: m.Zap })));
const Stake = lazy(() => import('./Stake/Stake').then(m => ({ default: m.Stake })));
const AddFarm = lazy(() => import('./Farm/AddFarm').then(m => ({ default: m.AddFarm })));
const Metapunks = lazy(() => import('./Metapunks/Metapunks').then(m => ({ default: m.Metapunks })));

Sentry.init({
    dsn: 'https://65dfff9b40a24539b633789b8cfba771@o1313570.ingest.sentry.io/6563864',
    integrations: [new BrowserTracing()],

    tracesSampleRate: 0.1,
});
ReactGA.initialize('G-P19KGXJGTP');

// TODO
window.open = (function (open) {
    return function (url, name, features) {
        name = name || 'default_window_name';
        const res = open.call(window, url, name, features);
        if (!res || res.closed || typeof res.closed === 'undefined') {
            notify('Please, enable popups in your browser.', 'warning');
            return null;
        }
        return res;
    };
})(window.open);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

void fetchAllPricesFx();

const modalComponents = {
    Overlay: () => {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.72)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                }}
            />
        );
    },
};

// localStorage cache for contracts (stale-while-revalidate, same as enriched cache).
// ethers BigNumber.toJSON() produces {type:"BigNumber",hex:"0x..."} which resolveBignums restores.
const CONTRACTS_MAX_AGE_MS = 30 * 60 * 1000;

function readCachedContracts(type: string): any | undefined {
    try {
        const raw = localStorage.getItem(`cometa_contracts_${type}`);
        const ts = Number(localStorage.getItem(`cometa_contracts_${type}_ts`) || '0');
        if (raw && Date.now() - ts < CONTRACTS_MAX_AGE_MS) {
            return resolveBignums(JSON.parse(raw));
        }
    } catch { /* corrupt cache */ }
    return undefined;
}

function writeCachedContracts(type: string, data: any): void {
    if (!Array.isArray(data) || data.length === 0) return;
    try {
        localStorage.setItem(`cometa_contracts_${type}`, JSON.stringify(data));
        localStorage.setItem(`cometa_contracts_${type}_ts`, String(Date.now()));
    } catch { /* quota exceeded */ }
}

const _cachedFarm = readCachedContracts('farm');
const _cachedDistribution = readCachedContracts('distribution');

function App() {
    const account = useUnit($account);
    const { reportSuccessfulLoad, reportCrash, isFirstVisit, shouldUseConservativeMode } = usePerformanceOptimization();
    
    const localstorageAddress = localStorage.getItem('walletAddress');
    let user_address: string | undefined = undefined;
    if (localstorageAddress) {
        user_address = localstorageAddress;
    }
    if (account?.networkAccount.addr) {
        user_address = account?.networkAccount.addr;
    }
    const setPoolInfosEvent = useUnit(setPoolInfos);
    const setDistributionPoolInfosEvent = useUnit(setDistributionPoolInfos);
    const farmsFetch = useQuery(
        ['contracts', 'farm'],
        async () => {
            const data = await getContracts('farm');
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error(`/contracts?type=farm returned ${data === null ? 'null' : 'empty'}`);
            }
            writeCachedContracts('farm', data);
            return data;
        },
        { staleTime: 30_000, initialData: _cachedFarm, onError: () => setFarmPoolsError(true) },
    );
    const distrFetch = useQuery(
        ['contracts', 'distribution'],
        async () => {
            const data = await getContracts('distribution');
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error(`/contracts?type=distribution returned ${data === null ? 'null' : 'empty'}`);
            }
            writeCachedContracts('distribution', data);
            return data;
        },
        { staleTime: 30_000, initialData: _cachedDistribution, onError: () => setDistributionPoolsError(true) },
    );

    // User's contracts (active + ended) — loaded when wallet is connected
    const userFarmsFetch = useQuery(
        ['contracts', 'farm', 'user', user_address],
        () => getUserContracts(user_address!, 'farm'),
        { enabled: !!user_address, staleTime: 60_000 }
    );
    const userDistrFetch = useQuery(
        ['contracts', 'distribution', 'user', user_address],
        () => getUserContracts(user_address!, 'distribution'),
        { enabled: !!user_address, staleTime: 60_000 }
    );

    const [Modal, openWelcomeModal] = useModal('root');

    // Inject mobile optimizations on app load
    useEffect(() => {
        injectMobileOptimizations();
    }, []);

    // Performance monitoring
    useEffect(() => {
        const handleLoad = () => {
            reportSuccessfulLoad();
        };

        const handleError = (error: ErrorEvent) => {
            console.error('App error:', error);
            reportCrash();
        };

        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            // Don't count API rate limits (429) or network errors as app crashes
            const reason = event.reason;
            const isNetworkError = reason?.response?.status === 429 ||
                reason?.message?.includes('Too Many Requests') ||
                reason?.message?.includes('Network Error') ||
                reason?.message?.includes('Failed to fetch');
            if (isNetworkError) {
                console.warn('API rate limit or network error (not a crash):', reason?.message || reason);
                return;
            }
            console.error('Unhandled promise rejection:', reason);
            reportCrash();
        };

        // Report successful load when all critical resources are loaded
        if (farmsFetch.isSuccess && distrFetch.isSuccess) {
            handleLoad();
        }

        // Listen for errors
        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, [farmsFetch.isSuccess, distrFetch.isSuccess, reportSuccessfulLoad, reportCrash]);

    // Pre-populate enriched data in background (assets, prices, LP states).
    // Pools no longer wait for this — they render as skeletons and fill in progressively.
    useEffect(() => {
        const applyEnriched = (enriched: any) => {
            // Pre-populate asset details (avoids individual algod calls)
            const assetsList = Object.values(enriched.assets).map((a: any) => ({
                id: a.id,
                name: a.name,
                unitName: a.unit_name,
                creator: a.creator,
                reserve: a.reserve,
                decimals: a.decimals,
            }));
            if (assetsList.length > 0) {
                prePopulateAssets(assetsList);
            }

            // Pre-populate asset prices (avoids individual Vestige/Tinyman calls)
            // Backend bug guard: >10 tokens sharing the exact same non-zero price means
            // the backend assigned a default price (e.g. META) to unpriced tokens.
            // Zero prices are allowed through — they mean "not priced yet" (e.g. LP tokens
            // whose backend pricing worker hasn't run), not "incorrectly priced".
            const allPrices = Object.values(enriched.prices);
            const priceFrequency = new Map<number, number>();
            for (const p of allPrices) {
                const pa = (p as any).price_algo;
                if (pa > 0) {
                    priceFrequency.set(pa, (priceFrequency.get(pa) ?? 0) + 1);
                }
            }
            const prices = allPrices
                .filter((p: any) => {
                    if (p.asset_id === 0) return true;
                    if (p.price_algo === 0) return true;
                    return (priceFrequency.get(p.price_algo) ?? 0) <= 10;
                })
                .map((p: any) => ({ id: p.asset_id, priceInAlgo: p.price_algo }));
            if (prices.length > 0) {
                prePopulateAssetPrices(prices);
            }

            // Pre-populate LP token states (avoids DEX SDK calls and individual /lp/state/priced calls)
            if (enriched.lp_states) {
                const assetsLookup = new Map<number, any>(assetsList.map((a: any) => [a.id, a]));
                const lpItems = Object.values(enriched.lp_states).map((lpState: any) => ({
                    lpState,
                    asset: assetsLookup.get(lpState.token_id) ?? null,
                }));
                if (lpItems.length > 0) {
                    prePopulateLpTokenInfos(lpItems);
                }
            }
        };

        // Instant display from localStorage cache (stale-while-revalidate).
        // localStorage persists across tabs and browser restarts, so only the
        // very first visit ever is slow.  TTL prevents serving extremely stale data.
        const ENRICHED_CACHE_KEY = 'cometa_enriched';
        const ENRICHED_TS_KEY = 'cometa_enriched_ts';
        const ENRICHED_MAX_AGE_MS = 30 * 60 * 1000; // 30 minutes

        try {
            const cached = localStorage.getItem(ENRICHED_CACHE_KEY);
            const cachedTs = Number(localStorage.getItem(ENRICHED_TS_KEY) || '0');
            if (cached && Date.now() - cachedTs < ENRICHED_MAX_AGE_MS) {
                applyEnriched(JSON.parse(cached));

            }
        } catch { /* corrupt cache — ignore */ }

        // Fetch fresh enriched data (updates cache + applies any new data)
        getFarmEnriched().then((enriched) => {
            if (!enriched) return;

            try {
                localStorage.setItem(ENRICHED_CACHE_KEY, JSON.stringify(enriched));
                localStorage.setItem(ENRICHED_TS_KEY, String(Date.now()));
            } catch { /* quota exceeded — ignore */ }

            applyEnriched(enriched);
        }).catch(() => { /* enriched failed — pools already showing from contracts */ });
    }, []);

    // Set pool infos as soon as contracts arrive — no enriched gate.
    // Pools render as skeletons while individual asset/price data loads progressively.
    // Enriched data pre-populates assets/prices in the background (speeds up fill-in).
    useEffect(() => {
        if (!farmsFetch.isSuccess || !farmsFetch.data) return;

        const activeContracts = farmsFetch.data as Array<ContractInfo<'farm'>>;
        if (activeContracts.length === 0) return;

        if (userFarmsFetch.isSuccess && userFarmsFetch.data && Array.isArray(userFarmsFetch.data) && userFarmsFetch.data.length > 0) {
            const userContracts = userFarmsFetch.data as Array<ContractInfo<'farm'>>;
            const activeIds = new Set(activeContracts.map((c: any) => c.id));
            const userOnly = userContracts.filter((c: any) => !activeIds.has(c.id));
            setPoolInfosEvent([...activeContracts, ...userOnly]);
        } else {
            setPoolInfosEvent(activeContracts);
        }
    }, [farmsFetch.isSuccess, farmsFetch.data, userFarmsFetch.isSuccess, userFarmsFetch.data]);

    // Distribution pools — same pattern, no enriched gate
    useEffect(() => {
        if (!distrFetch.isSuccess || !distrFetch.data) return;

        const activeContracts = distrFetch.data as Array<ContractInfo<'distribution'>>;
        if (activeContracts.length === 0) return;

        if (userDistrFetch.isSuccess && userDistrFetch.data && Array.isArray(userDistrFetch.data) && userDistrFetch.data.length > 0) {
            const userContracts = userDistrFetch.data as Array<ContractInfo<'distribution'>>;
            const activeIds = new Set(activeContracts.map((c: any) => c.id));
            const userOnly = userContracts.filter((c: any) => !activeIds.has(c.id));
            setDistributionPoolInfosEvent([...activeContracts, ...userOnly]);
        } else {
            setDistributionPoolInfosEvent(activeContracts);
        }
    }, [distrFetch.isSuccess, distrFetch.data, userDistrFetch.isSuccess, userDistrFetch.data]);

    return (
        <>
            <GlobalStyle />
            <ToastContainer limit={3} theme="colored" position="bottom-right" transition={Flip} />
            <ReactTooltip clickable place="top" type="light" effect="solid" className="custom-tooltip" backgroundColor="rgba(255, 255, 255, 0.9)" />
            <ThemeProvider theme={theme}>
                <ModalProvider preventScroll components={modalComponents}>
                    <MeteorsBackground>
                        <Container>
                            <Menu />
                            <ContentContainer>
                                <Suspense fallback={<div style={{ color: 'var(--accent-muted)', textAlign: 'center', padding: '40px' }}>Loading...</div>}>
                                    <Routes>
                                        <Route path="/" element={<ErrorBoundary><Farm /></ErrorBoundary>} />
                                        {/*<Route path="/fomo" element={<Fomo />} />*/}
                                        <Route path="/farm" element={<ErrorBoundary><Farm /></ErrorBoundary>} />
                                        <Route path="/stake" element={<ErrorBoundary><Stake /></ErrorBoundary>} />
                                        <Route path="/swap" element={<ErrorBoundary><Swap /></ErrorBoundary>} />
                                        <Route path="/zap" element={<ErrorBoundary><Zap inputDexProvider="T2" /></ErrorBoundary>} />
                                        <Route path="/metapunks" element={<ErrorBoundary><Metapunks /></ErrorBoundary>} />
                                        <Route path="/addfarm" element={<ErrorBoundary><AddFarm type="farm" /></ErrorBoundary>} />
                                        <Route path="/addstake" element={<ErrorBoundary><AddFarm type="stake" /></ErrorBoundary>} />
                                        <Route path="*" element={<Navigate to="/" replace />} />
                                    </Routes>
                                </Suspense>
                            </ContentContainer>
                            <Modal>
                                <WelcomeModal />
                            </Modal>
                        </Container>
                        <Footer />
                    </MeteorsBackground>
                </ModalProvider>
            </ThemeProvider>
        </>
    );
}

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

function Root() {
    const windowSize = useWindowSizeProvider();
    return (
        <WindowSizeContext.Provider value={windowSize}>
            <App />
        </WindowSizeContext.Provider>
    );
}

root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Root />
            </QueryClientProvider>
        </BrowserRouter>
    </ErrorBoundary>
);
