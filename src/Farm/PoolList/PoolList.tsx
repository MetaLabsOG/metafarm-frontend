import { useUnit } from 'effector-react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PoolWithStats, sortPools, $farmStakeTokens, $farmRewardTokens } from '../store';
import swapArrow from '../../imgs/swapArrow.svg';
import { theme } from '../../theme';
import { SwitchSelectPools } from '../../Components/SwitchSelect/SwitchSelectMyPools';
import { PoolStateSwitcher } from '../../Components/SwitchSelect/PoolStateSwitcher';
import { VerifiedSwitch } from '../../Components/SwitchSelect/VerifiedSwitch';
import { VerifiedSwitchDesktop } from '../../Components/SwitchSelect/VerifiedSwitchDesktop';
import DropdownButton from '../../Components/DropdownButton/Dropdown';
import { $networkTime, ContractInfo, FarmType, $meanRoundDuration, Priced, Asset } from '../../common/store';
import { LPTokenInfo } from '../../dexes';
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
import { BentoGrid, type BentoItem } from '../../Components/ui/bento-grid';
import { Coins, Lock, TrendingUp, Zap, ShieldCheck, Swords, Gift, PlayCircle, CheckCircle, XCircle, Hourglass } from 'lucide-react';
import { getDexName } from '../../Farm/utils';
import { formatLPTokenName, isLPTokenInfo, getPoolState, numberRound } from './Pool/utils';
import { PoolState } from './Pool/types';
import { blocksToText } from './Pool/PoolInfo';

export enum ColumnType {
    Name = 'Pool',
    Tvl = 'TVL',
    Apr = 'APR',
    Stake = 'Staked',
    Reward = 'Reward',
    Ends = 'Ends',
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

function poolToBentoItem(
    pws: PoolWithStats, 
    currentBlock: number, 
    meanRoundDuration: number, 
    pools: PoolWithStats[],
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset> | null,
    rewardTokenInfo: Priced<Asset> | null
): BentoItem {
    const { pool, apr, dollarInfo } = pws;
    const { info, state, id } = pool;
    const { metadata, description } = info;
    const { initial, global, local } = state || {};

    const poolName = stakeTokenInfo
        ? (isLPTokenInfo(stakeTokenInfo)
            ? formatLPTokenName(stakeTokenInfo) + ' LP' 
            : 'Stake ' + (stakeTokenInfo.unitName || 'Unknown'))
        : 'Unknown Pool';

    const rewardTokenName = rewardTokenInfo?.unitName || 'Reward';

    let poolCurrentState = PoolState.Upcoming;
    if (state && initial) {
      poolCurrentState = getPoolState(currentBlock, initial);
    }
    
    const statusTextMap: Record<PoolState, string> = {
        [PoolState.Upcoming]: "Upcoming",
        [PoolState.Running]: "Live",
        [PoolState.Finished]: "Ended",
    };
    const statusText = statusTextMap[poolCurrentState] || "N/A";

    const tags: string[] = [];
    const currentMetadata = info.metadata as any;
    if (currentMetadata?.verified) tags.push("Verified");
    if (currentMetadata?.game) tags.push("Game");
    if (currentMetadata?.nft_rewards) tags.push("NFT Reward");
    if (stakeTokenInfo && isLPTokenInfo(stakeTokenInfo) && stakeTokenInfo.poolDex) {
        tags.push(getDexName(stakeTokenInfo.poolDex));
    }
    if (initial?.lockLengthBlocks && Number(initial.lockLengthBlocks) > 0) {
      tags.push(`${blocksToText(Number(initial.lockLengthBlocks), meanRoundDuration)} Lock`);
    }

    let icon = <Coins className="w-4 h-4 text-gray-500" />;
    if (currentMetadata?.game) icon = <Swords className="w-4 h-4 text-orange-500" />;
    else if (tags.includes("NFT Reward")) icon = <Gift className="w-4 h-4 text-pink-500" />;
    else if (initial?.lockLengthBlocks && Number(initial.lockLengthBlocks) > 0) icon = <Lock className="w-4 h-4 text-red-500" />;

    return {
        title: poolName,
        description: `Earn ${rewardTokenName}${initial?.totalAlgoRewardAmount && initial.totalAlgoRewardAmount > 0 ? ' + ALGO' : ''}`,
        icon: icon,
        status: statusText,
        tags: tags.slice(0, 2),
        meta: `APR: ${apr.total ? numberRound(apr.total) : '0'}% | TVL: $${dollarInfo.tvl ? numberRound(dollarInfo.tvl) : '0'}`,
        cta: poolCurrentState === PoolState.Finished ? "View" : "Stake",
        colSpan: (pws === pools[0] || (dollarInfo.tvl || 0) > 50000) ? 2 : 1, 
        hasPersistentHover: (pws === pools[0] || (dollarInfo.tvl || 0) > 50000),
    };
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
    const meanRoundDuration = useUnit($meanRoundDuration);
    const allStakeTokens = useUnit($farmStakeTokens);
    const allRewardTokens = useUnit($farmRewardTokens);

    const [sortKey, setSortKey] = useWalletPersistedState<ColumnType>('sortKey', ColumnType.Tvl);
    const [isAscSort, setIsAscSort] = useWalletPersistedState('isAscSort', false);
    const [showVerified, setShowVerified] = useWalletPersistedState('showVerified', false);
    const [showEnded, setShowEnded] = useWalletPersistedState('showEnded', false);
    const [poolSearch, setPoolSearch] = useWalletPersistedState('poolSearch', '');
    const [showMyPools, setShowMyPools] = useState(false);

    const filteredPools = pools
        .filter((pws: PoolWithStats) => {
            if (currentBlock === 0) {
                return false;
            }
            if (priorityPoolId) {
                return pws.pool.id === Number(priorityPoolId);
            }
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
                const currentMetadata = pws.pool.info.metadata as any;
                isShown = Boolean(currentMetadata?.verified);
            }
            const poolInitialState = pws.pool.state?.initial;
            if (!poolInitialState) return false; 
            const endBlock = poolInitialState.endBlock ?? 1e9;
            const statusFilter = showEnded ? currentBlock > endBlock : currentBlock <= endBlock;
            isShown = isShown && statusFilter;
            return isShown;
        });

