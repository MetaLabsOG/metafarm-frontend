import { useQuery } from 'react-query';
import { last, path } from 'ramda';
import { getTotalCost } from '../providers/apiProvider';
import metapunks_banner from '../imgs/metapunks_banner.png';
import { Button } from '../Components/Button/Button';
import { METAWALLET } from '../AppContext';
import { theme } from '../theme';
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
    Subtext,
    Features,
    FeatureBlock,
} from './styled';

import { NFTList } from './NFTList';
import { AssetsChart } from './AssetsChart';
import { MetaTreasuryChart } from './MetaTreasuryChart';

export function MetaDAO() {
    const totalCostsQuery = useQuery(['totalCost', METAWALLET], async () => getTotalCost(METAWALLET));
    const dataset = totalCostsQuery.data ?? [];

    return (
        <MetaDAOContainer>
            {dataset.length > 0 ? (
                <>
                    <img alt="Metapunks" width="100%" src={metapunks_banner} />
                    <div
                        style={{
                            marginTop: '20px',
                            marginBottom: '20px',
                            fontFamily: 'Montserrat',
                            fontSize: '20px',
                            color: theme.white,
                        }}
                    >
                        <Header>The Metapunks are 2589 3D NFT avatars minted on Algorand</Header>
                        <div style={{ color: theme.lightGray }}>
                            Metapunks will give you access to Utility on every sectors of the blockchain world: DeFi /
                            NFTs / Gaming / Metaverses.
                        </div>
                        <br />
                        <br />
                        Right now, Metapunk NFT provides exclusive access to:
                        <br /> <br />
                        <Features>
                            <FeatureBlock>
                                <ul>
                                    <li>
                                        The Cometa $META Token <Subtext>via bi-mensual airdrops.</Subtext>
                                    </li>
                                    <br />
                                    <li>
                                        Gaming Tournaments{' '}
                                        <Subtext>in Collaboration with the Zone (Algorand main P2E platform).</Subtext>
                                    </li>
                                    <br />
                                    <li>
                                        Using your NFT as Metaverse avatar{' '}
                                        <Subtext>with projects we are currently working with.</Subtext>
                                    </li>
                                    <br />
                                    <li>
                                        {' '}
                                        The Metapunks Vintage Game collection{' '}
                                        <Subtext>and private gaming competitions.</Subtext>
                                    </li>
                                </ul>
                            </FeatureBlock>
                            <FeatureBlock>
                                <ul>
                                    <li>
                                        Discord Holder Hub and the NFT Reward program{' '}
                                        <Subtext>
                                            where the holders get the chance to win multiple NFTs every weeks.
                                        </Subtext>
                                    </li>
                                    <br />
                                    <li>
                                        Special Holders event like Poker Tournaments{' '}
                                        <Subtext>with other DeFi / NFT projects.</Subtext>
                                    </li>
                                    <br />
                                    <li>
                                        Using 3D animated avatar in Augmented Reality{' '}
                                        <Subtext>and also integrate it in various Metaverses Projects.</Subtext>
                                    </li>
                                    <br />
                                    <li>
                                        MetaTreasury DAO
                                        <Subtext>
                                            where holders each week decide which tokens or NFT to buy. Of course, all
                                            the profits will be reinvested for the holders as prizes or to build new
                                            utility!
                                        </Subtext>
                                    </li>
                                </ul>
                            </FeatureBlock>
                        </Features>
                        <br />
                        <br />
                        With the Metapunks project, our goal is to build a succesfull organization, and owning 1 of our
                        2589 NFTs is like your share in this organization.
                        <br />
                        <br />
                        So if you want to change the game... JOIN US!
                        <br />
                        <br />
                    </div>
                    <a
                        target="_blank"
                        href={'https://www.nftexplorer.app/sellers/metapunks'}
                        style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                        rel="noreferrer"
                    >
                        <Button
                            buttonText="BUY METAPUNKS"
                            style={{
                                width: '300px',
                                height: '50px',
                                fontSize: '20px',
                            }}
                            onClick={() => {
                                // do nothing
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
}
