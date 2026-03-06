import { createStore, createEffect, createEvent, combine, sample, Store } from 'effector';

import { Map } from 'immutable';
import { META_TOKEN_ID } from '../../AppContext';
import { $assets, assetLoaded, assetAvailable, ALGO_ASSET, $pricedAlgo, registerAsset } from './assets';
import { Asset, AssetId, Priced } from './types';
import { nonConcurrent } from './utils';
import { getAssetPriceInAlgo } from '../../providers/tinymanPriceProvider';
import { cachePrice, getCachedPrice } from '../priceCache';

export const fetchAssetPriceFx = createEffect(
    nonConcurrent(async (asset: Asset): Promise<number> => {
        if (asset.id === 0) {
            return 1;
        }

        try {
            // Try to get price from cache first
            const cachedPrice = getCachedPrice(asset.id);
            if (cachedPrice) {
                console.log(`Using cached price for asset ${asset.id}: ${cachedPrice.priceInAlgo.price}`);
                return cachedPrice.priceInAlgo.price;
            }

            // If not in cache, fetch from Tinyman or Vestige
            const priceInAlgo = await getAssetPriceInAlgo(asset);

            if (priceInAlgo !== null) {
                // Cache the price
                cachePrice(asset.id, priceInAlgo);
                return priceInAlgo;
            }

            console.error(`Failed to fetch price for asset ${asset.id} from all sources`);
            return 0;
        } catch (e) {
            console.error('Failed to fetch price for asset', asset, e);
            return 0;
        }
    })
);

// Pre-populate prices from enriched endpoint (avoids per-asset Vestige calls)
export const prePopulateAssetPrices = createEvent<Array<{ id: AssetId; priceInAlgo: number }>>();

export const $assetAlgoPrices = createStore(Map<AssetId, number>())
    .on(fetchAssetPriceFx.done, (prices, { params, result }) => prices.set(params.id, result))
    .on(prePopulateAssetPrices, (prices, batch) => {
        let updated = prices;
        for (const { id, priceInAlgo } of batch) {
            if (!updated.has(id)) {
                updated = updated.set(id, priceInAlgo);
            }
        }
        return updated;
    });

// Bool flags needed to not fetch swap prices of LP tokens for example
export const requireAssetPrice = createEvent<AssetId>();
export const $assetIsPriced = createStore(Map<AssetId, boolean>()).on(requireAssetPrice, (as, id) => as.set(id, true));

export const registerPricedAsset = createEvent<AssetId>();
sample({
    clock: registerPricedAsset,
    target: [registerAsset, requireAssetPrice],
});

registerPricedAsset(META_TOKEN_ID);

// Automatically fetch necessary assets prices when asset becomes available (fetched or found in store)
sample({
    clock: assetAvailable,
    source: { pricedFlags: $assetIsPriced, existingPrices: $assetAlgoPrices },
    filter: ({ pricedFlags, existingPrices }, asset) =>
        pricedFlags.get(asset.id, false) && !existingPrices.has(asset.id),
    fn: (_, asset) => asset,
    target: fetchAssetPriceFx,
});

fetchAssetPriceFx.fail.watch((v) => {
    console.log('ASSET PRICE FETCHING FAILED', v);
});

export const $pricedAssets: Store<Map<AssetId, Priced<Asset>>> = combine(
    $pricedAlgo,
    $assetAlgoPrices,
    $assets,
    (pricedAlgo: Priced<Asset> | null, assetAlgoPrices: Map<AssetId, number>, assets: Map<AssetId, Asset>) => {
        if (pricedAlgo === null) {
            return Map<AssetId, Priced<Asset>>(); // Empty map, because cannot price anything without algo price
        }

        return assetAlgoPrices
            .filter((_, assetId) => assets.has(assetId))
            .map((priceInAlgo, assetId) => {
                const asset = assets.get(assetId)!;
                const price = priceInAlgo * pricedAlgo.price;
                return { ...asset, priceInAlgo, price };
            })
            .set(0, pricedAlgo);
    }
);
