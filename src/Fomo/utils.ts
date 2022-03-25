//@ts-ignore
export const setLevelAndValue = (prices, values, lvl, reach) => {
    const numberLevel = reach.bigNumberToNumber(lvl);
    const numberNextLevel = numberLevel + 1;
    if (prices.length && values.length) {
        return {
            price: reach.bigNumberToNumber(prices[numberLevel]),
            value: reach.bigNumberToNumber(values[numberLevel]),
            nextLvlValue: reach.bigNumberToNumber(values[numberNextLevel]),
        };
    }
    return { price: 0, value: 0, nextLvlValue: 0 };
};
