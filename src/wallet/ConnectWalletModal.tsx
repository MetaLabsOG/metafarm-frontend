import React, { useEffect, useState } from 'react';
import pera from '../imgs/pera.svg';
import defly from '../imgs/defly.svg';
import closeButton from '../imgs/close.svg';
import { ModalCloseButton } from '../common/styled';
import { WalletType } from './customWalletFallback';
import { connectWallet } from './ConnectWallet';
import { DeflyButton, PeraButton, WalletHeader, WalletModalContainer, WalletText } from './styled';

export function ConnectWalletModal({ closeModal, isModalOpen }: { closeModal: () => void; isModalOpen: boolean }) {
    const [finishedOpening, setFinishedOpening] = useState(false);

    useEffect(() => {
        setFinishedOpening(isModalOpen);
    }, [isModalOpen]);

    const walletClick = (walletType: WalletType) => {
        connectWallet(walletType);
        closeModal();
    };

    return (
        <WalletModalContainer finishedOpening={finishedOpening}>
            <ModalCloseButton src={closeButton} alt="close" onClick={closeModal} />
            <WalletHeader>Connect Wallet</WalletHeader>
            <PeraButton onClick={() => walletClick('WalletConnect')}>
                <img style={{ width: '28px', height: '28px', marginRight: '12px' }} alt="pera wallet" src={pera} />
                <WalletText style={{ color: 'black' }}>Pera</WalletText>
            </PeraButton>
            <DeflyButton onClick={() => walletClick('WalletConnectDefly')}>
                <img style={{ width: '28px', height: '28px', marginRight: '12px' }} alt="defly wallet" src={defly} />
                <WalletText style={{ color: 'white' }}>Defly</WalletText>
            </DeflyButton>
        </WalletModalContainer>
    );
}
