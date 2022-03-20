import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConnectWalletModal } from './wallet/ConnectWalletModal';
import './css/index.css';
import { Menu } from './Menu';
import { Fomo } from './Fomo';
import { Farm } from './farm';
import { loadStdlib } from '@reach-sh/stdlib';

import { ALGONODE, AppContext } from './AppContext';

const reach = loadStdlib(ALGONODE);

const App = () => {
    const [isWalletModalOpen, setIsWalletModalOpen] = React.useState<boolean>(false);
    const [account, setAccount] = React.useState(undefined);

    return (
        <AppContext.Provider value={{ reach, isWalletModalOpen, setIsWalletModalOpen, account, setAccount }}>
            <div className="container">
                <Menu />
                <ConnectWalletModal />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Fomo />} />
                        <Route path="/fomo" element={<Fomo />} />
                        <Route path="/farm" element={<Farm />} />
                        <Route path="/meta-dao" element={<Farm />} />
                    </Routes>
                </div>
            </div>
        </AppContext.Provider>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
