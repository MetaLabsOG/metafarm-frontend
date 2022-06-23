import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getContracts } from '../../providers/apiProvider';
import { Pool } from './Pool';
import { PoolListContainer, PoolListHeader, PoolListHeaderElement } from './styled';
import { InfoHeader } from '../../common/styled';
import { useList } from 'effector-react';
import { Contract, ContractInfo, FarmType } from '../../common/store';
import { Store, Event } from 'effector';

const headerColumn = [
    { name: 'POOL', width: 30 },
    { name: 'TVL', width: 16.5 },
    { name: 'APR', width: 16.5 },
    { name: 'MY STAKE', width: 16.5 },
    { name: 'REWARD', width: 16.5 },
    { name: 'ENDS IN', width: 16.5 },
];

export const PoolList = <T extends FarmType>({
    type,
    pools,
    setPoolInfos,
}: {
    type: T;
    pools: Store<Contract<T>[]>;
    setPoolInfos: Event<ContractInfo<T>[]>;
}) => {
    const { data, isError, isSuccess } = useQuery(['contracts', type], () => getContracts(type));

    useEffect(() => {
        if (isSuccess) {
            setPoolInfos(data);
        }
    }, [data, isError, isSuccess]);

    const poolComponents = useList(pools, (ctc: Contract<T>, index: number) => (
        <Pool type={type} key={index} contract={ctc} />
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
