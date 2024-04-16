import { createStore, createEffect, combine, Store } from 'effector';

import { Map } from 'immutable';
import { AssetPriceInfo, getAllPrices } from '../../providers/flexApiProvider';
import { $assets, ALGO_ASSET } from './assets';
import { Asset, AssetId, Priced } from './types';
import { nonConcurrent } from './utils';

export const fetchAllPricesFx = createEffect(
    nonConcurrent(async (): Promise<AssetPriceInfo[]> => {
        try {
            const prices = await getAllPrices();
            return prices;
        } catch (error) {
            return [];
        }
    })
);

export const $assetPrices = createStore(Map<AssetId, AssetPriceInfo>()).on(
    fetchAllPricesFx.doneData,
    (prices, newPrices) => {
        return newPrices.reduce((acc, price) => acc.set(price.asset_id, price), prices);
    }
);

export const $pricedAssets: Store<Map<AssetId, Priced<Asset>>> = combine($assets, $assetPrices, (assets, prices) => {
    return assets.map((asset) => {
        const price = prices.get(asset.id);
        if (!price) {
            return {
                ...asset,
                price: 0,
                priceInAlgo: 0,
            };
        }
        return {
            ...asset,
            price: price.price_usd,
            priceInAlgo: price.price_algo,
        };
    });
});

export const $pricedAlgo: Store<Priced<Asset> | null> = combine(
    $assets.map((as) => as.get(0, ALGO_ASSET)),
    $assetPrices.map((prices) => prices.get(0)),
    (algoAsset, algoPrice) => {
        if (algoPrice) {
            return { ...algoAsset, price: algoPrice.price_usd, priceInAlgo: 1 };
        }
        return null;
    }
);
