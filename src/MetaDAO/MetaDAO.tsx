import { useQuery } from 'react-query';
import { last, path } from 'ramda';
import { getTotalCost } from '../providers/apiProvider';
import metapunks_banner from '../imgs/metapunks_banner.png';
import { METAWALLET } from '../AppContext';
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
                    <WalletInfo>
                        <Header>The MetaTreasury DAO</Header>
                        <div
                            style={{
                                marginTop: '20px',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            <Wallet target="_blank" href={`https://allo.info/account/${METAWALLET}`}>
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
