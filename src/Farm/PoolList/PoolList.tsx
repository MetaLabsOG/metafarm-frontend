import { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getContracts } from '../../providers/apiProvider';
import { $pools, setPoolInfos } from '../store';
import { Pool } from './Pool';

// TODO should add types in lib
//@ts-ignore

import { PoolListContainer, PoolListHeader, PoolListHeaderElement } from './styled';
import { PoolT } from './types';
import { InfoHeader } from '../../common/styled';
import { useStore, useList } from 'effector-react';
import { $account, Contract } from '../../common/store';

const headerColumn = [
    { name: 'POOL', width: 20 },
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

    const poolComponents = useList($pools, (ctc: Contract<'farm'>, index: number) => (
        <Pool key={index} contract={ctc} />
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
