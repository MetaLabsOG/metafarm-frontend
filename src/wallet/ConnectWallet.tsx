import { CSSProperties, MouseEventHandler, useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { detect } from 'detect-browser';

import '../css/wallet.css';
import styled from 'styled-components';
import { useUnit } from 'effector-react';
import { theme } from '../theme';
import { logEvent, LogName } from '../logEvent';
import { $account, setAccount } from '../common/store';
import { ALGONET, reach, TESTNET } from '../AppContext';
import { notify } from '../Components/Notification';
import { customWalletFallback, WalletType } from './customWalletFallback';
import { ConnectWalletModal } from './ConnectWalletModal';
import { clearWalletData, getWalletNfd, getWalletType, updateWalletAddress, updateWalletType } from './info';

export const BROWSER = detect();
const browserInfoString =
    BROWSER === null
        ? 'unknown'
        : `${BROWSER.name} ${BROWSER.version ?? 'UNKNOWN_VERSION'} ${BROWSER.os ?? 'UNKNOWN_OS'}`;

export const connectWallet = (walletType: WalletType) => {
    reach.clearProvider();
    delete window.algorand;

    reach.setWalletFallback(customWalletFallback({ providerEnv: ALGONET, walletType }));
    if (walletType === 'WalletConnect' && ALGONET === TESTNET) {
        notify('Please, switch you Pera wallet to testnet.', 'info');
    }
    if (walletType === 'WalletConnectDefly' && ALGONET === TESTNET) {
        notify('Please, switch you Defly wallet to testnet.', 'info');
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
                    status: '[WALLET CONNECT]',
                    wallet_type: walletType,
                    window_width: window.innerWidth,
                    browser: browserInfoString,
                },
                LogName.WALLET
            );
            updateWalletType(walletType);
            updateWalletAddress(acc.networkAccount.addr);

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
        clearWalletData();
        window.location.reload();
    };

    const { algorand } = window;
    if (algorand && 'disconnect' in algorand) {
        void algorand.disconnect().then(finalDisconnect);
    } else {
        finalDisconnect();
    }
};

const PrettyButtonContainer = styled.a`
    //color: ${theme.lightGreen};
    color: ${theme.pureWhite};
    //border: 1px solid #90ee90;
    border: 2px solid ${theme.pureWhite};
    text-decoration: none;
    //background-color: transparent;
    background-color: revert;
    outline: none;
    border-radius: 15px;
    font-family: 'Korona One';
    font-size: 13px;
    font-weight: 10;
    //font-family: 'Montserrat';
    //font-size: 15px;
    //font-weight: 400;
    //height: 32px;
    padding: 5px 13px 5px 13px;
    height: 32px;

    :hover {
        cursor: pointer;
        color: gray;
    }

    //@media (max-width: 922px) {
    //    font-size: 13px;
    //    padding: 6px 15px 6px 15px;
    //    height: 30px;
    //}
    //
    //@media (max-width: 872px) {
    //    font-size: 13px;
    //    padding: 6px 14px 6px 14px;
    //    height: 30px;
    //}

    @media (max-width: 700px) {
        //text-align: center;
        //border-radius: 15px;
        //font-size: 12px;
        //padding: 6px 15px 6px 15px;
        //font-weight: 300;
        //width: 140px;
        //height: 30px;
        //margin-top: 0;
        :hover {
            cursor: pointer;
        }
    }
`;

export function ConnectWallet({
    buttonClassName = 'connect_wallet',
    style,
}: {
    buttonClassName?: string;
    style?: CSSProperties;
}) {
    const account = useUnit($account);
    const [Modal, open, close, isOpen] = useModal('root');
    const [accDropdownOpen, setAccDropdownOpen] = useState(false);
    const prefix = ALGONET === TESTNET ? 'testnet.' : '';
    const [walletNfd, setWalletNfd] = useState<string | undefined>(undefined);

    // check local state once when the element is rendered first
    useEffect(() => {
        const connectedWallet = getWalletType();
        if (connectedWallet !== null && !window.algorand) {
            connectWallet(connectedWallet as WalletType);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('click', () => {
            accDropdownOpen && setAccDropdownOpen(!accDropdownOpen);
        });
    }, [accDropdownOpen]);

    useEffect(() => {
        getWalletNfd()
            .then(setWalletNfd)
            .catch((error) => {
                console.error(`Failed to fetch options: ${String(error)}`);
            });
    }, [account]);

    const toggleDropdown: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
            <div className="wallet_container" style={style}>
                {!account ? (
                    <button className={buttonClassName} onClick={open}>
                        CONNECT WALLET
                    </button>
                ) : (
                    <>
                        <PrettyButtonContainer onClick={toggleDropdown}>
                            {walletNfd ?? account.networkAccount.addr}
                        </PrettyButtonContainer>
                        <div
                            className="account_dropdown_container"
                            style={{
                                display: accDropdownOpen ? 'flex' : 'none',
                            }}
                        >
                            <a
                                target="_blank"
                                href={'https://allo.info/account/' + account.networkAccount.addr}
                                rel="noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="account_item">Account Review</div>
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