    const bentoItems = filteredPools.map(pws => {
        const stakeTokenInfo = allStakeTokens.get(pws.pool.id, null) as Priced<LPTokenInfo> | Priced<Asset> | null;
        const rewardTokenInfo = allRewardTokens.get(pws.pool.id, null) as Priced<Asset> | null;
        return poolToBentoItem(pws, currentBlock, meanRoundDuration, pools, stakeTokenInfo, rewardTokenInfo);
    });

    const sortEvent = useUnit(sortPools);

    useEffect(() => {
        const sortColumn = showEnded ? ColumnType.Stake : ColumnType.Tvl;
        setSortKey(sortColumn);
        setIsAscSort(false);
        sortEvent({ type: sortColumn, asc: false });
    }, [showEnded, setSortKey, setIsAscSort, sortEvent]);

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
                    <MobileFilterRow>
                        <AddFarmButton addFarmType={poolType} />

                        <HorizontalSpacer space="12px" />

                        <VerifiedSwitch onChange={onVerifiedButton} switchStatus={showVerified} />
                    </MobileFilterRow>

                    <VerticalSpacer space="20px" />

                    <MobileFilterRow>
                        <PoolSearchInput
                            placeholder="Search token..."
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
                                placeholder="Search token..."
                                value={poolSearch}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPoolSearch(e.target.value)}
                            />
                        </SwitchersAndSearchContainer>
                    </PoolFiltersContainer>
                </DesktopFilterContainer>
            </PoolTopLineContainer>
            <BentoGrid items={bentoItems} />
        </div>
    );
}
