import axios from 'axios';
import { ALGONET, TESTNET } from '../AppContext';

const preffix = ALGONET === TESTNET ? 'testnet.' : '';

const instance = axios.create({
    baseURL: `https://indexer.${preffix}algoexplorerapi.io/v2/`,
});

export async function getAssetInfo(assetId: number): Promise<string> {
    return instance
        .get(`assets/${assetId}`)
        .then(({ data }) => {
            if (!data.asset) {
                return '';
            }
            return data.asset.params.url;
        })
        .catch((err) => {
            console.log('ERR', err);
            return '';
        });
}

export async function getWalletInfo(wallet: string): Promise<number> {
    return (
        instance
            .get(`accounts/${wallet}`)
            //@ts-ignore
            .then(({ amount }) => amount)
            .catch((err) => {
                console.log('ERR', err);
                return 0;
            })
    );
}
