import axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.cometa.farm/`,
});

type cost = { usd: number; microalgo: number };

type totalCost = {
    timestamp: number;
    cost: cost;
};

//@ts-ignore
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
