import { useEffect, useState, useCallback } from 'react';
import { $account, ContractState } from '../../../common/store';
import { isValidAmount, convertAmount, calculateAmountToken, convertAmountToUSD, numberRound } from './utils';
import { Status } from '../../../Status';
import { reach } from '../../../AppContext';
import { PoolState } from './types';
import { BasicInfo, GetLpTokenButton, Link, PoolInfoContainer, PoolInfoValue, TokenInfo } from './styled';
import { useStore } from 'effector-react';

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
    const { endBlock, beginBlock } = contractState.initial;
    // TODO: This PoolState is absolutely unnecessary, we can just compare currentBlock with beginBlock here
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
        <PoolInfoContainer>
            <PoolInfoValue width={60}>
                <div>
                    <BasicInfo>{lpTokenInfo.name}</BasicInfo>
                    <div>EARN META</div>
                </div>
            </PoolInfoValue>
            <PoolInfoValue>{`$${numberRound(
                convertAmountToUSD(lpTokenInfo, contractState.global.totalStaked)
            )}`}</PoolInfoValue>
            <PoolInfoValue>10%</PoolInfoValue>
            <PoolInfoValue>{`$${convertAmountToUSD(lpTokenInfo, contractState.local.staked).toFixed(
                2
            )}`}</PoolInfoValue>

            <PoolInfoValue>
                <div>{`$${numberRound(convertAmountToUSD(lpTokenInfo, contractState.local.reward))}`}</div>
                <div>{`${numberRound(calculateAmountToken(lpTokenInfo, contractState.local.reward))} META`}</div>
            </PoolInfoValue>
            <PoolInfoValue style={{color: 'gray'}}>{timing}</PoolInfoValue>
        </PoolInfoContainer>
    );
};
