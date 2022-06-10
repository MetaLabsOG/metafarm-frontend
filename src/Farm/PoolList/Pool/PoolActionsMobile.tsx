import React, { FC } from 'react';
import { GetLpTokenButton, PoolActionsMobileContainer, TokenInfo, RewardsContainer, ButtonBackMobile } from './styled';

import { PoolActionsDesktopProps } from './PoolActionsDesktop';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { isCompoundEnabled, runCompound } from './compound';
import { useStore } from 'effector-react';
import { $account } from '../../../common/store';

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
            <TokenInputWithButton
                token={stakedToken}
                tokenMicroBalance={contractState.local.staked}
                balanceSuffix={balanceSuffix}
                buttonName="WITHDRAW"
                actionEffect={ctc.apis.unstake}
                blueButtonColor={true}
            />
            <RewardsContainer>
                <PacmanButton
                    style={!canClaim ? { visibility: 'hidden' } : {}}
                    buttonText="CLAIM"
                    buttonStyle="claim_button"
                    onClickAction={() => ctc.apis.claim()}
                    isInactive={!isActiveClaim}
                />
                {canClaim && lpTokenInfo && account && isCompoundEnabled(lpTokenInfo, rewardTokenInfo.id) && (
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
