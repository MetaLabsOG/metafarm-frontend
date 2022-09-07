import { formatDecimalsMeaningful, unsafeFromBigint } from '../../../common/lib';
import {
    Asset,
    Priced,
    Amount,
    ContractState,
    FarmType,
    FarmInitialInfo,
    DistributionInitialInfo,
    AssetId,
} from '../../../common/store';
import { DexProvider, LPTokenInfo, tinymanDex } from '../../../dexes';
import { ALGONET, MAINNET, TESTNET } from '../../../AppContext';
import { PoolState } from './types';

const TINYMAN_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.tinyman.org`;
const PACT_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.pact.fi`;

export const TESTNET_TO_MAINNET_ASA_ID: Record<number, number> = {
    0: 0, // ALGO
    85951079: 712012773, // META
    19386116: 386192725, // GoBTC
    10458941: 31566704, // USDC
    70283957: 463554836, // ALGF
    96690153: 607591690, // XGLI
    27963203: 342889824, // BOARD
    96690352: 792313023, // XSOL
};

export const getAssetLogoUrl = (input_asset_id: number) => {
    const asset_id = ALGONET === MAINNET ? input_asset_id : TESTNET_TO_MAINNET_ASA_ID[input_asset_id];

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

export const getLPTokenPoolLink = (poolDex: DexProvider, poolId: number, asset1: AssetId, asset2: AssetId): string => {
    if (poolDex === 'T2') {
        return `${TINYMAN_URL}/#/pool/add-liquidity?asset_1=${asset1}&asset_2=${asset2}`;
    }
    if (poolDex === 'PT') {
        return `${PACT_URL}/add-liquidity/${poolId}`;
    }
    return '#'; // Dunno what else to do with dummy LPs
};

export const getDestroyLPLink = (lpToken: Priced<LPTokenInfo>): string => {
    if (lpToken.poolDex === 'T2') {
        const poolAddress = tinymanDex.getPoolAddress(lpToken.asset1, lpToken.asset2);
        return poolAddress ? `${TINYMAN_URL}/#/pool/${poolAddress}/remove` : '';
    }
    if (lpToken.poolDex === 'PT') {
        return `${PACT_URL}/your-liquidity`;
    }
    return '#'; // Dunno what else to do with dummy LPs
};

export const getTokenLink = (asset_id: number | undefined): string => {
    if (asset_id === 0) {
        return 'https://algoexplorer.io/top-statistics';
    }
    const mainnet_asset_id = ALGONET === MAINNET || !asset_id ? asset_id : TESTNET_TO_MAINNET_ASA_ID[asset_id];
    return mainnet_asset_id ? `https://vestige.fi/asset/${mainnet_asset_id}` : '';
};

// TODO: remove this when pools name it will be not test names
export const formatLPTokenName = (token: LPTokenInfo) => {
    if (token.poolDex === 'T2') {
        return token.name.replace('TinymanPool1.1 ', '').replace('liquidity', '');
    } else if (token.poolDex === 'PT') {
        return token.name.replace('PACT LP Token', '').replace('/', '-');
    } else if (token.poolDex === 'HM') {
        return token.name.replace('HUMBLE', '').replace('LP', '').replace('-', '').replace('/', '-');
    } else {
        return token.name;
    }
};

export const calculateAlgoReward = (initial: ContractState<FarmType>['initial'], tokenReward: Amount): Amount => {
    const { totalRewardAmount, totalAlgoRewardAmount } = initial;
    return (tokenReward * totalAlgoRewardAmount) / totalRewardAmount;
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
