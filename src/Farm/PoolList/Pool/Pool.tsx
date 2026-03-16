import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useStoreMap, useUnit } from 'effector-react';
import { Status } from '../../../Status.js';
import {
    hasLocalState,
    $pricedAlgo,
    ContractInfo,
    FarmType,
    $account,
} from '../../../common/store';
import { $stakingTokens } from '../../../Stake/store';
import { $farmRewardTokens, PoolWithStats, recalculatedReward } from '../../store';
import { PoolState } from './types';
import { PoolInfo } from './PoolInfo';
import { PoolPreview } from './PoolPreview';
import { PoolActions } from './PoolActions';
import { GradientPoolContainer } from './GradientPoolCard';
import { ModalCloseButton, ModalHeader, SkeletonLine, SkeletonBlock } from './styled';
import { convertAmountToUSD, formatLPTokenName, getPoolState, isLPTokenInfo } from './utils';
import { useWindowSize } from '../../../hooks';

function PoolInner({
    pws,
    isForcedOpen,
    initEvent,
    currentBlock,
    openConnectWallet,
}: {
    pws: PoolWithStats;
    isForcedOpen?: boolean;
    initEvent: (payload: ContractInfo<FarmType>) => any;
    currentBlock: number;
    openConnectWallet: () => void;
}) {
    const contract = pws.pool;
    const account = useUnit($account);
    const pricedAlgo = useUnit($pricedAlgo);
    const stakeTokenInfo = useStoreMap($stakingTokens, (tokens) => tokens.get(contract.id, null));
    const rewardTokenInfo = useStoreMap($farmRewardTokens, (tokens) => tokens.get(contract.id, null)) ?? stakeTokenInfo;
    const [isOpen, setIsOpen] = useState(isForcedOpen ? true : false);
    const { isDesktop } = useWindowSize();

    useEffect(() => {
        initEvent(contract.info);
    }, [contract.info.id, contract.info.version, account]);

    // Project reward locally instead of in the store (avoids $networkTime cascade)
    const projectedState = useMemo(() => {
        if (!contract.state || !hasLocalState(contract.state)) return contract.state;
        try {
            const projectedReward = recalculatedReward(contract.state, currentBlock);
            return { ...contract.state, local: { ...contract.state.local, reward: projectedReward } };
        } catch (e) {
            console.error(`recalculatedReward failed for contract ${contract.id}:`, e);
            return contract.state;
        }
    }, [contract.state, currentBlock]);

    // No contract state at all — show skeleton
    if (!projectedState) {
        return (
            <GradientPoolContainer style={{ padding: '20px' }}>
                <SkeletonLine style={{ width: '60%', height: '16px', marginBottom: '12px' }} />
                <SkeletonBlock style={{ height: '40px', marginBottom: '8px' }} />
                <SkeletonLine style={{ width: '40%', height: '12px' }} />
            </GradientPoolContainer>
        );
    }

    // State exists but token info / prices / block not ready — show preview with header + placeholders
    const is_info_loaded = rewardTokenInfo && stakeTokenInfo;
    if (currentBlock === 0 || !is_info_loaded || !pricedAlgo) {
        return (
            <GradientPoolContainer>
                <PoolPreview contractInfo={contract.info} />
            </GradientPoolContainer>
        );
    }

    const poolState = getPoolState(currentBlock, projectedState.initial);

    const onPoolClick = () => {
        if (contract.ctc === null) {
            openConnectWallet();
            return;
        }
        setIsOpen(!isOpen);
    };

    if (poolState === PoolState.Running || poolState === PoolState.Upcoming || poolState === PoolState.Finished) {
        const hasStakedValue = projectedState.local && Number(convertAmountToUSD(stakeTokenInfo, projectedState.local.staked)) > 0;
        const hasRewardValue = projectedState.local && (() => {
            if (!projectedState.local) return false;
            const algoReward = projectedState.initial.totalAlgoRewardAmount > 0
                ? (projectedState.local.reward * projectedState.initial.totalAlgoRewardAmount) / projectedState.initial.totalRewardAmount
                : 0;
            const totalRewardUSD = Number(convertAmountToUSD(rewardTokenInfo, projectedState.local.reward)) +
                                  Number(convertAmountToUSD(pricedAlgo, algoReward));
            return totalRewardUSD > 0;
        })();

        const useCompactView = !hasStakedValue && !hasRewardValue;

        return (
            <GradientPoolContainer
                className={`pool-container ${useCompactView ? 'compact' : ''}`}
                style={{ cursor: 'pointer', position: 'relative' }}
                onClick={onPoolClick}
            >
                <PoolInfo
                    isOpen={isOpen}
                    contractState={projectedState}
                    poolState={poolState}
                    stakeTokenInfo={stakeTokenInfo}
                    rewardTokenInfo={rewardTokenInfo}
                    currentBlock={currentBlock}
                    pricedAlgo={pricedAlgo}
                    poolMetadata={contract.info.metadata}
                    apr={pws.apr}
                />

                {/* Actions modal via portal — escapes react-window transform context */}
                {isOpen && contract.ctc !== null && hasLocalState(projectedState) && ReactDOM.createPortal(
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.95)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px',
                            overflowY: 'auto',
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (e.target === e.currentTarget) setIsOpen(false);
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(10, 10, 10, 0.98)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                                width: '100%',
                                maxWidth: isDesktop ? '480px' : '400px',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ModalHeader>
                                <span>
                                    {isLPTokenInfo(stakeTokenInfo)
                                        ? `Farm ${formatLPTokenName(stakeTokenInfo)}`
                                        : `Stake ${stakeTokenInfo.unitName}`}
                                    {' · Earn '}
                                    {rewardTokenInfo.unitName}
                                </span>
                                <ModalCloseButton onClick={() => setIsOpen(false)}>
                                    ×
                                </ModalCloseButton>
                            </ModalHeader>
                            <PoolActions
                                poolState={poolState}
                                ctc={contract.ctc}
                                contractState={projectedState}
                                stakeTokenInfo={stakeTokenInfo}
                                rewardTokenInfo={rewardTokenInfo}
                                setIsZapModalOpen={setIsOpen}
                                currentBlock={currentBlock}
                                contractId={contract.id}
                                contractVersion={contract.info.version}
                                pricedAlgo={pricedAlgo}
                            />
                        </div>
                    </div>,
                    document.body
                )}
            </GradientPoolContainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
}

export const Pool = React.memo(PoolInner, (prev, next) => {
    if (prev.isForcedOpen !== next.isForcedOpen) return false;
    if (prev.openConnectWallet !== next.openConnectWallet) return false;
    if (prev.currentBlock !== next.currentBlock) return false;
    if (prev.pws.pool.id !== next.pws.pool.id) return false;
    if (prev.pws.apr.total !== next.pws.apr.total) return false;
    if (prev.pws.dollarInfo.tvl !== next.pws.dollarInfo.tvl) return false;
    if (prev.pws.dollarInfo.userStake !== next.pws.dollarInfo.userStake) return false;
    if (prev.pws.dollarInfo.pendingReward !== next.pws.dollarInfo.pendingReward) return false;
    const prevStaked = prev.pws.pool.state?.global?.totalStaked;
    const nextStaked = next.pws.pool.state?.global?.totalStaked;
    if (prevStaked !== nextStaked) return false;
    const prevLocal = prev.pws.pool.state?.local;
    const nextLocal = next.pws.pool.state?.local;
    if (prevLocal?.staked !== nextLocal?.staked) return false;
    if (prevLocal?.reward !== nextLocal?.reward) return false;
    return true;
});
