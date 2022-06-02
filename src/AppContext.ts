import { loadStdlib } from '@reach-sh/stdlib';
import algosdk from 'algosdk';

import { ReachStdlib } from './types';

export type NetworkName = 'TestNet' | 'MainNet';

export const reach: ReachStdlib = loadStdlib(process.env as any);
export const algod = new algosdk.Algodv2(process.env.ALGO_TOKEN!, process.env.ALGO_SERVER, process.env.ALGO_PORT);
export const indexer = new algosdk.Indexer(process.env.ALGO_INDEXER_TOKEN!, process.env.ALGO_INDEXER_SERVER, process.env.ALGO_INDEXER_PORT);

export const METAWALLET = 'METAWEJ6MAPBIZBKZBX2RTGVEG4SFTB5BRJRKL3UYVXA6TT5YVWUAXV6PU';

export const TESTNET: NetworkName = 'TestNet';
export const MAINNET: NetworkName = 'MainNet';

export const ALGONET: NetworkName = (process.env.ALGO_NETWORK as NetworkName) || TESTNET;

const META_TOKEN_IDS = {
    TestNet: 85951079,
    MainNet: 712012773,
};

export const META_TOKEN_ID = META_TOKEN_IDS[ALGONET];

export const IS_MOBILE = window.innerWidth <= 768;
console.log('Is mobile:', IS_MOBILE);

export const FOMO_APP_ID = process.env.REACT_APP_FOMO_ID;
