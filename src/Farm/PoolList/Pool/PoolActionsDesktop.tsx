import React, { FC } from 'react';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { GetLpTokenButton, PoolActionsDesktopContainer, TokenInfo, Claim } from './styled';

import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { $account, AllDefined, Asset, ContractState, FarmType, Priced } from '../../../common/store';
import { useStore } from 'effector-react';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { isCompoundEnabled, runCompound } from './compound';

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
    ModalOpen: () => void;
    rewardTokenInfo: Priced<Asset>;
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
    ModalOpen,
    rewardTokenInfo,
}) => {
    const account = useStore($account);

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
            <Claim>
                {lpTokenInfo && account && isCompoundEnabled(lpTokenInfo, rewardTokenInfo.id) && (
                    <PacmanButton
                        buttonText="COMPOUND"
                        buttonStyle="claim_button"
                        onClickAction={() =>
                            runCompound(account, ctc, lpTokenInfo, rewardTokenInfo, contractState.local.reward)
                        }
                        isInactive={!isActiveClaim}
                    />
                )}
            </Claim>
        </PoolActionsDesktopContainer>
    );
};
