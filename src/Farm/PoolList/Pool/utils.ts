import { formatDecimalsMeaningful } from '../../../common/lib';
import { Asset, Priced } from '../../../common/store/types';
import { LPTokenInfo } from '../../../providers/dexesProvider';
import { ALGONET, reach, TESTNET } from '../../../AppContext';

const TINYMAN_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.tinyman.org`;
const PACT_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.pact.fi`;

export const isValidAmount = (amount: number, balance: number) => balance >= amount && amount > 0;


export const calculateAmountToken = (lpToken: Asset, balanceTokenOnAccount: number) => {
     return Number(reach.formatWithDecimals(balanceTokenOnAccount, lpToken.decimals))
};

export const convertAmountToUSD = (lpToken: Priced<Asset>, amount: number) => {
    return  (lpToken.price * amount) / 10 ** lpToken.decimals;
};

export const numberRound = (amount: number) => {
    return  Number(amount) > 0 ? formatDecimalsMeaningful(Number(amount)) : 0;
};

export const getLPTokenPoolLink = ({ poolDex, poolId, asset1, asset2 }: LPTokenInfo): string => {
    if (poolDex === 'T2') {
        return `${TINYMAN_URL}/#/pool/add-liquidity?asset_1=${asset1}&asset_2=${asset2}`;
    } else if (poolDex === 'PT') {
        return `${PACT_URL}/add-liquidity/${poolId}`;
    } else {
        return '#'; // dunno what else to do with dummy LPs
    }
}


// TODO: remove this when pools name it will be not test names
export const formatLPTokenName = (name: string) => {
    return name.replace('/', ' • ').replace('liquidity', '');
};