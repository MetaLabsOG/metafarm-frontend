import React, { FC } from 'react';
import { GetLpTokenButton, PoolActionsMobileContainer, TokenInfo, Claim } from './styled';

import { PoolActionsDesktopProps } from './PoolActionsDesktop';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';

export const PoolActionsMobile: FC<PoolActionsDesktopProps> = ({
    lpTokenInfo,

    stakedToken,
    stakedTokenBalance,
    balanceSuffix,
    ctc,
    contractState,
    canStake,

    canClaim,
    isActiveClaim,

    ModalOpen,
}) => {
    return (
        <PoolActionsMobileContainer>
            <TokenInfo>
                {lpTokenInfo && canStake && <GetLpTokenButton onClick={ModalOpen}>Get LP Tokens</GetLpTokenButton>}
            </TokenInfo>
            {canStake && (
                <TokenInputWithButton
                    token={stakedToken}
                    tokenMicroBalance={stakedTokenBalance}
                    balanceSuffix={balanceSuffix}
                    buttonName="STAKE"
                    actionEffect={ctc.apis.stake}
                />
            )}
            <TokenInputWithButton
                token={stakedToken}
                tokenMicroBalance={contractState.local.staked}
                balanceSuffix={balanceSuffix}
                buttonName="WITHDRAW"
                actionEffect={ctc.apis.unstake}
                blueButtonColor={true}
            />
            <Claim>
                {canClaim && (
                    <PacmanButton
                        buttonText="CLAIM"
                        buttonStyle="claim_button"
                        onClickAction={() => ctc.apis.claim()}
                        isInactive={!isActiveClaim}
                    />
                )}
            </Claim>
        </PoolActionsMobileContainer>
    );
};
