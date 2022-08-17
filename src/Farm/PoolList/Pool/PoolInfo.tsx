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
import { LPTokenInfo } from '../../../dexes';
import { DAY, fromSmallestUnits, HOUR, MINUTE, unsafeFromBigint } from '../../../common/lib';
import { getDexIcon } from '../../utils';
import { $farmAprs } from '../../store';
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
    const timeUnits = Math.round(diffSecs / resTimeUnit);
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

export function PoolInfo({
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
}) {
    const account = useUnit($account);
    const meanRoundDuration = useUnit($meanRoundDuration);
    const ALGOPrice = useUnit($algoUsdPrice);
    const { endBlock, beginBlock } = contractState.initial;
    // TODO may be not APRS
    // TODO should not be [0]
    const APR = useUnit($farmAprs)[0];

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

    return window.innerWidth <= 1120 ? (
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
    );
}
