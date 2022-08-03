type PricesAndValuesType = { price: number; value: number; nextLvlValue: number };

export const setLevelAndValue = (prices: any[], values: any[], lvl: any, reach: any): PricesAndValuesType => {
    if (!prices.length || !values.length) {
        return { price: 0, value: 0, nextLvlValue: 0 };
    }
    const numberLevel = reach.bigNumberToNumber(lvl);
    const numberNextLevel = numberLevel + 1 < values.length ? numberLevel + 1 : numberLevel - 1;

    const price = numberLevel >= prices.length ? null : reach.bigNumberToNumber(prices[numberLevel]);

    if (prices.length >= numberLevel && values.length >= numberLevel) {
        return {
            price,
            value: reach.bigNumberToNumber(values[numberLevel]),
            nextLvlValue: reach.bigNumberToNumber(values[numberNextLevel]),
        };
    }

    return { price: 0, value: 0, nextLvlValue: 0 };
};
