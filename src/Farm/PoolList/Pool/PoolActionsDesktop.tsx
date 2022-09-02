import { Dispatch, FC, SetStateAction } from 'react';
import { useUnit } from 'effector-react';
import { LPTokenInfo } from '../../../dexes';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { $account, Amount, AppId, Asset, ContractState, FarmType, Priced } from '../../../common/store';
import { AllDefined } from '../../../types';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { Button } from '../../../Components/Button/Button';
import { algoexplorerContractLink } from '../../../common/lib';
import { ALGONET, TESTNET } from '../../../AppContext';
import { notify } from '../../../Components/Notification';
import { isCompoundEnabled, runCompound } from './compound';
import { ContractLink, PoolActionsDesktopContainer, TokenInfo } from './styled';
import { UnlockTimer } from './UnlockTimer';
import { onClickClaim } from './PoolActions';
import { convertAmountToUSD, isLPTokenInfo } from './utils';

// NOTE: I will leave this function here in case we add more dexes and want to have fallback functionality
// before zap support
export const getLPTokenAction = (lpToken: LPTokenInfo, openModal: () => void) => {
    if (lpToken.poolDex === 'T2' || lpToken.poolDex === 'PT') {
        return openModal;
    }
    return () => {
        notify('Sorry, this is a mock token, you cannot get it', 'error');
    };
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
    hasLock: boolean;
    isAutoClaim: boolean;
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
    hasLock,
    isAutoClaim,
}) => {
    const account = useUnit($account);

    return (
        <PoolActionsDesktopContainer>
            <TokenInfo>
                {isLPTokenInfo(stakedToken) && canStake && (
                    <Button
                        style={{ color: 'white' }}
                        buttonText="Get LP Tokens"
                        onClick={getLPTokenAction(stakedToken, openZapModal)}
                    />
                )}
                {!isLPTokenInfo(stakedToken) && canStake && (
                    <a target="_blank" href={'https://app.cometa.farm/swap'} rel="noreferrer">
                        <Button
                            style={{ color: 'white' }}
                            buttonText={'Get ' + stakedToken.unitName}
                            onClick={() => {}}
                        />
                    </a>
                )}
                <a target="_blank" href={algoexplorerContractLink(contractId)} rel="noreferrer">
                    <ContractLink>Сontract</ContractLink>
                </a>
            </TokenInfo>
            <TokenInputWithButton
                style={!canStake ? { visibility: 'hidden' } : {}}
                token={stakedToken}
                tokenMicroBalance={stakedTokenBalance}
                balanceSuffix={balanceSuffix}
                buttonName="Stake"
                optInId={rewardTokenInfo.id}
                actionEffect={ctc.apis.stake}
                hasLock={hasLock}
                isAutoClaim={isAutoClaim}
            />
            <TokenInputWithButton
                token={stakedToken}
                tokenMicroBalance={contractState.local.staked}
                balanceSuffix={balanceSuffix}
                buttonName="Withdraw"
                optInId={rewardTokenInfo.id}
                actionEffect={ctc.apis.unstake}
                hasLock={hasLock}
                isAutoClaim={isAutoClaim}
            />
            <div>
                <PacmanButton
                    style={!canClaim ? { visibility: 'hidden' } : {}}
                    buttonText="Claim"
                    buttonStyle="claim_button"
                    isInactive={!isActiveClaim}
                    onClickAction={async () =>
                        onClickClaim(account, ctc, stakedToken, rewardTokenInfo, contractState.local.reward)
                    }
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
                        isInactive={!isActiveClaim}
                        onClickAction={async () =>
                            runCompound(account, ctc, stakedToken, rewardTokenInfo, contractState.local.reward)
                        }
                    />
                )}
        </PoolActionsDesktopContainer>
    );
};
