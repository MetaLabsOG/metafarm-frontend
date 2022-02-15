import React, {useContext} from "react";

import {ALGONET, AppContext} from "../AppContext";
import Modal from 'react-awesome-modal';

import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
// import WalletConnect from '@reach-sh/stdlib/ALGO_WalletConnect';
import {logEvent} from "../logEvent";

const { detect } = require('detect-browser');
const browser = detect();


export function ConnectWalletModal() {
    const { reach, isWalletModalOpen, setIsWalletModalOpen, setAccount} = useContext(AppContext);
    const [walletType, setWalletType] = React.useState("");

    const connectWallet = () => {
        setIsWalletModalOpen(false);
        reach.getDefaultAccount().then(account => {
            setAccount(account);
            console.log('Address:', account.networkAccount.addr);
            console.log('Browser:', browser.name, browser.version, browser.os);
            logEvent(account.networkAccount.addr, "Wallet connect " +
                    walletType + ", window width: " + window.innerWidth + ", " +
                    browser.name + ": " + browser.version + ": " + browser.os
            );

            return account;
        }).catch(e => {
            console.log('ERROR. ConnectWallet: ' + e.name + ": " + e.message);
            logEvent('', 'ERROR. ConnectWallet: ' + e.name + ": " + e.message);
        });
    }

    const myAlgoWalletClick = () => {
        setWalletType('MyAlgo');
        reach.setWalletFallback(reach.walletFallback({providerEnv: ALGONET, MyAlgoConnect}));
        connectWallet();
    }

    const WalletClick = () => {
        // setWalletType('WalletConnect');
        // reach.setWalletFallback(reach.walletFallback({providerEnv: ALGONET, WalletConnect }));
        // connectWallet();
    }

    return (
        <Modal visible={isWalletModalOpen} width="400" height="220" effect="fadeInUp" style={{backgroundColor: "black"}} onClickAway={() => setIsWalletModalOpen(false)}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h3 className="wallet_header">Choose wallet</h3>
                    <button className="wallet-button" onClick={myAlgoWalletClick}>
                        Connect to MyAlgo
                    </button>
                    <button className="wallet-button" onClick={WalletClick}>
                        Connect to Algorand Wallet
                    </button>
            </div>
        </Modal>
    );
}