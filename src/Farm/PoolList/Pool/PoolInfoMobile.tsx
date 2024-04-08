import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { PoolHeader } from '../../../Components/PoolHeader/PoolHeader';
import info from '../../../imgs/info.svg';
import { PoolInfoMobileContainer, PoolInfoValue, StakeButtonMobile, TimingMobile } from './styled';
import { convertAmountToUSD, numberRound } from './utils';
import { getAPRTip, PoolInfoDesktopProps, RewardValues, StakeValue } from './PoolInfoDesktop';

export const PoolInfoMobile: FC<PoolInfoDesktopProps> = ({
    account,
    pricedAlgo,
    contractState,
    stakeTokenInfo,
    rewardTokenInfo,
    asset1_id,
    asset2_id,
    pool_name,
    APR,
    timing,
    contractLockSuffix,
    isOpen,
    dex,
    isVerified,
    isGame,
    nftRewards,
}) => {
    if (contractState.local && isOpen) {
        return null;
    }

    return (
        <PoolInfoMobileContainer>
            <PoolHeader
                asset1_id={asset1_id}
                asset2_id={asset2_id}
                pool_name={pool_name}
                rewardTokenName={rewardTokenInfo.unitName}
                dex={dex}
                lock={contractLockSuffix}
                isVerified={isVerified}
                algoRewards={contractState.initial.totalAlgoRewardAmount > 0}
                isGame={isGame}
                nftRewards={nftRewards}
            />
            <PoolInfoValue style={{ marginTop: '30px' }}>
                <div style={{ paddingLeft: 10 }}>TVL</div>
                <div style={{ color: 'white', paddingRight: 10 }}>
                    ${numberRound(convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked))}
                </div>
            </PoolInfoValue>
            <PoolInfoValue style={{ marginBottom: '30px' }}>
                <div style={{ paddingLeft: 10 }}>APR</div>{' '}
                <div
                    style={{
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                        paddingRight: 10,
                    }}
                >
                    {numberRound(APR.total)}%
                    <img
                        data-tip={getAPRTip(APR, rewardTokenInfo.unitName)}
                        style={{ marginLeft: '3px' }}
                        alt="APR info"
                        height="14px"
                        src={info}
                    />
                    <ReactTooltip clickable place="top" type="light" effect="solid" />
                </div>
            </PoolInfoValue>
            <PoolInfoValue>
                <div style={{ paddingLeft: 10 }}>My Stake</div>
                <div style={{ color: 'white', paddingRight: 10 }}>
                    <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} pricedAlgo={pricedAlgo} />
                </div>
            </PoolInfoValue>
            <PoolInfoValue>
                <div style={{ paddingLeft: 10 }}>Reward</div>
                <div style={{ color: 'white', paddingRight: 10 }}>
                    <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
                </div>
            </PoolInfoValue>
            <StakeButtonMobile disabled={!contractState.local}>MANAGE</StakeButtonMobile>
            <TimingMobile>{timing}</TimingMobile>
        </PoolInfoMobileContainer>
    );
};
