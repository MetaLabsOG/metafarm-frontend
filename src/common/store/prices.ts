import { createStore, createEffect, createEvent, combine, sample, Store } from 'effector';

import { Map } from 'immutable';
import { META_TOKEN_ID } from '../../AppContext';
import { $assets, assetLoaded, assetAvailable, ALGO_ASSET, $pricedAlgo, registerAsset } from './assets';
import { Asset, AssetId, Priced } from './types';
import { nonConcurrent } from './utils';
import { getAssetPriceInAlgo } from '../../providers/tinymanPriceProvider';
import { cachePrice, getCachedPrice } from '../priceCache';
import { doEachTick } from './time';

// Sentinel value: fetchAssetPriceFx returns -1 when price fetch fails.
// This is distinct from 0 (legitimate zero price) and prevents storing
// failed fetches as real prices in $assetAlgoPrices.
const PRICE_FETCH_FAILED = -1;

export const fetchAssetPriceFx = createEffect(
    nonConcurrent(async (asset: Asset): Promise<number> => {
        if (asset.id === 0) {
            return 1;
        }

        try {
            // Try to get price from cache first
            const cachedPrice = getCachedPrice(asset.id);
            if (cachedPrice && cachedPrice.priceInAlgo.price > 0) {
                return cachedPrice.priceInAlgo.price;
            }

            // If not in cache, fetch from Vestige
            const priceInAlgo = await getAssetPriceInAlgo(asset);

            if (priceInAlgo !== null && priceInAlgo > 0) {
                cachePrice(asset.id, priceInAlgo);
                return priceInAlgo;
            }

            console.warn(`Price fetch returned ${priceInAlgo} for asset ${asset.id}`);
            return PRICE_FETCH_FAILED;
        } catch (e) {
            console.error('Failed to fetch price for asset', asset.id, e);
            return PRICE_FETCH_FAILED;
        }
    })
);

// Pre-populate prices from enriched endpoint (avoids per-asset Vestige calls)
export const prePopulateAssetPrices = createEvent<Array<{ id: AssetId; priceInAlgo: number }>>();

export const $assetAlgoPrices = createStore(Map<AssetId, number>())
    .on(fetchAssetPriceFx.done, (prices, { params, result }) => {
        // Don't store failed fetches — leave the slot empty so retry can pick it up
        if (result === PRICE_FETCH_FAILED) return prices;
        return prices.set(params.id, result);
    })
    .on(prePopulateAssetPrices, (prices, batch) => {
        let updated = prices;
        for (const { id, priceInAlgo } of batch) {
            const existing = updated.get(id);
            // Set if: no existing value, or existing is zero and new is non-zero
            // (allows recovery when backend LP pricing starts working)
            if (existing === undefined || (existing === 0 && priceInAlgo > 0)) {
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

fetchAssetPriceFx.fail.watch(({ error }) => {
    console.warn('Asset price fetch failed:', error);
});

// Periodic refresh: re-fetch prices for all registered priced assets every 3 minutes.
// This ensures prices stay fresh AND retries any that failed on initial load.
const refreshAllAssetPrices = createEffect(async () => {
    const pricedFlags = $assetIsPriced.getState();
    const existingPrices = $assetAlgoPrices.getState();
    const assets = $assets.getState();

    const assetsToRefresh: Asset[] = [];
    pricedFlags.forEach((isPriced, assetId) => {
        if (!isPriced || assetId === 0) return;
        // Re-fetch if: price is missing, or price cache TTL expired (3 min)
        const hasFreshPrice = existingPrices.has(assetId) && getCachedPrice(assetId) !== null;
        if (!hasFreshPrice) {
            const asset = assets.get(assetId);
            if (asset) assetsToRefresh.push(asset);
        }
    });

    // Fetch sequentially to avoid hammering Vestige
    for (const asset of assetsToRefresh) {
        try {
            await fetchAssetPriceFx(asset);
        } catch {
            // Individual failures are fine — next cycle will retry
        }
    }
});

void doEachTick(3 * 60 * 1000, refreshAllAssetPrices);

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
