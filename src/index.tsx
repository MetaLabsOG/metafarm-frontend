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
import { useEffect, useState, lazy, Suspense } from 'react';
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
import { setPoolInfos, prePopulateLpTokenInfos } from './Farm/store';
import { getContracts, getFarmEnriched, getUserContracts } from './providers/apiProvider';
import { prePopulateAssets, prePopulateAssetPrices, $assets } from './common/store';
import { setDistributionPoolInfos } from './Stake/store';
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
                    backgroundColor: 'rgba(0, 0, 0, 0.86)',
                }}
            />
        );
    },
};

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
    const farmsFetch = useQuery(['contracts', 'farm'], async () => getContracts('farm'), { staleTime: 30_000 });
    const distrFetch = useQuery(['contracts', 'distribution'], async () => getContracts('distribution'), { staleTime: 30_000 });

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

    // Pre-populate enriched data FIRST, then set pool infos.
    // Order matters: enriched pre-populates assets, prices, and LP states so that
    // when setPoolInfos triggers registerAsset → assetAvailable → LP sample,
    // the LP data is already in $lpTokenInfos and the sample skips DEX SDK calls.
    const [enrichedLoaded, setEnrichedLoaded] = useState(false);

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
            // Backend bug: assigns default META price to tokens without real price data.
            // Detect and filter out suspiciously common prices (>10 tokens sharing exact same price).
            const allPrices = Object.values(enriched.prices).filter((p: any) => p.price_algo > 0);
            const priceFrequency = new window.Map<number, number>();
            for (const p of allPrices) {
                priceFrequency.set((p as any).price_algo, (priceFrequency.get((p as any).price_algo) ?? 0) + 1);
            }
            const prices = allPrices
                .filter((p: any) => {
                    if (p.asset_id === 0) return true;
                    return (priceFrequency.get(p.price_algo) ?? 0) <= 10;
                })
                .map((p: any) => ({ id: p.asset_id, priceInAlgo: p.price_algo }));
            if (prices.length > 0) {
                prePopulateAssetPrices(prices);
            }

            // Pre-populate LP token states (avoids DEX SDK calls and individual /lp/state/priced calls)
            if (enriched.lp_states) {
                const assetsMap = $assets.getState();
                const lpItems = Object.values(enriched.lp_states).map((lpState: any) => ({
                    lpState,
                    asset: assetsMap.get(lpState.token_id) ?? null,
                }));
                if (lpItems.length > 0) {
                    prePopulateLpTokenInfos(lpItems);
                }
            }
        };

        // Instant display from sessionStorage cache (stale-while-revalidate)
        try {
            const cached = sessionStorage.getItem('cometa_enriched');
            if (cached) {
                applyEnriched(JSON.parse(cached));
                setEnrichedLoaded(true);
            }
        } catch { /* corrupt cache — ignore */ }

        // Fetch fresh enriched data (updates cache + applies any new data)
        getFarmEnriched().then((enriched) => {
            if (!enriched) {
                setEnrichedLoaded(true);
                return;
            }

            try {
                sessionStorage.setItem('cometa_enriched', JSON.stringify(enriched));
            } catch { /* quota exceeded — ignore */ }

            applyEnriched(enriched);
            setEnrichedLoaded(true);
        }).catch(() => {
            setEnrichedLoaded(true);
        });
    }, []);

    // Set pool infos only AFTER enriched data is loaded to prevent DEX SDK cascade
    // Merge active contracts + user's contracts (dedup by id)
    useEffect(() => {
        if (!enrichedLoaded || !farmsFetch.isSuccess || !farmsFetch.data) return;

        const activeContracts = farmsFetch.data as Array<ContractInfo<'farm'>>;

        if (userFarmsFetch.isSuccess && userFarmsFetch.data) {
            const userContracts = userFarmsFetch.data as Array<ContractInfo<'farm'>>;
            const activeIds = new Set(activeContracts.map((c: any) => c.id));
            const userOnly = userContracts.filter((c: any) => !activeIds.has(c.id));
            setPoolInfosEvent([...activeContracts, ...userOnly]);
        } else {
            setPoolInfosEvent(activeContracts);
        }
    }, [enrichedLoaded, farmsFetch.isSuccess, farmsFetch.data, userFarmsFetch.isSuccess, userFarmsFetch.data]);

    // Distribution pools also wait for enriched to prevent asset registration race
    useEffect(() => {
        if (!enrichedLoaded || !distrFetch.isSuccess || !distrFetch.data) return;

        const activeContracts = distrFetch.data as Array<ContractInfo<'distribution'>>;

        if (userDistrFetch.isSuccess && userDistrFetch.data) {
            const userContracts = userDistrFetch.data as Array<ContractInfo<'distribution'>>;
            const activeIds = new Set(activeContracts.map((c: any) => c.id));
            const userOnly = userContracts.filter((c: any) => !activeIds.has(c.id));
            setDistributionPoolInfosEvent([...activeContracts, ...userOnly]);
        } else {
            setDistributionPoolInfosEvent(activeContracts);
        }
    }, [enrichedLoaded, distrFetch.isSuccess, distrFetch.data, userDistrFetch.isSuccess, userDistrFetch.data]);

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
                    </MeteorsBackground>
                </ModalProvider>
                <Footer />
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
