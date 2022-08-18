import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { PoolHeader } from '../../../Components/PoolHeader/PoolHeader';
import info from '../../../imgs/info.svg';
import { PoolInfoMobileContainer, PoolInfoValue, StakeButtonMobile, TimingMobile } from './styled';
import { algoRewardPerBlock, convertAmountToUSD, numberRound } from './utils';
import { getAPRTip, PoolInfoDesktopProps, RewardValues, StakeValue } from './PoolInfoDesktop';
import { APRTypes } from './PoolInfo';

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
    dexIcon,
    isVerified,
}) => {
    if (contractState.local && isOpen) {
        return <></>;
    }

    return (
        <PoolInfoMobileContainer>
            <PoolHeader
                asset1_id={asset1_id}
                asset2_id={asset2_id}
                pool_name={pool_name}
                rewardTokenName={rewardTokenInfo.unitName}
                dexIcon={dexIcon}
                lock={contractLockSuffix}
                isVerified={isVerified}
                algoRewards={algoRewardPerBlock(contractState.initial) > 0}
            />
            <PoolInfoValue style={{ marginTop: '30px' }}>
                <div>TVL</div>
                <div style={{ color: 'white' }}>
                    ${numberRound(convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked))}
                </div>
            </PoolInfoValue>
            <PoolInfoValue style={{ marginBottom: '30px' }}>
                <div>APR</div>{' '}
                <div style={{ color: 'white', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    {numberRound(APR[APRTypes.total])}%
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
                <div>MY STAKE</div>
                <div style={{ color: 'white' }}>
                    <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} pricedAlgo={pricedAlgo} />
                </div>
            </PoolInfoValue>
            <PoolInfoValue>
                <div>REWARD</div>
                <div style={{ color: 'white' }}>
                    <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
                </div>
            </PoolInfoValue>
            <StakeButtonMobile disabled={!contractState.local}>MANAGE</StakeButtonMobile>
            <TimingMobile>{timing}</TimingMobile>
        </PoolInfoMobileContainer>
    );
};
