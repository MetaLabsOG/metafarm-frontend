import algosdk from 'algosdk';
import { getSwapCost } from './apiProvider';
import { getCoinRate } from './binanceProvider';

import { getAssetInfo, getWalletInfo } from './algoExploerProvider';
import { ALGONET, TESTNET } from '../AppContext';

// const prefix = ALGONET === TESTNET ? 'testnet.' : '';
// const ALGOEXPLORER_URI = `https://indexer.${prefix}algoexplorerapi.io/`;

// export const algod = new algosdk.Algodv2('', ALGOEXPLORER_URI, '');

export type DexProvider =
    | 'T2' // Tinyman v1.1
    | 'PT'; // Pact

export type PoolInfo = {
    asset1: number;
    asset2: number;
    asset1Reserve: number;
    asset2Reserve: number;
    totalLiquidity: number;
};

export type LPTokenInfo = {
    name: string;
    price: number;
    decimals: number;
};

async function getPactPoolInfo(poolAddress: string): Promise<PoolInfo> {
    throw new Error('not implemented');
}

async function getTinymanPoolInfo(poolAddress: string): Promise<PoolInfo> {
    // const accountInfo = await algod.accountInformation(poolAddress).do();
    const accountInfo = await getWalletInfo(poolAddress);
    console.log(accountInfo);

    let appState: any;
    try {
        appState = accountInfo['apps-local-state'][0]['key-value'].reduce((acc: any, { key, value }: any) => {
            const newKey = Buffer.from(key, 'base64').toString();
            const newVal = value.type === 2 ? value.uint : value.bytes;
            return { [newKey]: newVal, ...acc };
        }, {});
    } catch (err) {
        console.error('ERROR: not a tinyman pool!', poolAddress, err);
        appState = {
            a1: 0,
            a2: 10000,
            s1: 100000000,
            s2: 200000000,
            ilt: 100000000,
        }
    }

    let { a1, a2, s1, s2, ilt } = appState;
    if (a1 > a2) {
        [a1, a2] = [a2, a1];
        [s1, s2] = [s2, s1];
    }

    return {
        asset1: a1,
        asset2: a2,
        asset1Reserve: s1,
        asset2Reserve: s2,
        totalLiquidity: ilt,
    };
}

export async function getLPTokenInfo(assetId: number, provider: DexProvider = 'T2'): Promise<LPTokenInfo> {
    // const asset = await algod.getAssetByID(assetId).do();
    const asset = await getAssetInfo(assetId);
    const { name, creator, decimals } = asset.params;
    const poolInfo = await (provider === 'PT' ? getPactPoolInfo(creator) : getTinymanPoolInfo(creator));

    // TODO: all of this should NOT be repeated for every fucking token
    const algoRate = await getCoinRate('ALGOUSDT');
    const algoPrice = Number(algoRate.price);

    let fstAssetPrice;
    if (poolInfo.asset1 === 0) {
        fstAssetPrice = algoPrice;
    } else {
        let priceInAlgo;

        // TODO: this is bullshit, can we do it RIGHT?
        try {
            // TODO: how many users the backend will actually survive if we use it like this?
            priceInAlgo = (await getSwapCost(poolInfo.asset1, 0, 1)).price_per_token;
        } catch (err) {
            console.error('PRICE GETTIN ERROR', err);
            priceInAlgo = 0.01; // because fuck you that's why
        }
        fstAssetPrice = algoPrice * priceInAlgo;
    }

    const price = (poolInfo.asset1Reserve * fstAssetPrice) / poolInfo.totalLiquidity;
    return { name, price, decimals };

    // const assetParams = (await getAssetInfo(assetId)).params;
    // const assetCreator = await getWalletInfo(assetParams.creator);
    // console.log(assetCreator);

    // let pooledAssets = assetCreator.assets.filter((asset: any) => asset['asset-id'] !== assetId);
    // if (pooledAssets.length < 2) {
    //     // this means that one of the assets in the pool is ALGO
    //     pooledAssets = [{'asset-id': 0, 'amount': assetParams.amount}, ...pooledAssets];
    // }

    // let poolInfo;
    // try {
    //     poolInfo = await getPoolInfo(pooledAssets[0]['asset-id'], pooledAssets[1]['asset-id']);
    // } catch (err) {
    //     console.error('POOL INFO ERROR', err);
    //     console.log('Falling back to fetching balances from Algoexplorer (this might lead to wrong prices!)');
    //     poolInfo = {
    //         name: assetParams.name,
    //         asset1_reserve: pooledAssets[0].amount / 10**pooledAssets[0].decimals,
    //         asset2_reserve: pooledAssets[1].amount / 10**pooledAssets[0].decimals,
    //         total_lp_tokens: 10000.0, // TODO: could be done "better" but its useless anyway
    //     }
    // }

    // const name = poolInfo.name;
    // const decimals = assetParams.decimals;
    // const fstAssetId = pooledAssets[0]['asset-id'];

    // // TODO: all of this should NOT be repeated for every fucking token
    // const algoRate = await getCoinRate('ALGOUSDT');
    // const algoPrice = Number(algoRate.price);

    // let fstAssetPrice;
    // if (fstAssetId === 0) {
    //     fstAssetPrice = algoPrice;
    // } else {
    //     let priceInAlgo;

    //     // TODO: this is bullshit, can we do it RIGHT?
    //     try {
    //         // TODO: how many users the backend will actually survive if we use it like this?
    //         priceInAlgo = (await getSwapCost(fstAssetId, 0, 1)).price_per_token;
    //     } catch (err) {
    //         console.error('PRICE GETTIN ERROR', err);
    //         priceInAlgo = 0.01; // because fuck you that's why
    //     }
    //     fstAssetPrice = algoPrice * priceInAlgo;
    // }

    // const price = poolInfo.asset1_reserve * fstAssetPrice / poolInfo.total_lp_tokens;
    // return { name, price, decimals }
}
