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
        <AddFarmButtonContainer target="_blank" href={`/add${addFarmType}`} rel="noreferrer">
            {`Create ${addFarmType}`}
        </AddFarmButtonContainer>
    );
};

export function PoolList({ pools, poolType }: { pools: PoolWithStats[]; poolType: string }) {
    const currentBlock = useUnit($networkTime);

    const [sortKey, setSortKey] = useState<ColumnType>(ColumnType.Tvl);
    const [isAscSort, setIsAscSort] = useState(false);

    const [showVerified, setShowVerified] = useState(false);
    const [showLive, setShowLive] = useState(false);

    const poolComponents = pools
        .filter((pws: PoolWithStats) => {
            let isShown = true;
            if (showVerified) {
                isShown = Boolean(pws.pool.info.metadata.verified);
            }
            if (showLive) {
                const beginBlock = pws.pool.state?.initial?.beginBlock ?? 0;
                const endBlock = pws.pool.state?.initial?.endBlock ?? 1e9;
                isShown = isShown && currentBlock > beginBlock && currentBlock < endBlock;
            }
            return isShown;
        })
        .map((pws: PoolWithStats) => <Pool key={pws.pool.id} pws={pws} />);

    const sortEvent = useUnit(sortPools);

    useEffect(() => {
        sortEvent({ type: ColumnType.Tvl, asc: false });
    }, []);

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
                    <SwitchSelect switchStatus={showLive} onChange={setShowLive} switchText={'live pools'} />
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
