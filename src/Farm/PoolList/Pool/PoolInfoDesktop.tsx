import { Asset, ContractState, FarmType, Priced } from '../../../common/store';
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
} from './styled';
import { Arrow } from '../../../imgs/arrow';
import { convertAmountToUSD, getTinyChartTokenLink, numberRound } from './utils';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import pacman from '../../../imgs/pacman.gif';
import { Account } from '../../../types';
import { calculateTokenAmount } from '../../../common/lib';
import { FC } from 'react';

export interface PoolInfoDesktopProps {
    account: Account | null;
    contractState: ContractState<FarmType>;
    lpTokenInfo: Priced<LPTokenInfo> | null;
    rewardTokenInfo: Priced<Asset>;
    asset1_logo: string;
    asset2_logo: string;
    pool_name: string;
    APR: number;
    timing: JSX.Element | 'ended';
    contractLockSuffix: string;
    isOpen: boolean;
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
    lpTokenInfo,
    rewardTokenInfo,
    asset1_logo,
    asset2_logo,
    pool_name,
    APR,
    timing,
    isOpen,
    contractLockSuffix,
}) => {
    return (
        <PoolInfoDesktopContainer>
            <PoolInfoValue width={23}>
                <BasicInfo>
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
                    <div>
                        {pool_name}
                        <div>EARN {rewardTokenInfo.unitName}</div>
                        <div style={{ fontSize: '12px', color: '#838383' }}>{contractLockSuffix}</div>
                    </div>
                </BasicInfo>
            </PoolInfoValue>
            <PoolInfoValue>{`$${numberRound(
                convertAmountToUSD(lpTokenInfo ?? rewardTokenInfo, contractState.global.totalStaked)
            )}`}</PoolInfoValue>
            <PoolInfoValue>{numberRound(APR)}%</PoolInfoValue>
            <PoolInfoValue>
                <StakeValue contractState={contractState} tokenInfo={lpTokenInfo ?? rewardTokenInfo} />
            </PoolInfoValue>
            <PoolInfoValue>
                <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} />
            </PoolInfoValue>
            <PoolInfoValue style={{ color: 'gray' }}>{timing} </PoolInfoValue>
            <ArrowIconsWrapper>
                {contractState.local ? <Arrow rotate={isOpen} /> : account !== null ? <Pacman src={pacman} /> : ''}
            </ArrowIconsWrapper>
        </PoolInfoDesktopContainer>
    );
};
