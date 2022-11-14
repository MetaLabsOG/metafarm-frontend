import { useUnit } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { PoolWithStats, sortPools } from '../store';
import swapArrow from '../../imgs/swapArrow.svg';
import { theme } from '../../theme';
import { SwitchSelect } from '../../Components/SwitchSelect/SwitchSelect';
import { $networkTime } from '../../common/store';
import {
    AddFarmButtonContainer,
    PoolFiltersContainer,
    PoolListArrow,
    PoolListContainer,
    PoolListHeader,
    PoolListHeaderElement,
    PoolTopLineContainer,
} from './styled';
import { Pool } from './Pool';

export enum ColumnType {
    Name = 'POOL',
    Tvl = 'TVL',
    Apr = 'APR',
    Stake = 'MY STAKE',
    Reward = 'REWARDS',
    Ends = 'ENDS IN',
}

export const POOL_COLUMN_WIDTH: Record<ColumnType, string> = {
    [ColumnType.Name]: '300px',
    [ColumnType.Tvl]: '130px',
    [ColumnType.Apr]: '130px',
    [ColumnType.Stake]: '138px',
    [ColumnType.Reward]: '180px',
    [ColumnType.Ends]: '120px',
};

const AddFarmButton = ({ addFarmType }: { addFarmType: string }) => {
    return (
        <AddFarmButtonContainer href={`/add${addFarmType}`} rel="noreferrer">
            {`Create ${addFarmType}`}
        </AddFarmButtonContainer>
    );
};

export function PoolList({ pools, poolType }: { pools: PoolWithStats[]; poolType: string }) {
    const currentBlock = useUnit($networkTime);

    const [sortKey, setSortKey] = useState<ColumnType>(ColumnType.Tvl);
    const [isAscSort, setIsAscSort] = useState(false);

    const [showVerified, setShowVerified] = useState(false);
    const [showEnded, setShowEnded] = useState(false);

    const poolComponents = pools
        .filter((pws: PoolWithStats) => {
            let isShown = true;
            if (showVerified) {
                isShown = Boolean(pws.pool.info.metadata.verified);
            }
            const endBlock = pws.pool.state?.initial?.endBlock ?? 1e9;
            const statusFilter = showEnded ? currentBlock > endBlock : currentBlock <= endBlock;
            isShown = isShown && statusFilter;
            return isShown;
        })
        .map((pws: PoolWithStats) => <Pool key={pws.pool.id} pws={pws} />);

    const sortEvent = useUnit(sortPools);

    useEffect(() => {
        const sortColumn = showEnded ? ColumnType.Stake : ColumnType.Tvl;
        setSortKey(sortColumn);
        setIsAscSort(false);
        sortEvent({ type: sortColumn, asc: false });
    }, [showEnded]);

    const onColumnClick = (key: ColumnType) => {
        if (key === sortKey) {
            sortEvent({ type: key, asc: !isAscSort });
            setIsAscSort(!isAscSort);
        } else {
            setSortKey(key);
            setIsAscSort(false);
            sortEvent({ type: key, asc: false });
        }
    };

    return (
        <div>
            <PoolTopLineContainer>
                <AddFarmButton addFarmType={poolType} />
                <PoolFiltersContainer>
                    <SwitchSelect switchStatus={showEnded} onChange={setShowEnded} switchText={'ended only'} />
                    <SwitchSelect switchStatus={showVerified} onChange={setShowVerified} switchText={'verified only'} />
                </PoolFiltersContainer>
            </PoolTopLineContainer>
            <PoolListContainer>
                <PoolListHeader>
                    {(Object.keys(ColumnType) as (keyof typeof ColumnType)[]).map((key) => (
                        <div key={key} style={{ display: 'flex', minWidth: POOL_COLUMN_WIDTH[ColumnType[key]] }}>
                            <PoolListHeaderElement
                                key={key}
                                onClick={() => onColumnClick(ColumnType[key])}
                                style={{ color: sortKey === ColumnType[key] ? theme.lightGray : theme.gray }}
                            >
                                {ColumnType[key]}
                            </PoolListHeaderElement>
                            {sortKey === ColumnType[key] && (
                                <PoolListArrow alt="arrow" src={swapArrow} isAscSort={isAscSort} />
                            )}
                        </div>
                    ))}
                </PoolListHeader>
                {poolComponents}
            </PoolListContainer>
        </div>
    );
}
