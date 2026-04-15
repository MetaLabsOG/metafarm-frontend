import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { useQuery } from 'react-query';
import { $account, $networkTime, ContractInfo, FarmType } from '../common/store';
import { FarmContainer } from '../Farm/styled';
import { PoolWithStats } from '../Farm/store';
import { $sortedPoolsWithStats, $farmPoolsLoaded, initializeFarmContract } from '../Farm/store';
import { $sortedStakePoolsWithStats, $distributionPoolsLoaded, initializeDistributionContract } from '../Stake/store';
import { VirtualizedPoolList } from '../Farm/PoolList/VirtualizedPoolList';
import { ConnectWalletModal } from '../wallet/ConnectWalletModal';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { getAccountInfo } from '../common/lib';
import { theme } from '../theme';
import {
    MyFundsContainer,
    MyFundsHeader,
    MyFundsSubtitle,
    SectionHeader,
    SectionCount,
    WarningFooter,
    ConnectPrompt,
    ErrorBox,
    ErrorTitle,
    ErrorMessage,
    RetryButton,
} from './styled';

type Category = 'active' | 'ended' | 'locked';

function hasKnownFunds(pws: PoolWithStats): boolean {
    const staked = pws.pool.state?.local?.staked ?? BigInt(0);
    const reward = pws.pool.state?.local?.reward ?? BigInt(0);
    return staked > BigInt(0) || reward > BigInt(0);
}

