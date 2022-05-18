import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_COMETA_API_URL,
});

type cost = { usd: number; microalgo: number };

type totalCost = {
    timestamp: number;
    cost: cost;
};

export function getTotalCost(
    //@ts-ignore
    address,
    weeks = 6
): Promise<totalCost[]> {
    return (
        instance
            .get(`total_cost/${address}`, { params: { weeks_count: weeks } })
            //@ts-ignore
            .then(({ data }) => data)
            .catch((err) => {
                console.log('ERR', err);
                return 0;
            })
    );
}

type asset = {
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

export function getAssets(address: string): Promise<asset[]> {
    return (
        instance
            .get(`wallet_assets/${address}`)
            //@ts-ignore
            .then(({ data }) => data)
            .catch((err) => {
                console.log('ERR', err);
                return 0;
            })
    );
}

export async function getWalletNFT(wallet: string) {
    return (
        instance
            .get(`wallet_nfts/${wallet}`)
            //@ts-ignore
            .then(({ data }) => data)
            .catch((err) => {
                console.log('ERR', err);
                return [];
            })
    );
}

export async function getContracts(type: string) {
    return instance
        .get(`/contracts?type=${type}`)
        .then(({ data }) => data)
        .catch((err) => console.log('ERR', err));
}

export async function getPoolInfo(asset1: number, asset2: number): Promise<PoolInfo> {
    return instance.get(`/pool?asset_1_id=${asset1}&asset_2_id=${asset2}`).then(({ data }) => data);
}

export async function getSwapCost(asset1: number, asset2: number, amount: number): Promise<SwapCost> {
    return instance
        .get(`/asset_swap_cost?address=asdf?asset1_id=${asset1}&asset2_id=${asset2}&asset1_amount=${amount}`)
        .then(({ data }) => data);
}

export async function tokensaleWhitelist(contractId: number, address: string): Promise<boolean> {
    return instance
        .put(`/whitelist?contract_id=${contractId}&address=${address}`)
        .then(({ data }) => data);
}