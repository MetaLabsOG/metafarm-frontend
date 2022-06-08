import React, { FC } from 'react';
import { GetLpTokenButton, PoolActionsMobileContainer, TokenInfo, Claim, ClaimButton, Pacman } from './styled';

import packman from '../../../imgs/pacman.gif';
import { PoolActionsDesktopProps } from './PoolActionsDesktop';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';

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
    pendingClaim,

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
            {/* TODO: create button component and refactor claim*/}
            <Claim>
                {canClaim && (
                    <ClaimButton isActive={isActiveClaim} onClick={() => ctc.apis.claim()}>
                        {pendingClaim ? <Pacman src={packman} /> : 'CLAIM'}
                    </ClaimButton>
                )}
            </Claim>
        </PoolActionsMobileContainer>
    );
};
