import { Dispatch, FC, SetStateAction } from 'react';
import { useUnit } from 'effector-react';
import { ALGONET, TESTNET } from '../../../AppContext';
import { LPTokenInfo } from '../../../dexes';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { $account, Amount, AppId, Asset, ContractState, FarmType, Priced } from '../../../common/store';
import { AllDefined } from '../../../types';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { Button } from '../../../Components/Button/Button';
import { algoexplorerContractLink } from '../../../common/lib';
import { notify } from '../../../Components/Notification';
import { NftLottery } from '../../../Swap/NftWinModal';
import { isCompoundEnabled, runCompound } from './compound';
import { ActionButtonsRow, ActionSectionLabel, ContractLink, ModalDivider, PoolActionsDesktopContainer } from './styled';
import { UnlockTimer } from './UnlockTimer';
import { onClickClaim } from './PoolActions';
import { getDestroyLPLink, getLPTokenPoolLink, isLPTokenInfo } from './utils';

// NOTE: I will leave this function here in case we add more dexes and want to have fallback functionality
// before zap support
export const getLPTokenAction = (lpToken: LPTokenInfo, openModal: () => void) => {
    if (lpToken.poolDex === 'PT') {
        // TODO: fix modal, IT'S EASY, just change api call
        return () => {
            window.open(`https://app.pact.fi/add-liquidity/${lpToken.poolId}`, '_blank');
        };
    } else if (lpToken.poolDex === 'T2') {
        return openModal;
    } else if (lpToken.poolDex === 'H2') {
        const humbleUrl = ALGONET === TESTNET ? 'testnet.humbleswap.com' : 'app.humble.sh';
        return () => {
            window.open(`https://${humbleUrl}/pool/add/${lpToken.poolId}`, '_blank');
        };
    } else if (lpToken.poolDex === 'T3') {
        return () => {
            window.open(getLPTokenPoolLink(lpToken.poolDex, lpToken.poolId, lpToken.asset1, lpToken.asset2), '_blank');
        };
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
    setNft: Dispatch<SetStateAction<NftLottery | null>>;
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
    setNft,
}) => {
    const account = useUnit($account);

    const showCompound = canStake && canClaim && account && isCompoundEnabled(stakedToken, rewardTokenInfo.id);

    return (
        <PoolActionsDesktopContainer>
            {/* Top row: Get Token + Contract links */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    {isLPTokenInfo(stakedToken) && canStake && (
                        <Button
                            style={{ color: 'white', height: '36px', fontSize: '12px', width: 'auto', padding: '0 16px' }}
                            buttonText="Get LP Tokens"
                            onClick={getLPTokenAction(stakedToken, openZapModal)}
                        />
                    )}
                    {!isLPTokenInfo(stakedToken) && canStake && (
                        <a target="_blank" href={'https://app.cometa.farm/swap'} rel="noreferrer">
                            <Button
                                style={{ color: 'white', height: '36px', fontSize: '12px', width: 'auto', padding: '0 16px' }}
                                buttonText={'Get ' + stakedToken.unitName}
                                onClick={() => {}}
                            />
                        </a>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <a target="_blank" href={algoexplorerContractLink(contractId)} rel="noreferrer">
                        <ContractLink>Contract</ContractLink>
                    </a>
                    {isLPTokenInfo(stakedToken) && (
                        <a target="_blank" href={getDestroyLPLink(stakedToken)} rel="noreferrer">
                            <ContractLink>Destroy LP</ContractLink>
                        </a>
                    )}
                </div>
            </div>

            <ModalDivider />

            {/* Stake section */}
            {canStake && (
                <div>
                    <ActionSectionLabel>Stake</ActionSectionLabel>
                    <TokenInputWithButton
                        token={stakedToken}
                        tokenMicroBalance={stakedTokenBalance}
                        balanceSuffix={balanceSuffix}
                        buttonName="Stake"
                        optInId={rewardTokenInfo.id}
                        actionEffect={ctc.apis.stake}
                        hasLock={hasLock}
                        isAutoClaim={isAutoClaim}
                    />
                </div>
            )}

            {/* Withdraw section */}
            <div>
                <ActionSectionLabel>Withdraw</ActionSectionLabel>
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
            </div>

            <ModalDivider />

            {/* Claim / Compound buttons */}
            {canClaim && (
                <ActionButtonsRow>
                    <PacmanButton
                        buttonText="Claim"
                        buttonStyle="claim_button"
                        style={{ flex: 1, width: '100%' }}
                        isInactive={!isActiveClaim}
                        onClickAction={async () =>
                            onClickClaim(
                                account,
                                ctc,
                                stakedToken,
                                rewardTokenInfo,
                                contractState.local.reward,
                                contractId,
                                setNft
                            )
                        }
                    />
                    {showCompound && (
                        <PacmanButton
                            buttonText="Compound"
                            buttonStyle="claim_button"
                            style={{ flex: 1, width: '100%' }}
                            isInactive={!isActiveClaim}
                            onClickAction={async () =>
                                runCompound(account, ctc, stakedToken, rewardTokenInfo, contractState.local.reward)
                            }
                        />
                    )}
                </ActionButtonsRow>
            )}

            <UnlockTimer unlockTimer={unlockTimer} />
        </PoolActionsDesktopContainer>
    );
};
