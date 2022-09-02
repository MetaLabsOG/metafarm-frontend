import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { useStoreMap, useUnit } from 'effector-react';
import { Flip, ToastContainer } from 'react-toastify';
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
import { $account, $balances, ContractInfo, fetchAllPricesFx } from './common/store';
import { Stake } from './Stake/Stake';

import './css/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { setPoolInfos } from './Farm/store';
import { getContracts } from './providers/apiProvider';
import { setDistributionPoolInfos } from './Stake/store';
import { TestnetModal } from './TestnetModal';
import { Footer } from './Menu/Footer';
import { ALGONET, TESTNET } from './AppContext';
import { notify } from './Components/Notification';
import { AddFarm } from './Farm/AddFarm';

Sentry.init({
    dsn: 'https://65dfff9b40a24539b633789b8cfba771@o1313570.ingest.sentry.io/6563864',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1,
});

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

function App() {
    const account = useUnit($account);
    const algoBalance = useStoreMap($balances, (bs) => Number(bs[0]));
    const setPoolInfosEvent = useUnit(setPoolInfos);
    const setDistributionPoolInfosEvent = useUnit(setDistributionPoolInfos);
    const farmsFetch = useQuery(['contracts', 'farm'], async () => getContracts('farm'));
    const distrFetch = useQuery(['contracts', 'distribution'], async () => getContracts('distribution'));

    const [hasTestnetModalOpened, setHasTestnetModalOpened] = useState(false);
    const [Modal, openTestnetModal] = useModal('root', { preventScroll: true });

    useEffect(() => {
        if (farmsFetch.isSuccess) {
            const data = farmsFetch.data! as Array<ContractInfo<'farm'>>;
            setPoolInfosEvent(data);
        }
    }, [farmsFetch, setPoolInfosEvent]);

    useEffect(() => {
        if (
            !hasTestnetModalOpened &&
            account &&
            !Number.isNaN(algoBalance) &&
            algoBalance === 0 &&
            ALGONET === TESTNET
        ) {
            openTestnetModal();
            setHasTestnetModalOpened(true);
        }
    }, [algoBalance, account, hasTestnetModalOpened, openTestnetModal]);

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
                <Container>
                    <Menu />
                    <ContentContainer>
                        <Routes>
                            <Route path="/" element={<Farm />} />
                            {/*<Route path="/fomo" element={<Fomo />} />*/}
                            <Route path="/farm" element={<Farm />} />
                            <Route path="/stake" element={<Stake />} />
                            <Route path="/swap" element={<Swap />} />
                            <Route path="/zap" element={<Zap inputDexProvider="T2" />} />
                            <Route path="/meta-dao" element={<MetaDAO />} />
                            {/*<Route path="/tokensale" element={<Crowdsale />} />*/}
                            <Route path="/addfarm" element={<AddFarm />} />
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
