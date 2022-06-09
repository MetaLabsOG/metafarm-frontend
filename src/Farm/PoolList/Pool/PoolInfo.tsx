import { useStore } from 'effector-react';
import { $account, $meanRoundDuration, Asset, ContractState, FarmType, Priced } from '../../../common/store';
import { formatLPTokenName } from './utils';
import { PoolState } from './types';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import React from 'react';
import { ALGONET, MAINNET } from '../../../AppContext';
import { PoolInfoDesktop } from './PoolInfoDesktop';
import { PoolInfoMobile } from './PoolInfoMobile';
import { unsafeFromBigint } from '../../../common/lib';

export const TESTNET_TO_MAINNET_ASA_ID: Record<number, number> = {
    0: 0, // ALGO
    85951079: 712012773, // META
    19386116: 386192725, // goBTC
    10458941: 31566704, // USDC
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
    const totalStaked = unsafeFromBigint(contractState.global.totalStaked);
    const rewardPerBlock = unsafeFromBigint(contractState.initial.rewardPerBlock);

    return poolState === PoolState.Finished
        ? 0
        : totalStaked === 0 || lpPrice === 0
        ? 0
        : ((rewardPerBlock * blocksInAYear * rewardTokenInfo.price) / (totalStaked * lpPrice)) * 100;
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

    const asset1_id = lpTokenInfo ? lpTokenInfo.asset1 : rewardTokenInfo.id;
    const asset2_id = lpTokenInfo ? lpTokenInfo.asset2 : rewardTokenInfo.id;
    const pool_name = lpTokenInfo ? formatLPTokenName(lpTokenInfo.name) + ' LP' : 'STAKE ' + rewardTokenInfo.unitName;
    // TODO: separate 0 from undefined in lpTokenInfo.asset
    const asset1_logo = getAssetLogoUrl(asset1_id);
    const asset2_logo = getAssetLogoUrl(asset2_id);

    return (
        <>
            {window.innerWidth <= 1120 ? (
                <PoolInfoMobile
                    account={account}
                    contractState={contractState}
                    lpTokenInfo={lpTokenInfo}
                    rewardTokenInfo={rewardTokenInfo}
                    asset1_logo={asset1_logo}
                    asset2_logo={asset2_logo}
                    pool_name={pool_name}
                    APR={APR}
                    timing={timing}
                    isOpen={isOpen}
                />
            ) : (
                <PoolInfoDesktop
                    account={account}
                    contractState={contractState}
                    lpTokenInfo={lpTokenInfo}
                    rewardTokenInfo={rewardTokenInfo}
                    asset1_logo={asset1_logo}
                    asset2_logo={asset2_logo}
                    pool_name={pool_name}
                    APR={APR}
                    timing={timing}
                    isOpen={isOpen}
                />
            )}
        </>
    );
};
