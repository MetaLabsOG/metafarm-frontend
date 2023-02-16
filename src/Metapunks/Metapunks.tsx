import { useUnit } from 'effector-react';
import React, { useState, useEffect } from 'react';
import { Button } from '../Components/Button/Button';
import { $accountInfo } from '../common/store';
import MetapunksInfo from '../Metapunks.json';
import { Header, MetapunksContainer, Subheader } from './styled';
import { PunksGallery } from './PunksGallery';

export interface Metapunk {
    asset_id: number;
    punk_id: string | number;
    name: string;
    unit_name: string;
    main_url: string;
    model_3d_url: string;
    face_url: string;
    side_url: string;
    attributes: { trait_type: string; value: string }[];
}

export const METAPUNKS_INFO: Record<string, Metapunk> = MetapunksInfo;

export function Metapunks() {
    const accountInfo = useUnit($accountInfo);
    const [metapunksIds, setMetapunksIds] = useState<Metapunk[]>([]);

    useEffect(() => {
        if (!accountInfo) {
            return;
        }

        const accountAssetsIds = accountInfo.assets.map((asset: any) => asset['asset-id']);
        const metapunks = accountAssetsIds
            .filter((asset_id: any) => METAPUNKS_INFO[asset_id.toString()])
            .map((asset_id: any) => METAPUNKS_INFO[asset_id]);
        console.log(metapunks);
        setMetapunksIds(metapunks);
    }, [accountInfo]);

    return (
        <MetapunksContainer>
            <Header>The Metapunks are 3D NFT avatars on Algorand</Header>
            <Subheader>
                Right now, Metapunk NFT provides exclusive access to Discord Holder Hub, the NFT Reward program, Special
                Holders event like Poker Tournaments, Using 3D animated avatar in Augmented Reality and MetaTreasury
                DAO.
            </Subheader>
            <a
                target="_blank"
                href="https://www.nftexplorer.app/sellers/metapunks"
                style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                rel="noreferrer"
            >
                <Button
                    buttonText="BUY METAPUNKS"
                    style={{
                        width: 300,
                        height: 50,
                        fontSize: 20,
                        marginBottom: 20,
                    }}
                    onClick={() => {
                        // Do nothing
                    }}
                />
            </a>
            <PunksGallery metapunks={metapunksIds} />
        </MetapunksContainer>
    );
}
