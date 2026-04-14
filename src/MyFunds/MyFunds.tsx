import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { $account, $networkTime, ContractInfo, FarmType } from '../common/store';
import { FarmContainer } from '../Farm/styled';
import { PoolWithStats } from '../Farm/store';
import { $sortedPoolsWithStats, $farmPoolsLoaded, initializeFarmContract } from '../Farm/store';
import { $sortedStakePoolsWithStats, $distributionPoolsLoaded, initializeDistributionContract } from '../Stake/store';
import { VirtualizedPoolList } from '../Farm/PoolList/VirtualizedPoolList';
import { ConnectWalletModal } from '../wallet/ConnectWalletModal';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { theme } from '../theme';
import { MyFundsContainer, MyFundsHeader, MyFundsSubtitle, SectionHeader, SectionCount, WarningFooter, ConnectPrompt } from './styled';

function hasUserFunds(pws: PoolWithStats): boolean {
    const staked = pws.pool.state?.local?.staked ?? BigInt(0);
    const reward = pws.pool.state?.local?.reward ?? BigInt(0);
    return staked > BigInt(0) || reward > BigInt(0);
}

type Category = 'active' | 'ended' | 'locked';

function categorize(pws: PoolWithStats, currentBlock: number): Category {
    const endBlock = Number(pws.pool.state?.initial?.endBlock ?? 1e9);
    const lockTimestamp = Number(pws.pool.state?.local?.lockTimestamp ?? 0);
    const nowSec = Math.floor(Date.now() / 1000);
    if (lockTimestamp > 0 && lockTimestamp > nowSec) return 'locked';
    if (currentBlock > 0 && currentBlock > endBlock) return 'ended';
    return 'active';
}

export function MyFunds() {
    const account = useUnit($account);
    const farmPools = useUnit($sortedPoolsWithStats);
    const stakePools = useUnit($sortedStakePoolsWithStats);
    const farmLoaded = useUnit($farmPoolsLoaded);
    const distrLoaded = useUnit($distributionPoolsLoaded);
    const networkTime = useUnit($networkTime);
    const initFarm = useUnit(initializeFarmContract);
    const initDistr = useUnit(initializeDistributionContract);

    const [currentBlock, setCurrentBlock] = useState(networkTime);
    const lastUpdateRef = useRef(0);
    useEffect(() => {
        const unsub = $networkTime.watch((t: number) => {
            if (t === 0) return;
            const now = Date.now();
            if (lastUpdateRef.current === 0 || now - lastUpdateRef.current >= 30000) {
                lastUpdateRef.current = now;
                setCurrentBlock(t);
            }
        });
        return unsub;
    }, []);

    const [ConnectWallet, openConnect, closeConnect, isConnectOpen] = useModal('root');
    const openWalletRef = useRef(openConnect);
    openWalletRef.current = openConnect;
    const stableOpenConnect = useMemo(() => () => openWalletRef.current(), []);

    const initAny = (info: ContractInfo<FarmType>) => {
        if (info.type === 'farm') {
            initFarm(info);
        } else if (info.type === 'distribution') {
            initDistr(info);
        }
    };

    const allStuck = useMemo(() => {
        const combined = [...farmPools, ...stakePools].filter(hasUserFunds);
        const seen = new Set<number>();
        return combined.filter(p => {
            if (seen.has(p.pool.id)) return false;
            seen.add(p.pool.id);
            return true;
        });
    }, [farmPools, stakePools]);

    const grouped = useMemo(() => {
        const active: PoolWithStats[] = [];
        const ended: PoolWithStats[] = [];
        const locked: PoolWithStats[] = [];
        for (const pws of allStuck) {
            const cat = categorize(pws, currentBlock);
            if (cat === 'locked') locked.push(pws);
            else if (cat === 'ended') ended.push(pws);
            else active.push(pws);
        }
        return { active, ended, locked };
    }, [allStuck, currentBlock]);

    const poolsLoaded = farmLoaded || distrLoaded;
    const isLoading = !poolsLoaded && !!account;

    return (
        <FarmContainer>
            <MyFundsContainer>
                <MyFundsHeader>Your Funds</MyFundsHeader>
                <MyFundsSubtitle>
                    All pools where you have a deposit or pending reward, regardless of active / ended status.
                    This is a safety-net view so you can always reach your funds.
                </MyFundsSubtitle>

                {!account ? (
                    <ConnectPrompt>
                        Connect your wallet to see pools with your funds.
                    </ConnectPrompt>
                ) : (
                    <LoadingSpinner isLoading={isLoading} text="Loading pools..." size="medium">
                        {allStuck.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '40px 20px', color: theme.gray }}>
                                No pools with your funds were found. Nothing to recover.
                            </div>
                        ) : (
                            <>
                                {grouped.ended.length > 0 && (
                                    <>
                                        <SectionHeader>
                                            Ended <SectionCount>{grouped.ended.length}</SectionCount>
                                        </SectionHeader>
                                        <VirtualizedPoolList
                                            filteredPools={grouped.ended}
                                            initEvent={initAny}
                                            currentBlock={currentBlock}
                                            openConnectWallet={stableOpenConnect}
                                        />
                                    </>
                                )}
                                {grouped.locked.length > 0 && (
                                    <>
                                        <SectionHeader>
                                            Locked <SectionCount>{grouped.locked.length}</SectionCount>
                                        </SectionHeader>
                                        <VirtualizedPoolList
                                            filteredPools={grouped.locked}
                                            initEvent={initAny}
                                            currentBlock={currentBlock}
                                            openConnectWallet={stableOpenConnect}
                                        />
                                    </>
                                )}
                                {grouped.active.length > 0 && (
                                    <>
                                        <SectionHeader>
                                            Active <SectionCount>{grouped.active.length}</SectionCount>
                                        </SectionHeader>
                                        <VirtualizedPoolList
                                            filteredPools={grouped.active}
                                            initEvent={initAny}
                                            currentBlock={currentBlock}
                                            openConnectWallet={stableOpenConnect}
                                        />
                                    </>
                                )}
                            </>
                        )}
                    </LoadingSpinner>
                )}

                <WarningFooter>
                    Never &quot;remove app&quot; (opt-out) from a pool with a non-zero stake in your wallet — funds cannot be recovered afterwards.
                    Always unstake first, then opt-out if needed.
                </WarningFooter>
            </MyFundsContainer>

            <ConnectWallet>
                <ConnectWalletModal closeModal={closeConnect} isModalOpen={isConnectOpen} />
            </ConnectWallet>
        </FarmContainer>
    );
}
