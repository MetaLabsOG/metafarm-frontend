import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { Asset, AssetId, ContractState, FarmType, Priced } from '../../../common/store';
import { Arrow } from '../../../imgs/arrow';
import { DexProvider, LPTokenInfo } from '../../../dexes';
import pacman from '../../../imgs/pacman.gif';
import { Account } from '../../../types';
import { fromSmallestUnits } from '../../../common/lib';
import info from '../../../imgs/info.svg';
import { PoolHeader } from '../../../Components/PoolHeader/PoolHeader';
import { ColumnType, POOL_COLUMN_WIDTH } from '../PoolList';
import { AprType } from '../../store';
import { theme } from '../../../theme';
import {
    PoolInfoDesktopContainer,
    ArrowIconsWrapper,
    PoolInfoValue,
    Pacman,
    RewardUSDValue,
    PoolPropertyValue,
} from './styled';
import { calculateAlgoReward, convertAmountToUSD, numberRound } from './utils';

export interface PoolInfoDesktopProps {
    account: Account | null;
    pricedAlgo: Priced<Asset>;
    contractState: ContractState<FarmType>;
    stakeTokenInfo: Priced<LPTokenInfo> | Priced<Asset>;
    rewardTokenInfo: Priced<Asset>;
    asset1_id: AssetId;
    asset2_id: AssetId;
    pool_name: string;
    APR: AprType;
    timing: string;
    contractLockSuffix: string;
    isOpen: boolean;
    dex: DexProvider | null;
    isVerified: boolean;
    isGame: boolean;
    nftRewards: boolean;
}

export interface ValueProps {
    contractState: ContractState<FarmType>;
    tokenInfo: Priced<Asset> | Priced<LPTokenInfo>;
    pricedAlgo: Priced<Asset>;
}

export const getRewardTip = (contractState: ContractState<FarmType>, tokenInfo: Priced<Asset> | Priced<LPTokenInfo>, pricedAlgo: Priced<Asset>) => {
    if (!contractState.local) {
        return '';
    }

    const algoReward = calculateAlgoReward(contractState.initial, contractState.local.reward);

    let tip = '';

    // Add token reward info
    if (contractState.local.reward >= 0) {
        tip += `${numberRound(fromSmallestUnits(tokenInfo, contractState.local.reward))} ${tokenInfo.unitName}`;
    }

    // Add ALGO reward info if applicable
    if (contractState.initial.totalAlgoRewardAmount) {
        if (tip) tip += '<br />';
        tip += `${numberRound(fromSmallestUnits(pricedAlgo, algoReward))} ALGO`;
    }

    return tip;
};

export const RewardValues: FC<ValueProps> = ({ contractState, tokenInfo, pricedAlgo }) => {
    if (!contractState.local) {
        return <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>—</div>;
    }

    const algoReward = calculateAlgoReward(contractState.initial, contractState.local.reward);
    const rewardTip = getRewardTip(contractState, tokenInfo, pricedAlgo);
    const usdValue = numberRound(
        convertAmountToUSD(tokenInfo, contractState.local.reward) +
        convertAmountToUSD(pricedAlgo, algoReward)
    );

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
        }}>
            <RewardUSDValue>
                ${usdValue}
                <img
                    data-tip={rewardTip}
                    data-html="true"
                    style={{ marginLeft: '2px' }}
                    alt="Reward info"
                    height="14px"
                    src={info}
                />
            </RewardUSDValue>
            <ReactTooltip clickable place="top" type="light" effect="solid" />
        </div>
    );
};

export const StakeValue: FC<ValueProps> = ({ contractState, tokenInfo }) => {
    if (!contractState.local) {
        return <>—</>;
    }
    return <>${numberRound(convertAmountToUSD(tokenInfo, contractState.local.staked))}</>;
};

export const getAPRTip = (APR: AprType, unitname: string) => {
    const rewards = `${numberRound(APR.reward)}% ${unitname}`;
    const algoRewards = APR.algoReward ? ` + ${numberRound(APR.algoReward)}% ALGO` : '';
    const fees = APR.fees ? ` + ${numberRound(APR.fees)}% trading fees` : '';
    return rewards + algoRewards + fees;
};

export const PoolInfoDesktop: FC<PoolInfoDesktopProps> = ({
    account,
    pricedAlgo,
    contractState,
    stakeTokenInfo,
    rewardTokenInfo,
    asset1_id,
    asset2_id,
    pool_name,
    APR,
    timing,
    isOpen,
    contractLockSuffix,
    dex,
    isVerified,
    isGame,
    nftRewards,
}) => {
    return (
        <PoolInfoDesktopContainer>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Name]}>
                <PoolHeader
                    asset1_id={asset1_id}
                    asset2_id={asset2_id}
                    pool_name={pool_name}
                    rewardTokenName={rewardTokenInfo.unitName}
                    dex={dex}
                    lock={contractLockSuffix}
                    isVerified={isVerified}
                    algoRewards={contractState.initial.totalAlgoRewardAmount > 0}
                    isGame={isGame}
                    nftRewards={nftRewards}
                />
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Tvl]}>
                <PoolPropertyValue>
                    {`$${numberRound(convertAmountToUSD(stakeTokenInfo, contractState.global.totalStaked))}`}
                </PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Apr]}>
                <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <PoolPropertyValue>{numberRound(APR.total)}%</PoolPropertyValue>
                    <img data-tip={getAPRTip(APR, rewardTokenInfo.unitName)} alt="APR info" height="14px" src={info} />
                    <ReactTooltip clickable place="top" type="light" effect="solid" />
                </div>
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Stake]}>
                <PoolPropertyValue>
                    <StakeValue contractState={contractState} tokenInfo={stakeTokenInfo} pricedAlgo={pricedAlgo} />
                </PoolPropertyValue>
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Reward]}>
                <RewardValues contractState={contractState} tokenInfo={rewardTokenInfo} pricedAlgo={pricedAlgo} />
            </PoolInfoValue>
            <PoolInfoValue width={POOL_COLUMN_WIDTH[ColumnType.Ends]} style={{ color: theme.gray, fontSize: '16px' }}>
                {timing.split('\n').map((x) => (
                    <div key={x}>{x}</div>
                ))}
            </PoolInfoValue>
            <ArrowIconsWrapper>
                {contractState.local || account === null ? <Arrow rotate={isOpen} /> : <Pacman src={pacman} />}
            </ArrowIconsWrapper>
        </PoolInfoDesktopContainer>
    );
};
