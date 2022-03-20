import React from 'react';
import { Stdlib_User } from '@reach-sh/stdlib/dist/types/interfaces';
import { Account } from './types';

export type Context = {
    reach: Stdlib_User<any, any, any, any, any, any, any, any, any, any> | undefined;
    isWalletModalOpen: boolean;
    setIsWalletModalOpen: (value: boolean) => void;
    account: Account | undefined;
    setAccount: (account: Account) => void;
};

export const AppContext = React.createContext<Context | {}>({});

export const ALGONODE = {
    REACH_CONNECTOR_MODE: 'ALGO-browser',
    // ALGO_SERVER: 'https://mainnet-algorand.api.purestake.io/ps2',
    // ALGO_TOKEN: {'X-API-Key': 'd5bjYQye8f6tfntYkkFZ32l9Yb1b9e098KyNZ69B'},
    // ALGO_PORT: '',
    // ALGO_INDEXER_SERVER: 'https://testnet-algorand.api.purestake.io/idx2',
    // ALGO_INDEXER_TOKEN: {'X-API-Key': 'd5bjYQye8f6tfntYkkFZ32l9Yb1b9e098KyNZ69B'},
    // ALGO_INDEXER_PORT: ''
};

export const TESTNET = 'TestNet';
export const MAINNET = 'MainNet';

export const ALGONET = TESTNET;

export const IS_MOBILE = window.innerWidth <= 768;
console.log('Is mobile:', IS_MOBILE);

export const FOMO_APP_ID = process.env.REACT_APP_FOMO_ID;
