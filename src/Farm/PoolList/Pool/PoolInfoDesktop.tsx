import { Asset, ContractState, FarmType, Priced } from '../../../common/store';
import {
    PoolInfoDesktopContainer,
    ArrowIconsWrapper,
    BasicInfo,
    LPTokensIcon,
    LpTokensIconsWrapper,
    PoolInfoValue,
    Pacman,
} from './styled';
import { Arrow } from '../../../imgs/arrow';
import { convertAmountToUSD, getTinyChartTokenLink, numberRound } from './utils';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import packman from '../../../imgs/pacman.gif';
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
                {contractState.local
                    ? `$${numberRound(convertAmountToUSD(lpTokenInfo ?? rewardTokenInfo, contractState.local.staked))}`
                    : '—'}
            </PoolInfoValue>
            <PoolInfoValue>
                {contractState.local ? (
                    <>
                        <div>{`$${numberRound(convertAmountToUSD(rewardTokenInfo, contractState.local.reward))}`}</div>
                        <div>{`${numberRound(calculateTokenAmount(rewardTokenInfo, contractState.local.reward))} ${
                            rewardTokenInfo.unitName
                        }`}</div>{' '}
                    </>
                ) : (
                    '—'
                )}
            </PoolInfoValue>
            <PoolInfoValue style={{ color: 'gray' }}>{timing} </PoolInfoValue>
            <ArrowIconsWrapper>
                {contractState.local ? <Arrow rotate={isOpen} /> : account !== null ? <Pacman src={packman} /> : ''}
            </ArrowIconsWrapper>
        </PoolInfoDesktopContainer>
    );
};
