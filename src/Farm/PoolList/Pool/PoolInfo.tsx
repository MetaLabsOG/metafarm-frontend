import { useStore } from 'effector-react';
import { $account, $meanRoundDuration, Asset, ContractState, Priced } from '../../../common/store';
import { calculateAmountToken, convertAmountToUSD, formatLPTokenName, numberRound } from './utils';
import { PoolState } from './types';
import { ArrowIconsWrapper, BasicInfo, LPTokensIcon, LpTokensIconsWrapper, PoolInfoValue, Pacman } from './styled';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { Arrow } from '../../../imgs/arrow';
import packman from '../../../imgs/pacman.gif';

const daysDiff = (currentBlock: number, block: number) => Math.floor((Math.abs(block - currentBlock) * 4.35) / 86400);

const calculateAPR = (
    meanRoundDuration: number,
    poolState: PoolState,
    contractState: ContractState<'farm'>,
    lpTokenInfo: Priced<Asset>,
    rewardTokenInfo: Priced<Asset>
): number => {
    const blocksInAYear = (60 * 60 * 24 * 365) / meanRoundDuration;
    return poolState === PoolState.Finished
        ? 0
        : contractState.global.totalStaked === 0 || lpTokenInfo.price === 0
        ? 0
        : ((contractState.initial.rewardPerBlock * blocksInAYear * rewardTokenInfo.price) /
              (contractState.global.totalStaked * lpTokenInfo.price)) *
          100;
};

export const PoolInfo = ({
    contractState,
    poolState,
    lpTokenInfo,
    rewardTokenInfo,
    currentBlock,
    isOpen,
}: {
    contractState: ContractState<'farm'>;
    poolState: PoolState;
    lpTokenInfo: Priced<LPTokenInfo>;
    rewardTokenInfo: Priced<Asset>;
    currentBlock: number;
    isOpen: boolean;
}) => {
    const account = useStore($account);
    const meanRoundDuration = useStore($meanRoundDuration);
    const { endBlock, beginBlock } = contractState.initial;
    const APR = calculateAPR(meanRoundDuration, poolState, contractState, lpTokenInfo, rewardTokenInfo);

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
            <PoolInfoValue width={23}>
                <BasicInfo>
                    <LpTokensIconsWrapper>
                        <LPTokensIcon first></LPTokensIcon>
                        <LPTokensIcon></LPTokensIcon>
                    </LpTokensIconsWrapper>
                    <div>
                        {formatLPTokenName(lpTokenInfo.name)} LP <div>EARN {rewardTokenInfo.unitName}</div>
                    </div>
                </BasicInfo>
            </PoolInfoValue>
            <PoolInfoValue>{`$${numberRound(
                convertAmountToUSD(lpTokenInfo, contractState.global.totalStaked)
            )}`}</PoolInfoValue>
            <PoolInfoValue>{numberRound(APR)}%</PoolInfoValue>
            <PoolInfoValue>
                {contractState.local
                    ? `$${numberRound(convertAmountToUSD(lpTokenInfo, contractState.local.staked))}`
                    : '—'}
            </PoolInfoValue>
            <PoolInfoValue>
                {contractState.local ? (
                    <>
                        <div>{`$${numberRound(convertAmountToUSD(rewardTokenInfo, contractState.local.reward))}`}</div>
                        <div>{`${numberRound(calculateAmountToken(rewardTokenInfo, contractState.local.reward))} ${
                            rewardTokenInfo.unitName
                        }`}</div>{' '}
                    </>
                ) : (
                    '—'
                )}
            </PoolInfoValue>
            <PoolInfoValue style={{ color: 'gray' }}>{timing} </PoolInfoValue>
            <ArrowIconsWrapper>{
                contractState.local ? <Arrow rotate={isOpen} /> :
                account !== null ? <Pacman src={packman} /> : ''
            }</ArrowIconsWrapper>
        </>
    );
};
