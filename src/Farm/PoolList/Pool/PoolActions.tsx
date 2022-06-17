import React, { Dispatch, SetStateAction } from 'react';
import { useStore, useStoreMap } from 'effector-react';
import { $balances, ContractState, Priced, Asset, AllDefined, FarmType, $account, Amount } from '../../../common/store';
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
import { logEvent, LogName } from '../../../logEvent';
import { Account } from '@reach-sh/stdlib/ALGO';

export const onClickClaim = async (
    account: Account | null,
    ctc: any,
    lpTokenInfo: Priced<LPTokenInfo> | null,
    rewardTokenInfo: Priced<Asset>,
    amount: Amount
) => {
    logEvent(
        account?.networkAccount.addr,
        {
            message: '[CLAIM]',
            amount: amount.toString(),
            lp_token_name: lpTokenInfo?.name,
            lp_token_id: lpTokenInfo?.id,
            lp_asset1_id: lpTokenInfo?.asset1,
            lp_asset2_id: lpTokenInfo?.asset2,
            reward_token_id: rewardTokenInfo.id,
            reward_token_name: rewardTokenInfo.unitName,
        },
        LogName.farm
    );
    try {
        await ctc.apis.claim();
    } catch (e) {
        // @ts-ignore
        const error_message = e.message;
        console.log(error_message);
        logEvent(
            account?.networkAccount.addr,
            {
                message: '[CLAIM ERROR]',
                amount: calculateTokenAmount(rewardTokenInfo, amount).toString(),
                lp_token_name: lpTokenInfo?.name,
                error: error_message,
            },
            LogName.farm
        );
    }
};

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

    const unlockTime = calculateUnlockTimeinSecs(
        currentBlock,
        contractState.local.lockTimestamp,
        Number(contractState.initial.lockLengthBlocks)
    );

    const [unlockTimer] = useTimer(unlockTime);

    const stakedToken = lpTokenInfo ? lpTokenInfo : rewardTokenInfo;
    const stakedTokenBalance = useStoreMap($balances, (bs) => bs[stakedToken.id] || BigInt(0));
    const balanceSuffix = lpTokenInfo ? 'LP' : rewardTokenInfo.unitName;

    const canStake = poolState !== PoolState.Finished;
    const canClaim = poolState > PoolState.Upcoming;
    const isActiveClaim = contractState.local.reward > 0 && !pendingClaim && !unlockTimer;

    const [Modal, openZapModal, closeZapModal] = useModal('root', { preventScroll: true });

    useToasts({
        api: ctc.apis.claim,
        text: `${formatLPTokenName(stakedToken.name)} ${numberRound(
            calculateTokenAmount(rewardTokenInfo, contractState.local.reward)
        )} claim`,
        pendingStatus: pendingClaim,
        action: ToastTypes.claim,
    });

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
