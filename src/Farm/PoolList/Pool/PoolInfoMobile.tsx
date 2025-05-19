import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { PoolHeader } from '../../../Components/PoolHeader/PoolHeader';
import info from '../../../imgs/info.svg';
import {
    PoolInfoMobileContainer,
    PoolInfoValue,
    PoolInfoGrid,
    PoolInfoGridCell,
    PoolInfoGridCellSmall,
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
    isOpen: _isOpen, // Renamed to avoid unused variable warning
    dex,
    isVerified,
    isGame,
    nftRewards,
}) => {
    // We don't need to return null anymore since the parent component handles visibility
    // This component will always be rendered but might be hidden by the parent

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
            <PoolInfoGrid>
                <PoolInfoGridCell>
                    <PoolPropertyName>TVL</PoolPropertyName>
                    <PoolPropertyValue>
                        ${numberRound(convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked))}
                    </PoolPropertyValue>
                </PoolInfoGridCell>

                <PoolInfoGridCell>
                    <PoolPropertyName>APR</PoolPropertyName>
                    <PoolPropertyValue>
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {numberRound(APR.total)}%
                            <img
                                data-tip={getAPRTip(APR, rewardTokenInfo.unitName)}
                                style={{ marginLeft: '3px' }}
                                alt="APR info"
                                height="14px"
                                src={info}
                            />
                            <ReactTooltip clickable place="top" type="light" effect="solid" />
                        </span>
                    </PoolPropertyValue>
                </PoolInfoGridCell>

                <PoolInfoGridCellSmall>
                    <PoolPropertyName>Staked</PoolPropertyName>
                    <PoolPropertyValue>
                        <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} pricedAlgo={pricedAlgo} />
                    </PoolPropertyValue>
                </PoolInfoGridCellSmall>

                <PoolInfoGridCellSmall>
                    <PoolPropertyName>Reward</PoolPropertyName>
                    <PoolPropertyValue>
                        <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
                    </PoolPropertyValue>
                </PoolInfoGridCellSmall>
            </PoolInfoGrid>
            <StakeButtonMobile disabled={!contractState.local}>Stake</StakeButtonMobile>
            <TimingMobile>{timing}</TimingMobile>
        </PoolInfoMobileContainer>
    );
};
