import { useQuery } from 'react-query';
import { last, path } from 'ramda';
import {
    MetaTreasury,
    MetaTreasuryBalance,
    MetaTreasuryText,
    WalletInfo,
    Wallet,
    Header,
    Charts,
    MetaDAOContainer,
    Fail,
} from './styled';

import { getTotalCost } from '../providers/apiProvider';
import { METAWALLET } from '../AppContext';
import { NFTList } from './NFTList';
import { AssetsChart } from './AssetsChart';
import { MetaTreasuryChart } from './MetaTreasuryChart';
import metapunks_banner from '../imgs/metapunks_banner.png';
import React from 'react';
import { Button } from '../Components/Button/Button';

export const MetaDAO = () => {
    const totalCostsQuery = useQuery(['totalCost', METAWALLET], () => getTotalCost(METAWALLET));
    const dataset = totalCostsQuery.data ?? [];

    return (
        <MetaDAOContainer>
            {dataset.length ? (
                <>
                    <img alt="Metapunks" width="100%" src={metapunks_banner} />
                    <div
                        style={{
                            marginTop: '20px',
                            marginBottom: '20px',
                            fontFamily: 'Montserrat',
                            fontSize: '18px',
                            color: 'white',
                        }}
                    >
                        The Metapunks are 2589 3D NFT avatar that will give you access to Utility on every sector of the
                        blockchain world: DeFi / NFTs / Gaming / Metaverses. Buy one of our 3D Avatar to Enter the
                        Holder Hub! <br />
                        <br />
                        Once you enter our Holder Hub on Discord, you’ll have access to multiple NFT reward every week:
                        Private Poker Tournament, Holders event, and Token airdrop from the DeFi platform COMETA.
                        <br /> <br />
                        Also we have a investment funds, managed by our holders. Holders vote every week for the futures
                        actions of the MetaTreasury DAO. Trades, Investments, NFT buys… every action of the MetaTreasury
                        will be decided by the Holders.
                    </div>
                    <a
                        target="_blank"
                        href={'https://metapunks.world/'}
                        style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                        rel="noreferrer"
                    >
                        <Button
                            onClick={() => {
                                return;
                            }}
                            buttonText={'JOIN METAPUNKS'}
                            style={{
                                width: '300px',
                                height: '50px',
                                fontSize: '20px',
                            }}
                        />
                    </a>
                    <WalletInfo>
                        <Header>The MetaTreasury DAO</Header>
                        <div
                            style={{
                                marginTop: '20px',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            <Wallet target="_blank" href={`https://algoexplorer.io/address/${METAWALLET}`}>
                                METATREASURY WALLET
                            </Wallet>
                        </div>
                    </WalletInfo>
                    <MetaTreasury>
                        <MetaTreasuryBalance>{`${
                            totalCostsQuery.isLoading ? 0 : Math.floor(path(['cost', 'usd'], last(dataset)) ?? 0)
                        }$`}</MetaTreasuryBalance>
                        <MetaTreasuryText>/MetaTreasury</MetaTreasuryText>
                    </MetaTreasury>
                    <Charts>
                        <MetaTreasuryChart dataset={dataset} />
                        <AssetsChart />
                    </Charts>
                    <NFTList />
                </>
            ) : (
                <Fail>Loading...</Fail>
            )}
        </MetaDAOContainer>
    );
};
