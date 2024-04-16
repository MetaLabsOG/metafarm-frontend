import { Map } from 'immutable';
import { createEffect, createEvent, createStore, sample, combine, split, Store, restore } from 'effector';
import { getAllAssets } from '../../providers/flexApiProvider';
import { $accountInfo } from './account';
import { Asset, AssetId, Amount, Priced } from './types';
import { nonConcurrent } from './utils';

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

export const fetchAsset = async (assetId: AssetId): Promise<Asset> => {
    // eslint-disable-next-line effector/no-getState
    const assets = $assets.getState();
    const saved = assets.get(assetId, null);
    if (saved) return saved;
    throw new Error(`Asset with id ${assetId} not found`);
};

export const $assets = createStore(Map<AssetId, Asset>().set(0, ALGO_ASSET)).on(
    allAssetsLoaded,
    (assets, newAssets) => {
        if (newAssets.length === 0) {
            return assets; // Return the current state if no new assets are loaded
        }
        return newAssets.reduce((acc, asset) => acc.set(asset.id, asset), assets);
    }
);
