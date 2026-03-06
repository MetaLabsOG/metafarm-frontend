import { Map } from 'immutable';
import { createEffect, createEvent, createStore, sample, combine, split, Store, restore, merge } from 'effector';
import { algod, USDT_TOKEN_ID } from '../../AppContext';
import { getAlgoRateFromVestige } from '../../providers/coinPriceProvider';
import { pactDex } from '../../dexes';
import { $accountInfo } from './account';
import { Asset, AssetId, Amount, Priced } from './types';
import { nonConcurrent, fetchStore } from './utils';
import { doEachTick } from './time';
import { cachePrice, getCachedPrice } from '../priceCache';

// Main event to add the asset, adds it to all of the relevant stores
export const registerAsset = createEvent<AssetId>();

// =================================================================
// Balances store which watches updates in accountInfo
// =================================================================
export function getBalancesFromAccountInfo(accountInfo: Record<string, any> | null): Record<AssetId, Amount> {
    if (accountInfo === null) {
        return {};
    }

    const accAssets = accountInfo.assets || [];
    return accAssets.reduce(
        (balances: Record<AssetId, Amount>, asset: any) => {
            balances[asset['asset-id']] = asset.amount;
            return balances;
        },
        { 0: accountInfo.amount }
    );
}

export const $balances = $accountInfo.map(getBalancesFromAccountInfo);

// =================================================================
// Asset info store with one-time fetching from algod
// =================================================================
export const ALGO_ASSET: Asset = {
    id: 0,
    name: 'Algo',
    unitName: 'ALGO',
    creator: '',
    reserve: '',
    decimals: 6,
};

// Concurrency limiter: max 5 parallel algod requests to avoid 429 rate limits
const ALGOD_MAX_CONCURRENT = 5;
let _algodInFlight = 0;
const _algodQueue: Array<() => void> = [];

async function withAlgodConcurrency<T>(fn: () => Promise<T>): Promise<T> {
    if (_algodInFlight >= ALGOD_MAX_CONCURRENT) {
        await new Promise<void>((resolve) => _algodQueue.push(resolve));
    }
    _algodInFlight++;
    try {
        return await fn();
    } finally {
        _algodInFlight--;
        if (_algodQueue.length > 0) {
            _algodQueue.shift()!();
        }
    }
}

const fetchAssetFx = createEffect(
    nonConcurrent(async (id: AssetId): Promise<Asset> => {
        const savedAssetString = localStorage.getItem(`asset_${id}`);
        if (savedAssetString) {
            return JSON.parse(savedAssetString) as Asset;
        }
        const { params } = await withAlgodConcurrency(() => algod.getAssetByID(id).do());
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { creator, reserve, decimals } = params;

        const name = params['name'] ?? Buffer.from(params['name-b64'], 'base64').toString();
        const unit_name = params['unit-name'] ?? Buffer.from(params['unit-name-b64'], 'base64').toString();

        const asset: Asset = {
            id,
            name: name as string,
            unitName: unit_name as string,
            creator: creator as string,
            reserve: reserve as string,
            decimals: decimals as number,
        };

        // Save the fetched asset to local storage
        localStorage.setItem(`asset_${id}`, JSON.stringify(asset));

        return asset;
    })
);

export const assetLoaded = fetchAssetFx.doneData;

// Unified event: fires when asset becomes available (fetched from algod OR found in store)
// Use this instead of assetLoaded when you need to react to asset availability regardless of source
export const assetAvailable = createEvent<Asset>();

const loadAssetsFromLocalStorage = (): Map<AssetId, Asset> => {
    let assets = Map<AssetId, Asset>();
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('asset_')) {
                const assetString = localStorage.getItem(key);
                if (assetString) {
                    const asset = JSON.parse(assetString) as Asset;
                    assets = assets.set(asset.id, asset);
                }
            }
        }
    } catch (e) {
        console.warn('Failed to load assets from localStorage:', e);
    }
    return assets;
};

