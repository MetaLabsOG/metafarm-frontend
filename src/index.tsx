import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConnectWalletModal } from './wallet/ConnectWalletModal';
import './css/index.css';
import { Menu } from './Menu';
import { Fomo } from './Fomo';
import { Farm } from './farm';
import { loadStdlib } from '@reach-sh/stdlib';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ALGONODE, AppContext } from './AppContext';
import { MetaDAO } from './MetaDAO';

const reach = loadStdlib(ALGONODE);

const queryClient = new QueryClient();

const App = () => {
    const [isWalletModalOpen, setIsWalletModalOpen] = React.useState<boolean>(false);
    const [account, setAccount] = React.useState(undefined);

    return (
        <QueryClientProvider client={queryClient}>
            <AppContext.Provider value={{ reach, isWalletModalOpen, setIsWalletModalOpen, account, setAccount }}>
                <div className="container">
                    <Menu />
                    <ConnectWalletModal />
                    <div className="content-container">
                        <Routes>
                            <Route path="/" element={<Fomo />} />
                            <Route path="/fomo" element={<Fomo />} />
                            <Route path="/farm" element={<Farm />} />
                            <Route path="/meta-dao" element={<MetaDAO />} />
                        </Routes>
                    </div>
                </div>
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
