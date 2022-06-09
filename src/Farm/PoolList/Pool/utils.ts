import { formatDecimalsMeaningful } from '../../../common/lib';
import { Asset, Priced, Amount } from '../../../common/store/types';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { ALGONET, MAINNET, reach, TESTNET } from '../../../AppContext';
import { TESTNET_TO_MAINNET_ASA_ID } from './PoolInfo';

const TINYMAN_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.tinyman.org`;
const PACT_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.pact.fi`;

export const convertAmountToUSD = (lpToken: Priced<Asset>, amount: Amount) => {
    return (lpToken.price * Number(amount)) / 10 ** lpToken.decimals;
};

export const numberRound = (amount: number | Amount) => {
    return Number(amount) > 0 ? formatDecimalsMeaningful(Number(amount)) : 0;
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

export const getTinyChartTokenLink = (asset_id: number | undefined): string => {
    const mainnet_asset_id = ALGONET === MAINNET || !asset_id ? asset_id : TESTNET_TO_MAINNET_ASA_ID[asset_id];
    return mainnet_asset_id ? 'https://tinychart.org/asset/' + mainnet_asset_id : '';
};

// TODO: remove this when pools name it will be not test names
export const formatLPTokenName = (name: string) => {
    return name.replace('TinymanPool1.1 ', '');
};
