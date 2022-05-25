import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getContracts } from '../../providers/apiProvider';
import { $sortedPools, setPoolInfos } from '../store';
import { Pool } from './Pool';
import { PoolListContainer, PoolListHeader, PoolListHeaderElement } from './styled';
import { InfoHeader } from '../../common/styled';
import { useList } from 'effector-react';
import { Contract } from '../../common/store';

const headerColumn = [
    { name: 'POOL', width: 30, paddingLeft: 20},
    { name: 'TVL', width: 16.5 },
    { name: 'APR', width: 16.5 },
    { name: 'MY STAKE', width: 16.5 },
    { name: 'REWARD', width: 16.5 },
    { name: 'ENDS IN', width: 16.5 },
];

export const PoolList = () => {
    const { data, isError, isSuccess } = useQuery(['contracts', 'farm'], () => getContracts('farm'));


    useEffect(() => {
        if (isSuccess) {
            setPoolInfos(data);
        }
    }, [data, isError, isSuccess]);

 
    const poolComponents = useList($sortedPools, (ctc: Contract<'farm'>) => (
        <Pool key={ctc.id} id={ctc.id} contract={ctc} />
    ))

    return (
        <PoolListContainer>
            <PoolListHeader>
                {headerColumn.map((column, i) => (
                    <PoolListHeaderElement width={column.width} paddingLeft={column.paddingLeft}  key={`${column.name}${i}`}>
                        {column.name}
                    </PoolListHeaderElement>
                ))}
            </PoolListHeader>
            {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>}
            {poolComponents}
        </PoolListContainer>
    );
};
