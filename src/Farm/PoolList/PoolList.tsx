import { useUnit } from 'effector-react';
import { Event } from 'effector';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PoolWithStats, sortPools } from '../store';
import swapArrow from '../../imgs/swapArrow.svg';
import { theme } from '../../theme';
import { SwitchSelect } from '../../Components/SwitchSelect/SwitchSelect';
import { SwitchSelectPools } from '../../Components/SwitchSelect/SwitchSelectMyPools';
import { PoolStateSwitcher } from '../../Components/SwitchSelect/PoolStateSwitcher';
import { VerifiedSwitch } from '../../Components/SwitchSelect/VerifiedSwitch';
import { VerifiedSwitchDesktop } from '../../Components/SwitchSelect/VerifiedSwitchDesktop';

import DropdownButton from '../../Components/DropdownButton/Dropdown';

import { $networkTime, AppId, ContractInfo, FarmType } from '../../common/store';
import { DateInput, PoolSearchInput } from '../styled';

import {
    AddFarmButtonContainer,
    PoolFiltersContainer,
    PoolListArrow,
    PoolListContainer,
    PoolListHeader,
    PoolListHeaderElement,
    PoolTopLineContainer,
    SwitchersContainer,
    SwitchersAndSearchContainer,
    TopTwoButtonsMobileContainer,
    DesktopOnly,
    MobileOnly,
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

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function PoolList({
    pools,
    poolType,
    initEvent,
}: {
    pools: PoolWithStats[];
    poolType: string;
    initEvent: (payload: ContractInfo<FarmType>) => any;
}) {
    const query = useQuery();
    const priorityPoolId = query.get('pool_id');

    const currentBlock = useUnit($networkTime);

    const [sortKey, setSortKey] = useState<ColumnType>(ColumnType.Tvl);
    const [isAscSort, setIsAscSort] = useState(false);

    const [showVerified, setShowVerified] = useState(false);
    const [showEnded, setShowEnded] = useState(false);

    const [poolSearch, setPoolSearch] = useState('');

    const [showMyPools, setShowMyPools] = useState(false);

    const poolComponents = pools
        .filter((pws: PoolWithStats) => {
            if (currentBlock === 0) {
                // Current time is not updated yet. Do not try to show the pools
                return false;
            }

            if (priorityPoolId) {
                return pws.pool.id === Number(priorityPoolId);
            }

            //test of filter for my pools
            if (showMyPools && pws.dollarInfo.userStake <= 0) {
                return false;
            }
            //test ends here

            if (
                pws.pool.info.description &&
                poolSearch !== '' &&
                !pws.pool.info.description.toLowerCase().includes(poolSearch.toLowerCase())
            ) {
                return false;
            }
            let isShown = true;
            if (showVerified) {
                isShown = Boolean(pws.pool.info.metadata.verified);
            }
            const endBlock = pws.pool.state?.initial?.endBlock ?? 1e9;
            const statusFilter = showEnded ? currentBlock > endBlock : currentBlock <= endBlock;
            isShown = isShown && statusFilter;
            return isShown;
        })
        .map((pws: PoolWithStats) => (
            <Pool
                key={pws.pool.id}
                pws={pws}
                isForcedOpen={pws.pool.id === Number(priorityPoolId)}
                initEvent={initEvent}
            />
        ));

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

    const onShowStatusClick = () => {
        setShowEnded(!showEnded);
    };

    //test for myPoolTypeChanger
    const onChangePoolType = () => {
        setShowMyPools(!showMyPools);
    };

    const onVerifiedButton = () => {
        setShowVerified(!showVerified);
    };

    return (
        <div>
            <PoolTopLineContainer>
                <TopTwoButtonsMobileContainer>
                    <AddFarmButton addFarmType={poolType} />
                    <MobileOnly>
                        <VerifiedSwitch onChange={onVerifiedButton} switchStatus={showVerified} />
                    </MobileOnly>
                    <DesktopOnly />
                </TopTwoButtonsMobileContainer>
                <PoolFiltersContainer>
                    <SwitchersContainer>
                        <MobileOnly>
                            <DropdownButton
                                onColumnClick={onColumnClick}
                                sortKey={sortKey}
                                isAscSort={isAscSort}
                                swapArrow={swapArrow}
                                theme={theme}
                            />
                        </MobileOnly>
                        <DesktopOnly>
                            <VerifiedSwitchDesktop onChange={onVerifiedButton} switchStatus={showVerified} />
                        </DesktopOnly>
                        {/* previous switcher which was good <SwitchSelect
                                switchStatus={showVerified}
                                onChange={setShowVerified}
                                switchText={'Verified only'}
                            /> Previous switcher which was good*/}
                        <MobileOnly>
                            <PoolSearchInput
                                placeholder="Pool search"
                                value={poolSearch}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPoolSearch(e.target.value)}
                            />
                        </MobileOnly>
                    </SwitchersContainer>
                    <SwitchersAndSearchContainer>
                        <PoolStateSwitcher switchStatus={showEnded} onChange={onShowStatusClick} />
                        <SwitchSelectPools onChange={onChangePoolType} value={showMyPools} />
                        <DesktopOnly>
                            <PoolSearchInput
                                placeholder="Pool search"
                                value={poolSearch}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPoolSearch(e.target.value)}
                            />
                        </DesktopOnly>
                    </SwitchersAndSearchContainer>
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
