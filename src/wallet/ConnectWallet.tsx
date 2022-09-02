import { MouseEventHandler, useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { detect } from 'detect-browser';

import '../css/wallet.css';
import { useUnit } from 'effector-react';
import { logEvent, LogName } from '../logEvent';
import { $account, setAccount } from '../common/store';
import { ALGONET, reach, TESTNET } from '../AppContext';
import { notify } from '../Components/Notification';
import { customWalletFallback, WalletType } from './customWalletFallback';
import { ConnectWalletModal } from './ConnectWalletModal';

const browser = detect();
const browserInfoString =
    browser === null
        ? 'unknown'
        : `${browser.name} ${browser.version ?? 'UNKNOWN_VERSION'} ${browser.os ?? 'UNKNOWN_OS'}`;

const WALLET_TYPE_KEY = 'connectedWalletType';

export const connectWallet = (walletType: WalletType) => {
    reach.clearProvider();
    delete window.algorand;

    reach.setWalletFallback(customWalletFallback({ providerEnv: ALGONET, walletType }));
    if (walletType === 'WalletConnect' && ALGONET === TESTNET) {
        notify('Please, switch you Pera wallet to testnet.', 'info');
    }
    reach
        .getDefaultAccount()
        .then((acc) => {
            setAccount(acc);
            console.log('Address:', acc.networkAccount.addr);
            console.log('Browser:', browserInfoString);
            logEvent(
                acc.networkAccount.addr,
                {
                    action: walletType,
                    status: `Wallet connect ${walletType} window width: ${window.innerWidth} ${browserInfoString}`,
                },
                LogName.WALLET
            );
            localStorage.setItem(WALLET_TYPE_KEY, walletType);

            return acc;
        })
        .catch((error) => {
            if (error instanceof Error) {
                console.log('ERROR. ConnectWallet:', error);
                logEvent('', { message: `ERROR. ConnectWallet: ${error.name}: ${error.message}` }, LogName.ERRORS);
            } else {
                console.log('ERROR (of unexpected type!). ConnectWallet:', error);
                logEvent(
                    '',
                    { message: `ERROR (of unexpected type!). ConnectWallet: ${String(error)}` },
                    LogName.ERRORS
                );
            }
        });
};

const disconnectWallet = () => {
    const finalDisconnect = () => {
        localStorage.removeItem(WALLET_TYPE_KEY);
        window.location.reload();
    };

    const { algorand } = window;
    if (algorand && 'disconnect' in algorand) {
        void algorand.disconnect().then(finalDisconnect);
    } else {
        finalDisconnect();
    }
};

export function ConnectWallet({ buttonClassName = 'connect_wallet' }: { buttonClassName?: string }) {
    const account = useUnit($account);
    const [Modal, open, close, isOpen] = useModal('root', { preventScroll: true });
    const [accDropdownOpen, setAccDropdownOpen] = useState(false);
    const prefix = ALGONET === TESTNET ? 'testnet.' : '';

    // check local state once when the element is rendered first
    useEffect(() => {
        const connectedWallet = localStorage.getItem(WALLET_TYPE_KEY);
        if (connectedWallet !== null && !window.algorand) {
            connectWallet(connectedWallet as WalletType);
        }
    }, []);

    useEffect(() => {
        window.addEventListener(
            'click',
            () => {
                accDropdownOpen && setAccDropdownOpen(!accDropdownOpen);
            },
            { once: true }
        );
    }, [accDropdownOpen]);

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
                    <button className={buttonClassName} onClick={open}>
                        CONNECT WALLET
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
                                href={'https://' + prefix + 'algoexplorer.io/address/' + account.networkAccount.addr}
                                rel="noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="account_item">Algoexplorer</div>
                            </a>
                            {ALGONET === TESTNET && (
                                <a
                                    target="_blank"
                                    href="https://dispenser.testnet.aws.algodev.network/"
                                    rel="noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className="account_item">Get testnet ALGOs</div>
                                </a>
                            )}
                            <a href="/" style={{ textDecoration: 'none' }} onClick={disconnect}>
                                <div className="account_item">Disconnect</div>
                            </a>
                        </div>
                    </>
                )}
            </div>
            <Modal>
                <ConnectWalletModal closeModal={close} isModalOpen={isOpen} />
            </Modal>
        </>
    );
}
