//@ts-nocheck
import { useQuery } from 'react-query';
import {
    MetaTreasury,
    MetaTreasuryBalance,
    MetaTreasuryText,
    WalletInfo,
    Wallet,
    Header,
    Charts,
    MetaDAOContainer,
} from './styled';

import { getTotalCost } from '../providers/apiProvider';
import { METAWALLET } from '../AppContext';
import { NFTList } from './NFTList';
import { AssetsChart } from './AssetsChart';
import { MetaTreasuryChart } from './MetaTreasuryChart';

export const MetaDAO = () => {
    const totalCostsQuery = useQuery(['totalCost', METAWALLET], () => getTotalCost(METAWALLET));
    const dataset = totalCostsQuery.data ? totalCostsQuery.data : [];

    return (
        <MetaDAOContainer>
            <WalletInfo>
                <Header>The Metapunks holders community</Header>
                <Wallet target="_blank" href={`https://algoexplorer.io/address/${METAWALLET}`}>
                    {`Wallet:${METAWALLET}`}
                </Wallet>
            </WalletInfo>
            <MetaTreasury>
                <MetaTreasuryBalance>{`${
                    totalCostsQuery.isLoading ? 0 : Math.floor(totalCostsQuery.data[0].cost.usd)
                }$`}</MetaTreasuryBalance>
                <MetaTreasuryText>/MetaTreasury</MetaTreasuryText>
            </MetaTreasury>
            <Charts>
                <MetaTreasuryChart dataSet={dataset} />
                <AssetsChart />
            </Charts>
            <NFTList />
        </MetaDAOContainer>
    );
};
