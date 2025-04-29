// Import polyfills first
import './polyfills';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { useModal, ModalProvider } from 'react-hooks-use-modal';
import { useStoreMap, useUnit } from 'effector-react';
import { Flip, ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga';
import GlobalStyle from './common/globalStyles';

import { Menu } from './Menu';
import { Farm } from './Farm';
import { Swap } from './Swap';
import { Zap } from './Zap';

import { MetaDAO } from './MetaDAO';
import { theme } from './theme';
import { Container, ContentContainer } from './common/styled';
import { $account, ContractInfo, fetchAllPricesFx } from './common/store';
import { Stake } from './Stake/Stake';

import './css/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { setPoolInfos } from './Farm/store';
import { getContracts } from './providers/apiProvider';
import { setDistributionPoolInfos } from './Stake/store';
import { WelcomeModal } from './WelcomeModal';
import { Footer } from './Menu/Footer';
import { notify } from './Components/Notification';
import { AddFarm } from './Farm/AddFarm';
import { LaaS } from './LaaS/LaaS';
import { setLaasPoolInfos } from './LaaS/store';
import { AddLaaS } from './LaaS/AddLaaS';
import { Metapunks } from './Metapunks/Metapunks';

Sentry.init({
    dsn: 'https://65dfff9b40a24539b633789b8cfba771@o1313570.ingest.sentry.io/6563864',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1,
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

const queryClient = new QueryClient();

void fetchAllPricesFx();

const WELCOME_MODAL_KEY = `welcome_cosmaud`;

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
    const farmsFetch = useQuery(['contracts', 'farm'], async () => getContracts('farm', user_address));
    const distrFetch = useQuery(['contracts', 'distribution'], async () => getContracts('distribution', user_address));

    const [Modal, openWelcomeModal] = useModal('root');

    useEffect(() => {
        if (farmsFetch.isSuccess) {
            const data = farmsFetch.data! as Array<ContractInfo<'farm'>>;
            setPoolInfosEvent(data);
        }
    }, [farmsFetch, setPoolInfosEvent]);

    // useEffect(() => {
    //     const isWelcomeShowed = localStorage.getItem(WELCOME_MODAL_KEY);
    //     if (!isWelcomeShowed) {
    //         localStorage.setItem(WELCOME_MODAL_KEY, '1');
    //         openWelcomeModal();
    //     }
    // }, []);

    useEffect(() => {
        if (distrFetch.isSuccess) {
            const data = distrFetch.data! as Array<ContractInfo<'distribution'>>;
            setDistributionPoolInfosEvent(data);
        }
    }, [distrFetch, setDistributionPoolInfosEvent]);

    return (
        <>
            <GlobalStyle />
            <ToastContainer limit={3} theme="colored" position="bottom-right" transition={Flip} />
            <ThemeProvider theme={theme}>
                <ModalProvider preventScroll components={modalComponents}>
                    <Container>
                        <Menu />
                        <ContentContainer>
                            <Routes>
                                <Route path="/" element={<Farm />} />
                                {/*<Route path="/fomo" element={<Fomo />} />*/}
                                <Route path="/laas" element={<LaaS />} />
                                <Route path="/farm" element={<Farm />} />
                                <Route path="/stake" element={<Stake />} />
                                <Route path="/swap" element={<Swap />} />
                                <Route path="/zap" element={<Zap inputDexProvider="T2" />} />
                                <Route path="/meta-dao" element={<MetaDAO />} />
                                <Route path="/metapunks" element={<Metapunks />} />
                                <Route path="/addfarm" element={<AddFarm type="farm" />} />
                                <Route path="/addstake" element={<AddFarm type="stake" />} />
                                <Route path="/addlaas" element={<AddLaaS />} />
                            </Routes>
                        </ContentContainer>
                        <Modal>
                            <WelcomeModal />
                        </Modal>
                    </Container>
                </ModalProvider>
                <Footer />
            </ThemeProvider>
        </>
    );
}

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>
);
