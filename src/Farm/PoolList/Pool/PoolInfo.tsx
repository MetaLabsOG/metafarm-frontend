import { useStore } from 'effector-react';
import { $meanRoundDuration, Asset, ContractState, FarmType, Priced } from '../../../common/store';
import { calculateAmountToken, convertAmountToUSD, numberRound } from './utils';
import { PoolState } from './types';
import { ArrowIconsWrapper, BasicInfo, LPTokensIcon, LpTokensIconsWrapper, PoolInfoValue } from './styled';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { Arrow } from '../../../imgs/arrow';
import React from 'react';
import { ALGONET, MAINNET } from '../../../AppContext';

const TESTNET_TO_MAINNET_ASA_ID: Record<number, number> = {
    0: 0, // ALGO
    85951079: 712012773, // META
    19386116: 386192725, // goBTC
    37074699: 31566704, // USDC
    70283957: 463554836, // ALGF
};

const getAssetLogoUrl = (input_asset_id: number) => {
    const asset_id = ALGONET === MAINNET ? input_asset_id : TESTNET_TO_MAINNET_ASA_ID[input_asset_id] ?? 0;

    return 'https://asa-list.tinyman.org/assets/' + asset_id + '/icon.png';
};

const daysDiff = (currentBlock: number, block: number) => Math.floor((Math.abs(block - currentBlock) * 4.35) / 86400);

const calculateAPR = (
    meanRoundDuration: number,
    poolState: PoolState,
    contractState: ContractState<FarmType>,
    lpTokenInfo: Priced<Asset> | null,
    rewardTokenInfo: Priced<Asset>
): number => {
    const blocksInAYear = (60 * 60 * 24 * 365) / meanRoundDuration;
    const lpPrice = lpTokenInfo ? lpTokenInfo.price : rewardTokenInfo.price;
    return poolState === PoolState.Finished
        ? 0
        : contractState.global.totalStaked === 0 || lpPrice === 0
        ? 0
        : ((contractState.initial.rewardPerBlock * blocksInAYear * rewardTokenInfo.price) /
              (contractState.global.totalStaked * lpPrice)) *
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
    contractState: ContractState<FarmType>;
    poolState: PoolState;
    lpTokenInfo: Priced<LPTokenInfo> | null;
    rewardTokenInfo: Priced<Asset>;
    currentBlock: number;
    isOpen: boolean;
}) => {
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

    const asset1_id = lpTokenInfo ? lpTokenInfo.asset1 : rewardTokenInfo.id;
    const asset2_id = lpTokenInfo ? lpTokenInfo.asset2 : rewardTokenInfo.id;
    const pool_name = lpTokenInfo ? lpTokenInfo.name + ' LP' : 'STAKE ' + rewardTokenInfo.unitName;
    // TODO: separate 0 from undefined in lpTokenInfo.asset
    const asset1_logo = getAssetLogoUrl(asset1_id);
    const asset2_logo = getAssetLogoUrl(asset2_id);

    return (
        <>
            <PoolInfoValue width={23}>
                <BasicInfo>
                    <LpTokensIconsWrapper>
                        <LPTokensIcon first>
                            {asset1_logo && <img alt="" width="100%" height="100%" src={asset1_logo} />}
                        </LPTokensIcon>
                        <LPTokensIcon>
                            {asset2_logo && <img alt="" width="100%" height="100%" src={asset2_logo} />}
                        </LPTokensIcon>
                    </LpTokensIconsWrapper>
                    <div>
                        {pool_name} <div>EARN {rewardTokenInfo.unitName}</div>
                    </div>
                </BasicInfo>
            </PoolInfoValue>
            <PoolInfoValue>{`$${numberRound(
                convertAmountToUSD(lpTokenInfo ?? rewardTokenInfo, contractState.global.totalStaked)
            )}`}</PoolInfoValue>
            <PoolInfoValue>{numberRound(APR)}%</PoolInfoValue>
            <PoolInfoValue>
                {`$${numberRound(convertAmountToUSD(lpTokenInfo ?? rewardTokenInfo, contractState.local.staked))}`}
            </PoolInfoValue>
            <PoolInfoValue>
                <div>{`$${numberRound(convertAmountToUSD(rewardTokenInfo, contractState.local.reward))}`}</div>
                <div>{`${numberRound(calculateAmountToken(rewardTokenInfo, contractState.local.reward))} ${
                    rewardTokenInfo.unitName
                }`}</div>
            </PoolInfoValue>
            <PoolInfoValue style={{ color: 'gray' }}>{timing} </PoolInfoValue>
            <ArrowIconsWrapper>
                <Arrow rotate={isOpen} />
            </ArrowIconsWrapper>
        </>
    );
};
