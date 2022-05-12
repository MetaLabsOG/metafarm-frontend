import React from 'react';
import { Account, ReachStdlib } from './types';

import { loadStdlib } from '@reach-sh/stdlib';

export type Context = {
    account: Account;
    setAccount: (account: Account) => void;
};

export const AppContext = React.createContext<Context | {}>({});

export const reach: ReachStdlib = loadStdlib(process.env as any);

export const METAWALLET = 'METAWEJ6MAPBIZBKZBX2RTGVEG4SFTB5BRJRKL3UYVXA6TT5YVWUAXV6PU';

export const TESTNET = 'TestNet';
export const MAINNET = 'MainNet';

export const ALGONET = process.env.ALGO_NETWORK;

export const IS_MOBILE = window.innerWidth <= 768;
console.log('Is mobile:', IS_MOBILE);

export const FOMO_APP_ID = process.env.REACT_APP_FOMO_ID;
