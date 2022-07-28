import axios from 'axios';
import { Json, JsonWithBignum, resolveBignums } from '../common/lib';
import packages from '../../package.json';

const instance = axios.create({
    baseURL: process.env.REACT_APP_COMETA_API_URL,
});

type cost = { usd: number; microalgo: number };

export type TotalCost = {
    timestamp: number;
    cost: cost;
};

export function getTotalCost(address: string, weeks = 6): Promise<TotalCost[]> {
    return instance
        .get<TotalCost[]>(`total_cost/${address}`, { params: { weeks_count: weeks } })
        .then(({ data }) => data)
        .catch((err) => {
            console.log('ERR', err);
            return [];
        });
}

type Asset = {
    name: string;
    ticker: string;
    amount: number;
    price: cost;
};

export type PoolInfo = {
    name: string;
    asset1_reserve: number;
    asset2_reserve: number;
    total_lp_tokens: number;
};

export type SwapCost = {
    res_tokens: number;
    price_per_token: number;
};

export function getAssets(address: string): Promise<Asset[]> {
    return instance
        .get<Asset[]>(`wallet_assets/${address}`)
        .then(({ data }) => data)
        .catch((err) => {
            console.log('ERR', err);
            return [];
        });
}

export type WalletNFT = {
    asa_id: number;
    name: string;
    collection: string;
    image_url: string; // TODO it is url, maybe need a special type and validation
    floor_price: {
        usd: number;
        microalgo: number;
    };
    week_price_change: number;
};

export async function getWalletNFTs(wallet: string): Promise<WalletNFT[]> {
    return instance
        .get<WalletNFT[]>(`wallet_nfts/${wallet}`)
        .then(({ data }) => data)
        .catch((err) => {
            console.log('ERR', err);
            return [];
        });
}

export async function getContracts(type: string): Promise<JsonWithBignum> {
    return instance
        .get<Json>(`/contracts?type=${type}`)
        .then(({ data }) => resolveBignums(data))
        .catch((err) => {
            console.log('ERR', err);
            return null;
        });
}

export async function getPoolInfo(asset1: number, asset2: number): Promise<PoolInfo> {
    return instance.get<PoolInfo>(`/pool?asset_1_id=${asset1}&asset_2_id=${asset2}`).then(({ data }) => data);
}

export async function getSwapCost(asset1: number, asset2: number, amount: number): Promise<SwapCost> {
    return instance
        .get<SwapCost>(`/asset_swap_cost?address=asdf?asset1_id=${asset1}&asset2_id=${asset2}&asset1_amount=${amount}`)
        .then(({ data }) => data);
}

export async function tokensaleWhitelist(contractId: number, address: string): Promise<boolean> {
    return instance
        .put<boolean>(`/whitelist_confirm?contract_id=${contractId}&address=${address}`)
        .then(({ data }) => data);
}

export const deployContractToBackend = async (
    contractId: number,
    contractType: string,
    farmName: string,
    dex?: string
) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const contractVersion = packages.dependencies['@metalabsog/' + contractType];
    if (!contractVersion) {
        throw new Error('Wrong contract type:' + contractType);
    }
    const data = {
        type: contractType,
        id: contractId,
        version: contractVersion,
        description: farmName,
        metadata: {
            dex: dex,
        },
    };

    return instance.post('/contract/register', data).then(({ data }) => data);
};
