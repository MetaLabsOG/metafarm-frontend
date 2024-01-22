import React, { useEffect } from 'react';
import '@google/model-viewer/dist/model-viewer';
import { Button } from '../Components/Button/Button';
import { Metapunk, METAPUNKS_INFO } from './Metapunks';
import { Header, PunkContainer, PunkDownload, PunkImage, PunkItem, PunkName, Subheader2 } from './styled';

export function Punk({ asset }: { asset: Metapunk }) {
    if (!asset) {
        return null;
    }

    const modelViewerStyle =
        window.innerWidth <= 700
            ? { width: '320px', height: '320px', borderRadius: '10px' }
            : { width: '420px', height: '420px', borderRadius: '10px' };

    return (
        <PunkContainer>
            <PunkName href={'https://www.nftexplorer.app/asset/' + asset.asset_id}>{asset.name}</PunkName>
            <PunkItem>
                <div>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*// @ts-ignore*/}
                    <model-viewer
                        bounds="tight"
                        src={asset.model_3d_url}
                        ar
                        autoplay
                        ar-modes="webxr scene-viewer quick-look"
                        // xr-environment
                        camera-controls
                        environment-image="neutral"
                        poster={asset.main_url}
                        shadow-intensity="1"
                        style={modelViewerStyle}
                        auto-rotate
                    >
                        <button
                            slot="ar-button"
                            style={{
                                backgroundColor: 'black',
                                borderRadius: '5px',
                                border: '2px solid white',
                                fontSize: '6vw',
                                color: 'white',
                                fontFamily: 'Montserrat',
                                position: 'absolute',
                                bottom: '15px',
                                left: '0px',
                                padding: '10px',
                            }}
                        >
                            TRY AR
                        </button>
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*// @ts-ignore*/}
                    </model-viewer>
                </div>
                <div>
                    <a href={asset.main_url} target="_blank" rel="noreferrer">
                        <PunkImage src={asset.main_url} />
                    </a>
                    <a href={asset.face_url} target="_blank" rel="noreferrer">
                        <PunkImage src={asset.face_url} />
                    </a>
                    <a href={asset.side_url} target="_blank" rel="noreferrer">
                        <PunkImage src={asset.side_url} />
                    </a>
                </div>
            </PunkItem>
            <a
                href={asset.model_3d_url}
                style={{ textDecoration: 'none', marginTop: '20px' }}
                target="_blank"
                rel="noreferrer"
            >
                <PunkDownload>Download 3D model</PunkDownload>
            </a>
        </PunkContainer>
    );
}

export function PunksGallery({ metapunks }: { metapunks: Metapunk[] }) {
    const SHOW_CNT = 5;
    const [assetsCntShow, setAssetsCntShow] = React.useState(SHOW_CNT);
    const [assetsShow, setAssetsShow] = React.useState<Metapunk[]>([]);

    useEffect(() => {
        if (metapunks.length) {
            setAssetsShow(metapunks.slice(0, SHOW_CNT));
        } else {
            const start = Math.floor(Math.random() * Object.values(METAPUNKS_INFO).length);
            setAssetsShow(Object.values(METAPUNKS_INFO).slice(start, start + 3));
        }
    }, [metapunks]);

    const handleShowMore = () => {
        const newEnd = Math.min(assetsCntShow + SHOW_CNT, metapunks.length);
        setAssetsShow(metapunks.slice(0, newEnd));
        setAssetsCntShow(newEnd);
    };

    return (
        <React.Fragment>
            {metapunks.length === 0 && (
                <Header style={{ marginTop: '30px' }}>
                    {"You don't have any Metapunks, get yours on secondary!👇"}
                </Header>
            )}
            {metapunks.length > 0 && <Header>You have {metapunks.length} Metapunks</Header>}
            {assetsShow.map((asset, idx) => (
                <Punk key={idx} asset={asset} />
            ))}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '100px',
                }}
            >
                {assetsCntShow < metapunks.length && <Button onClick={handleShowMore} buttonText={'show more'} />}
            </div>
        </React.Fragment>
    );
}
