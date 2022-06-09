import React from 'react';
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

export const PoolActions = ({
    poolState,
    ctc,
    contractState,
    lpTokenInfo,
    rewardTokenInfo,
}: {
    poolState: PoolState;
    ctc: any;
    contractState: AllDefined<ContractState<FarmType>>;
    lpTokenInfo: LPTokenInfo | null;
    rewardTokenInfo: Priced<Asset>;
}) => {
    // const account = useStore($account);
    const pendingClaim = useStore(ctc.apis.claim.pending);

    const stakedToken = lpTokenInfo ? lpTokenInfo : rewardTokenInfo;
    const stakedTokenBalance = useStoreMap($balances, (bs) => bs[stakedToken.id] || BigInt(0));
    const balanceSuffix = lpTokenInfo ? 'LP' : rewardTokenInfo.unitName;

    const canStake = poolState !== PoolState.Finished;
    const canClaim = poolState > PoolState.Upcoming;

    const isActiveClaim = contractState.local.reward > 0 && !pendingClaim;

    const [Modal, open] = useModal('root', { preventScroll: true });

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
                    ctc={ctc}
                    contractState={contractState}
                    balanceSuffix={balanceSuffix}
                    canStake={canStake}
                    canClaim={canClaim}
                    isActiveClaim={isActiveClaim}
                    pendingClaim={pendingClaim}
                    ModalOpen={open}
                />
            ) : (
                <PoolActionsDesktop
                    lpTokenInfo={lpTokenInfo}
                    stakedToken={stakedToken}
                    stakedTokenBalance={stakedTokenBalance}
                    balanceSuffix={balanceSuffix}
                    ctc={ctc}
                    contractState={contractState}
                    canStake={canStake}
                    canClaim={canClaim}
                    isActiveClaim={isActiveClaim}
                    pendingClaim={pendingClaim}
                    ModalOpen={open}
                />
            )}
            {lpTokenInfo && (
                <Modal>
                    <ZapModal asset1_id={lpTokenInfo.asset1} asset2_id={lpTokenInfo.asset2} />
                </Modal>
            )}
        </>
    );
};
