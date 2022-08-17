import { Algodv2 } from 'algosdk';
import { TealKeyValue } from 'algosdk/dist/types/src/client/v2/algod/models/types';
import { algod } from '../AppContext';
import { Amount, AssetId } from '../common/store';

// TODO Amount (bigint) nad number may be mixed here. It works somehow but types are
// not always correct for now

// TODO algosdk actually HAS [at least some] types in algosdk/dist/types/src/client/v2/algod/models/types
// but they are camelCase instead of kebab-case.

export type AssetHolding = {
    'asset-id': AssetId;
    amount: Amount;
    'is-frozen': boolean;
};

export type AlgodApplicationLocalState = {
    id: number;
    'key-value': TealKeyValue;
};

export type AlgodAccountInfo = {
    address: string;
    amount: Amount;
    assets: AssetHolding[];
    'apps-local-state': AlgodApplicationLocalState[];
};

export async function getAccountInformation(addr: string, _algod = algod) {
    return _algod.accountInformation(addr).do() as Promise<AlgodAccountInfo>;
}

export type AssetParams = {
    name: string;
    'unit-name': string;
    creator: string;
    decimals: number;
};

export type AlgodAsset = {
    index: number;
    params: AssetParams;
};

export async function getAssetByID(id: AssetId) {
    return algod.getAssetByID(id).do() as Promise<AlgodAsset>;
}
