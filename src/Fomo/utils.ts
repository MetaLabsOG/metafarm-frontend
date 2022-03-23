//@ts-ignore
export const setLevelAndValue = (prices, values, lvl, reach) => {
    const numberLevel = reach.bigNumberToNumber(lvl);
    const numberNextLevel = values.length > numberLevel + 1 ? numberLevel + 1 : numberLevel;

    return {
        price: reach.bigNumberToNumber(prices[numberLevel]),
        value: reach.bigNumberToNumber(values[numberLevel]),
        nextLvlValue: reach.bigNumberToNumber(values[numberNextLevel]),
    };
};
