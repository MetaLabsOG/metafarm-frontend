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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
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
            </div>
            <TokenInputWithButton
                style={!canStake ? { visibility: 'hidden' } : {}}
                token={stakedToken}
                tokenMicroBalance={stakedTokenBalance}
                balanceSuffix={balanceSuffix}
                buttonName="STAKE"
                optInId={rewardTokenInfo.id}
                actionEffect={ctc.apis.stake}
                hasLock={hasLock}
                isAutoClaim={isAutoClaim}
            />
            <PoolInfoValue style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div>MY STAKE</div>
                <div style={{ color: 'white' }}>
                    <StakeValue contractState={contractState} tokenInfo={stakedToken} pricedAlgo={pricedAlgo} />
                </div>
            </PoolInfoValue>
            <TokenInputWithButton
                token={stakedToken}
                tokenMicroBalance={contractState.local.staked}
                balanceSuffix={balanceSuffix}
                buttonName="WITHDRAW"
                optInId={rewardTokenInfo.id}
                actionEffect={ctc.apis.unstake}
                hasLock={hasLock}
                isAutoClaim={isAutoClaim}
            />
            <PoolInfoValue style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div>REWARD</div>
                <div style={{ color: 'white' }}>
                    <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
                </div>
            </PoolInfoValue>
            <RewardsContainer>
                <div>
                    <PacmanButton
                        style={!canClaim ? { visibility: 'hidden' } : {}}
                        buttonText="CLAIM"
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
                        buttonText="COMPOUND"
                        buttonStyle="claim_button"
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
