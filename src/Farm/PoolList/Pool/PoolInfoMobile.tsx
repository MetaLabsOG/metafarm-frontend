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
    APRPercentage,
} from './styled';
import { GradientGridCell, GradientStakeButton } from './GradientPoolCard';
import { convertAmountToUSD, numberRound } from './utils';
import { getAPRTip, getRewardTip, PoolInfoDesktopProps, RewardValues, StakeValue } from './PoolInfoDesktop';
import styled from 'styled-components';

// Create a compact grid for when we only show TVL and APR
const CompactPoolInfoGrid = styled(PoolInfoGrid)`
    grid-template-rows: auto;
    margin: 10px auto;
    width: 95%; /* Increased from 85% */

    /* Remove the divider since we only have one row */
    &::after {
        display: none;
    }

    @media (max-width: 700px) {
        margin: 6px auto;
        gap: 6px;
        width: 98%; /* Increased from 90% */
    }
`;

// Create a compact container with reduced height
const CompactPoolInfoMobileContainer = styled(PoolInfoMobileContainer)`
    @media (max-width: 1120px) {
        padding-left: 1px; /* Minimal padding */
        padding-right: 1px; /* Minimal padding */

        & + button {
            margin-top: 0; /* Reduce space between grid and button */
        }
    }

    @media (max-width: 700px) {
        padding-left: 0; /* No padding for mobile */
        padding-right: 0; /* No padding for mobile */

        & + button {
            margin-top: 0; /* No margin between grid and button */
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
                    <PoolPropertyValue isDollarValue>
                        ${numberRound(convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked))}
                    </PoolPropertyValue>
                </GradientGridCell>

                <GradientGridCell>
                    <PoolPropertyName>APR</PoolPropertyName>
                    <PoolPropertyValue>
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <APRPercentage>{numberRound(APR.total)}%</APRPercentage>
                            <img
                                data-tip={getAPRTip(APR, rewardTokenInfo.unitName)}
                                style={{ marginLeft: '5px', opacity: 0.8 }}
                                alt="APR info"
                                height="14px"
                                src={info}
                            />
                            <ReactTooltip
                                clickable
                                place="top"
                                type="light"
                                effect="solid"
                                className="custom-tooltip"
                                backgroundColor="rgba(255, 255, 255, 0.9)"
                            />
                        </span>
                    </PoolPropertyValue>
                </GradientGridCell>

                {showStakedAndReward && (
                    <>
                        <GradientGridCell>
                            <PoolPropertyName>Staked</PoolPropertyName>
                            <PoolPropertyValue isDollarValue>
                                <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} pricedAlgo={pricedAlgo} />
                            </PoolPropertyValue>
                        </GradientGridCell>

                        <GradientGridCell>
                            <PoolPropertyName>Reward</PoolPropertyName>
                            <PoolPropertyValue isDollarValue style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
