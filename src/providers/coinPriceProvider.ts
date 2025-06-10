import axios from 'axios';
import { AssetId } from '../common/store/types';

type Rate = {
    currency: string;
    price: number;
    timestamp: number;
};

const instance = axios.create({
    baseURL: 'https://api.vestigelabs.org',
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

export async function getAssetRateFromVestige(assetId: AssetId): Promise<number | null> {
    try {
        const response = await instance.get<{ price: number }>(`asset/${assetId}/price`, {});
        return response.data.price;
    } catch (error) {
        console.error(`Failed to fetch asset ${assetId} price from Vestige:`, error);
        return null;
    }
}
