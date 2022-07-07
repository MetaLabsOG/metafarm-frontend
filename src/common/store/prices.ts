import { createStore, createEffect, createEvent, forward, combine, sample, Store } from 'effector';

import { $assets, assetLoaded, ALGO_ASSET, $pricedAlgo, registerAsset } from './assets';
import { getSwapCostSomewhere } from '../../providers/dexesProvider';
import { Map } from 'immutable';
import { Asset, AssetId, Priced } from './types';
import { META_TOKEN_ID } from '../../AppContext';

export const fetchAssetPrice = createEffect(async (asset: Asset): Promise<number> => {
    const swapQuote = await getSwapCostSomewhere(asset, ALGO_ASSET, BigInt(10 ** asset.decimals));
    return swapQuote.price;
});

export const $assetAlgoPrices = createStore(Map<AssetId, number>()).on(
    fetchAssetPrice.done,
    (prices, { params, result }) => prices.set(params.id, result)
);

// bool flags needed to not fetch swap prices of LP tokens for example
export const requireAssetPrice = createEvent<AssetId>();
export const $assetIsPriced = createStore(Map<AssetId, boolean>()).on(requireAssetPrice, (as, id) => as.set(id, true));

export const registerPricedAsset = createEvent<AssetId>();
forward({
    from: registerPricedAsset,
    to: [registerAsset, requireAssetPrice],
});

registerPricedAsset(META_TOKEN_ID);

// automatically fetch necessary assets prices when info about them is getting loaded first time
sample({
    clock: assetLoaded,
    source: $assetIsPriced,
    filter: (pricedFlags, asset) => pricedFlags.get(asset.id, false),
    fn: (_, asset) => asset,
    target: fetchAssetPrice,
});

$assetAlgoPrices.watch((v) => {}); //console.log('ASSET PRICES', v));
assetLoaded.watch((v) => {}); //console.log('ASSET LOADED', v));
fetchAssetPrice.watch((v) => {}); //console.log('FETCHING ASSET PRICE', v));

fetchAssetPrice.fail.watch((v) => console.log('ASSET PRICE FETCHING FAILED', v));

export const $pricedAssets: Store<Map<AssetId, Priced<Asset>>> = combine(
    $pricedAlgo,
    $assetAlgoPrices,
    $assets,
    (pricedAlgo: Priced<Asset> | null, assetAlgoPrices: Map<AssetId, number>, assets: Map<AssetId, Asset>) => {
        if (pricedAlgo === null) {
            return Map<AssetId, Priced<Asset>>(); // empty map, because cannot price anything without algo price
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

$pricedAssets.watch((v) => {}); //console.log('PRICED ASSETS', v.toJS()));
