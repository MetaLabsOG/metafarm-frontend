import React, { FC } from 'react';
import {
    GetLpTokenButton,
    PoolActionsMobileContainer,
    TokenInfo,
    RewardsContainer,
    ButtonBackMobile,
    PoolInfoValue,
} from './styled';

import { PoolActionsDesktopProps } from './PoolActionsDesktop';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { isCompoundEnabled, runCompound } from './compound';
import { useStore } from 'effector-react';
import { $account } from '../../../common/store';
import { RewardValues, StakeValue } from './PoolInfoDesktop';
import { UnlockTimer } from './UnlockTimer';
import { onClickClaim } from './PoolActions';

export const PoolActionsMobile: FC<PoolActionsDesktopProps> = ({
    lpTokenInfo,
    stakedToken,
    stakedTokenBalance,
    balanceSuffix,
    rewardTokenInfo,
    ctc,
    contractState,
    canStake,
    canClaim,
    isActiveClaim,
    openZapModal,
    setIsZapModalOpen,
    unlockTimer,
}) => {
    const account = useStore($account);
    return (
        <PoolActionsMobileContainer>
            <ButtonBackMobile onClick={() => setIsZapModalOpen(false)}>BACK</ButtonBackMobile>
            <TokenInfo>
                {lpTokenInfo && canStake && <GetLpTokenButton onClick={openZapModal}>Get LP Tokens</GetLpTokenButton>}
            </TokenInfo>
            <TokenInputWithButton
                style={!canStake ? { visibility: 'hidden' } : {}}
                token={stakedToken}
                tokenMicroBalance={stakedTokenBalance}
                balanceSuffix={balanceSuffix}
                buttonName="STAKE"
                actionEffect={ctc.apis.stake}
            />
            <PoolInfoValue style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div>MY STAKE</div>
                <div style={{ color: 'white' }}>
                    <StakeValue contractState={contractState} tokenInfo={stakedToken} />
                </div>
            </PoolInfoValue>
            <TokenInputWithButton
                token={stakedToken}
                tokenMicroBalance={contractState.local.staked}
                balanceSuffix={balanceSuffix}
                buttonName="WITHDRAW"
                actionEffect={ctc.apis.unstake}
                blueButtonColor={true}
            />
            <PoolInfoValue style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div>REWARD</div>
                <div style={{ color: 'white' }}>
                    <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} />
                </div>
            </PoolInfoValue>
            <RewardsContainer>
                <div>
                    <PacmanButton
                        style={!canClaim ? { visibility: 'hidden' } : {}}
                        buttonText="CLAIM"
                        buttonStyle="claim_button"
                        onClickAction={() =>
                            onClickClaim(account, ctc, lpTokenInfo, rewardTokenInfo, contractState.local.reward)
                        }
                        isInactive={!isActiveClaim}
                    />
                    <UnlockTimer unlockTimer={unlockTimer} />
                </div>
                {canStake &&
                    canClaim &&
                    lpTokenInfo &&
                    account &&
                    isCompoundEnabled(lpTokenInfo, rewardTokenInfo.id) && (
                        <PacmanButton
                            buttonText="COMPOUND"
                            buttonStyle="claim_button"
                            onClickAction={() =>
                                runCompound(account, ctc, lpTokenInfo, rewardTokenInfo, contractState.local.reward)
                            }
                            isInactive={!isActiveClaim}
                        />
                    )}
            </RewardsContainer>
        </PoolActionsMobileContainer>
    );
};
