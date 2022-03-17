import axios from 'axios';
import { ALGONET, TESTNET } from '../AppContext';

const preffix = ALGONET === TESTNET ? 'testnet.' : '';

const instance = axios.create({
    baseURL: `https://algoindexer.${preffix}`,
});

const getCoinRate = async () =>
    await instance
        .get(`ticker/24hr`)
        .then((response) => response)
        .catch((error) => error.response);

export default getCoinRate;

//@ts-ignore
export async function getAssetInfo(assetId) {
    instance
        .get(`algoexplorerapi.io/v2/assets/${assetId}`)
        //@ts-ignore
        .then((res) => res.json())
        .then((data) => {
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
