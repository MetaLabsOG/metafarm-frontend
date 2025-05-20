import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { PoolHeader } from '../../../Components/PoolHeader/PoolHeader';
import info from '../../../imgs/info.svg';
import {
    PoolInfoMobileContainer,
    PoolInfoValue,
    PoolInfoGrid,
    PoolPropertyName,
    PoolPropertyValue,
    TimingMobile,
} from './styled';
import { GradientGridCell, GradientStakeButton } from './GradientPoolCard';
import { convertAmountToUSD, numberRound } from './utils';
import { getAPRTip, getRewardTip, PoolInfoDesktopProps, RewardValues, StakeValue } from './PoolInfoDesktop';
import styled from 'styled-components';

// Create a compact grid for when we only show TVL and APR
const CompactPoolInfoGrid = styled(PoolInfoGrid)`
    grid-template-rows: auto;
    margin: 6px 0; /* Reduced margin for compact view */
`;

// Create a compact container with reduced height
const CompactPoolInfoMobileContainer = styled(PoolInfoMobileContainer)`
    @media (max-width: 1120px) {
        & + button {
            margin-top: 0; /* Reduce space between grid and button */
        }
    }
`;

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
    // Check if we have staked or reward values
    const hasStakedValue = contractState.local && Number(convertAmountToUSD(stakeTokenInfo, contractState.local.staked)) > 0;
    const hasRewardValue = contractState.local && (() => {
        const algoReward = contractState.initial.totalAlgoRewardAmount > 0
            ? (contractState.local.reward * contractState.initial.totalAlgoRewardAmount) / contractState.initial.totalRewardAmount
            : 0;
        const totalRewardUSD = Number(convertAmountToUSD(rewardTokenInfo, contractState.local.reward)) +
                              Number(convertAmountToUSD(pricedAlgo, algoReward));
        return totalRewardUSD > 0;
    })();

    // Determine if we should show the staked and reward rows
    const showStakedAndReward = hasStakedValue || hasRewardValue;

    // Use the appropriate grid component based on whether we're showing all rows
    const GridComponent = showStakedAndReward ? PoolInfoGrid : CompactPoolInfoGrid;

    // Choose the appropriate container based on whether we're showing all rows
    const Container = showStakedAndReward ? PoolInfoMobileContainer : CompactPoolInfoMobileContainer;

    return (
        <Container>
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
            <GridComponent>
                <GradientGridCell>
                    <PoolPropertyName>TVL</PoolPropertyName>
                    <PoolPropertyValue>
                        ${numberRound(convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked))}
                    </PoolPropertyValue>
                </GradientGridCell>

                <GradientGridCell>
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
                </GradientGridCell>

                {showStakedAndReward && (
                    <>
                        <GradientGridCell>
                            <PoolPropertyName>Staked</PoolPropertyName>
                            <PoolPropertyValue>
                                <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} pricedAlgo={pricedAlgo} />
                            </PoolPropertyValue>
                        </GradientGridCell>

                        <GradientGridCell>
                            <PoolPropertyName>Reward</PoolPropertyName>
                            <PoolPropertyValue>
                                <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
                            </PoolPropertyValue>
                        </GradientGridCell>
                    </>
                )}
            </GridComponent>
            <GradientStakeButton disabled={!contractState.local}>Stake</GradientStakeButton>
            <TimingMobile>{timing}</TimingMobile>
        </Container>
    );
};
