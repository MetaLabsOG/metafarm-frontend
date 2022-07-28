import axios from 'axios';

type Pair = 'BTCUSDT' | 'ALGOUSDT';

type Rate = {
    price: number;
}

const instance = axios.create({
    baseURL: 'https://api2.binance.com/api/v3/',
});


async function getCoinRate(pair: Pair): Promise<Rate | null> {
    try {
        const response = await instance
            .get<Rate>(`ticker/price`, {
                params: {
                    symbol: pair,
                },
            })
            .then(({ data }) => data)
            .catch((error) => {
                console.error(error.response);
                return null;
            });
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getBinanceCoinPrice(pair: Pair): Promise<number> {
    const rate = await getCoinRate(pair);
    if (rate && 'price' in rate) {
        return Number(rate.price);
    }
    return 0;
}

