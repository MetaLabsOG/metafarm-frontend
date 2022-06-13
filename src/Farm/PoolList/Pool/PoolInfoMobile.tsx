import {
    PoolInfoMobileContainer,
    LPTokensIcon,
    LpTokensIconsWrapper,
    PoolInfoValue,
    PoolNameMobile,
    StakeButtonMobile,
} from './styled';
import { convertAmountToUSD, getTinyChartTokenLink, numberRound } from './utils';
import { FC } from 'react';
import { PoolInfoDesktopProps } from './PoolInfoDesktop';

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
            <PoolInfoValue width={23}>
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
                <PoolNameMobile>
                    EARN {rewardTokenInfo.unitName} {contractLockSuffix}
                </PoolNameMobile>
            </PoolInfoValue>
            <PoolInfoValue style={{ fontSize: '20px', color: '#B5B5B5' }}>
                TVL{' '}
                {`$${numberRound(
                    convertAmountToUSD(lpTokenInfo ?? rewardTokenInfo, contractState.global.totalStaked)
                )}`}
            </PoolInfoValue>
            <PoolInfoValue style={{ fontSize: '20px', color: '#B5B5B5' }}>APR {numberRound(APR)}%</PoolInfoValue>
            {<StakeButtonMobile disabled={!contractState.local}>STAKE</StakeButtonMobile>}
            <PoolInfoValue style={{ color: 'gray' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', fontSize: '10px' }}>{timing}</div>
            </PoolInfoValue>
        </PoolInfoMobileContainer>
    );
};
