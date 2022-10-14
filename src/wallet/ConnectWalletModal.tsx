import { useEffect, useState } from 'react';
import pera from '../imgs/pera.svg';
import myalgo from '../imgs/myalgo.svg';
import { WalletType } from './customWalletFallback';
import { connectWallet } from './ConnectWallet';
import { WalletButton, WalletHeader, WalletModalContainer, WalletText } from './styled';

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
            <WalletHeader>CHOOSE WALLET</WalletHeader>
            <WalletButton onClick={() => walletClick('MyAlgo')}>
                <WalletText>Connect to MyAlgo</WalletText>
                <img style={{ width: '28px', height: '28px' }} alt="myalgo wallet" src={myalgo} />
            </WalletButton>
            <WalletButton onClick={() => walletClick('WalletConnect')}>
                <WalletText>Connect to Pera wallet</WalletText>
                <img style={{ width: '28px', height: '28px' }} alt="pera wallet" src={pera} />
            </WalletButton>
        </WalletModalContainer>
    );
}
