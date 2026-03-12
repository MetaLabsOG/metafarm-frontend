import { AssetId } from '../common/store';
import { instance } from './apiProvider';

export type AssetDetails = {
    id: AssetId;
    name: string;
    unit_name: string;
    creator: string;
    reserve: string;
    decimals: number;
    total_supply: number;
    logo_url: string;
};

export async function getAsset(asset_id: number): Promise<AssetDetails> {
    return await instance
        .post<AssetDetails>(`/asset?asset_id=${asset_id}`)
        .then(({ data }) => data);
}

export async function getAllAssets(asset_ids: number[] | null = null): Promise<AssetDetails[]> {
    const response = await instance.post<AssetDetails[]>(`/assets`, { ids: asset_ids });
    return response.data;
}

export type AssetPriceInfo = {
    asset_id: number;
    asset_name: string;
    price_usd: number;
    price_algo: number;
    last_update_round: number;
    seconds_since_update: number;
};

export async function getAssetPrice(asset_id: number): Promise<AssetPriceInfo> {
    return await instance
        .post<AssetPriceInfo>(`/asset/price?asset_id=${asset_id}`)
        .then(({ data }) => data);
}

export async function getAllAssetPrices(asset_ids: number[] | null = null): Promise<AssetPriceInfo[]> {
    const response = await instance.post<AssetPriceInfo[]>(`/assets/price`, { ids: asset_ids });
    return response.data;
}
