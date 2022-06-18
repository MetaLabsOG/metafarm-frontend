import React from 'react';
import { useQuery } from 'react-query';
import { METAWALLET } from '../AppContext';
import { getWalletNFT } from '../providers/apiProvider';
import { ArrowUp } from '../imgs/arrowUp';

import {
    NFTListContainer,
    NFTCard,
    NFTCardInfo,
    Nft,
    NftName,
    NftPrice,
    NftWeekPriceChange,
    NFtPriceValue,
} from './styled';
import { formatNumber } from '../Swap/Swap';

export const NFTList = () => {
    const { data } = useQuery(['nftAssets', METAWALLET], () => getWalletNFT(METAWALLET));

    return (
        <NFTListContainer>
            {data &&
                data.map((nft: any) => (
                    <a
                        key={nft.image_url}
                        target="_blank"
                        href={`https://www.nftexplorer.app/asset/${nft.asa_id}`}
                        style={{ textDecoration: 'none' }}
                        rel="noreferrer"
                    >
                        <NFTCard>
                            <Nft url={nft.image_url} />
                            <NFTCardInfo>
                                <NftName>{nft.name}</NftName>
                                <NftPrice>${formatNumber(nft.floor_price.usd)}</NftPrice>
                                {nft.week_price_change && (
                                    <NftWeekPriceChange>
                                        {nft.week_price_change > 0 ? <ArrowUp /> : <ArrowUp rotate />}
                                        <NFtPriceValue>
                                            {`${
                                                nft.week_price_change > 0
                                                    ? `+${formatNumber(nft.week_price_change)}`
                                                    : formatNumber(nft.week_price_change)
                                            }% week`}
                                        </NFtPriceValue>
                                    </NftWeekPriceChange>
                                )}
                            </NFTCardInfo>
                        </NFTCard>
                    </a>
                ))}
        </NFTListContainer>
    );
};
