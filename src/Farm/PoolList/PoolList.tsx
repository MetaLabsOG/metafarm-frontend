import { useUnit } from 'effector-react';
import React, { ChangeEvent, useEffect, useState, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useModal } from 'react-hooks-use-modal';
import { PoolWithStats, sortPools } from '../store';
import swapArrow from '../../imgs/swapArrow.svg';
import { theme } from '../../theme';
import { SwitchSelectPools } from '../../Components/SwitchSelect/SwitchSelectMyPools';
import { PoolStateSwitcher } from '../../Components/SwitchSelect/PoolStateSwitcher';
import { VerifiedSwitch } from '../../Components/SwitchSelect/VerifiedSwitch';
import { VerifiedSwitchDesktop } from '../../Components/SwitchSelect/VerifiedSwitchDesktop';

import DropdownButton from '../../Components/DropdownButton/Dropdown';

import { $account, $networkTime, ContractInfo, FarmType } from '../../common/store';
import { ConnectWalletModal } from '../../wallet/ConnectWalletModal';
import { useWalletPersistedState } from '../utils';
import { PoolSearchInput } from '../styled';
import { VirtualizedPoolList } from './VirtualizedPoolList';

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
    MobileFilterTopRow,
    MobileFilterBottomRow,
    MobileFilterScrollArea,
    FilterDivider,
    FilterGroup,
    FilterGroupLabel,
} from './styled';
// Pool component is now used in VirtualizedPoolList
import { ColumnType, POOL_COLUMN_WIDTH } from './columns';

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
    // Throttle $networkTime: update state at most every 30 seconds (was every 5 sec via useUnit)
    const [currentBlock, setCurrentBlock] = useState(() => $networkTime.getState());
    const lastBlockUpdateRef = useRef(0);
    useEffect(() => {
        const unsub = $networkTime.watch((time: number) => {
            if (time === 0) return;
            const now = Date.now();
            // Update immediately on first non-zero value, then every 30 seconds
            if (lastBlockUpdateRef.current === 0 || now - lastBlockUpdateRef.current >= 30000) {
                lastBlockUpdateRef.current = now;
                setCurrentBlock(time);
            }
        });
        return unsub;
    }, []);

    const account = useUnit($account);
    const hasWallet = !!account?.networkAccount?.addr || !!localStorage.getItem('walletAddress');

    const [ConnectWallet, openConnectWallet, closeConnectWallet, isConnectWalletOpen] = useModal('root');
    // Stabilize openConnectWallet via ref (useModal returns unstable reference)
    const openWalletRef = useRef(openConnectWallet);
    openWalletRef.current = openConnectWallet;
    const stableOpenConnectWallet = useMemo(() => () => openWalletRef.current(), []);

    const [sortKey, setSortKey] = useWalletPersistedState<ColumnType>('sortKey', ColumnType.Tvl);
    const [isAscSort, setIsAscSort] = useWalletPersistedState('isAscSort', false);
    const [showVerified, setShowVerified] = useWalletPersistedState('showVerified', false);
    const [showEnded, setShowEnded] = useWalletPersistedState('showEnded', false);
    const [poolSearch, setPoolSearch] = useWalletPersistedState('poolSearch', '');
    const [showMyPools, setShowMyPools] = useState(false);

    // Filter pools based on user criteria
    const filteredPools = useMemo(() => {
        return pools.filter((pws: PoolWithStats) => {
            if (priorityPoolId) {
                return pws.pool.id === Number(priorityPoolId);
            }

            // my pools = stake > 0 or reward > 0
            if (showMyPools && pws.dollarInfo.userStake <= 0 && pws.dollarInfo.pendingReward <= 0) {
                return false;
            }

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
            // Apply endBlock filter only when currentBlock is known.
            // When currentBlock === 0 (indexer not yet responded), show all pools as active.
            if (currentBlock > 0) {
                const endBlock = pws.pool.state?.initial?.endBlock ?? 1e9;
                const isEnded = currentBlock > endBlock;
                const hasUserFunds = pws.dollarInfo.userStake > 0 || pws.dollarInfo.pendingReward > 0;
                // Live mode: active pools + ended pools where user has funds
                // Ended mode: only ended pools
                const statusFilter = showEnded ? isEnded : (!isEnded || hasUserFunds);
                isShown = isShown && statusFilter;
            } else if (showEnded) {
                // Can't determine ended pools without currentBlock — hide them
                isShown = false;
            }
            return isShown;
        });
    }, [pools, currentBlock, priorityPoolId, showMyPools, poolSearch, showVerified, showEnded]);
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

    return (
        <div>
            <PoolTopLineContainer>
                <MobileFilterContainer>
                    <MobileFilterTopRow>
                        <PoolSearchInput
                            placeholder="Search token..." aria-label="Search pools by token name"
                            value={poolSearch}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPoolSearch(e.target.value)}
                        />
                        <AddFarmButton addFarmType={poolType} />
                    </MobileFilterTopRow>

                    <MobileFilterBottomRow>
                        <MobileFilterScrollArea>
                            <VerifiedSwitch onChange={onVerifiedButton} switchStatus={showVerified} />
                            <PoolStateSwitcher switchStatus={showEnded} onChange={onShowStatusClick} />
                            <SwitchSelectPools onChange={onChangePoolType} isEnabled={showMyPools} />
                        </MobileFilterScrollArea>
                        <DropdownButton
                            onColumnClick={onColumnClick}
                            sortKey={sortKey}
                            isAscSort={isAscSort}
                            swapArrow={swapArrow}
                            theme={theme}
                            compact
                        />
                    </MobileFilterBottomRow>
                </MobileFilterContainer>

                <DesktopFilterContainer>
                    <TopTwoButtonsMobileContainer>
                        <AddFarmButton addFarmType={poolType} />
                    </TopTwoButtonsMobileContainer>

                    <PoolFiltersContainer>
                        <SwitchersContainer>
                            <FilterGroup>
                                <FilterGroupLabel>Trust</FilterGroupLabel>
                                <VerifiedSwitchDesktop onChange={onVerifiedButton} switchStatus={showVerified} />
                            </FilterGroup>
                        </SwitchersContainer>
                        <FilterDivider />
                        <SwitchersAndSearchContainer>
                            <FilterGroup>
                                <FilterGroupLabel>Status</FilterGroupLabel>
                                <PoolStateSwitcher switchStatus={showEnded} onChange={onShowStatusClick} />
                            </FilterGroup>
                            <FilterDivider />
                            <FilterGroup>
                                <FilterGroupLabel>View</FilterGroupLabel>
                                <SwitchSelectPools onChange={onChangePoolType} isEnabled={showMyPools} />
                            </FilterGroup>
                            <PoolSearchInput
                                placeholder="Search token..." aria-label="Search pools by token name"
                                value={poolSearch}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPoolSearch(e.target.value)}
                            />
                        </SwitchersAndSearchContainer>
                    </PoolFiltersContainer>
                </DesktopFilterContainer>
            </PoolTopLineContainer>
            <PoolListContainer>
                {/* Only show header on desktop */}
                <PoolListHeader className="desktop-only-header">
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
                <VirtualizedPoolList
                    filteredPools={filteredPools}
                    initEvent={initEvent}
                    priorityPoolId={priorityPoolId}
                    currentBlock={currentBlock}
                    openConnectWallet={stableOpenConnectWallet}
                />
                {showEnded && filteredPools.length === 0 && !hasWallet && (
                    <div style={{
                        textAlign: 'center',
                        padding: '40px 20px',
                        color: theme.gray,
                        fontSize: '14px',
                    }}>
                        Connect wallet to see your ended pools
                    </div>
                )}
            </PoolListContainer>
            <ConnectWallet>
                <ConnectWalletModal closeModal={closeConnectWallet} isModalOpen={isConnectWalletOpen} />
            </ConnectWallet>
        </div>
    );
}
