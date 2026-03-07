import axios from 'axios';
import { AssetId } from '../common/store/types';

type Rate = {
    currency: string;
    price: number;
    timestamp: number;
};

type VestigePriceResponse = {
    network_id: number;
    asset_id: number;
    denominating_asset_id: number;
    price: number;
    confidence: number;
    total_lockup: number;
};

const instance = axios.create({
    baseURL: 'https://api.vestigelabs.org',
});

export async function getAlgoRateFromVestige(): Promise<Rate | null> {
    try {
        // Get USD price in ALGO (1 USD = X ALGO)
        const response = await instance.get<VestigePriceResponse[]>(`assets/price?asset_ids=31566704&network_id=0&denominating_asset_id=0`);
        
        if (response.data && response.data.length > 0) {
            const usdInAlgo = response.data[0].price;
            // Convert to ALGO price in USD (1 ALGO = 1/X USD)
            const algoInUsd = 1 / usdInAlgo;
            
            return {
                currency: 'USD',
                price: algoInUsd,
                timestamp: Date.now()
            };
        }
        
        console.error('No price data received from Vestige API');
        return null;
    } catch (error) {
        console.error(`Failed to fetch ALGO price: ${error}`);
        return null;
    }
}

export async function getAssetRateFromVestige(assetId: AssetId): Promise<number | null> {
    try {
        const response = await instance.get<VestigePriceResponse[]>(`assets/price?asset_ids=${assetId}&network_id=0&denominating_asset_id=31566704`);
        if (response.data && response.data.length > 0) {
            return response.data[0].price;
        }
        return null;
    } catch (error) {
        console.error(`Failed to fetch asset ${assetId} price from Vestige:`, error);
        return null;
    }
}

export async function getAssetAlgoPriceFromVestige(assetId: AssetId): Promise<number | null> {
    try {
        const response = await instance.get<VestigePriceResponse[]>(`assets/price?asset_ids=${assetId}&network_id=0&denominating_asset_id=0`);
        if (response.data && response.data.length > 0) {
            return response.data[0].price;
        }
        return null;
    } catch (error) {
        console.error(`Failed to fetch asset ${assetId} ALGO price from Vestige:`, error);
        return null;
    }
}
