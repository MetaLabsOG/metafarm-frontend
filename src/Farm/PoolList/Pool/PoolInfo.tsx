import { useUnit } from 'effector-react';
import {
    $account,
    $algoUsdPrice,
    $meanRoundDuration,
    ALGO_ASSET,
    Asset,
    ContractState,
    FarmInitialInfo,
    FarmType,
    Priced,
    Time,
} from '../../../common/store';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { DAY, fromSmallestUnits, HOUR, MINUTE, unsafeFromBigint } from '../../../common/lib';
import { getDexIcon } from '../../utils';
import { formatLPTokenName, isLPTokenInfo } from './utils';
import { PoolState } from './types';
import { PoolInfoDesktop } from './PoolInfoDesktop';
import { PoolInfoMobile } from './PoolInfoMobile';

const blocksToText = (blocks: number, meanRoundDuration: number) => {
    const diffSecs = Math.abs(blocks) * meanRoundDuration;
    let resTimeUnit = MINUTE;
    if (diffSecs > DAY) {
        resTimeUnit = DAY;
    } else if (diffSecs > HOUR) {
        resTimeUnit = HOUR;
    }

    const resTimeSuffix = resTimeUnit === DAY ? 'day' : resTimeUnit === HOUR ? 'hour' : 'minute';
    const timeUnits = Math.floor(diffSecs / resTimeUnit);
    const suffix = timeUnits > 1 ? 's' : '';
    return `${timeUnits} ${resTimeSuffix}${suffix}`;
};

const calculateTiming = (
    poolState: PoolState,
    currentBlock: number,
    beginBlock: number,
    endBlock: number,
    meanRoundDuration: number
) => {
    if (poolState === PoolState.Finished) {
        return 'ended';
    }

    const timingPrefix = poolState === PoolState.Running ? 'ends\nin ' : 'starts\nin ';
    const blocksDiff = poolState === PoolState.Running ? endBlock - currentBlock : beginBlock - currentBlock;
    const diffText = blocksToText(blocksDiff, meanRoundDuration);

    return timingPrefix + diffText;
};

export enum APRTypes {
    reward,
    algoReward,
    fees,
    total,
}

const calculateAPR = (
    meanRoundDuration: number,
    poolState: PoolState,
    contractState: ContractState<FarmType>,
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>,
    rewardTokenInfo: Priced<Asset>,
    ALGOPrice: number | null
): Record<APRTypes, number> => {
    if (poolState === PoolState.Finished) {
        return {
            [APRTypes.reward]: 0,
            [APRTypes.algoReward]: 0,
            [APRTypes.fees]: 0,
            [APRTypes.total]: 0,
        };
    }

    const blocksInAYear = (60 * 60 * 24 * 365) / meanRoundDuration;
    const stakePrice = stakeTokenInfo.price;
    const totalStaked = fromSmallestUnits(stakeTokenInfo, contractState.global.totalStaked - BigInt(1)); // VIRTUAL STAKE!
    const rewardPerBlock = fromSmallestUnits(rewardTokenInfo, contractState.initial.rewardPerBlock);

    const { extraAlgoRewardPerBlock } = contractState.initial as FarmInitialInfo;
    const algoRewardPerBlock = extraAlgoRewardPerBlock ? fromSmallestUnits(ALGO_ASSET, extraAlgoRewardPerBlock) : 0;

    const totalStakedUSD = totalStaked * stakePrice;
    const rewardAPR = totalStakedUSD
        ? ((rewardPerBlock * rewardTokenInfo.price * blocksInAYear) / totalStakedUSD) * 100
        : 0;

    const algoRewardAPR =
        totalStakedUSD && ALGOPrice ? ((algoRewardPerBlock * ALGOPrice * blocksInAYear) / totalStakedUSD) * 100 : 0;

    const feesAPR = ((stakeTokenInfo as Priced<LPTokenInfo>).dexFeeApr ?? 0) * 100;

    return {
        [APRTypes.reward]: rewardAPR,
        [APRTypes.algoReward]: algoRewardAPR,
        [APRTypes.fees]: feesAPR,
        [APRTypes.total]: rewardAPR + algoRewardAPR + feesAPR,
    };
};

export const PoolInfo = ({
    contractState,
    poolState,
    stakeTokenInfo,
    rewardTokenInfo,
    currentBlock,
    pricedAlgo,
    isOpen,
    poolMetadata,
}: {
    contractState: ContractState<FarmType>;
    poolState: PoolState;
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>;
    rewardTokenInfo: Priced<Asset>;
    currentBlock: Time;
    pricedAlgo: Priced<Asset>;
    isOpen: boolean;
    poolMetadata: any;
}) => {
    const account = useUnit($account);
    const meanRoundDuration = useUnit($meanRoundDuration);
    const ALGOPrice = useUnit($algoUsdPrice);
    const { endBlock, beginBlock } = contractState.initial;
    const APR = calculateAPR(meanRoundDuration, poolState, contractState, stakeTokenInfo, rewardTokenInfo, ALGOPrice);

    const timing = calculateTiming(poolState, currentBlock, beginBlock, endBlock, meanRoundDuration);

    const asset1_id = isLPTokenInfo(stakeTokenInfo) ? stakeTokenInfo.asset1 : stakeTokenInfo.id;
    const asset2_id = isLPTokenInfo(stakeTokenInfo) ? stakeTokenInfo.asset2 : rewardTokenInfo.id;
    const pool_name = isLPTokenInfo(stakeTokenInfo)
        ? formatLPTokenName(stakeTokenInfo.name) + ' LP'
        : 'STAKE ' + stakeTokenInfo.unitName;
    // TODO: separate 0 from undefined in lpTokenInfo.asset
    const contractLockSuffix = contractState.initial.lockLengthBlocks
        ? 'with ' + blocksToText(Number(contractState.initial.lockLengthBlocks), meanRoundDuration) + ' lock'
        : '';

    const dexIcon = isLPTokenInfo(stakeTokenInfo) ? getDexIcon(stakeTokenInfo.poolDex) : null;

    return (
        <>
            {window.innerWidth <= 1120 ? (
                <PoolInfoMobile
                    account={account}
                    pricedAlgo={pricedAlgo}
                    contractState={contractState}
                    stakeTokenInfo={stakeTokenInfo}
                    rewardTokenInfo={rewardTokenInfo}
                    asset1_id={asset1_id}
                    asset2_id={asset2_id}
                    pool_name={pool_name}
                    APR={APR}
                    timing={timing}
                    contractLockSuffix={contractLockSuffix}
                    isOpen={isOpen}
                    dexIcon={dexIcon}
                    isVerified={poolMetadata.verified ?? false}
                />
            ) : (
                <PoolInfoDesktop
                    account={account}
                    pricedAlgo={pricedAlgo}
                    contractState={contractState}
                    stakeTokenInfo={stakeTokenInfo}
                    rewardTokenInfo={rewardTokenInfo}
                    asset1_id={asset1_id}
                    asset2_id={asset2_id}
                    pool_name={pool_name}
                    APR={APR}
                    timing={timing}
                    contractLockSuffix={contractLockSuffix}
                    isOpen={isOpen}
                    dexIcon={dexIcon}
                    isVerified={poolMetadata.verified ?? false}
                />
            )}
        </>
    );
};
