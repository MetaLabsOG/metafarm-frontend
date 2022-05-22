import { useEffect, useState, useCallback } from 'react';
import { $account, ContractState } from '../../../common/store';
import { isValidAmount, convertAmount, calculateAmountToken, convertAmountToUSD, numberRound } from './utils';
import { Status } from '../../../Status';
import { reach } from '../../../AppContext';
import { PoolState } from './types';
import { BasicInfo, GetLpTokenButton, Link, PoolInfoContainer, PoolInfoValue, TokenInfo } from './styled';
import { useStore } from 'effector-react';

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
    const account = useStore($account);
    const [time, setTime] = useState('');
    const [stakedToken, setStakedToken] = useState(0);
    const [balanceToken, setBalanceToken] = useState(0);

    const getTokenInfo = useCallback(async () => {
        // TODO shall we opt-in?
        const { stakeToken, endBlock } = contractState.initial;
        const diff = Math.floor(((endBlock - currentBlock) * 4.35) / 86400);
        setTime(`${diff} DAYS`);
        const stakeTokenId = stakeToken;
        const balanceToken = (await reach.balanceOf(account, stakeTokenId)).toNumber();
        setBalanceToken(calculateAmountToken(lpTokenInfo, balanceToken));
        setStakedToken(calculateAmountToken(lpTokenInfo, contractState.local.staked));
    }, [contractState, account, currentBlock, lpTokenInfo]);

    useEffect(() => {
        getTokenInfo();
    }, [getTokenInfo]);

    return (
        <PoolInfoContainer>
            <PoolInfoValue width={60}>
                <div>
                    <BasicInfo>{lpTokenInfo.name}</BasicInfo>
                    <div>EARN META</div>
                </div>
            </PoolInfoValue>
            <PoolInfoValue>{`$${numberRound(convertAmountToUSD(lpTokenInfo, contractState.global.totalStaked))}`}</PoolInfoValue>
            <PoolInfoValue>10%</PoolInfoValue>
            <PoolInfoValue>{`$${convertAmountToUSD(lpTokenInfo, contractState.local.staked).toFixed(2)}`}</PoolInfoValue>

            <PoolInfoValue style={{ marginLeft: '40px' }}>
                <div>{`${numberRound(calculateAmountToken(lpTokenInfo, contractState.local.reward))} META`}</div>
                <div>{`($${numberRound(convertAmountToUSD(lpTokenInfo, contractState.local.reward))})`}</div>
            </PoolInfoValue>
            <PoolInfoValue>{time}</PoolInfoValue>
        </PoolInfoContainer>
    );
};
