import { Asset, AssetId, ContractState, FarmType, Priced } from '../../../common/store';
import {
    PoolInfoDesktopContainer,
    ArrowIconsWrapper,
    PoolInfoValue,
    Pacman,
    RewardUSDValue,
    RewardTokenValue,
} from './styled';
import { Arrow } from '../../../imgs/arrow';
import { algoRewardPerBlock, calculateAlgoReward, convertAmountToUSD, numberRound } from './utils';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import pacman from '../../../imgs/pacman.gif';
import { Account } from '../../../types';
import { fromSmallestUnits } from '../../../common/lib';
import { FC } from 'react';

import { PoolHeader } from '../../../Components/PoolHeader/PoolHeader';
import { POOL_COLUMN_WIDTH } from '../PoolList';
import { APRTypes } from './PoolInfo';
import ReactTooltip from 'react-tooltip';
import info from '../../../imgs/info.svg';

export interface PoolInfoDesktopProps {
    account: Account | null;
    pricedAlgo: Priced<Asset>;
    contractState: ContractState<FarmType>;
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>;
    rewardTokenInfo: Priced<Asset>;
    asset1_id: AssetId;
    asset2_id: AssetId;
    pool_name: string;
    APR: Record<APRTypes, number>;
    timing: string;
    contractLockSuffix: string;
    isOpen: boolean;
    dexIcon: any;
    isVerified: boolean;
}

export interface ValueProps {
    contractState: ContractState<FarmType>;
    tokenInfo: Priced<Asset> | Priced<LPTokenInfo>;
    pricedAlgo: Priced<Asset>;
}

export const RewardValues: FC<ValueProps> = ({ contractState, tokenInfo, pricedAlgo }) => {
    if (!contractState.local) {
        return <div>—</div>;
    }
    const algoReward = calculateAlgoReward(contractState.initial, contractState.local.reward);

    return (
        <>
            <RewardUSDValue>
                $
                {numberRound(
                    convertAmountToUSD(tokenInfo, contractState.local.reward) +
                        convertAmountToUSD(pricedAlgo, algoReward)
                )}
            </RewardUSDValue>
            <RewardTokenValue>
                {numberRound(fromSmallestUnits(tokenInfo, contractState.local.reward))} {tokenInfo.unitName}
            </RewardTokenValue>
            {algoRewardPerBlock(contractState.initial) && (
                <RewardTokenValue>{numberRound(fromSmallestUnits(pricedAlgo, algoReward))} ALGO</RewardTokenValue>
            )}
        </>
    );
};

export const StakeValue: FC<ValueProps> = ({ contractState, tokenInfo }) => {
    if (!contractState.local) {
        return <>—</>;
    }
    return <>${numberRound(convertAmountToUSD(tokenInfo, contractState.local.staked))}</>;
};

export const getAPRTip = (APR: Record<APRTypes, number>, unitname: string) => {
    const rewards = numberRound(APR[APRTypes.reward]) + '% ' + unitname;
    const algoRewards = APR[APRTypes.algoReward] ? ' + ' + numberRound(APR[APRTypes.algoReward]) + '% ALGO' : '';
    const fees = APR[APRTypes.fees] ? ' + ' + numberRound(APR[APRTypes.fees]) + '% trading fees' : '';
    return rewards + algoRewards + fees;
};

export const PoolInfoDesktop: FC<PoolInfoDesktopProps> = ({
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
    isOpen,
    contractLockSuffix,
    dexIcon,
    isVerified,
}) => {
    return (
        <PoolInfoDesktopContainer>
            <PoolInfoValue width={POOL_COLUMN_WIDTH['POOL']}>
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
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH['TVL']}>{`$${numberRound(
                convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked - BigInt(1)) // VIRTUAL STAKE!
            )}`}</PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH['APR']}>
                <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    {numberRound(APR[APRTypes.total])}%
                    <img
                        data-tip={getAPRTip(APR, rewardTokenInfo.unitName)}
                        style={{ marginLeft: '3px' }}
                        alt="APR info"
                        height="14px"
                        src={info}
                    />
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*
                     // @ts-ignore */}
                    <ReactTooltip place="top" type="light" effect="solid" clickable={true} />
                </div>
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH['MY STAKE']}>
                <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} pricedAlgo={pricedAlgo} />
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH['REWARD']}>
                <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH['ENDS IN']} style={{ color: 'gray' }}>
                {timing.split('\n').map((x) => (
                    <div key={x}>{x}</div>
                ))}
            </PoolInfoValue>
            <ArrowIconsWrapper>
                {contractState.local || account === null ? <Arrow rotate={isOpen} /> : <Pacman src={pacman} />}
            </ArrowIconsWrapper>
        </PoolInfoDesktopContainer>
    );
};
