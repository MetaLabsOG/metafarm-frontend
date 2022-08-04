import { Map } from 'immutable';
import { createEffect, createEvent, createStore, sample, combine, split, Store, restore } from 'effector';
import { algod } from '../../AppContext';
import { $accountInfo } from './account';
import { Asset, AssetId, Amount, Priced } from './types';
import { nonConcurrent, fetchStore } from './utils';
import { getBinanceCoinPrice } from '../../providers/binanceProvider';
import { doEachTick } from './time';

// Main event to add the asset, adds it to all of the relevant stores
export const registerAsset = createEvent<AssetId>();

// =================================================================
// Balances store which watches updates in accountInfo
// =================================================================
function getBalancesFromAccountInfo(accountInfo: Record<string, any> | null): Record<AssetId, Amount> {
    if (accountInfo === null) {
        return {};
    }

    const accAssets = accountInfo.assets || [];
    return accAssets.reduce(
        (balances: Record<AssetId, Amount>, asset: any) => {
            balances[asset['asset-id']] = asset['amount'];
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
    decimals: 6,
};

const fetchAssetFx = createEffect(
    nonConcurrent(async (id: AssetId): Promise<Asset> => {
        const { params } = await algod.getAssetByID(id).do();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { name, creator, decimals } = params;
        const unit_name = params['unit-name'];

        return {
            id,
            name: name as string,
            unitName: unit_name as string,
            creator: creator as string,
            decimals: decimals as number,
        } as Asset;
    })
);

export const assetLoaded = fetchAssetFx.doneData;
export const $assets = createStore(Map<AssetId, Asset>().set(0, ALGO_ASSET)).on(assetLoaded, (assets, a) =>
    assets.set(a.id, a)
);

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

// fetch asset info from algod on asset registration
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
    const saved = await fetchStore($assets.map((assets) => assets.get(id, null)));
    if (saved) return saved;
    else return await fetchAssetFx(id);
};

// =================================================================
// ALGO price fetching
// (token prices are in separate file to avoid circular import to/from dexesProvider)
// =================================================================
export const fetchAlgoPriceFx = createEffect(nonConcurrent(() => getBinanceCoinPrice('ALGOUSDT')));

export const $algoUsdPrice = restore(fetchAlgoPriceFx.doneData, null);

export const fetchAllPricesFx = createEffect(async () => {
    console.log('fetching prices...');
    return fetchAlgoPriceFx()
        .then(() => console.log('prices fetched'))
        .catch(() => {
            console.log('failed to fetch');
        });
});

// re-fetch prices once in say, 1 minute
void doEachTick(60000, fetchAllPricesFx);

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
