import React, { Dispatch, FC, SetStateAction } from 'react';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { GetLpTokenButton, PoolActionsDesktopContainer, TokenInfo } from './styled';

import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { $account, Amount, Asset, ContractState, FarmType, Priced } from '../../../common/store';
import { AllDefined } from '../../../types';
import { useStore } from 'effector-react';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { isCompoundEnabled, runCompound } from './compound';
import { UnlockTimer } from './UnlockTimer';
import { onClickClaim } from './PoolActions';
import { isLPTokenInfo } from './utils';

export interface PoolActionsDesktopProps {
    stakedToken: Priced<LPTokenInfo> | Priced<Asset>;
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
    unlockTimer: number;
}

export const PoolActionsDesktop: FC<PoolActionsDesktopProps> = ({
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
    unlockTimer,
}) => {
    const account = useStore($account);

    return (
        <PoolActionsDesktopContainer>
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
                buttonName="Stake"
                actionEffect={ctc.apis.stake}
            />
            <TokenInputWithButton
                token={stakedToken}
                tokenMicroBalance={contractState.local.staked}
                balanceSuffix={balanceSuffix}
                buttonName="Withdraw"
                actionEffect={ctc.apis.unstake}
                blueButtonColor={true}
            />
            <div>
                <PacmanButton
                    style={!canClaim ? { visibility: 'hidden' } : {}}
                    buttonText="Claim"
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
                        buttonText="Compound"
                        buttonStyle="claim_button"
                        onClickAction={() => runCompound(account, ctc, stakedToken, rewardTokenInfo)}
                        isInactive={!isActiveClaim}
                    />
                )}
        </PoolActionsDesktopContainer>
    );
};
