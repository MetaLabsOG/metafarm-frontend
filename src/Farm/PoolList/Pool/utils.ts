import { reach } from '../../../AppContext';
import { BigNumber } from 'ethers';

export const isValidAmount = (amount: number, balance: number) => (amount > balance || amount <= 0 ? false : true);

export const convertAmount = (amount: number, lpToken: any) => {
    console.log(reach.parseCurrency(amount), lpToken.decimals);
    return Number(amount) * 10 ** lpToken.decimals;
};

export const calculateAmountToken = (lpToken: any, balanceTokenOnAccount: BigNumber) => {
    return reach.bigNumberToNumber(balanceTokenOnAccount) / 10 ** lpToken.decimals;
};

export const convertAmountToUSD = (lpToken: any, amount: BigNumber) => {
    return (lpToken.price * reach.bigNumberToNumber(amount)) / 10 ** lpToken.decimals;
};

export const numberRound = (amount: number) => {
    return amount > 0 ? amount.toFixed(6) : amount;
};
