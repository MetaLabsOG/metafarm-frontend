import algosdk from 'algosdk';

import { AlammexClient } from '.store/alammex-sdk-js-npm-1.0.6-39f19f56f2/package';
import type { Provider, ReachStdlib } from './types';
import { loadStdlibShimmed, makeProviderByEnv } from './reachRedefinitions';

export type NetworkName = 'TestNet' | 'MainNet';

export const reach: ReachStdlib = loadStdlibShimmed(process.env);
export const reachDefaultProvider: Provider = makeProviderByEnv(process.env);

export const algod: algosdk.Algodv2 = reachDefaultProvider.algodClient;
export const { indexer } = reachDefaultProvider;

export const METAWALLET = 'METAWEJ6MAPBIZBKZBX2RTGVEG4SFTB5BRJRKL3UYVXA6TT5YVWUAXV6PU';

export const TESTNET: NetworkName = 'TestNet';
export const MAINNET: NetworkName = 'MainNet';

export const ALGONET: NetworkName = (process.env.ALGO_NETWORK as NetworkName) || TESTNET;
console.log(ALGONET);

const META_TOKEN_IDS = {
    TestNet: 85951079,
    MainNet: 712012773,
};

const USDC_TOKEN_IDS = {
    TestNet: 10458941,
    MainNet: 31566704,
};

const USDT_TOKEN_IDS = {
    TestNet: 94115664,
    MainNet: 312769,
};

const GOBTC_TOKEN_IDS = {
    TestNet: 19386116,
    MainNet: 386192725,
};

export const GOBTC_TOKEN_ID = GOBTC_TOKEN_IDS[ALGONET];
export const META_TOKEN_ID = META_TOKEN_IDS[ALGONET];
export const USDC_TOKEN_ID = USDC_TOKEN_IDS[ALGONET];
export const USDT_TOKEN_ID = USDT_TOKEN_IDS[ALGONET];

export const IS_MOBILE = window.innerWidth <= 768;
console.log('Is mobile:', IS_MOBILE);

export const FOMO_APP_ID = process.env.REACT_APP_FOMO_ID;
export const FARM_BENEFICIARY_ADDR = process.env.REACT_APP_BENEFICIARY_ADDR;
export const FARM_CREATION_FEE = process.env.REACT_APP_FARM_CREATION_FEE;
export const FARM_FLAT_ALGO_CREATION_FEE = process.env.REACT_APP_FARM_FLAT_ALGO_CREATION_FEE;

const ALAMMEX_API_KEY = '9a1c1fe8-b49a-4d18-b393-4777e557ff74';
export const alammexClient =
    ALGONET === TESTNET
        ? AlammexClient.fetchTestnetClient(process.env.ALGO_SERVER, process.env.ALGO_TOKEN, '', ALAMMEX_API_KEY)
        : AlammexClient.fetchMainnetClient(process.env.ALGO_SERVER, process.env.ALGO_TOKEN, '', ALAMMEX_API_KEY);
