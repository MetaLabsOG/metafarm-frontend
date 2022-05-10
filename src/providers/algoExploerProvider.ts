// TODO: Remove this provider, use algosdk indexer instead.
import axios from 'axios';

export type LPTokenInfo = {
    name: string;
    price: number;
    decimals: number;
};

const instance = axios.create({
    baseURL: process.env.REACT_APP_ALGO_EXPLOER_API_URL,
});

export async function getAssetInfo(assetId: number): Promise<any> {
    return instance
        .get(`assets/${assetId}`)
        .then(({ data }) => data.asset)
        .catch((err) => {
            console.log('ERR', err);
            return '';
        });
}

export async function getWalletInfo(wallet: string): Promise<any> {
    return (
        instance
            .get(`accounts/${wallet}`)
            //@ts-ignore
            .then(({ data }) => data.account)
            .catch((err) => {
                console.log('ERR', err);
                return 0;
            })
    );
}
