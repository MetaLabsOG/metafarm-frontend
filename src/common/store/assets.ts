import { Map } from 'immutable';
import {
    createEffect,
    createEvent,
    createStore,
    sample,
    combine,
    merge,
    split,
    forward,
    Store,
    restore,
} from 'effector';
import { algod, ALGONET, MAINNET } from '../../AppContext';
import { $accountInfo } from './account';
import { Asset, AssetId, Amount, Priced } from './types';
import { waitForEvent, assetId } from './utils';
import { getBinanceCoinPrice } from '../../providers/binanceProvider';
import { makeClock } from './time';

// Main event to add the asset, adds it to all of the relevant stores
export const registerAsset = createEvent<AssetId>();

// =================================================================
// Balances store which watches updates in accountInfo
// =================================================================
function getBalancesFromAccountInfo(accountInfo: any): Record<AssetId, Amount> {
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

$balances.watch((bs) => {}); //console.log('BALANCES', bs));

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

const fetchAssetFx = createEffect(async (id: AssetId): Promise<Asset> => {
    const { params } = await algod.getAssetByID(id).do();
    const { name, creator, decimals } = params;

    return {
        id,
        name,
        unitName: params['unit-name'],
        creator,
        decimals,
    };
});

export const assetLoaded = fetchAssetFx.doneData;
export const $assets = createStore(Map<AssetId, Asset>().set(0, ALGO_ASSET)).on(assetLoaded, (assets, a) =>
    assets.set(a.id, a)
);

$assets.watch((assets) => {}); //console.log('ASSETS', assets.toJS()));

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

const assetResolved = merge([assetFoundInStore, assetLoaded]);

// fetch asset info from algod on asset registration
forward({
    from: registerAsset,
    to: queryAsset,
});

/**
 * Queries the asset by ID and returns without fetching it from algod if it's already in the store.
 *
 * @param assetId
 * @returns Promise with asset
 */
export const fetchAsset = async (id: AssetId): Promise<Asset> => {
    const filter = (a: AssetId | Asset) => assetId(a) === id;
    queryAsset(id);
    return waitForEvent(assetResolved, fetchAssetFx.fail, filter, filter);
};

// =================================================================
// ALGO price fetching
// (token prices are in separate file to avoid circular import to/from dexesProvider)
// =================================================================
export const fetchAlgoPrice = createEffect(() => getBinanceCoinPrice('ALGOUSDT'));
export const fetchBtcPrice = createEffect(() => getBinanceCoinPrice('BTCUSDT'));

export const $algoUsdPrice = restore(fetchAlgoPrice.doneData, null);
export const $btcUsdPrice = restore(fetchBtcPrice.doneData, null);

// re-fetch prices once in say, 1 minute
makeClock(60000).watch(() => {
    console.log('prices refetching');
    fetchAlgoPrice();
    fetchBtcPrice();
});

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
