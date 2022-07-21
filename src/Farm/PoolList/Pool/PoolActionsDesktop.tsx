import React, { Dispatch, FC, SetStateAction } from 'react';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { ContractLink, ContractLockSuffix, PoolActionsDesktopContainer, TokenInfo } from './styled';

import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { $account, Amount, AppId, Asset, ContractState, FarmType, Priced } from '../../../common/store';
import { AllDefined } from '../../../types';
import { useStore } from 'effector-react';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { Button } from '../../../Components/Button/Button';
import { isCompoundEnabled, runCompound } from './compound';
import { UnlockTimer } from './UnlockTimer';
import { onClickClaim } from './PoolActions';
import { isLPTokenInfo } from './utils';
import { algoexplorerContractLink } from '../../../common/lib';
import { ALGONET, TESTNET } from '../../../AppContext';
import { notify } from '../../../Components/Notification';

export const getLPTokenAction = (lpToken: LPTokenInfo, openModal: () => void) => {
    if (lpToken.poolDex === 'T2') {
        return openModal;
    } else if (lpToken.poolDex === 'PT') {
        const pactPrefix = ALGONET === TESTNET ? 'testnet.' : '';
        return () => window.open(`https://${pactPrefix}pact.fi/add-liquidity/${lpToken.poolId}`, '_blank');
    } else {
        return () => notify('Sorry, this is a mock token, you cannot get it', 'error');
    }
};

export interface PoolActionsDesktopProps {
    pricedAlgo: Priced<Asset>;
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
    contractId: AppId;
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
    contractId,
}) => {
    const account = useStore($account);

    return (
        <PoolActionsDesktopContainer>
            <TokenInfo>
                {isLPTokenInfo(stakedToken) && canStake && (
                    <Button
                        onClick={getLPTokenAction(stakedToken, openZapModal)}
                        style={{ color: 'white' }}
                        buttonText="Get LP Tokens"
                    />
                )}
                <a target="_blank" href={algoexplorerContractLink(contractId)} rel="noreferrer">
                    <ContractLink>Farm contract</ContractLink>
                </a>
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
