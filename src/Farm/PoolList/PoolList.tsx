import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getContracts } from '../../providers/apiProvider';
import { Pool } from './Pool';
import { PoolListContainer, PoolListHeader, PoolListHeaderElement } from './styled';
import { InfoHeader } from '../../common/styled';
import { useList } from 'effector-react';
import { Asset, Contract, ContractInfo, Priced } from '../../common/store';
import { Store } from 'effector';
import { LPTokenInfo } from '../../providers/dexesProvider';
import Immutable from 'immutable';

const headerColumn = [
    { name: 'POOL', width: 30 },
    { name: 'TVL', width: 16.5 },
    { name: 'APR', width: 16.5 },
    { name: 'MY STAKE', width: 16.5 },
    { name: 'REWARD', width: 16.5 },
    { name: 'ENDS IN', width: 16.5 },
];

export const PoolList = ({
    type,
    pools,
    setPoolInfos,
    LPTokens,
    RewardTokens,
}: {
    type: string;
    pools: Store<Contract<'farm'>[]>; // @ts-ignore
    setPoolInfos: Event<ContractInfo<'farm'>[]>;
    LPTokens: Store<Immutable.Map<number, Priced<LPTokenInfo> | null>>;
    RewardTokens: Store<Immutable.Map<number, Priced<Asset> | null>>;
}) => {
    const { data, isError, isSuccess } = useQuery(['contracts', type], () => getContracts(type));

    useEffect(() => {
        if (isSuccess) {
            setPoolInfos(data);
        }
    }, [data, isError, isSuccess]);

    const poolComponents = useList(pools, (ctc: Contract<'farm'>, index: number) => (
        <Pool type={type} key={index} contract={ctc} LPTokens={LPTokens} RewardTokens={RewardTokens} />
    ));

    return (
        <PoolListContainer>
            <PoolListHeader>
                {headerColumn.map((column, i) => (
                    <PoolListHeaderElement width={column.width} key={`${column.name}${i}`}>
                        {column.name}
                    </PoolListHeaderElement>
                ))}
            </PoolListHeader>
            {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>}
            {poolComponents}
        </PoolListContainer>
    );
};