// Pre-populate assets from enriched endpoint (avoids per-asset algod calls)
export const prePopulateAssets = createEvent<Asset[]>();

export const $assets = createStore(loadAssetsFromLocalStorage().set(0, ALGO_ASSET))
    .on(assetLoaded, (assets, a) => assets.set(a.id, a))
    .on(prePopulateAssets, (assets, batch) => {
        let updated = assets;
        for (const asset of batch) {
            if (!updated.has(asset.id)) {
                updated = updated.set(asset.id, asset);
                try {
                    localStorage.setItem(`asset_${asset.id}`, JSON.stringify(asset));
                } catch { /* localStorage quota exceeded — asset is still in memory */ }
            }
        }
        return updated;
    });

const queryAsset = createEvent<AssetId>();
const assetFoundInStore = createEvent<Asset>();
const storeFetchAttempt = sample({ clock: queryAsset, source: $assets, fn: (assets, id) => assets.get(id) || id });

split({
    source: storeFetchAttempt,
    match: (a: Asset | AssetId) => (typeof a === 'number' ? 'fetch' : 'return'),
    cases: {
        fetch: fetchAssetFx,
        return: assetFoundInStore,
    },
});

// Wire both paths into assetAvailable
sample({ clock: assetLoaded, target: assetAvailable });
sample({ clock: assetFoundInStore, target: assetAvailable });

// Fetch asset info from algod on asset registration
sample({
    clock: registerAsset,
    target: queryAsset,
});

/**
 * Queries the asset by ID and returns without fetching it from algod if it's already in the store.
 *
 * @param assetId
 * @returns Promise with asset
 */
export const fetchAsset = async (id: AssetId): Promise<Asset> => {
    // Check if the asset is already in local storage
    const savedAssetString = localStorage.getItem(`asset_${id}`);
    if (savedAssetString) {
        return JSON.parse(savedAssetString) as Asset;
    }

    // If not found in local storage, fetch from the store or API
    const saved = await fetchStore($assets.map((assets) => assets.get(id, null)));
    if (saved) return saved;
    return fetchAssetFx(id);
};

// =================================================================
// ALGO price fetching
// (token prices are in separate file to avoid circular import to/from dexesProvider)
// =================================================================
export const fetchAlgoPriceFx = createEffect(
    nonConcurrent(async () => {
        try {
            // Try to get price from cache first
            const cachedPrice = getCachedPrice(0);
            if (cachedPrice && cachedPrice.priceInUsd) {
                console.log(`Using cached ALGO price: ${cachedPrice.priceInUsd.price}`);
                return cachedPrice.priceInUsd.price;
            }

            // If not in cache, fetch from Vestige
            const rate = await getAlgoRateFromVestige();
            if (rate !== null) {
                const price = Number(rate.price);
                // Cache the price
                cachePrice(0, 1, price);
                return price;
            } else {
                console.warn('Failed to fetch ALGO price from Vestige, returning default 0.24.');
                return 0.24; // Default value if rate is null
            }
        } catch (error) {
            // Catch any unexpected errors during the fetch or processing
            console.error('Unexpected error fetching ALGO price from Vestige:', error);
            return 0.24; // Default value on unexpected error
        }
    })
);

export const $algoUsdPrice = restore(fetchAlgoPriceFx.doneData, 0.24); // Initialize with default

export const fetchAllPricesFx = createEffect(async () => {
    //console.log('fetching prices...');
    return fetchAlgoPriceFx()
        .then(() => {
            // console.log('prices fetched');
        })
        .catch(() => {
            console.log('failed to fetch prices :(');
        });
});

// Re-fetch prices once every 3 minutes (same as cache TTL)
void doEachTick(3 * 60 * 1000, fetchAllPricesFx);

export const $pricedAlgo: Store<Priced<Asset> | null> = combine(
    $assets.map((as) => as.get(0, ALGO_ASSET)),
    $algoUsdPrice,
    (algoAsset, price) => {
        if (price !== null) {
            return { ...algoAsset, price, priceInAlgo: 1 };
        }
        return null;
    }
);
