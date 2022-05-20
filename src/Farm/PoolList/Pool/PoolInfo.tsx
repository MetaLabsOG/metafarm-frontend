import { useContext, useEffect, useState, useCallback } from 'react';
import { GlobalInfo, InitialInfo, LocalInfo } from '../types';
import { isValidAmount, convertAmount, calculateAmountToken, convertAmountToUSD, numberRound } from './utils';
import { Status } from '../../../Status';
import { AppContext, Context, reach } from '../../../AppContext';
import { PoolState } from './types';
import { BasicInfo, GetLpTokenButton, Link, PoolInfoContainer, PoolInfoValue, TokenInfo } from './styled';

export const PoolInfo = ({
    id,
    poolState,
    initialInfo,
    localInfo,
    lpTokenInfo,
    currentBlock,
    globalInfo,
}: {
    id: number;
    poolState: PoolState;
    initialInfo: InitialInfo;
    localInfo: LocalInfo;
    lpTokenInfo: any;
    currentBlock: number;
    globalInfo: GlobalInfo;
}) => {
    const { account } = useContext(AppContext) as Context;
    const [time, setTime] = useState('');
    const [stakedToken, setStakedToken] = useState(0);
    const [balanceToken, setBalanceToken] = useState(0);

    const getTokenInfo = useCallback(async () => {
        if (initialInfo) {
            // TODO shall we opt-in?
            const { stakeToken, endBlock } = initialInfo;
            const diff = Math.floor(((endBlock - currentBlock) * 4.35) / 86400);
            setTime(`${diff} DAYS`);
            const stakeTokenId = stakeToken;
            const balanceToken = (await reach.balanceOf(account, stakeTokenId)).toNumber();
            setBalanceToken(calculateAmountToken(lpTokenInfo, balanceToken));
        }
        if (localInfo) {
            setStakedToken(calculateAmountToken(lpTokenInfo, localInfo.staked));
        }
    }, [initialInfo, localInfo, account, currentBlock, lpTokenInfo]);

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
            <PoolInfoValue>{`$${numberRound(convertAmountToUSD(lpTokenInfo, globalInfo?.totalStaked))}`}</PoolInfoValue>
            <PoolInfoValue>10%</PoolInfoValue>
            <PoolInfoValue>{`$${convertAmountToUSD(lpTokenInfo, localInfo.staked).toFixed(2)}`}</PoolInfoValue>

            <PoolInfoValue style={{ marginLeft: '40px' }}>
                <div>{`${numberRound(calculateAmountToken(lpTokenInfo, localInfo.reward))} META`}</div>
                <div>{`($${numberRound(convertAmountToUSD(lpTokenInfo, localInfo.reward))})`}</div>
            </PoolInfoValue>
            <PoolInfoValue>{time}</PoolInfoValue>
        </PoolInfoContainer>
    );
};
