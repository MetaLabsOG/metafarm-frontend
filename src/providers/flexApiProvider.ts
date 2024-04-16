import { DexProvider } from '../dexes';
import { AssetId } from '../common/store';
import { instance } from './apiProvider';

export type AssetDetails = {
    id: AssetId;
    name: string;
    unit_name: string;
    creator: string;
    reserve: string;
    decimals: number;
};

export type PricedLpInfo = {
    id: number;
    token_id: number;
    asset1_id: number;
    asset2_id: number;
    dex_provider: DexProvider;
    address: string;

    asset1_reserve_micros: number;
    asset2_reserve_micros: number;
    issued_tokens_micros: number;

    asset1_reserve: number;
    asset2_reserve: number;
    issued_tokens: number;

    token_price_algo: number;
    token_price_usd: number;
    swap_fee_apr?: number;
};

export type AssetPriceInfo = {
    asset_id: number;
    asset_name: string;
    price_usd: number;
    price_algo: number;
    last_update_round: number;
    seconds_since_update?: number;
};

export async function getPricedLpInfo(lp_token_id: number): Promise<PricedLpInfo> {
    return await instance
        .post<PricedLpInfo>(`/lp/state/priced?lp_token_id=${lp_token_id}`)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            throw error;
        });
}

export async function getPricedLpInfos(lp_token_ids?: number[]): Promise<PricedLpInfo[]> {
    const params: { [key: string]: any } = {};
    if (lp_token_ids) {
        params['lp_token_ids'] = lp_token_ids;
    }
    return await instance
        .post<PricedLpInfo[]>(`/lp/states/priced`, params)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            throw error;
        });
}

export async function getAsset(asset_id: number): Promise<AssetDetails> {
    return await instance
        .post<AssetDetails>(`/asset?asset_id=${asset_id}`)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            throw error;
        });
}

export async function getAllAssets(asset_ids: number[] | null = null): Promise<AssetDetails[]> {
    try {
        const response = await instance.post<AssetDetails[]>(`/assets`, { ids: asset_ids });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch assets from API:', error);
        throw error; // Rethrow the error to be handled by the effect
    }
}

export async function getPrice(asset_id: number): Promise<AssetPriceInfo> {
    return await instance
        .post<AssetPriceInfo>(`/asset/price?asset_id=${asset_id}`)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            throw error;
        });
}

export async function getAllPrices(asset_ids: number[] | null = null): Promise<AssetPriceInfo[]> {
    try {
        const response = await instance.post<AssetPriceInfo[]>(`/assets/price`, { ids: asset_ids });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch assets from API:', error);
        throw error; // Rethrow the error to be handled by the effect
    }
}
