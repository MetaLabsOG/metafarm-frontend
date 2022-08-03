import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import GlobalStyle from './common/globalStyles';

import { Menu } from './Menu';
import { Fomo } from './Fomo';
import { Farm } from './Farm';
import { Swap } from './Swap';
import { Zap } from './Zap';

import { MetaDAO } from './MetaDAO';
import { theme } from './theme';
import { Container, ContentContainer } from './common/styled';
import { Crowdsale } from './Crowdsale';
import { $account, $balances, fetchAllPrices } from './common/store';
import { Stake } from './Stake/Stake';

import './css/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { setPoolInfos } from './Farm/store';
import { getContracts } from './providers/apiProvider';
import { setDistributionPoolInfos } from './Stake/store';
import { TestnetModal } from './TestnetModal';
import { useModal } from 'react-hooks-use-modal';
import { useEvent, useStore, useStoreMap } from 'effector-react';
import { Flip, ToastContainer } from 'react-toastify';
import { notify } from './Components/Notification';
import { Footer } from './Menu/Footer';

// TODO
window.open = (function (open) {
    return function (url, name, features) {
        name = name || 'default_window_name';
        const res = open.call(window, url, name, features);
        if (!res || res.closed || typeof res.closed == 'undefined') {
            notify('Please, enable popups in your browser.', 'warning');
            return null;
        }
        return res;
    };
})(window.open);

Sentry.init({
    dsn: 'https://65dfff9b40a24539b633789b8cfba771@o1313570.ingest.sentry.io/6563864',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

const queryClient = new QueryClient();

// throw events on initialization
fetchAllPrices();

const App = () => {
    const account = useStore($account);
    const algoBalance = useStoreMap($balances, (bs) => Number(bs[0]));
    const farmsFetch = useQuery(['contracts', 'farm'], () => getContracts('farm'));
    const distrFetch = useQuery(['contracts', 'distribution'], () => getContracts('distribution'));

    const [hasTestnetModalOpened, setHasTestnetModalOpened] = useState(false);
    const [Modal, openTestnetModal] = useModal('root', { preventScroll: true });

    const setPoolInfosEvent = useEvent(setPoolInfos);
    const setDistributionPoolInfosEvent = useEvent(setDistributionPoolInfos);

    useEffect(() => {
        if (farmsFetch.isSuccess) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setPoolInfosEvent(farmsFetch.data);
        }
    }, [farmsFetch]);

    useEffect(() => {
        if (!hasTestnetModalOpened && account && !isNaN(algoBalance) && algoBalance === 0) {
            openTestnetModal();
            setHasTestnetModalOpened(true);
        }
    }, [algoBalance, account]);

    useEffect(() => {
        if (distrFetch.isSuccess) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setDistributionPoolInfosEvent(distrFetch.data);
        }
    }, [distrFetch]);

    return (
        <>
            <GlobalStyle />
            <ToastContainer limit={3} theme="colored" position="bottom-right" transition={Flip} />
            <ThemeProvider theme={theme}>
                <Container>
                    <Menu />
                    <ContentContainer>
                        <Routes>
                            <Route path="/" element={<Farm />} />
                            <Route path="/fomo" element={<Fomo />} />
                            <Route path="/farm" element={<Farm />} />
                            <Route path="/stake" element={<Stake />} />
                            <Route path="/swap" element={<Swap />} />
                            <Route path="/zap" element={<Zap />} />
                            <Route path="/meta-dao" element={<MetaDAO />} />
                            <Route path="/tokensale" element={<Crowdsale />} />
                        </Routes>
                    </ContentContainer>
                    <Modal>
                        <TestnetModal />
                    </Modal>
                </Container>
                <Footer />
            </ThemeProvider>
        </>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
