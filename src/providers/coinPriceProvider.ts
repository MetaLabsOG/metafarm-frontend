import axios from 'axios';
import pactsdk, { Asset, Pool } from '@pactfi/pactsdk';
import { algod, GOBTC_TOKEN_ID, USDT_TOKEN_ID } from '../AppContext';
import { makeDex, PactDex } from './dexesProvider';

const pact = new pactsdk.PactClient(algod);

type Pair = 'BTCUSDT' | 'ALGOUSDT';

type Rate = {
    price: number;
};

const instance = axios.create({
    baseURL: 'https://api2.binance.com/api/v3/',
});

async function getCoinRateFromBinance(pair: Pair): Promise<Rate | null> {
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

// TODO: this function probably shall just accept to assets, similar to getMostLiquidPool etc.
export async function getAlgoPrice(): Promise<number> {
    try {
        const rate = await getCoinRateFromBinance('ALGOUSDT');
        if (!rate) {
            throw new Error(`Failed to fetch ALGO price from Binance`);
        }
        return Number(rate.price);
    } catch (e) {
        console.warn('Failed to get price from Binance, piggybacking on Pact. Error was:', e);
        const ALGO = 0;
        const dex = makeDex('PT') as PactDex;
        const pool = await dex.getMostLiquidPool(ALGO, USDT_TOKEN_ID);
        return pool.calculator.primaryAssetPrice;
    }
}
