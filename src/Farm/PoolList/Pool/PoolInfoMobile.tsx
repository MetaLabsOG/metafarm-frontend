import {
    PoolInfoMobileContainer,
    LPTokensIcon,
    LpTokensIconsWrapper,
    PoolInfoValue,
    PoolNameMobile,
    StakeButtonMobile,
    ContractLockSuffix,
    TimingMobile,
    DexIcon,
} from './styled';
import { algoRewardPerBlock, convertAmountToUSD, getAssetLogoUrl, getTokenLink, numberRound } from './utils';
import React, { FC } from 'react';
import { PoolInfoDesktopProps, RewardValues, StakeValue } from './PoolInfoDesktop';
import { theme } from '../../../theme';

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
}) => {
    if (contractState.local && isOpen) {
        return <></>;
    }
    const asset1_logo = getAssetLogoUrl(asset1_id);
    const asset2_logo = getAssetLogoUrl(asset2_id);

    return (
        <PoolInfoMobileContainer>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <LpTokensIconsWrapper>
                    <a target="_blank" style={{ width: '40px' }} href={getTokenLink(asset1_id)} rel="noreferrer">
                        <LPTokensIcon first>
                            {asset1_logo && <img alt="" width="40px" height="40px" src={asset1_logo} />}
                        </LPTokensIcon>
                    </a>
                    <a target="_blank" style={{ width: '40px' }} href={getTokenLink(asset2_id)} rel="noreferrer">
                        <LPTokensIcon>
                            {asset2_logo && <img alt="" width="40px" height="40px" src={asset2_logo} />}
                        </LPTokensIcon>
                    </a>
                    {dexIcon && <DexIcon alt="" src={dexIcon} />}
                </LpTokensIconsWrapper>
                <div style={{ marginLeft: '5px' }}>
                    <PoolNameMobile>{pool_name}</PoolNameMobile>
                    <PoolNameMobile style={{ marginBottom: '0', color: theme.green }}>
                        EARN {rewardTokenInfo.unitName}
                        {algoRewardPerBlock(contractState.initial) && ' + ALGO'}
                    </PoolNameMobile>
                    <ContractLockSuffix>{contractLockSuffix}</ContractLockSuffix>
                </div>
            </div>
            <PoolInfoValue>
                <div>TVL</div>
                <div style={{ color: 'white' }}>
                    ${numberRound(convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked))}
                </div>
            </PoolInfoValue>
            <PoolInfoValue style={{ marginBottom: '30px' }}>
                <div>APR</div> <div style={{ color: 'white' }}>{numberRound(APR)}%</div>
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
            {<StakeButtonMobile disabled={!contractState.local}>MANAGE</StakeButtonMobile>}
            <TimingMobile>{timing}</TimingMobile>
        </PoolInfoMobileContainer>
    );
};
