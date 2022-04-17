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

export const NFTList = () => {
    const { data } = useQuery(['nftAssets', METAWALLET], () => getWalletNFT(METAWALLET));

    return (
        <NFTListContainer>
            {data &&
                data.map((nft: any) => (
                    <NFTCard key={nft.image_url}>
                        <Nft url={nft.image_url} />
                        <NFTCardInfo>
                            <NftName>{nft.name}</NftName>
                            <NftPrice>${nft.floor_price.usd}</NftPrice>
                            {nft.week_price_change && (
                                <NftWeekPriceChange>
                                    {nft.week_price_change > 0 ? <ArrowUp /> : <ArrowUp rotate />}
                                    <NFtPriceValue>
                                        {`${
                                            nft.week_price_change > 0
                                                ? `+${nft.week_price_change}`
                                                : nft.week_price_change
                                        }% week`}
                                    </NFtPriceValue>
                                </NftWeekPriceChange>
                            )}
                        </NFTCardInfo>
                    </NFTCard>
                ))}
        </NFTListContainer>
    );
};
