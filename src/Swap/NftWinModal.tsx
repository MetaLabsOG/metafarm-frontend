import React, { useState } from 'react';
import { useUnit } from 'effector-react';
import { ModalContainer, ModalTitle, ModalSubtitle } from '../common/styled';
import { Button } from '../Components/Button/Button';
import { batchOptIn } from '../batchOptIn';
import { reach } from '../AppContext';
import { $account } from '../common/store';
import { nftClaim } from '../providers/apiProvider';
import Confetti from '../Components/Confetti/Confetti';
import { notify } from '../Components/Notification';
import { PacmanButton } from '../Components/PacmanButton/PacmanButton';

export interface NftLottery {
    asa_id: number;
    name: string;
    image_url: string;
    title: string;
}

export const NftWinModal = ({ txId, nft }: { txId: string; nft: NftLottery }) => {
    const account = useUnit($account);
    const nftLink = nft.image_url;
    const [receivedNft, setReceivedNft] = useState<boolean>(false);

    const onClick = async () => {
        if (!account) {
            return;
        }

        try {
            const address = account.networkAccount.addr;
            console.log('WIN NFT!', nft);
            await batchOptIn(reach, address, [nft.asa_id], false);
            await nftClaim(address);
            setReceivedNft(true);
            notify('Done! NFT is in your wallet!', 'success');
        } catch (error) {
            const error_message = error instanceof Error ? error.message : String(error);
            notify(error_message, 'error');
        }
    };
    return (
        <ModalContainer>
            <ModalTitle style={{ width: 300, fontFamily: 'Montserrat' }}>{nft.title}</ModalTitle>
            <ModalSubtitle>Please, opt-in and we will send it to you!</ModalSubtitle>
            <img alt="NFT" width="300px" src={nftLink} style={{ marginBottom: 20 }} />
            {!receivedNft && <PacmanButton buttonText="OPTIN" buttonStyle="swap_button" onClickAction={onClick} />}
            {receivedNft && <ModalTitle style={{ width: 300, fontFamily: 'Montserrat' }}>Done!</ModalTitle>}
            <Confetti showConfetti />
        </ModalContainer>
    );
};
