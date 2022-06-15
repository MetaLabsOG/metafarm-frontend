import algosdk from 'algosdk';

import type { Provider, ReachStdlib } from './types';
import { loadStdlibShimmed, makeProviderByEnv } from './reachRedefinitions';

export type NetworkName = 'TestNet' | 'MainNet';

export const reach: ReachStdlib = loadStdlibShimmed(process.env);
export const reachDefaultProvider: Provider = makeProviderByEnv(process.env);

export const algod: algosdk.Algodv2 = reachDefaultProvider.algodClient;
export const indexer: algosdk.Indexer = reachDefaultProvider.indexer;

export const METAWALLET = 'METAWEJ6MAPBIZBKZBX2RTGVEG4SFTB5BRJRKL3UYVXA6TT5YVWUAXV6PU';

export const TESTNET: NetworkName = 'TestNet';
export const MAINNET: NetworkName = 'MainNet';

export const ALGONET: NetworkName = (process.env.ALGO_NETWORK as NetworkName) || TESTNET;
console.log(ALGONET);

const META_TOKEN_IDS = {
    TestNet: 85951079,
    MainNet: 712012773,
};

export const META_TOKEN_ID = META_TOKEN_IDS[ALGONET];

export const IS_MOBILE = window.innerWidth <= 768;
console.log('Is mobile:', IS_MOBILE);

export const FOMO_APP_ID = process.env.REACT_APP_FOMO_ID;
