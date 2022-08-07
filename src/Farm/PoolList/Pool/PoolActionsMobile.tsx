import { FC } from 'react';
import { useUnit } from 'effector-react';

import { PoolActionsMobileContainer, TokenInfo, RewardsContainer, ButtonBackMobile, PoolInfoValue } from './styled';
import arrowBack from '../../../imgs/arrow_back.svg';
import { Button } from '../../../Components/Button/Button';
import { TokenInputWithButton } from '../../../Components/TokenInputWithButton/TokenInputWithButton';
import { PacmanButton } from '../../../Components/PacmanButton/PacmanButton';
import { $account } from '../../../common/store';
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
}) => {
    const account = useUnit($account);
    return (
        <PoolActionsMobileContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <ButtonBackMobile onClick={() => setIsZapModalOpen(false)} src={arrowBack} alt="BACK" />
                <TokenInfo>
                    {isLPTokenInfo(stakedToken) && canStake && (
                        <Button
                            onClick={getLPTokenAction(stakedToken, openZapModal)}
                            style={{ color: 'white' }}
                            buttonText="Get LP Tokens"
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
                            buttonText="COMPOUND"
                            buttonStyle="claim_button"
                            onClickAction={() => runCompound(account, ctc, stakedToken, rewardTokenInfo)}
                            isInactive={!isActiveClaim}
                        />
                    )}
            </RewardsContainer>
        </PoolActionsMobileContainer>
    );
};
