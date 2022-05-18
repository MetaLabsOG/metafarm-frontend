export const isValidAmount = (amount: number, balance: number) => balance >= amount && amount > 0

export const convertAmount = (amount: number, lpToken: any) => {
    return amount * 10 ** lpToken.decimals;
};

export const calculateAmountToken = (lpToken: any, balanceTokenOnAccount: number) => {
    return balanceTokenOnAccount / 10 ** lpToken.decimals;
};

export const convertAmountToUSD = (lpToken: any, amount: number) => {
    return (lpToken.price * amount) / 10 ** lpToken.decimals;
};

export const numberRound = (amount: number) => {
    return amount > 0 ? amount.toFixed(6) : amount;
};
