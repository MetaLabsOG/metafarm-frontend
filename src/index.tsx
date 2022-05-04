import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { loadStdlib } from '@reach-sh/stdlib';
import GlobalStyle from './common/globalStyles';

import { ConnectWalletModal } from './wallet/ConnectWalletModal';

import { Menu } from './Menu';
import { Fomo } from './Fomo';
import { Farm } from './Farm';

import { ALGONODE, AppContext } from './AppContext';
import { MetaDAO } from './MetaDAO';
import { theme } from './theme';
import { Container, ContentContainer } from './common/styled';
import './css/index.css';

const reach = loadStdlib(ALGONODE);

const queryClient = new QueryClient();

const App = () => {
    const [isWalletModalOpen, setIsWalletModalOpen] = React.useState<boolean>(false);
    const [account, setAccount] = React.useState(undefined);

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <AppContext.Provider value={{ reach, isWalletModalOpen, setIsWalletModalOpen, account, setAccount }}>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Menu />
                        <ConnectWalletModal />
                        <ContentContainer>
                            <Routes>
                                <Route path="/" element={<Fomo />} />
                                <Route path="/fomo" element={<Fomo />} />
                                <Route path="/farm" element={<Farm />} />
                                <Route path="/meta-dao" element={<MetaDAO />} />
                            </Routes>
                        </ContentContainer>
                    </Container>
                </ThemeProvider>
            </AppContext.Provider>
        </QueryClientProvider>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
