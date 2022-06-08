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

    claim,
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
                    onClickAction={(amount: number) => ctc.apis.stake([amount])}
                    pendingStore={ctc.apis.stake.pending}
                />
            )}
            <TokenInputWithButton
                token={stakedToken}
                tokenMicroBalance={contractState.local.staked}
                balanceSuffix={balanceSuffix}
                buttonName="WITHDRAW"
                onClickAction={(amount: number) => ctc.apis.unstake([amount])}
                pendingStore={ctc.apis.unstake.pending}
                blueButtonColor={true}
            />
            <Claim>
                {canClaim && (
                    <ClaimButton isActive={isActiveClaim} onClick={claim}>
                        {pendingClaim ? <Pacman src={packman} /> : 'CLAIM'}
                    </ClaimButton>
                )}
            </Claim>
        </PoolActionsMobileContainer>
    );
};
