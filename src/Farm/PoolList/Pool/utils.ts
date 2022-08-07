import { formatDecimalsMeaningful, unsafeFromBigint } from '../../../common/lib';
import {
    Asset,
    Priced,
    Amount,
    ContractState,
    FarmType,
    FarmInitialInfo,
    DistributionInitialInfo,
} from '../../../common/store/types';
import { LPTokenInfo, DexProvider } from '../../../providers/dexesProvider';
import { ALGONET, MAINNET, TESTNET } from '../../../AppContext';
import { PoolState } from './types';

const TINYMAN_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.tinyman.org`;
const PACT_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.pact.fi`;

export const TESTNET_TO_MAINNET_ASA_ID: Record<number, number> = {
    0: 0, // ALGO
    85_951_079: 712_012_773, // META
    19_386_116: 386_192_725, // GoBTC
    10_458_941: 31_566_704, // USDC
    70_283_957: 463_554_836, // ALGF
    96_690_153: 607_591_690, // XGLI
    27_963_203: 342_889_824, // BOARD
    96_690_352: 792_313_023, // XSOL
};

export const getAssetLogoUrl = (input_asset_id: number) => {
    const asset_id = ALGONET === MAINNET ? input_asset_id : TESTNET_TO_MAINNET_ASA_ID[input_asset_id] ?? 0;

    return `https://asa-list.tinyman.org/assets/${asset_id}/icon.png`;
};

export const isLPTokenInfo = (tokenInfo: Priced<Asset> | Priced<LPTokenInfo>): tokenInfo is Priced<LPTokenInfo> => {
    return 'poolId' in tokenInfo;
};

export const convertAmountToUSD = (lpToken: Priced<Asset>, amount: Amount) => {
    return (lpToken.price * unsafeFromBigint(amount)) / 10 ** lpToken.decimals;
};

export const numberRound = (amount: number | Amount) => {
    if (typeof amount !== 'number') {
        amount = unsafeFromBigint(amount);
    }
    return amount > 0 ? formatDecimalsMeaningful(amount) : 0;
};

export const getLPTokenPoolLink = ({ poolDex, poolId, asset1, asset2 }: LPTokenInfo): string => {
    if (poolDex === 'T2') {
        return `${TINYMAN_URL}/#/pool/add-liquidity?asset_1=${asset1}&asset_2=${asset2}`;
    }
    if (poolDex === 'PT') {
        return `${PACT_URL}/add-liquidity/${poolId}`;
    }
    return '#'; // Dunno what else to do with dummy LPs
};

export const getTokenLink = (asset_id: number | undefined): string => {
    if (asset_id === 0) {
        return 'https://algoexplorer.io/top-statistics';
    }
    const mainnet_asset_id = ALGONET === MAINNET || !asset_id ? asset_id : TESTNET_TO_MAINNET_ASA_ID[asset_id];
    return mainnet_asset_id ? `https://tinychart.org/asset/${mainnet_asset_id}` : '';
};

// TODO: remove this when pools name it will be not test names
export const formatLPTokenName = (name: string) => {
    return name.replace('TinymanPool1.1 ', '').replace('liquidity', '').replace('PACT LP Token', '').replace('/', '-');
};

export const algoRewardPerBlock = (initial: ContractState<FarmType>['initial']): Amount => {
    if ('extraAlgoRewardPerBlock' in initial) {
        return initial.extraAlgoRewardPerBlock;
    }
    return BigInt(0);
};

export const calculateAlgoReward = (initial: ContractState<FarmType>['initial'], tokenReward: Amount): Amount => {
    const duration = BigInt(initial.endBlock - initial.beginBlock);
    const totalTokenReward = initial.rewardPerBlock * duration;
    const totalAlgoReward = algoRewardPerBlock(initial) * duration;
    return (tokenReward * totalAlgoReward) / totalTokenReward;
};

export const getPoolState = (currentBlock: number, initial: FarmInitialInfo | DistributionInitialInfo): PoolState => {
    if (currentBlock < initial.beginBlock) {
        return PoolState.Upcoming;
    }
    if (currentBlock > initial.endBlock) {
        return PoolState.Finished;
    }
    return PoolState.Running;
};
