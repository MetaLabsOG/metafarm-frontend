import { Asset, ContractState, Priced } from '../../../common/store';
import { calculateAmountToken, convertAmountToUSD, numberRound } from './utils';
import { PoolState } from './types';
import { BasicInfo, LPTokensIcon, LpTokensIconsWrapper, PoolInfoValue } from './styled';
import { LPTokenInfo } from '../../../providers/dexesProvider';

const daysDiff = (currentBlock: number, block: number) => Math.floor((Math.abs(block - currentBlock) * 4.35) / 86400);

// TODO: remove this when pools name it will be not test names
const formatLPTokenName = (name: string) => {
    return name.replace('/', ' • ').replace('liquidity', '');
};

export const PoolInfo = ({
    contractState,
    poolState,
    lpTokenInfo,
    rewardTokenInfo,
    currentBlock,
}: {
    contractState: ContractState<'farm'>;
    poolState: PoolState;
    lpTokenInfo: Priced<LPTokenInfo>;
    rewardTokenInfo: Priced<Asset>;
    currentBlock: number;
}) => {
    const { endBlock, beginBlock } = contractState.initial;
    // TODO: This PoolState is absolutely unnecessary, we can just compare currentBlock with beginBlock herekjkk
    const blocksInAYear = (60 * 60 * 24 * 365) / 4.5;
    const APR =
        poolState === PoolState.Finished
            ? 0
            : contractState.global.totalStaked === 0 || lpTokenInfo.price === 0
            ? 0
            : ((contractState.initial.rewardPerBlock * blocksInAYear * rewardTokenInfo.price) /
                  (contractState.global.totalStaked * lpTokenInfo.price)) *
              100;

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
                        {formatLPTokenName(lpTokenInfo.name)} LP <div>EARN {rewardTokenInfo.unitName}</div>
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
                <div>{`$${numberRound(convertAmountToUSD(rewardTokenInfo, contractState.local.reward))}`}</div>
                <div>{`${numberRound(calculateAmountToken(rewardTokenInfo, contractState.local.reward))} ${
                    rewardTokenInfo.unitName
                }`}</div>
            </PoolInfoValue>
            <PoolInfoValue style={{ color: 'gray' }}>{timing}</PoolInfoValue>
        </>
    );
};
