import { createStore, createEffect, createEvent, combine, sample, Store } from 'effector';

import { Map } from 'immutable';
import { getSwapCostSomewhere } from '../../dexes';
import { BDNRI_TOKEN_ID, META_TOKEN_ID } from '../../AppContext';
import { SLIPPAGE } from '../../Swap/Swap';
import { getAssetPrice } from '../../providers/apiProvider';
import { $assets, assetLoaded, ALGO_ASSET, $pricedAlgo, registerAsset } from './assets';
import { Asset, AssetId, Priced } from './types';
import { nonConcurrent } from './utils';

export const fetchAssetPriceFx = createEffect(
    nonConcurrent(async (asset: Asset): Promise<number> => {
        if (asset.id === 0) {
            return 1;
        }
        try {
            if (asset.id === BDNRI_TOKEN_ID) {
                const priceInfo = await getAssetPrice(asset.id);
                return priceInfo.price_algo;
            }
            const swapQuote = await getSwapCostSomewhere(asset, ALGO_ASSET, BigInt(10 ** asset.decimals), SLIPPAGE);
            return swapQuote.price;
        } catch (e) {
            console.error('Failed to fetch price for asset', asset, e);
            return 0;
        }
    })
);

export const $assetAlgoPrices = createStore(Map<AssetId, number>()).on(
    fetchAssetPriceFx.done,
    (prices, { params, result }) => prices.set(params.id, result)
);

// Bool flags needed to not fetch swap prices of LP tokens for example
export const requireAssetPrice = createEvent<AssetId>();
export const $assetIsPriced = createStore(Map<AssetId, boolean>()).on(requireAssetPrice, (as, id) => as.set(id, true));

export const registerPricedAsset = createEvent<AssetId>();
sample({
    clock: registerPricedAsset,
    target: [registerAsset, requireAssetPrice],
});

registerPricedAsset(META_TOKEN_ID);

// Automatically fetch necessary assets prices when info about them is getting loaded first time
sample({
    clock: assetLoaded,
    source: $assetIsPriced,
    filter: (pricedFlags, asset) => pricedFlags.get(asset.id, false),
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
            .map((priceInAlgo, assetId) => {
                const asset = assets.get(assetId);
                if (!asset) {
                    throw new Error(`impossible: having price ${priceInAlgo} for unfetched asset ${assetId}`);
                }

                const price = priceInAlgo * pricedAlgo.price;
                return { ...asset, priceInAlgo, price };
            })
            .set(0, pricedAlgo);
    }
);
