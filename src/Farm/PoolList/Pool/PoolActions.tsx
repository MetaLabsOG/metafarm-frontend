import React, { Dispatch, SetStateAction } from 'react';
import { useStore, useStoreMap } from 'effector-react';
import { AllDefined } from '../../../types';
import { $balances, ContractState, Priced, Asset, FarmType, Amount } from '../../../common/store';
import { LPTokenInfo } from '../../../providers/dexesProvider';

import { formatLPTokenName, isLPTokenInfo, numberRound } from './utils';
import { PoolState } from './types';
import { ToastTypes, useToasts } from './Notification';
import { useModal } from 'react-hooks-use-modal';
import { PoolActionsDesktop } from './PoolActionsDesktop';
import { PoolActionsMobile } from './PoolActionsMobile';
import { ZapModal } from '../../../Zap/ZapModal';
import { calculateTokenAmount } from '../../../common/lib';
import { useTimer } from '../../../common/reachHooks';
import { calculateUnlockTimeinSecs } from './UnlockTimer';
import { logFarmActionData } from '../../../logEvent';
import { Account } from '@reach-sh/stdlib/ALGO';
import { batchOptIn, checkOptIn } from '../../../batchOptIn.mjs';
import { reach } from '../../../AppContext';

export const onClickClaim = async (
    account: Account | null,
    ctc: any,
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>,
    rewardTokenInfo: Priced<Asset>,
    microAmount: Amount
) => {
    const amount = calculateTokenAmount(rewardTokenInfo, microAmount);
    logFarmActionData(account, 'CLAIM', amount, stakeTokenInfo, rewardTokenInfo);
    try {
        const isTokenOptIn = await checkOptIn(account?.networkAccount.addr, rewardTokenInfo.id);
        if (account && !isTokenOptIn) {
            await batchOptIn(reach, account.networkAccount.addr, [Number(rewardTokenInfo.id)], true);
        }
        await ctc.apis.claim();
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        console.log(error_message);
        logFarmActionData(account, 'CLAIM ERROR', amount, stakeTokenInfo, rewardTokenInfo, error_message);
    }
};

export const PoolActions = ({
    poolState,
    ctc,
    contractState,
    stakeTokenInfo,
    rewardTokenInfo,
    setIsZapModalOpen,
    currentBlock,
}: {
    poolState: PoolState;
    ctc: any;
    contractState: AllDefined<ContractState<FarmType>>;
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>;
    rewardTokenInfo: Priced<Asset>;
    setIsZapModalOpen: Dispatch<SetStateAction<boolean>>;
    currentBlock: number;
}) => {
    const pendingClaim = useStore(ctc.apis.claim.pending);

    const unlockTime = calculateUnlockTimeinSecs(
        currentBlock,
        contractState.local.lockTimestamp,
        Number(contractState.initial.lockLengthBlocks)
    );

    const [unlockTimer] = useTimer(unlockTime);

    const stakedTokenBalance = useStoreMap($balances, (bs) => bs[stakeTokenInfo.id] || BigInt(0));
    const balanceSuffix = isLPTokenInfo(stakeTokenInfo) ? 'LP' : stakeTokenInfo.unitName;

    const canStake = poolState !== PoolState.Finished;
    const canClaim = poolState > PoolState.Upcoming;
    const isActiveClaim = contractState.local.reward > 0 && !pendingClaim && !unlockTimer;

    const [Modal, openZapModal, closeZapModal] = useModal('root', { preventScroll: true });

    useToasts({
        api: ctc.apis.claim,
        text:
            numberRound(calculateTokenAmount(rewardTokenInfo, contractState.local.reward)) +
            ' ' +
            rewardTokenInfo.unitName,
        pendingStatus: pendingClaim,
        action: ToastTypes.claim,
    });

    return (
        <>
            {window.innerWidth <= 1120 ? (
                <PoolActionsMobile
                    stakedToken={stakeTokenInfo}
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
                    stakedToken={stakeTokenInfo}
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
            {isLPTokenInfo(stakeTokenInfo) && (
                <Modal>
                    <ZapModal
                        asset1_id={stakeTokenInfo.asset1}
                        asset2_id={stakeTokenInfo.asset2}
                        closeModal={closeZapModal}
                    />
                </Modal>
            )}
        </>
    );
};
