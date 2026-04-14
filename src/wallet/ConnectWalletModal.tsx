import React, { useEffect, useState, useRef } from 'react';
import pera from '../imgs/pera.svg';
import defly from '../imgs/defly.svg';
import closeButton from '../imgs/close.svg';
import { ModalCloseButton } from '../common/styled';
import { WalletType } from './customWalletFallback';
import { connectWallet } from './ConnectWallet';
import { isMobileWalletDevice } from './deviceDetection';
import { DeflyButton, PeraButton, WalletHeader, WalletModalContainer, WalletText } from './styled';

export function ConnectWalletModal({ closeModal, isModalOpen }: { closeModal: () => void; isModalOpen: boolean }) {
    const [finishedOpening, setFinishedOpening] = useState(false);
    const [connecting, setConnecting] = useState<WalletType | null>(null);
    const closeButtonRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        setFinishedOpening(isModalOpen);
        if (!isModalOpen) {
            setConnecting(null);
        }

        if (isModalOpen) {
            const timer = setTimeout(() => {
                if (closeButtonRef.current) {
                    closeButtonRef.current.tabIndex = 0;
                }
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [isModalOpen]);

    const walletClick = (walletType: WalletType) => {
        if (connecting) return;
        setConnecting(walletType);
        const result = Promise.resolve(connectWallet(walletType));

        if (isMobileWalletDevice()) {
            // Mobile: user leaves to Pera/Defly and comes back — keep modal open
            // with the "Connecting..." state so they have feedback. Close only
            // when the real connect flow resolves (success, rejection, timeout).
            result.finally(() => closeModal());
        } else {
            // Desktop: WalletConnect opens its own QR modal on top — close ours
            // after a short delay so only the QR is visible.
            setTimeout(closeModal, 300);
        }
    };

    return (
        <WalletModalContainer finishedOpening={finishedOpening} role="dialog" aria-label="Connect wallet" aria-modal="true">
            <ModalCloseButton
                ref={closeButtonRef}
                src={closeButton}
                alt="Close"
                role="button"
                aria-label="Close dialog"
                onClick={closeModal}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeModal(); } }}
            />
            <WalletHeader>Connect Wallet</WalletHeader>
            <PeraButton
                onClick={() => walletClick('WalletConnect')}
                tabIndex={0}
                style={{ opacity: connecting && connecting !== 'WalletConnect' ? 0.4 : 1 }}
            >
                <img style={{ width: '28px', height: '28px', marginRight: '12px' }} alt="pera wallet" src={pera} />
                <WalletText style={{ color: 'black' }}>
                    {connecting === 'WalletConnect' ? 'Connecting...' : 'Pera'}
                </WalletText>
            </PeraButton>
            <DeflyButton
                onClick={() => walletClick('WalletConnectDefly')}
                tabIndex={0}
                style={{ opacity: connecting && connecting !== 'WalletConnectDefly' ? 0.4 : 1 }}
            >
                <img style={{ width: '28px', height: '28px', marginRight: '12px' }} alt="defly wallet" src={defly} />
                <WalletText style={{ color: 'white' }}>
                    {connecting === 'WalletConnectDefly' ? 'Connecting...' : 'Defly'}
                </WalletText>
            </DeflyButton>
        </WalletModalContainer>
    );
}
