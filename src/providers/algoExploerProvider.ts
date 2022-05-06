import axios from 'axios';
import { ALGONET, TESTNET } from '../AppContext';

export type LPTokenInfo = {
    name: string;
    price: number;
    decimals: number;
}

const prefix = ALGONET === TESTNET ? 'testnet.' : '';

const instance = axios.create({
    baseURL: `https://indexer.${prefix}algoexplorerapi.io/v2/`,
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