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
    $assets,
} from '../../../common/store';
import { DexProvider, LPTokenInfo, makeDex, tinyman2Dex, tinymanDex } from '../../../dexes';
import defaultLogo from '../../../imgs/icons/default.svg';
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
    42279195: 312769, // USDT
    144971339: 672913181, // goUSD
};

let assetData: Record<string, any> = {};

async function fetchAssetData() {
    try {
        const response = await fetch('https://asa-list.tinyman.org/assets.json');
        assetData = await response.json();
    } catch (error) {
        console.error('Error fetching asset data:', error);
    }
}

fetchAssetData();

export const getAssetLogoUrl = (input_asset_id: number) => {
    const asset_id = ALGONET === MAINNET ? input_asset_id : TESTNET_TO_MAINNET_ASA_ID[input_asset_id];
    if (asset_id in assetData) {
        return assetData[asset_id].logo.png;
    }
    return defaultLogo || null;
};

export const getLocalAssetIcon = (assetId: number): string | null => {
    try {
        return require(`../../../imgs/icons/${assetId}.png`);
    } catch (error) {
        return null;
    }
};

export const getAssetLogo = (input_asset_id: number) => {
    // Check enriched logoUrl from the asset store first (most reliable source)
    const asset = $assets.getState().get(input_asset_id);
    if (asset?.logoUrl && !asset.logoUrl.includes('tokenPlaceholder')) {
        return asset.logoUrl;
    }
    const assetLogo = getLocalAssetIcon(input_asset_id) || getAssetLogoUrl(input_asset_id);
    return assetLogo || defaultLogo;
};

export const isLPTokenInfo = (tokenInfo: Priced<Asset> | Priced<LPTokenInfo>): tokenInfo is Priced<LPTokenInfo> => {
    return 'poolId' in tokenInfo;
};

export const convertAmountToUSD = (lpToken: Priced<Asset>, amount: Amount) => {
    return (lpToken.price * unsafeFromBigint(amount)) / 10 ** lpToken.decimals;
};

export const numberRound = (amount: number | Amount, presicion?: number) => {
    if (typeof amount !== 'number') {
        amount = unsafeFromBigint(amount);
    }
    return amount > 0 ? formatDecimalsMeaningful(amount, presicion) : '0';
};

export const getLPTokenPoolLink = (poolDex: DexProvider, poolId: number, asset1: AssetId, asset2: AssetId): string => {
    if (poolDex === 'T2') {
        const poolAddress = tinymanDex.getPoolAddress(asset1, asset2);
        return `${TINYMAN_URL}/#/pool/${poolAddress}/add-liquidity`;
    }
    if (poolDex === 'T3') {
        const poolAddress = tinyman2Dex.getPoolAddress(asset1, asset2);
        return `${TINYMAN_URL}/#/pool/${poolAddress}/add-liquidity`;
    }
    if (poolDex === 'PT') {
        return `${PACT_URL}/add-liquidity/${poolId}`;
    }
    return '#'; // Dunno what else to do with dummy LPs
};

export const getDestroyLPLink = (lpToken: Priced<LPTokenInfo>): string => {
    if (lpToken.poolDex === 'T2') {
        const poolAddress = tinyman2Dex.getPoolAddress(lpToken.asset1, lpToken.asset2);
        return poolAddress ? `${TINYMAN_URL}/#/pool/${poolAddress}/remove-liquidity` : '';
    }
    if (lpToken.poolDex === 'T3') {
        const poolAddress = tinyman2Dex.getPoolAddress(lpToken.asset1, lpToken.asset2);
        return poolAddress ? `${TINYMAN_URL}/#/pool/${poolAddress}/remove-liquidity` : '';
    }
    if (lpToken.poolDex === 'PT') {
        return `${PACT_URL}/your-liquidity`;
    }
    return '#'; // Dunno what else to do with dummy LPs
};

export const getTokenLink = (asset_id: number | undefined): string => {
    if (asset_id === 0) {
        return 'https://allo.info/';
    }
    const mainnet_asset_id = ALGONET === MAINNET || !asset_id ? asset_id : TESTNET_TO_MAINNET_ASA_ID[asset_id];
    return mainnet_asset_id ? `https://vestige.fi/asset/${mainnet_asset_id}` : '';
};

// TODO: remove this when pools name it will be not test names
export const formatLPTokenName = (token: LPTokenInfo) => {
    let resName = token.name;
    if (token.poolDex === 'T2') {
        resName = resName.replace('TinymanPool1.1 ', '').replace('liquidity', '');
    } else if (token.poolDex === 'T3') {
        resName = resName.replace('TinymanPool2.0 ', '').replace('liquidity', '');
    } else if (token.poolDex === 'PT') {
        resName = resName.replace('PACT LP Token', '').replace('/', '-').replace('liquidity', '');
    } else if (token.poolDex === 'H2') {
        resName = resName.replace('HUMBLE', '').replace('LP', '').replace('-', '').replace('/', '-');
    }
    return resName.replaceAll('-', '/').replace('LP', '');
};

/**
 * Extract a clean pair name from a raw asset name when LP metadata is unavailable.
 * Returns null if the name doesn't match any known DEX LP pattern.
 */
export const formatRawLPTokenName = (name: string): string | null => {
    const patterns: Array<[string, (s: string) => string]> = [
        ['TinymanPool1.1 ', s => s.replace('TinymanPool1.1 ', '').replace('liquidity', '')],
        ['TinymanPool2.0 ', s => s.replace('TinymanPool2.0 ', '').replace('liquidity', '')],
        ['PACT LP Token', s => s.replace('PACT LP Token', '').replace('/', '-').replace('liquidity', '')],
        ['HUMBLE', s => s.replace('HUMBLE', '').replace('LP', '').replace('-', '').replace('/', '-')],
    ];
    for (const [prefix, transform] of patterns) {
        if (name.includes(prefix)) {
            return transform(name).replaceAll('-', '/').replace('LP', '').trim();
        }
    }
    return null;
};

export const calculateAlgoReward = (initial: ContractState<FarmType>['initial'], tokenReward: Amount): Amount => {
    const { totalRewardAmount, totalAlgoRewardAmount } = initial;
    if (totalRewardAmount === BigInt(0)) return BigInt(0) as Amount;
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
