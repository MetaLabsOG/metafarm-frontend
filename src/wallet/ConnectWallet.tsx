import { useState, useEffect, MouseEventHandler } from 'react';
import { useStore } from 'effector-react';

import { ALGONET, reach } from '../AppContext';
import { useModal } from 'react-hooks-use-modal';
import { ALGO_MyAlgoConnect as MyAlgoConnect, ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';

import '../css/wallet.css';
import { logEvent } from '../logEvent';
import { $account, setAccount } from '../common/store';

import { detect } from 'detect-browser';

const browser = detect();
const browserInfoString = browser === null ? 'unknown' : `${browser.name} ${browser.version} ${browser.os}`;

export type WalletType = 'MyAlgo' | 'WalletConnect';

const connectWallet = (walletType: WalletType) => {
    if (walletType !== 'MyAlgo' && walletType !== 'WalletConnect') {
        throw new TypeError(`Invalid wallet type ${walletType}`);
    }

    const walletFallback =
        walletType === 'MyAlgo'
            ? reach.walletFallback({ providerEnv: ALGONET, MyAlgoConnect })
            : reach.walletFallback({ providerEnv: ALGONET, WalletConnect });

    reach.setWalletFallback(walletFallback);
    reach
        .getDefaultAccount()
        .then((acc) => {
            setAccount(acc);
            console.log('Address:', acc.networkAccount.addr);
            console.log('Browser:', browserInfoString);
            logEvent(
                acc.networkAccount.addr,
                {
                    action: 'WALLET CONNECT',
                    status: `Wallet connect ${walletType} window width: ${window.innerWidth} ${browserInfoString}`,
                },
                'wallet'
            );
            localStorage.setItem('connectedWalletType', walletType);

            return acc;
        })
        .catch((e) => {
            console.log('ERROR. ConnectWallet: ' + e.name + ': ' + e.message);
            logEvent('', { message: 'ERROR. ConnectWallet: ' + e.name + ': ' + e.message }, 'error');
        });
};

const disconnectWallet = () => {
    localStorage.removeItem('connectedWalletType');
    window.location.reload();
};

export function ConnectWallet() {
    const account = useStore($account);
    const [finishedOpening, setFinishedOpening] = useState(false);
    const [Modal, open, close, isOpen] = useModal('root', { preventScroll: true });
    const [accDropdownOpen, setAccDropdownOpen] = useState(false);

    // check local state once when the element is rendered first
    useEffect(() => {
        const connectedWallet = localStorage.getItem('connectedWalletType');
        if (connectedWallet !== null && !window.algorand) {
            connectWallet(connectedWallet as WalletType);
        }
    }, []);

    useEffect(() => {
        setFinishedOpening(isOpen);
    }, [isOpen]);

    const walletClick = (walletType: WalletType) => {
        connectWallet(walletType);
        close();
    };

    const toggleDropdown: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        setAccDropdownOpen(!accDropdownOpen);
        return e;
    };

    const disconnect: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        disconnectWallet();
        return e;
    };

    return (
        <>
            <div className="wallet_container">
                {!account ? (
                    <button className="connect_wallet" onClick={open}>
                        connect wallet
                    </button>
                ) : (
                    <>
                        <a href="/" onClick={toggleDropdown}>
                            <h1 className="account_info">{account.networkAccount.addr}</h1>
                        </a>
                        <div
                            className="account_dropdown_container"
                            style={{
                                display: accDropdownOpen ? 'flex' : 'none',
                            }}
                        >
                            <a
                                target="_blank"
                                href={'https://algoexplorer.io/address/' + account.networkAccount.addr}
                                rel="noreferrer"
                            >
                                algoexplorer
                            </a>
                            <a href="/" onClick={disconnect}>
                                disconnect
                            </a>
                        </div>
                    </>
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
                        transition:
                            'transform 500ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 500ms cubic-bezier(0, 0, 0.25, 1) 0s',
                    }}
                >
                    <h3 className="wallet_header">Choose wallet</h3>
                    <button className="wallet-button" onClick={() => walletClick('MyAlgo')}>
                        Connect to MyAlgo
                    </button>
                    <button className="wallet-button" onClick={() => walletClick('WalletConnect')}>
                        Connect to Pera wallet
                    </button>
                </div>
            </Modal>
        </>
    );
}
