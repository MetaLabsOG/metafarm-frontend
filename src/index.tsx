import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './common/globalStyles';

import { Menu } from './Menu';
import { Fomo } from './Fomo';
import { Farm } from './Farm';
import { Swap } from './Swap';
import { Zap } from './Zap';

import { MetaDAO } from './MetaDAO';
import { theme } from './theme';
import { Container, ContentContainer, StyledContainer } from './common/styled';
import { Crowdsale } from './Crowdsale';
import { fetchAlgoPrice, fetchBtcPrice } from './common/store';
import { Stake } from './Stake/Stake';

import './css/index.css';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

// throw events on initialization
fetchAlgoPrice();
fetchBtcPrice();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <StyledContainer limit={3} />
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
                </Container>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
