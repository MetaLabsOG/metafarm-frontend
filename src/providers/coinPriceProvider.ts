import axios from 'axios';
import pactsdk, { Asset, Pool } from '@pactfi/pactsdk';
import { algod, GOBTC_TOKEN_ID, USDT_TOKEN_ID } from '../AppContext';

const pact = new pactsdk.PactClient(algod);

type Rate = {
    currency: string;
    price: number;
    timestamp: number;
};

const instance = axios.create({
    baseURL: 'https://free-api.vestige.fi',
});

export async function getAlgoRateFromVestige(): Promise<Rate | null> {
    return instance
        .get<Rate>(`currency/USD/price`, {})
        .then(({ data }) => data)
        .catch((error) => {
            console.error(`Failed to fetch ALGO price: ${error}`);
            return null;
        });
}
