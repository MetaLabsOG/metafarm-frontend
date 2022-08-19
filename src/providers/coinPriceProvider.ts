import axios from 'axios';
import pactsdk, { Asset, Pool } from '@pactfi/pactsdk';
import { algod, GOBTC_TOKEN_ID, USDT_TOKEN_ID } from '../AppContext';

const pact = new pactsdk.PactClient(algod);

type Pair = 'BTCUSDT' | 'ALGOUSDT';

type Rate = {
    price: number;
};

const instance = axios.create({
    baseURL: 'https://api2.binance.com/api/v3/',
});

export async function getCoinRateFromBinance(pair: Pair): Promise<Rate | null> {
    const response = await instance
        .get<Rate>(`ticker/price`, {
            params: {
                symbol: pair,
            },
        })
        .then(({ data }) => data)
        .catch((error) => {
            console.error(`Failed to fetch coin price: ${error}`);
            return null;
        });
    return response;
}
