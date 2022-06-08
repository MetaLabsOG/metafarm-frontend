import React, { FC } from 'react';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { GetLpTokenButton, PoolActionsDesktopContainer, TokenInfo, Claim, ClaimButton, Pacman } from './styled';

import packman from '../../../imgs/pacman.gif';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { AllDefined, Asset, ContractState, FarmType, Priced } from '../../../common/store';

export interface PoolActionsDesktopProps {
    lpTokenInfo: LPTokenInfo | null;

    stakedToken: LPTokenInfo | Priced<Asset>;
    stakedTokenBalance: number;
    balanceSuffix: string;
    ctc: any;
    contractState: AllDefined<ContractState<FarmType>>;
    canStake: boolean;

    claim: () => void;
    canClaim: boolean;
    isActiveClaim: boolean;
    pendingClaim: unknown;

    ModalOpen: () => void;
}

export const PoolActionsDesktop: FC<PoolActionsDesktopProps> = ({
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
        <PoolActionsDesktopContainer>
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
        </PoolActionsDesktopContainer>
    );
};
