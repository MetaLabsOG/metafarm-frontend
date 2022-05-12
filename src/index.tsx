import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './common/globalStyles';

import { Menu } from './Menu';
import { Fomo } from './Fomo';
import { Farm } from './Farm';
import { Swap } from './Swap';

import { AppContext } from './AppContext';
import { MetaDAO } from './MetaDAO';
import { theme } from './theme';
import { Container, ContentContainer } from './common/styled';
import './css/index.css';

const queryClient = new QueryClient();

console.log('ENV', process.env);

const App = () => {
    const [account, setAccount] = React.useState(undefined);

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <AppContext.Provider value={{ account, setAccount }}>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Menu />
                        <ContentContainer>
                            <Routes>
                                <Route path="/" element={<Fomo />} />
                                <Route path="/fomo" element={<Fomo />} />
                                <Route path="/farm" element={<Farm />} />
                                <Route path="/swap" element={<Swap />} />
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
