import { Dispatch, SetStateAction } from 'react';
import { useStore, useStoreMap, useUnit } from 'effector-react';
import { useModal } from 'react-hooks-use-modal';
import { Account } from '@reach-sh/stdlib/ALGO';
import { AllDefined } from '../../../types';
import { $balances, ContractState, Priced, Asset, FarmType, Amount, AppId } from '../../../common/store';
import { LPTokenInfo } from '../../../dexes';
import { notify, ToastTypes, useToasts } from '../../../Components/Notification';
import { useTimer } from '../../../common/reachHooks';
import { logFarmActionData } from '../../../logEvent';
import { batchOptIn, checkOptIn } from '../../../batchOptIn';
import { reach } from '../../../AppContext';
import { fromSmallestUnits } from '../../../common/lib';
import { Zap } from '../../../Zap';
import { isLPTokenInfo } from './utils';
import { PoolState } from './types';
import { PoolActionsDesktop } from './PoolActionsDesktop';
import { PoolActionsMobile } from './PoolActionsMobile';
import { calculateUnlockTimeinSecs } from './UnlockTimer';

export const onClickClaim = async (
    account: Account | null,
    ctc: any,
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>,
    rewardTokenInfo: Priced<Asset>,
    microAmount: Amount
) => {
    const amount = fromSmallestUnits(rewardTokenInfo, microAmount);
    logFarmActionData(account, 'CLAIM', amount, stakeTokenInfo, rewardTokenInfo);
    try {
        const isTokenOptIn =
            account === null ? false : await checkOptIn(account.networkAccount.addr, rewardTokenInfo.id);
        if (account && !isTokenOptIn) {
            await batchOptIn(reach, account.networkAccount.addr, [Number(rewardTokenInfo.id)], true);
        }
        await ctc.apis.claim();
    } catch (error) {
        const error_message = error instanceof Error ? error.message : String(error);
        console.log(error_message);
        if (error_message.includes('stake is locked')) {
            notify('Please, wait. Stake is locked.', 'error');
        } else if (error_message.includes('cancelled') || error_message.includes('The User has rejected')) {
            notify('Operation is cancelled.', 'warning');
        } else {
            notify(error_message, 'error');
        }
        logFarmActionData(account, 'CLAIM ERROR', amount, stakeTokenInfo, rewardTokenInfo, error_message);
    }
};

export function PoolActions({
    poolState,
    ctc,
    contractState,
    stakeTokenInfo,
    rewardTokenInfo,
    setIsZapModalOpen,
    currentBlock,
    contractId,
    contractVersion,
    pricedAlgo,
}: {
    poolState: PoolState;
    ctc: any;
    contractState: AllDefined<ContractState<FarmType>>;
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>;
    rewardTokenInfo: Priced<Asset>;
    setIsZapModalOpen: Dispatch<SetStateAction<boolean>>;
    currentBlock: number;
    contractId: AppId;
    contractVersion: string;
    pricedAlgo: Priced<Asset>;
}) {
    const isFarm = isLPTokenInfo(stakeTokenInfo);

    const pendingClaim = useStore(ctc.apis.claim.pending);

    const unlockTime = calculateUnlockTimeinSecs(
        currentBlock,
        contractState.local.lockTimestamp,
        Number(contractState.initial.lockLengthBlocks)
    );

    const [unlockTimer] = useTimer(unlockTime);

    const stakedTokenBalance = useStoreMap($balances, (bs) => bs[stakeTokenInfo.id] || BigInt(0));
    const balanceSuffix = isFarm ? 'LP' : stakeTokenInfo.unitName;

    const canStake = poolState !== PoolState.Finished;
    const canClaim = poolState > PoolState.Upcoming;
    const isActiveClaim = contractState.local.reward > 0 && !pendingClaim && !unlockTimer;
    const hasLock = contractState.initial.lockLengthBlocks > 0;
    const [Modal, openZapModal, closeZapModal] = useModal('root');

    useToasts({
        api: ctc.apis.claim,
        text: `${fromSmallestUnits(rewardTokenInfo, contractState.local.reward)} ${rewardTokenInfo.unitName}`,
        pendingStatus: pendingClaim,
        action: ToastTypes.claim,
    });

    return (
        <>
            {window.innerWidth <= 1120 ? (
                <PoolActionsMobile
                    pricedAlgo={pricedAlgo}
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
                    contractId={contractId}
                    hasLock={hasLock}
                    contractVersion={contractVersion}
                />
            ) : (
                <PoolActionsDesktop
                    pricedAlgo={pricedAlgo}
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
                    contractId={contractId}
                    hasLock={hasLock}
                    contractVersion={contractVersion}
                />
            )}
            {isFarm && (
                <Modal>
                    <Zap
                        inputDexProvider={stakeTokenInfo.poolDex}
                        filteredOptions={[stakeTokenInfo.asset1, stakeTokenInfo.asset2]}
                        closeModal={closeZapModal}
                    />
                </Modal>
            )}
        </>
    );
}
