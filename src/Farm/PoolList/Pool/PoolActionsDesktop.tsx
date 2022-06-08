import React, { FC } from 'react';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { GetLpTokenButton, PoolActionsDesktopContainer, TokenInfo, Claim, ClaimButton, Pacman } from './styled';

import pacman from '../../../imgs/pacman.gif';
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
            {/*TODO: create button component and refactor claim*/}
            <Claim>
                {canClaim && (
                    <ClaimButton isActive={isActiveClaim} onClick={() => ctc.apis.claim()}>
                        {pendingClaim ? <Pacman src={pacman} /> : 'CLAIM'}
                    </ClaimButton>
                )}
            </Claim>
        </PoolActionsDesktopContainer>
    );
};
