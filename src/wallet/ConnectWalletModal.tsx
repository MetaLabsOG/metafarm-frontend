import { useEffect, useState } from 'react';
import { WalletType } from './customWalletFallback';
import { connectWallet } from './ConnectWallet';

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
    );
}
