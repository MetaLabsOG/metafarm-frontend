import { LPTokenInfo, TokenInfoT } from '../../../providers/dexesProvider';
import { ALGONET, TESTNET } from '../../../AppContext';

const TINYMAN_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.tinyman.org`;
const PACT_URL = `https://${ALGONET === TESTNET ? 'testnet' : 'app'}.pact.fi`;

export const isValidAmount = (amount: number, balance: number) => balance >= amount && amount > 0;

export const convertAmount = (amount: string, lpToken: TokenInfoT) => {
    return Math.floor(parseFloat(amount) * 10 ** lpToken.decimals)
};

export const calculateAmountToken = (lpToken: TokenInfoT, balanceTokenOnAccount: number) => {
    return balanceTokenOnAccount / 10 ** lpToken.decimals;
};

export const convertAmountToUSD = (lpToken: TokenInfoT, amount: number) => {
    return (lpToken.price * amount) / 10 ** lpToken.decimals;
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
