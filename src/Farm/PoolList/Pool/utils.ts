import { formatDecimalsMeaningful, unsafeFromBigint } from '../../../common/lib';
import tinyman from '../../../imgs/dexes/tinyman.png';
import pact from '../../../imgs/dexes/pact.png';
import humble from '../../../imgs/dexes/humble.png';
import algofi from '../../../imgs/dexes/algofi.png';
import { Asset, Priced, Amount, ContractState, FarmType } from '../../../common/store/types';
import { LPTokenInfo, DexProvider } from '../../../providers/dexesProvider';
import { ALGONET, MAINNET, TESTNET } from '../../../AppContext';

const TINYMAN_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.tinyman.org`;
const PACT_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.pact.fi`;

export const TESTNET_TO_MAINNET_ASA_ID: Record<number, number> = {
    0: 0, // ALGO
    85951079: 712012773, // META
    19386116: 386192725, // goBTC
    10458941: 31566704, // USDC
    70283957: 463554836, // ALGF
    96690153: 607591690, // XGLI
};

export const getAssetLogoUrl = (input_asset_id: number) => {
    // TODO hack for glitter
    if (input_asset_id === 96690352) {
        return 'https://gateway.pinata.cloud/ipfs/QmXhUDU7QNxWg27JipSvLxc3wcsEL23RJW5fjDvEGzbZSb';
    }
    const asset_id = ALGONET === MAINNET ? input_asset_id : TESTNET_TO_MAINNET_ASA_ID[input_asset_id] ?? 0;
    return 'https://asa-list.tinyman.org/assets/' + asset_id + '/icon.png';
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
    } else if (poolDex === 'PT') {
        return `${PACT_URL}/add-liquidity/${poolId}`;
    } else {
        return '#'; // dunno what else to do with dummy LPs
    }
};

export const getDexName = (poolDex: string): string => {
    if (poolDex === 'T2') {
        return 'tinyman';
    }
    if (poolDex === 'PT') {
        return 'pact';
    }
    return poolDex;
};

export const getTokenLink = (asset_id: number | undefined): string => {
    if (asset_id === 0) {
        return 'https://algoexplorer.io/top-statistics';
    }
    const mainnet_asset_id = ALGONET === MAINNET || !asset_id ? asset_id : TESTNET_TO_MAINNET_ASA_ID[asset_id];
    return mainnet_asset_id ? 'https://tinychart.org/asset/' + mainnet_asset_id : '';
};

// TODO: remove this when pools name it will be not test names
export const formatLPTokenName = (name: string) => {
    return name.replace('TinymanPool1.1 ', '').replace('liquidity', '');
};

export const getDexIcon = (poolDex: DexProvider) => {
    if (poolDex === 'T2') {
        return tinyman;
    }
    if (poolDex === 'PT') {
        return pact;
    }
    return null;
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
