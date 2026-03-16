import { FC } from 'react';
import { useUnit } from 'effector-react';

import arrowBack from '../../../imgs/arrow_back.svg';
import { Button } from '../../../Components/Button/Button';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { $account } from '../../../common/store';
import { PoolActionsMobileContainer, TokenInfo, RewardsContainer, ButtonBackMobile, PoolInfoValue } from './styled';
import { isCompoundEnabled, runCompound } from './compound';
import { RewardValues, StakeValue } from './PoolInfoDesktop';
import { UnlockTimer } from './UnlockTimer';
import { onClickClaim } from './PoolActions';
import { isLPTokenInfo } from './utils';
import { PoolActionsDesktopProps, getLPTokenAction } from './PoolActionsDesktop';

export const PoolActionsMobile: FC<PoolActionsDesktopProps> = ({
    pricedAlgo,
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
    setIsZapModalOpen,
    unlockTimer,
    contractId,
    hasLock,
    isAutoClaim,
    setNft,
}) => {
    const account = useUnit($account);
    return (
        <PoolActionsMobileContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
                <ButtonBackMobile
                    src={arrowBack}
                    alt="BACK"
                    onClick={() => {
                        setIsZapModalOpen(false);
                    }}
                />
                <TokenInfo>
                    {isLPTokenInfo(stakedToken) && canStake && (
                        <Button
                            style={{ color: 'white' }}
                            buttonText="Get LP Tokens"
                            onClick={getLPTokenAction(stakedToken, openZapModal)}
                        />
                    )}
                </TokenInfo>
                <div 
                    style={{ 
                        fontSize: '24px', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        cursor: 'pointer',
                        padding: '5px',
                        marginRight: '10px',
                        transition: 'color 0.2s ease'
                    }}
                    onClick={() => setIsZapModalOpen(false)}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                >
                    ×
                </div>
            </div>
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
            <PoolInfoValue style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div style={{ fontSize: 20 }}>Staked</div>
                <div style={{ color: 'white' }}>
                    <StakeValue contractState={contractState} tokenInfo={stakedToken} pricedAlgo={pricedAlgo} />
                </div>
            </PoolInfoValue>
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
            <PoolInfoValue style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div style={{ fontSize: 20 }}>Reward</div>
                <div style={{ color: 'white' }}>
                    <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
                </div>
            </PoolInfoValue>
            <RewardsContainer>
                <div>
                    <PacmanButton
                        style={!canClaim ? { visibility: 'hidden' } : {}}
                        buttonText="Claim"
                        buttonStyle="claim_button"
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
                    <UnlockTimer unlockTimer={unlockTimer} />
                </div>
                {canStake && canClaim && account && isCompoundEnabled(stakedToken, rewardTokenInfo.id) && (
                    <PacmanButton
                        buttonText="Compound"
                        buttonStyle="compound_button"
                        isInactive={!isActiveClaim}
                        onClickAction={async () =>
                            runCompound(account, ctc, stakedToken, rewardTokenInfo, contractState.local.reward)
                        }
                    />
                )}
            </RewardsContainer>
        </PoolActionsMobileContainer>
    );
};
