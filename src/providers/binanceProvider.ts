import axios from 'axios';

type Pair = 'BTCUSDT' | 'ALGOUSDT';

const instance = axios.create({
    baseURL: 'https://api2.binance.com/api/v3/',
});

export async function getCoinRate(pair: Pair) {
    try {
        const response = await instance
            .get(`ticker/price`, {
                params: {
                    symbol: pair,
                },
            })
            .then(({ data }) => data)
            .catch((error) => error.response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getBinanceCoinPrice(pair: Pair): Promise<number> {
    const rate = await getCoinRate(pair); 
    return Number(rate.price);
}

