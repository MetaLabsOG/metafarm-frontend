import {
    PoolInfoMobileContainer,
    LPTokensIcon,
    LpTokensIconsWrapper,
    PoolInfoValue,
    PoolNameMobile,
    StakeButtonMobile,
    ContractLockSuffix,
    TimingMobile,
} from './styled';
import { convertAmountToUSD, getTinyChartTokenLink, numberRound } from './utils';
import React, { FC } from 'react';
import { PoolInfoDesktopProps, RewardValues, StakeValue } from './PoolInfoDesktop';

export const PoolInfoMobile: FC<PoolInfoDesktopProps> = ({
    account,
    contractState,
    lpTokenInfo,
    rewardTokenInfo,
    asset1_logo,
    asset2_logo,
    pool_name,
    APR,
    timing,
    contractLockSuffix,
    isOpen,
}) => {
    if (contractState.local && isOpen) {
        return <></>;
    }

    return (
        <PoolInfoMobileContainer>
            <PoolNameMobile>{pool_name}</PoolNameMobile>
            <LpTokensIconsWrapper>
                <a target="_blank" href={getTinyChartTokenLink(lpTokenInfo?.asset1)} rel="noreferrer">
                    <LPTokensIcon first>
                        {asset1_logo && <img alt="" width="100%" height="100%" src={asset1_logo} />}
                    </LPTokensIcon>
                </a>
                <a target="_blank" href={getTinyChartTokenLink(lpTokenInfo?.asset2)} rel="noreferrer">
                    <LPTokensIcon>
                        {asset2_logo && <img alt="" width="100%" height="100%" src={asset2_logo} />}
                    </LPTokensIcon>
                </a>
            </LpTokensIconsWrapper>
            <PoolNameMobile style={{ marginBottom: '0' }}>EARN {rewardTokenInfo.unitName}</PoolNameMobile>
            <ContractLockSuffix>{contractLockSuffix}</ContractLockSuffix>
            <PoolInfoValue>
                <div>TVL</div>
                <div style={{ color: '#B5B5B5' }}>
                    ${numberRound(convertAmountToUSD(lpTokenInfo ?? rewardTokenInfo, contractState.global.totalStaked))}
                </div>
            </PoolInfoValue>
            <PoolInfoValue style={{ marginBottom: '30px' }}>
                <div>APR</div> <div style={{ color: '#B5B5B5' }}>{numberRound(APR)}%</div>
            </PoolInfoValue>
            <PoolInfoValue>
                <div>MY STAKE</div>
                <div style={{ color: 'white' }}>
                    <StakeValue contractState={contractState} tokenInfo={lpTokenInfo ?? rewardTokenInfo} />
                </div>
            </PoolInfoValue>
            <PoolInfoValue>
                <div>REWARD</div>
                <div style={{ color: 'white' }}>
                    <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} />
                </div>
            </PoolInfoValue>
            {<StakeButtonMobile disabled={!contractState.local}>MANAGE</StakeButtonMobile>}
            <div style={{ color: 'gray' }}>
                <TimingMobile>{timing}</TimingMobile>
            </div>
        </PoolInfoMobileContainer>
    );
};
