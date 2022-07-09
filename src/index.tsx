import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { $account, $balances, fetchAlgoPrice, fetchBtcPrice } from './common/store';
import { Stake } from './Stake/Stake';

import './css/index.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { setPoolInfos } from './Farm/store';
import { getContracts } from './providers/apiProvider';
import { setDistributionPoolInfos } from './Stake/store';
import { TestnetModal } from './TestnetModal';
import { useModal } from 'react-hooks-use-modal';
import { useStore, useStoreMap } from 'effector-react';
import { Flip, ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

// throw events on initialization
fetchAlgoPrice();
fetchBtcPrice();

const App = () => {
    const account = useStore($account);
    const algoBalance = useStoreMap($balances, (bs) => Number(bs[0]));
    const farmsFetch = useQuery(['contracts', 'farm'], () => getContracts('farm'));
    const distrFetch = useQuery(['contracts', 'distribution'], () => getContracts('distribution'));

    const [hasTestnetModalOpened, setHasTestnetModalOpened] = useState(false);
    const [Modal, openTestnetModal] = useModal('root', { preventScroll: true });

    useEffect(() => {
        if (farmsFetch.isSuccess) {
            setPoolInfos(farmsFetch.data);
        }

        if (!hasTestnetModalOpened && account && !isNaN(algoBalance) && algoBalance === 0) {
            openTestnetModal();
            setHasTestnetModalOpened(true);
        }
    }, [farmsFetch, algoBalance, account]);

    useEffect(() => {
        if (distrFetch.isSuccess) {
            setDistributionPoolInfos(distrFetch.data);
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
