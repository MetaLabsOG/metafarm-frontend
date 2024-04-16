import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { PoolHeader } from '../../../Components/PoolHeader/PoolHeader';
import info from '../../../imgs/info.svg';
import {
    PoolInfoMobileContainer,
    PoolInfoValue,
    PoolPropertyName,
    PoolPropertyValue,
    StakeButtonMobile,
    TimingMobile,
} from './styled';
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
                <PoolPropertyName>TVL</PoolPropertyName>
                <PoolPropertyValue>
                    ${numberRound(convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked))}
                </PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue style={{ marginBottom: '30px' }}>
                <PoolPropertyName>APR</PoolPropertyName>
                <PoolPropertyValue
                    style={{
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                        paddingRight: '7%',
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
                </PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue>
                <PoolPropertyName>Staked</PoolPropertyName>
                <PoolPropertyValue>
                    <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} pricedAlgo={pricedAlgo} />
                </PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue>
                <PoolPropertyName>Reward</PoolPropertyName>
                <PoolPropertyValue>
                    <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
                </PoolPropertyValue>
            </PoolInfoValue>
            <StakeButtonMobile disabled={!contractState.local}>Stake</StakeButtonMobile>
            <TimingMobile>{timing}</TimingMobile>
        </PoolInfoMobileContainer>
    );
};
