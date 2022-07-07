import React, { FC } from 'react';
import {
    GetLpTokenButton,
    PoolActionsMobileContainer,
    TokenInfo,
    RewardsContainer,
    ButtonBackMobile,
    PoolInfoValue,
} from './styled';
import arrowBack from '../../../imgs/arrow_back.svg';

import { PoolActionsDesktopProps } from './PoolActionsDesktop';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { isCompoundEnabled, runCompound } from './compound';
import { useStore } from 'effector-react';
import { $account } from '../../../common/store';
import { RewardValues, StakeValue } from './PoolInfoDesktop';
import { UnlockTimer } from './UnlockTimer';
import { onClickClaim } from './PoolActions';
import { isLPTokenInfo } from './utils';

export const PoolActionsMobile: FC<PoolActionsDesktopProps> = ({
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
            <ButtonBackMobile onClick={() => setIsZapModalOpen(false)} src={arrowBack} alt="BACK" />
            <TokenInfo>
                {isLPTokenInfo(stakedToken) && canStake && (
                    <GetLpTokenButton onClick={openZapModal}>Get LP Tokens</GetLpTokenButton>
                )}
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
                            onClickClaim(account, ctc, stakedToken, rewardTokenInfo, contractState.local.reward)
                        }
                        isInactive={!isActiveClaim}
                    />
                    <UnlockTimer unlockTimer={unlockTimer} />
                </div>
                {canStake &&
                    canClaim &&
                    isLPTokenInfo(stakedToken) &&
                    account &&
                    isCompoundEnabled(stakedToken, rewardTokenInfo.id) && (
                        <PacmanButton
                            buttonText="COMPOUND"
                            buttonStyle="claim_button"
                            onClickAction={() => runCompound(account, ctc, stakedToken, rewardTokenInfo)}
                            isInactive={!isActiveClaim}
                        />
                    )}
            </RewardsContainer>
        </PoolActionsMobileContainer>
    );
};
