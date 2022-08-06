// TODO: Remove this provider, use algosdk indexer instead.
import axios from 'axios';
import { ALGONET, TESTNET } from '../AppContext';
import { AppId } from '../common/store';

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
