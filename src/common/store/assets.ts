import { Map } from 'immutable';
import { createEffect, createEvent, createStore, sample, combine, split, Store, restore } from 'effector';
import { USDT_TOKEN_ID } from '../../AppContext';
import { getAlgoRateFromVestige } from '../../providers/coinPriceProvider';
import { pactDex } from '../../dexes';
import { getAllAssets, getAsset } from '../../providers/flexApiProvider';
import { $accountInfo } from './account';
import { Asset, AssetId, Amount, Priced } from './types';
import { nonConcurrent } from './utils';
import { doEachTick } from './time';

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

export async function fetchAllAssets(): Promise<Asset[]> {
    console.log('\nfetching all assets\n');
    const assetDetails = await getAllAssets();
    console.log('assetDetails:', assetDetails);

    return assetDetails.map((asset) => ({
        id: asset.id,
        name: asset.name,
        unitName: asset.unit_name,
        creator: asset.creator,
        reserve: asset.reserve,
        decimals: asset.decimals,
    }));
}

export const fetchAllAssetsFx = createEffect(
    nonConcurrent(async (): Promise<Asset[]> => {
        console.log('Inside fetchAllAssetsFx');
        try {
            const assets = await fetchAllAssets();
            console.log('Assets fetched:', assets);
            return assets;
        } catch (error) {
            console.error('Failed to fetch assets:', error);
            return []; // Return an empty array in case of failure
        }
    })
);
export const allAssetsLoaded = fetchAllAssetsFx.doneData;

// Re-fetch prices once in say, 1 minute
void doEachTick(1_000, fetchAllAssetsFx);

export const fetchAsset = async (assetId: AssetId): Promise<Asset> => {
    console.log('fetching asset with id:', assetId);
    // eslint-disable-next-line effector/no-getState
    const assets = $assets.getState();
    const saved = assets.get(assetId, null);
    if (saved) return saved;
    // TODO: use getAsset() from API
    throw new Error(`Asset with id ${assetId} not found`);
};
export const fetchAssetFx = createEffect(
    nonConcurrent(async (id: AssetId): Promise<Asset> => {
        console.log('Inside fetchAsssetFx');
        try {
            const asset = await getAsset(id);
            console.log('Asset fetched:', asset);
            return {
                id: asset.id,
                name: asset.name,
                unitName: asset.unit_name,
                creator: asset.creator,
                reserve: asset.reserve,
                decimals: asset.decimals,
            };
        } catch (error) {
            console.error('Failed to fetch assets:', error);
            throw error;
        }
    })
);
export const assetLoaded = fetchAssetFx.doneData;

export const $assets = createStore(Map<AssetId, Asset>().set(0, ALGO_ASSET)).on(
    allAssetsLoaded,
    (assets, newAssets) => {
        console.log('Inside $assets.on(allAssetsLoaded)', newAssets);
        if (newAssets.length === 0) {
            return assets; // Return the current state if no new assets are loaded
        }
        return newAssets.reduce((acc, asset) => acc.set(asset.id, asset), assets);
    }
);

// =================================================================
// ALGO price fetching
// (token prices are in separate file to avoid circular import to/from dexesProvider)
// =================================================================
export const fetchAlgoPriceFx = createEffect(
    nonConcurrent(async () => {
        try {
            const rate = await getAlgoRateFromVestige();
            if (!rate) {
                throw new Error(`Failed to fetch ALGO price from Vestige`);
            }

            return Number(rate.price);
        } catch (error) {
            console.warn('Failed to get price from Vestige, piggybacking on Pact. Error was:', error);
            const ALGO = 0;
            const pool = await pactDex.getMostLiquidPool(ALGO, USDT_TOKEN_ID);

            return pool.calculator.primaryAssetPrice;
        }
    })
);

export const $algoUsdPrice = restore(fetchAlgoPriceFx.doneData, null);

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

// Re-fetch prices once in say, 1 minute
void doEachTick(60_000, fetchAllPricesFx);

// Re-fetch $ALGO price once in say, 1 second
void doEachTick(1_000, fetchAlgoPriceFx);

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
