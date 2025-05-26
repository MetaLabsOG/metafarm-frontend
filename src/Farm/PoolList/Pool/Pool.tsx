import { useEffect, useState } from 'react';
import { useStoreMap, useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { Status } from '../../../Status.js';
import {
    $networkTime,
    queryTimeUpdate,
    hasLocalState,
    $pricedAlgo,
    ContractInfo,
    FarmType,
    $account,
} from '../../../common/store';
import { $stakingTokens } from '../../../Stake/store';
import logo from '../../../imgs/logo.png';
import { $farmRewardTokens, PoolWithStats } from '../../store';
import { ConnectWalletModal } from '../../../wallet/ConnectWalletModal';
import { PoolState } from './types';
import { PoolInfo } from './PoolInfo';
import { PoolActions } from './PoolActions';
import { PoolLoadingAnimation } from './styled';
import { GradientPoolContainer } from './GradientPoolCard';
import { LoadingSpinner } from '../../../Components/LoadingSpinner';
import { convertAmountToUSD, getPoolState } from './utils';

export function Pool({
    pws,
    isForcedOpen,
    initEvent,
}: {
    pws: PoolWithStats;
    isForcedOpen?: boolean;
    initEvent: (payload: ContractInfo<FarmType>) => any;
}) {
    const contract = pws.pool;
    const account = useUnit($account);
    const currentBlock = useUnit($networkTime);
    const pricedAlgo = useUnit($pricedAlgo);
    const stakeTokenInfo = useStoreMap($stakingTokens, (tokens) => tokens.get(contract.id, null));
    const rewardTokenInfo = useStoreMap($farmRewardTokens, (tokens) => tokens.get(contract.id, null)) ?? stakeTokenInfo;
    const [ConnectWallet, openConnectWallet, closeConnectWallet, isConnectWalletOpen] = useModal('root');
    const [isOpen, setIsOpen] = useState(isForcedOpen ? true : false);

    const queryTimeUpdateEvent = useUnit(queryTimeUpdate);

    useEffect(queryTimeUpdateEvent, [contract, queryTimeUpdateEvent]);
    useEffect(() => {
        initEvent(contract.info);
    }, [contract.info.id, contract.info.version, account]);

    const is_info_loaded = rewardTokenInfo && stakeTokenInfo;
    const isLoading = currentBlock === 0 || !contract.state || !is_info_loaded || !pricedAlgo;

    if (isLoading) {
        return (
            <GradientPoolContainer>
                <LoadingSpinner
                    isLoading={true}
                    size="small"
                    text="Loading pool data..."
                />
            </GradientPoolContainer>
        );
    }

    const poolState = getPoolState(currentBlock, contract.state.initial);

    const isSafari = navigator.userAgent.toLowerCase().includes('safari');

    const onPoolClick = () => {
        if (contract.ctc === null) {
            openConnectWallet();
            return;
        }
        setIsOpen(!isOpen);
    };

    if (poolState === PoolState.Running || poolState === PoolState.Upcoming || poolState === PoolState.Finished) {
        // Determine if we should show the mobile action view
        const showMobileActions = window.innerWidth <= 1120 && isOpen;
        // For desktop, we show actions differently
        const isDesktop = window.innerWidth > 1120;
        const showDesktopActions = isDesktop && isOpen;

        // Check if we have staked or reward values to determine if we should use compact view
        const hasStakedValue = contract.state.local && Number(convertAmountToUSD(stakeTokenInfo, contract.state.local.staked)) > 0;
        const hasRewardValue = contract.state.local && (() => {
            if (!contract.state.local) return false;
            const algoReward = contract.state.initial.totalAlgoRewardAmount > 0
                ? (contract.state.local.reward * contract.state.initial.totalAlgoRewardAmount) / contract.state.initial.totalRewardAmount
                : 0;
            const totalRewardUSD = Number(convertAmountToUSD(rewardTokenInfo, contract.state.local.reward)) +
                                  Number(convertAmountToUSD(pricedAlgo, algoReward));
            return totalRewardUSD > 0;
        })();

        // Determine if we should use compact view (no staked/reward values)
        const useCompactView = !hasStakedValue && !hasRewardValue;

        return (
            <GradientPoolContainer
                className={`pool-container ${useCompactView ? 'compact' : ''}`}
                style={{
                    height: showMobileActions ? '420px' : 'auto', // Only set fixed height when actions are visible
                    cursor: 'pointer', // Add cursor pointer to indicate clickable area
                    position: 'relative',
                    transition: 'height 0.3s ease'
                }}
                onClick={onPoolClick} // Move onClick to the container level
            >
                <div
                    style={{
                        opacity: showMobileActions ? 0 : 1,
                        visibility: showMobileActions ? 'hidden' : 'visible',
                        transition: 'opacity 0.2s ease',
                        position: showMobileActions ? 'absolute' : 'relative',
                        width: '100%'
                    }}
                >
                    <PoolInfo
                        isOpen={isOpen}
                        contractState={contract.state}
                        poolState={poolState}
                        stakeTokenInfo={stakeTokenInfo}
                        rewardTokenInfo={rewardTokenInfo}
                        currentBlock={currentBlock}
                        pricedAlgo={pricedAlgo}
                        poolMetadata={contract.info.metadata}
                        apr={pws.apr}
                    />

                    {/* Show desktop actions below the pool info when open */}
                    {isDesktop && contract.ctc !== null && hasLocalState(contract.state) && showDesktopActions && (
                        <div
                            onClick={(e) => {
                                // Prevent clicks inside the actions from closing the view
                                e.stopPropagation();
                            }}
                        >
                            <PoolActions
                                poolState={poolState}
                                ctc={contract.ctc}
                                contractState={contract.state}
                                stakeTokenInfo={stakeTokenInfo}
                                rewardTokenInfo={rewardTokenInfo}
                                setIsZapModalOpen={setIsOpen}
                                currentBlock={currentBlock}
                                contractId={contract.id}
                                contractVersion={contract.info.version}
                                pricedAlgo={pricedAlgo}
                            />
                        </div>
                    )}
                </div>

                {/* Mobile actions with opacity animation */}
                {!isDesktop && contract.ctc !== null && hasLocalState(contract.state) && (
                    <div
                        style={{
                            opacity: showMobileActions ? 1 : 0,
                            visibility: showMobileActions ? 'visible' : 'hidden',
                            transition: 'opacity 0.2s ease',
                            position: showMobileActions ? 'relative' : 'absolute',
                            width: '100%',
                            top: 0,
                            left: 0
                        }}
                        onClick={(e) => {
                            // Prevent clicks inside the actions from closing the view
                            e.stopPropagation();
                        }}
                    >
                        <PoolActions
                            poolState={poolState}
                            ctc={contract.ctc}
                            contractState={contract.state}
                            stakeTokenInfo={stakeTokenInfo}
                            rewardTokenInfo={rewardTokenInfo}
                            setIsZapModalOpen={setIsOpen}
                            currentBlock={currentBlock}
                            contractId={contract.id}
                            contractVersion={contract.info.version}
                            pricedAlgo={pricedAlgo}
                        />
                    </div>
                )}
                <ConnectWallet>
                    <ConnectWalletModal closeModal={closeConnectWallet} isModalOpen={isConnectWalletOpen} />
                </ConnectWallet>
            </GradientPoolContainer>
        );
    }

    return <Status status="Something is wrong, please contact us" showLoading={false} />;
}
