import { formatDecimalsMeaningful } from '../../../common/lib';
import { TokenInfoT } from '../../../providers/dexesProvider';

export const isValidAmount = (amount: number, balance: number) => balance >= amount && amount > 0;

export const convertAmount = (amount: number, lpToken: TokenInfoT) => {
    return amount * 10 ** lpToken.decimals;
};

export const calculateAmountToken = (lpToken: TokenInfoT, balanceTokenOnAccount: number) => {
    return balanceTokenOnAccount / 10 ** lpToken.decimals;
};

export const convertAmountToUSD = (lpToken: TokenInfoT, amount: number) => {
    return (lpToken.price * amount) / 10 ** lpToken.decimals;
};

export const numberRound = (amount: number) => {
    return formatDecimalsMeaningful(amount);
};