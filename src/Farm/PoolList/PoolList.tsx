import { Pool } from './Pool';
import { PoolListContainer, PoolListHeader, PoolListHeaderElement } from './styled';
import { useList } from 'effector-react';
import { Contract, FarmType } from '../../common/store';
import { Store } from 'effector';

const headerColumn = [
    { name: 'POOL', width: 30 },
    { name: 'TVL', width: 16.5 },
    { name: 'APR', width: 16.5 },
    { name: 'MY STAKE', width: 16.5 },
    { name: 'REWARD', width: 16.5 },
    { name: 'ENDS IN', width: 16.5 },
];

export const PoolList = <T extends FarmType>({ type, pools }: { type: T; pools: Store<Contract<T>[]> }) => {
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
            {/* {isError && <InfoHeader>Oops Something went wrong :( </InfoHeader>} */}
            {poolComponents}
        </PoolListContainer>
    );
};
