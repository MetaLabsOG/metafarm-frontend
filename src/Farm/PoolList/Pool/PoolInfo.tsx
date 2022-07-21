import { useStore } from 'effector-react';
import { $account, $meanRoundDuration, Asset, ContractState, FarmType, Priced, Time } from '../../../common/store';
import { formatLPTokenName, getDexIcon, isLPTokenInfo } from './utils';
import { PoolState } from './types';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { PoolInfoDesktop } from './PoolInfoDesktop';
import { PoolInfoMobile } from './PoolInfoMobile';
import { DAY, HOUR, MINUTE, unsafeFromBigint } from '../../../common/lib';

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
    return timeUnits + ' ' + resTimeSuffix + suffix;
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

const calculateAPR = (
    meanRoundDuration: number,
    poolState: PoolState,
    contractState: ContractState<FarmType>,
    stakeTokenInfo: Priced<Asset>,
    rewardTokenInfo: Priced<Asset>
): number => {
    const blocksInAYear = (60 * 60 * 24 * 365) / meanRoundDuration;
    const stakePrice = stakeTokenInfo.price;
    const totalStaked = unsafeFromBigint(contractState.global.totalStaked);
    const rewardPerBlock = unsafeFromBigint(contractState.initial.rewardPerBlock);

    return poolState === PoolState.Finished
        ? 0
        : totalStaked === 0 || stakePrice === 0
        ? 0
        : ((rewardPerBlock * blocksInAYear * rewardTokenInfo.price) / (totalStaked * stakePrice)) * 100;
};

export const PoolInfo = ({
    contractState,
    poolState,
    stakeTokenInfo,
    rewardTokenInfo,
    currentBlock,
    isOpen,
}: {
    contractState: ContractState<FarmType>;
    poolState: PoolState;
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>;
    rewardTokenInfo: Priced<Asset>;
    currentBlock: Time;
    isOpen: boolean;
}) => {
    const account = useStore($account);
    const meanRoundDuration = useStore($meanRoundDuration);
    const { endBlock, beginBlock } = contractState.initial;
    const APR = calculateAPR(meanRoundDuration, poolState, contractState, stakeTokenInfo, rewardTokenInfo);

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
                />
            ) : (
                <PoolInfoDesktop
                    account={account}
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
                />
            )}
        </>
    );
};
