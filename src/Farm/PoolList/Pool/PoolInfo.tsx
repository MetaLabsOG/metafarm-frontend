import { useEffect } from 'react';
import { ContractState, triggerBalancesUpdate } from '../../../common/store';
import { calculateAmountToken, convertAmountToUSD, numberRound } from './utils';
import { PoolState } from './types';
import { BasicInfo, LPTokensIcon, LpTokensIconsWrapper, PoolInfoValue } from './styled';

const daysDiff = (currentBlock: number, block: number) => Math.floor((Math.abs(block - currentBlock) * 4.35) / 86400);

export const PoolInfo = ({
    contractState,
    poolState,
    lpTokenInfo,
    currentBlock,
}: {
    contractState: ContractState<'farm'>;
    poolState: PoolState;
    lpTokenInfo: any;
    currentBlock: number;
}) => {
    // TODO: that is a bit silly but it works without too much overhead
    useEffect(triggerBalancesUpdate, []);
    const { endBlock, beginBlock } = contractState.initial;
    // TODO: This PoolState is absolutely unnecessary, we can just compare currentBlock with beginBlock here

    // TODO: get actual price of META
    const blocksInAYear = (60 * 60 * 24 * 365) / 4.5;
    const APR =
        poolState !== PoolState.Upcoming
            ? 0
            : contractState.global.totalStaked === 0 || lpTokenInfo.price === 0
            ? 0
            : (contractState.initial.rewardPerBlock * blocksInAYear * lpTokenInfo.price) /
              (contractState.global.totalStaked * lpTokenInfo.price) * 100;

    const timing =
        poolState === PoolState.Upcoming ? (
            <>
                <div>starts</div>
                <div>in {daysDiff(currentBlock, beginBlock)} days</div>
            </>
        ) : poolState === PoolState.Running ? (
            <>
                <div>ends</div>
                <div>in {daysDiff(currentBlock, endBlock)} days</div>
            </>
        ) : (
            'ended'
        );

    return (
        <>
            <PoolInfoValue width={89}>
                <BasicInfo>
                    <LpTokensIconsWrapper>
                        <LPTokensIcon first></LPTokensIcon>
                        <LPTokensIcon></LPTokensIcon>
                    </LpTokensIconsWrapper>
                    <div>
                        {lpTokenInfo.name} LP <div>EARN META</div>
                    </div>
                </BasicInfo>
            </PoolInfoValue>
            <PoolInfoValue>{`$${numberRound(
                convertAmountToUSD(lpTokenInfo, contractState.global.totalStaked)
            )}`}</PoolInfoValue>
            <PoolInfoValue>{numberRound(APR)} %</PoolInfoValue>
            <PoolInfoValue>{`$${convertAmountToUSD(lpTokenInfo, contractState.local.staked).toFixed(
                2
            )}`}</PoolInfoValue>

            <PoolInfoValue>
                <div>{`$${numberRound(convertAmountToUSD(lpTokenInfo, contractState.local.reward))}`}</div>
                <div>{`${numberRound(calculateAmountToken(lpTokenInfo, contractState.local.reward))} META`}</div>
            </PoolInfoValue>
            <PoolInfoValue style={{ color: 'gray' }}>{timing}</PoolInfoValue>
        </>
    );
};