function isStateKnown(pws: PoolWithStats): boolean {
    return pws.pool.state?.local != null;
}

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
    const farmPoolsLoaded = useUnit($farmPoolsLoaded);
    const distrPoolsLoaded = useUnit($distributionPoolsLoaded);
    const networkTime = useUnit($networkTime);
    const initFarm = useUnit(initializeFarmContract);
    const initDistr = useUnit(initializeDistributionContract);

    const address = account?.networkAccount.addr;

    // Read opted-in app IDs directly from Algorand (algod with indexer fallback).
    // No backend dependency — works even when /contracts/user/{addr} is down.
    const accountInfoQuery = useQuery(
        ['my-funds', 'account-info', address],
        () => getAccountInfo(address!),
        { enabled: !!address, staleTime: 60_000, retry: 1 },
    );

    const optedInIds = useMemo(() => {
        const ids = new Set<number>();
        const info: any = accountInfoQuery.data;
        if (!info) return ids;
        const apps = info['apps-local-state'] ?? [];
        for (const a of apps) ids.add(Number(a.id));
        return ids;
    }, [accountInfoQuery.data]);

    // Auto-init each opted-in pool to populate state.local (staked, reward).
    // initializeContract is idempotent — guarded by $contractCtcs.has(id).
    const initOnceRef = useRef(new Set<number>());
    useEffect(() => {
        if (optedInIds.size === 0) return;
        const allPools = [...farmPools, ...stakePools];
        for (const pws of allPools) {
            const id = pws.pool.id;
            if (!optedInIds.has(id) || initOnceRef.current.has(id)) continue;
            initOnceRef.current.add(id);
            const infoType = pws.pool.info.type;
            if (infoType === 'farm') {
                initFarm({ id, version: pws.pool.info.version });
            } else if (infoType === 'distribution') {
                initDistr({ id, version: pws.pool.info.version });
            }
        }
    }, [optedInIds, farmPools, stakePools, initFarm, initDistr]);

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
        if (info.type === 'farm') initFarm(info);
        else if (info.type === 'distribution') initDistr(info);
    };

    // Combined opted-in pool set. Until state.local is known we show the pool
    // (safety-net: don't hide pools prematurely). Once known, hide zero-balance.
    const stuck = useMemo(() => {
        const combined = [...farmPools, ...stakePools];
        const seen = new Set<number>();
        return combined.filter((p) => {
            if (!optedInIds.has(p.pool.id)) return false;
            if (seen.has(p.pool.id)) return false;
            seen.add(p.pool.id);
            if (!isStateKnown(p)) return true;
            return hasKnownFunds(p);
        });
    }, [farmPools, stakePools, optedInIds]);

    // Pools the user is opted into but not yet present in our local pool list
    // (backend /contracts hasn't returned this id yet, or it's a legacy pool
    // we don't surface). Count them so we can warn in UI.
    const knownPoolIds = useMemo(() => {
        const ids = new Set<number>();
        for (const p of farmPools) ids.add(p.pool.id);
        for (const p of stakePools) ids.add(p.pool.id);
        return ids;
    }, [farmPools, stakePools]);
    const unknownOptedInCount = useMemo(() => {
        let n = 0;
        optedInIds.forEach((id) => { if (!knownPoolIds.has(id)) n += 1; });
        return n;
    }, [optedInIds, knownPoolIds]);

    const initializingCount = useMemo(
        () => stuck.filter((p) => !isStateKnown(p)).length,
        [stuck],
    );

    const grouped = useMemo(() => {
        const active: PoolWithStats[] = [];
        const ended: PoolWithStats[] = [];
        const locked: PoolWithStats[] = [];
        for (const pws of stuck) {
            const cat = categorize(pws, currentBlock);
            if (cat === 'locked') locked.push(pws);
            else if (cat === 'ended') ended.push(pws);
            else active.push(pws);
        }
        return { active, ended, locked };
    }, [stuck, currentBlock]);

    const contractsLoaded = farmPoolsLoaded || distrPoolsLoaded;
    const isFetchingAccount = accountInfoQuery.isLoading || accountInfoQuery.isFetching;
    const isAccountError = accountInfoQuery.isError && !accountInfoQuery.data;
    // Waiting for BOTH: on-chain account info AND backend contract list.
    const isLoading =
        !!account &&
        !isAccountError &&
        (isFetchingAccount || !contractsLoaded);

    const handleRetry = () => {
        void accountInfoQuery.refetch();
    };

    const renderBody = () => {
        if (!account) {
            return (
                <ConnectPrompt>
                    Connect your wallet to see pools with your funds.
                </ConnectPrompt>
            );
        }
        if (isAccountError) {
            return (
                <ErrorBox>
                    <ErrorTitle>Couldn&apos;t read your wallet from the network</ErrorTitle>
                    <ErrorMessage>
                        We tried to read your opted-in pools directly from the Algorand node
                        but the request failed. Your funds are safe on-chain — this page just
                        can&apos;t list them right now. Try again in a few seconds, or reload the page.
                    </ErrorMessage>
                    <RetryButton type="button" onClick={handleRetry}>Retry</RetryButton>
                </ErrorBox>
            );
        }
        if (isLoading) {
            return (
                <LoadingSpinner isLoading text="Reading your pools from the chain…" size="medium" />
            );
        }
        if (stuck.length === 0) {
            return (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: theme.gray }}>
                    No pools with your funds were found. Nothing to recover.
                </div>
            );
        }
        return (
            <>
                {initializingCount > 0 && (
                    <div style={{ textAlign: 'center', padding: '8px 20px', color: theme.gray, fontSize: 13 }}>
                        Loading balances for {initializingCount} pool{initializingCount === 1 ? '' : 's'}…
                    </div>
                )}
                {unknownOptedInCount > 0 && (
                    <div style={{ textAlign: 'center', padding: '8px 20px', color: theme.gray, fontSize: 13 }}>
                        {unknownOptedInCount} opted-in app{unknownOptedInCount === 1 ? '' : 's'} not recognised as a Cometa pool — not shown here.
                    </div>
                )}
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
        );
    };

    return (
        <FarmContainer>
            <MyFundsContainer>
                <MyFundsHeader>Your Funds</MyFundsHeader>
                <MyFundsSubtitle>
                    All pools where you have a deposit or pending reward, regardless of active / ended status.
                    Opted-in apps are read directly from the Algorand network, so this page works
                    even when the Cometa backend is unavailable.
                </MyFundsSubtitle>

                {renderBody()}

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
