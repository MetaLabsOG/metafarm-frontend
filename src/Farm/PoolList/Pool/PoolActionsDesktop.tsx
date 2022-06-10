import React, { Dispatch, FC, SetStateAction } from 'react';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { GetLpTokenButton, PoolActionsDesktopContainer, TokenInfo } from './styled';

import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { $account, AllDefined, Amount, Asset, ContractState, FarmType, Priced } from '../../../common/store';
import { useStore } from 'effector-react';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { isCompoundEnabled, runCompound } from './compound';

export interface PoolActionsDesktopProps {
    lpTokenInfo: LPTokenInfo | null;
    stakedToken: LPTokenInfo | Priced<Asset>;
    stakedTokenBalance: Amount;
    balanceSuffix: string;
    rewardTokenInfo: Priced<Asset>;
    ctc: any;
    contractState: AllDefined<ContractState<FarmType>>;
    canStake: boolean;
    canClaim: boolean;
    isActiveClaim: boolean;
    openZapModal: () => void;
    setIsZapModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const PoolActionsDesktop: FC<PoolActionsDesktopProps> = ({
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
}) => {
    const account = useStore($account);

    return (
        <PoolActionsDesktopContainer>
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
        </PoolActionsDesktopContainer>
    );
};
