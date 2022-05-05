import axios from 'axios';
import { ALGONET, TESTNET } from '../AppContext';
import { getPoolInfo, getSwapCost } from './apiProvider';
import { getCoinRate } from './binanceProvider';

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

// TODO: this is not particularly an Algoexplorer functionality, but let it be here for now
export async function getLPTokenInfo(assetId: number): Promise<LPTokenInfo> {
    const assetParams = (await getAssetInfo(assetId)).params;
    const assetCreator = await getWalletInfo(assetParams.creator);
    console.log(assetCreator);
    
    let pooledAssets = assetCreator.assets.filter((asset: any) => asset['asset-id'] !== assetId);
    if (pooledAssets.length < 2) {
        // this means that one of the assets in the pool is ALGO
        pooledAssets = [{'asset-id': 0, 'amount': assetParams.amount}, ...pooledAssets];
    }

    let poolInfo;
    try {
        poolInfo = await getPoolInfo(pooledAssets[0]['asset-id'], pooledAssets[1]['asset-id']);
    } catch (err) {
        console.error('POOL INFO ERROR', err); 
        console.log('Falling back to fetching balances from Algoexplorer (this might lead to wrong prices!)');
        poolInfo = {
            name: assetParams.name,
            asset1_reserve: pooledAssets[0].amount / 10**pooledAssets[0].decimals,
            asset2_reserve: pooledAssets[1].amount / 10**pooledAssets[0].decimals,
            total_lp_tokens: 10000.0, // TODO: could be done "better" but its useless anyway
        }
    }

    const name = poolInfo.name;
    const decimals = assetParams.decimals;
    const fstAssetId = pooledAssets[0]['asset-id'];
   
    // TODO: all of this should NOT be repeated for every fucking token
    const algoRate = await getCoinRate('ALGOUSDT');
    const algoPrice = Number(algoRate.price);

    let fstAssetPrice;
    if (fstAssetId === 0) {
        fstAssetPrice = algoPrice;
    } else {
        let priceInAlgo;
        
        // TODO: this is bullshit, can we do it RIGHT?
        try {
            // TODO: how many users the backend will actually survive if we use it like this?
            priceInAlgo = (await getSwapCost(fstAssetId, 0, 1)).price_per_token;
        } catch (err) {
            console.error('PRICE GETTIN ERROR', err);
            priceInAlgo = 0.01; // because fuck you that's why
        }
        fstAssetPrice = algoPrice * priceInAlgo;
    }

    const price = poolInfo.asset1_reserve * fstAssetPrice / poolInfo.total_lp_tokens;
    return { name, price, decimals }
}