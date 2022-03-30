import { FOMO_APP_ID } from '../AppContext';

//@ts-ignore
export const setLevelAndValue = (prices, values, lvl, reach) => {
    if (!prices.length || !values.length) {
        return { price: 0, value: 0, nextLvlValue: 0 };
    }
    const numberLevel = reach.bigNumberToNumber(lvl);
    const numberNextLevel = numberLevel + 1 < values.length ? numberLevel + 1 : numberLevel - 1;

    let price = numberLevel >= prices.length ? null : reach.bigNumberToNumber(prices[numberLevel]);

    if (prices.length >= numberLevel && values.length >= numberLevel) {
        return {
            price,
            value: reach.bigNumberToNumber(values[numberLevel]),
            nextLvlValue: reach.bigNumberToNumber(values[numberNextLevel]),
        };
    }

    return { price: 0, value: 0, nextLvlValue: 0 };
};

export const getLevelValue = (key: string) => {
    const fomoAppId = localStorage.getItem('fomo_id');
    if (fomoAppId !== FOMO_APP_ID && FOMO_APP_ID) {
        localStorage.removeItem('discountLevel');
        localStorage.removeItem('timeReductionLevel');
        localStorage.setItem('fomo_id', FOMO_APP_ID);
        return 0;
    }

    const value = localStorage.getItem(key);

    if (!value) {
        localStorage.setItem(key, '0');
        return 0;
    }
    return Number(value);
};
