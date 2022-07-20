import { Asset, AssetId, ContractState, FarmType, Priced } from '../../../common/store';
import {
    PoolInfoDesktopContainer,
    ArrowIconsWrapper,
    BasicInfo,
    LPTokensIcon,
    LpTokensIconsWrapper,
    PoolInfoValue,
    Pacman,
    RewardUSDValue,
    RewardTokenValue,
    ContractLockSuffix,
    DexIcon,
} from './styled';
import { Arrow } from '../../../imgs/arrow';
import { convertAmountToUSD, getAssetLogoUrl, getDexIcon, getTokenLink, numberRound } from './utils';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import pacman from '../../../imgs/pacman.gif';
import { Account } from '../../../types';
import { calculateTokenAmount } from '../../../common/lib';
import { FC } from 'react';

export interface PoolInfoDesktopProps {
    account: Account | null;
    contractState: ContractState<FarmType>;
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>;
    rewardTokenInfo: Priced<Asset>;
    asset1_id: AssetId;
    asset2_id: AssetId;
    pool_name: string;
    APR: number;
    timing: string;
    contractLockSuffix: string;
    isOpen: boolean;
    dexIcon: any;
}

export interface ValueProps {
    contractState: ContractState<FarmType>;
    tokenInfo: Priced<Asset> | Priced<LPTokenInfo>;
}

export const RewardValues: FC<ValueProps> = ({ contractState, tokenInfo }) => {
    if (!contractState.local) {
        return <div>—</div>;
    }

    return (
        <>
            <RewardUSDValue>${numberRound(convertAmountToUSD(tokenInfo, contractState.local.reward))}</RewardUSDValue>
            <RewardTokenValue>
                {numberRound(calculateTokenAmount(tokenInfo, contractState.local.reward))} {tokenInfo.unitName}
            </RewardTokenValue>
        </>
    );
};

export const StakeValue: FC<ValueProps> = ({ contractState, tokenInfo }) => {
    if (!contractState.local) {
        return <>—</>;
    }
    return <>${numberRound(convertAmountToUSD(tokenInfo, contractState.local.staked))}</>;
};

export const PoolInfoDesktop: FC<PoolInfoDesktopProps> = ({
    account,
    contractState,
    stakeTokenInfo,
    rewardTokenInfo,
    asset1_id,
    asset2_id,
    pool_name,
    APR,
    timing,
    isOpen,
    contractLockSuffix,
    dexIcon,
}) => {
    const asset1_logo = getAssetLogoUrl(asset1_id);
    const asset2_logo = getAssetLogoUrl(asset2_id);
    return (
        <PoolInfoDesktopContainer>
            <PoolInfoValue width={23}>
                <BasicInfo>
                    <LpTokensIconsWrapper>
                        <a target="_blank" href={getTokenLink(asset1_id)} rel="noreferrer">
                            <LPTokensIcon first>
                                {asset1_logo && <img alt="" width="40px" height="40px" src={asset1_logo} />}
                            </LPTokensIcon>
                        </a>
                        <a target="_blank" href={getTokenLink(asset2_id)} rel="noreferrer">
                            <LPTokensIcon>
                                {asset2_logo && <img alt="" width="40px" height="40px" src={asset2_logo} />}
                            </LPTokensIcon>
                        </a>
                        {dexIcon && <DexIcon alt="" src={dexIcon} />}
                    </LpTokensIconsWrapper>
                    <div>
                        {pool_name}
                        <div>EARN {rewardTokenInfo.unitName}</div>
                        <ContractLockSuffix>{contractLockSuffix}</ContractLockSuffix>
                    </div>
                </BasicInfo>
            </PoolInfoValue>
            <PoolInfoValue>{`$${numberRound(
                convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked)
            )}`}</PoolInfoValue>
            <PoolInfoValue>{numberRound(APR)}%</PoolInfoValue>
            <PoolInfoValue>
                <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} />
            </PoolInfoValue>
            <PoolInfoValue>
                <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} />
            </PoolInfoValue>
            <PoolInfoValue style={{ color: 'gray' }}>
                {timing.split('\n').map((x) => (
                    <div key={x}>{x}</div>
                ))}
            </PoolInfoValue>
            <ArrowIconsWrapper>
                {contractState.local ? <Arrow rotate={isOpen} /> : account !== null ? <Pacman src={pacman} /> : ''}
            </ArrowIconsWrapper>
        </PoolInfoDesktopContainer>
    );
};
