import React, { Dispatch, SetStateAction } from 'react';
import { useStore, useStoreMap } from 'effector-react';
import { $balances, ContractState, Priced, Asset, AllDefined, FarmType, $account } from '../../../common/store';
import { LPTokenInfo } from '../../../providers/dexesProvider';

import { formatLPTokenName, numberRound } from './utils';
import { PoolState } from './types';
import { ToastTypes, useToasts } from './hooks';
import { useModal } from 'react-hooks-use-modal';
import { PoolActionsDesktop } from './PoolActionsDesktop';
import { PoolActionsMobile } from './PoolActionsMobile';
import { ZapModal } from '../../../Zap/ZapModal';
import { calculateTokenAmount } from '../../../common/lib';
import { useTimer } from '../../../common/reachHooks';
import { calculateUnlockTimeinSecs } from './UnlockTimer';

export const PoolActions = ({
    poolState,
    ctc,
    contractState,
    lpTokenInfo,
    rewardTokenInfo,
    setIsZapModalOpen,
    currentBlock,
}: {
    poolState: PoolState;
    ctc: any;
    contractState: AllDefined<ContractState<FarmType>>;
    lpTokenInfo: Priced<LPTokenInfo> | null;
    rewardTokenInfo: Priced<Asset>;
    setIsZapModalOpen: Dispatch<SetStateAction<boolean>>;
    currentBlock: number;
}) => {
    const pendingClaim = useStore(ctc.apis.claim.pending);

    const stakedToken = lpTokenInfo ? lpTokenInfo : rewardTokenInfo;
    const stakedTokenBalance = useStoreMap($balances, (bs) => bs[stakedToken.id] || BigInt(0));
    const balanceSuffix = lpTokenInfo ? 'LP' : rewardTokenInfo.unitName;

    const canStake = poolState !== PoolState.Finished;
    const canClaim = poolState > PoolState.Upcoming;
    const isActiveClaim = contractState.local.reward > 0 && !pendingClaim;

    const [Modal, openZapModal, closeZapModal] = useModal('root', { preventScroll: true });

    useToasts({
        api: ctc.apis.claim,
        text: `${formatLPTokenName(stakedToken.name)} ${numberRound(
            calculateTokenAmount(rewardTokenInfo, contractState.local.reward)
        )} claim`,
        pendingStatus: pendingClaim,
        action: ToastTypes.claim,
    });

    const unlockTime = calculateUnlockTimeinSecs(
        currentBlock,
        contractState.local.lockTimestamp,
        Number(contractState.initial.lockLengthBlocks)
    );

    const [unlockTimer] = useTimer(unlockTime);

    return (
        <>
            {window.innerWidth <= 1120 ? (
                <PoolActionsMobile
                    lpTokenInfo={lpTokenInfo}
                    stakedToken={stakedToken}
                    stakedTokenBalance={stakedTokenBalance}
                    rewardTokenInfo={rewardTokenInfo}
                    ctc={ctc}
                    contractState={contractState}
                    balanceSuffix={balanceSuffix}
                    canStake={canStake}
                    canClaim={canClaim}
                    isActiveClaim={isActiveClaim}
                    openZapModal={openZapModal}
                    setIsZapModalOpen={setIsZapModalOpen}
                    unlockTimer={unlockTimer}
                />
            ) : (
                <PoolActionsDesktop
                    lpTokenInfo={lpTokenInfo}
                    stakedToken={stakedToken}
                    stakedTokenBalance={stakedTokenBalance}
                    balanceSuffix={balanceSuffix}
                    rewardTokenInfo={rewardTokenInfo}
                    ctc={ctc}
                    contractState={contractState}
                    canStake={canStake}
                    canClaim={canClaim}
                    isActiveClaim={isActiveClaim}
                    openZapModal={openZapModal}
                    setIsZapModalOpen={setIsZapModalOpen}
                    unlockTimer={unlockTimer}
                />
            )}
            {lpTokenInfo && (
                <Modal>
                    <ZapModal
                        asset1_id={lpTokenInfo.asset1}
                        asset2_id={lpTokenInfo.asset2}
                        closeModal={closeZapModal}
                    />
                </Modal>
            )}
        </>
    );
};
