import { useUnit } from 'effector-react';
import React, { ChangeEvent, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { PoolWithStats, sortPools } from '../store';
import swapArrow from '../../imgs/swapArrow.svg';
import { theme } from '../../theme';
import { SwitchSelectPools } from '../../Components/SwitchSelect/SwitchSelectMyPools';
import { PoolStateSwitcher } from '../../Components/SwitchSelect/PoolStateSwitcher';
import { VerifiedSwitch } from '../../Components/SwitchSelect/VerifiedSwitch';
import { VerifiedSwitchDesktop } from '../../Components/SwitchSelect/VerifiedSwitchDesktop';

import DropdownButton from '../../Components/DropdownButton/Dropdown';

import { $networkTime, ContractInfo, FarmType } from '../../common/store';
import { useWalletPersistedState } from '../utils';
import { PoolSearchInput } from '../styled';

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
    DesktopFilterContainer,
    MobileFilterContainer,
    MobileFilterRow,
    VerticalSpacer,
    HorizontalSpacer,
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

    const [sortKey, setSortKey] = useWalletPersistedState<ColumnType>('sortKey', ColumnType.Tvl);
    const [isAscSort, setIsAscSort] = useWalletPersistedState('isAscSort', false);
    const [showVerified, setShowVerified] = useWalletPersistedState('showVerified', false);
    const [showEnded, setShowEnded] = useWalletPersistedState('showEnded', false);
    const [poolSearch, setPoolSearch] = useWalletPersistedState('poolSearch', '');
    const [showMyPools, setShowMyPools] = useWalletPersistedState('showMyPools', false);

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

    const onChangePoolType = () => {
        setShowMyPools(!showMyPools);
    };

    const onVerifiedButton = () => {
        setShowVerified(!showVerified);
    };

    useEffect(() => {
        const sortColumn = showEnded ? ColumnType.Stake : ColumnType.Tvl;
        setSortKey(sortColumn);
        setIsAscSort(false);
        sortEvent({ type: sortColumn, asc: false });
    }, [showEnded]);

    return (
        <div>
            <PoolTopLineContainer>
                <MobileFilterContainer>
                    <MobileFilterRow>
                        <AddFarmButton addFarmType={poolType} />

                        <HorizontalSpacer space="12px" />

                        <VerifiedSwitch onChange={onVerifiedButton} switchStatus={showVerified} />
                    </MobileFilterRow>

                    <VerticalSpacer space="20px" />

                    <MobileFilterRow>
                        <PoolSearchInput
                            placeholder="Find token pools..."
                            value={poolSearch}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPoolSearch(e.target.value)}
                        />

                        <HorizontalSpacer space="12px" />

                        <PoolStateSwitcher switchStatus={showEnded} onChange={onShowStatusClick} />
                    </MobileFilterRow>

                    <VerticalSpacer space="20px" />

                    <MobileFilterRow>
                        <DropdownButton
                            onColumnClick={onColumnClick}
                            sortKey={sortKey}
                            isAscSort={isAscSort}
                            swapArrow={swapArrow}
                            theme={theme}
                        />

                        <HorizontalSpacer space="12px" />

                        <SwitchSelectPools onChange={onChangePoolType} isEnabled={showMyPools} />
                    </MobileFilterRow>
                </MobileFilterContainer>

                <DesktopFilterContainer>
                    <TopTwoButtonsMobileContainer>
                        <AddFarmButton addFarmType={poolType} />
                    </TopTwoButtonsMobileContainer>

                    <PoolFiltersContainer>
                        <SwitchersContainer>
                            <VerifiedSwitchDesktop onChange={onVerifiedButton} switchStatus={showVerified} />
                        </SwitchersContainer>

                        <SwitchersAndSearchContainer>
                            <PoolStateSwitcher switchStatus={showEnded} onChange={onShowStatusClick} />
                            <SwitchSelectPools onChange={onChangePoolType} isEnabled={showMyPools} />
                            <PoolSearchInput
                                placeholder="Find token pools..."
                                value={poolSearch}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPoolSearch(e.target.value)}
                            />
                        </SwitchersAndSearchContainer>
                    </PoolFiltersContainer>
                </DesktopFilterContainer>
            </PoolTopLineContainer>
            <PoolListContainer>
                <PoolListHeader>
                    {(Object.keys(ColumnType) as (keyof typeof ColumnType)[]).map((key) => (
                        <div key={key} style={{ display: 'flex', minWidth: POOL_COLUMN_WIDTH[ColumnType[key]] }}>
                            <PoolListHeaderElement
                                key={key}
                                onClick={() => onColumnClick(ColumnType[key])}
                                style={{ color: sortKey === ColumnType[key] ? theme.pureWhite : theme.gray }}
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
