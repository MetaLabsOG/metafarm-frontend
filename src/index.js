import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './css/index.css';
import Menu from "./menu";
import Fomo from "./fomo";
import {Farm} from "./farm";
import {loadStdlib} from "@reach-sh/stdlib";
import {ALGONODE, AppContext} from "./AppContext";

const reach = loadStdlib(ALGONODE);

const App = () => {
    const [isWalletModalOpen, setIsWalletModalOpen] = React.useState(false);
    const [account, setAccount] = React.useState(false);

    return (
        <AppContext.Provider value={{ reach, isWalletModalOpen, setIsWalletModalOpen, account, setAccount}}>
            <div className="container">
                <Menu />
                <Routes>
                    <Route path='/' element={<Fomo />}/>
                    <Route path='/fomo' element={<Fomo />}/>
                    <Route path='/farm' element={<Farm />}/>
                </Routes>
            </div>
        </AppContext.Provider>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
