import { BigNumber } from '@ethersproject/bignumber';
import { ReachStdlib } from '../types';

type PricesAndValuesType = { price: number; value: number; nextLvlValue: number };

export const setLevelAndValue = (
    prices: BigNumber[],
    values: BigNumber[],
    lvl: BigNumber,
    reach: ReachStdlib
): PricesAndValuesType => {
    if (prices.length === 0 || values.length === 0) {
        return { price: 0, value: 0, nextLvlValue: 0 };
    }
    const numberLevel = reach.bigNumberToNumber(lvl);
    const numberNextLevel = numberLevel + 1 < values.length ? numberLevel + 1 : numberLevel - 1;

    const price = numberLevel >= prices.length ? 0 : reach.bigNumberToNumber(prices[numberLevel]);

    if (prices.length >= numberLevel && values.length >= numberLevel) {
        return {
            price,
            value: reach.bigNumberToNumber(values[numberLevel]),
            nextLvlValue: reach.bigNumberToNumber(values[numberNextLevel]),
        };
    }

    return { price: 0, value: 0, nextLvlValue: 0 };
};
