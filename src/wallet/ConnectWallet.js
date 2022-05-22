import { useState, useEffect } from 'react';
import { useStore } from 'effector-react';

import { ALGONET, reach } from '../AppContext';
import { useModal } from 'react-hooks-use-modal';
import { ALGO_MyAlgoConnect as MyAlgoConnect, ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';

import '../css/wallet.css';
import { logEvent } from '../logEvent';
import { $account, setAccount } from '../common/store';

const { detect } = require('detect-browser');
const browser = detect();

export function ConnectWallet() {
    const account = useStore($account);
    const [walletType, setWalletType] = useState('');
    const [finishedOpening, setFinishedOpening] = useState(false);
    const [Modal, open, close, isOpen] = useModal('root', { preventScroll: true });

    useEffect(() => {
        setFinishedOpening(isOpen);
    }, [isOpen]) 

    const connectWallet = () => {
        close();
        reach
            .getDefaultAccount()
            .then((acc) => {
                setAccount(acc);
                console.log('Address:', acc.networkAccount.addr);
                console.log('Browser:', browser.name, browser.version, browser.os);
                logEvent(
                    acc.networkAccount.addr,
                    {
                        action: 'WALLET CONNECT',
                        status: `Wallet connect ${walletType} window width: ${window.innerWidth} ${browser.name} ${browser.version} ${browser.os}`,
                    },
                    'wallet'
                );
                return acc;
            })
            .catch((e) => {
                console.log('ERROR. ConnectWallet: ' + e.name + ': ' + e.message);
                logEvent('', { message: 'ERROR. ConnectWallet: ' + e.name + ': ' + e.message }, 'error');
            });
    };

    const myAlgoWalletClick = () => {
        setWalletType('MyAlgo');
        reach.setWalletFallback(reach.walletFallback({ providerEnv: ALGONET, MyAlgoConnect })); // ALGONODE
        connectWallet();
    };

    const WalletClick = () => {
        setWalletType('WalletConnect');
        reach.setWalletFallback(reach.walletFallback({ providerEnv: ALGONET, WalletConnect }));
        connectWallet();
    };

    return (
        <>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                {!account ? (
                    <button className="connect_wallet" onClick={open}>
                        connect wallet
                    </button>
                ) : (
                    <h1 className="account_info">{account.networkAccount.addr}</h1>
                )}
            </div>
            <Modal>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 400,
                        height: 220,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        transform: `translate3d(0px, ${finishedOpening ? 0 : 100}px, 0px)`,
                        opacity: finishedOpening ? 100 : 0,
                        transition: 'transform 500ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 500ms cubic-bezier(0, 0, 0.25, 1) 0s',
                    }}
                >
                    <h3 className="wallet_header">Choose wallet</h3>
                    <button className="wallet-button" onClick={myAlgoWalletClick}>
                        Connect to MyAlgo
                    </button>
                    <button className="wallet-button" onClick={WalletClick}>
                        Connect to Pera wallet
                    </button>
                </div>
            </Modal>
        </>
    );
}
