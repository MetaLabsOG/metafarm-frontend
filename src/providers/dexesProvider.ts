import axios from 'axios';
import algosdk from 'algosdk';
import { getSwapCost as backendGetSwapCost } from './apiProvider';
import { getCoinRate } from './binanceProvider';

import { getAssetInfo, getWalletInfo } from './algoExploerProvider';
import { ALGONET, TESTNET, ALGOD_API_KEY, ALGOD_TESTNET_URL, ALGOD_MAINNET_URL } from '../AppContext';
import pactsdk from '@pactfi/pactsdk';

const ALGOD_URL = ALGONET === TESTNET ? ALGOD_TESTNET_URL : ALGOD_MAINNET_URL;

export const algod = new algosdk.Algodv2(
    {
        'x-api-key': ALGOD_API_KEY!,
    },
    ALGOD_URL,
    443
);

export type PoolInfo = {
    asset1: number;
    asset2: number;
    asset1Reserve: number;
    asset2Reserve: number;
    totalLiquidity: number;
};

export type LPTokenInfo = {
    name: string;
    price: number;
    decimals: number;
};

export type SwapQuote = {
    totalPrice: number;
    perToken: number;
};

export interface Dex {
    getPoolInfo: (poolAddress: string) => Promise<PoolInfo>;
    getSwapCost: (fromAsset: number, toAsset: number, amount: number) => Promise<SwapQuote>;
}

/**
 * Mock API for dexes (yields data with arbitrary numbers)
 */
export class MockDex implements Dex {
    async getPoolInfo(poolAddress: string): Promise<PoolInfo> {
        return {
            asset1: 0,
            asset2: 10000,
            asset1Reserve: 100000000,
            asset2Reserve: 200000000,
            totalLiquidity: 100000000,
        };
    }

    async getSwapCost(fromAsset: number, toAsset: number, amount: number): Promise<SwapQuote> {
        const perToken = 0.01;
        return {
            totalPrice: perToken * amount,
            perToken,
        };
    }
}

/**
 * Subset of Pact API implementation
 */
export class PactDex implements Dex {
    algod: algosdk.Algodv2;
    pact: pactsdk.PactClient;

    constructor(algod: algosdk.Algodv2) {
        this.algod = algod;
        this.pact = new pactsdk.PactClient(
            this.algod,
            ALGONET === TESTNET ? { pactApiUrl: 'https://api.testnet.pact.fi' } : {}
        );
    }

    // TODO: No easier way to figure out the Pact pool from its address
    async getPoolInfo(poolAddress: string): Promise<PoolInfo> {
        const accountInfo = await algod.accountInformation(poolAddress).do();
        const lpTokenId = accountInfo['created-assets'][0].index;
        let poolAssets = accountInfo.assets.map((a: any) => a['asset-id']).filter((id: number) => id !== lpTokenId);

        if (poolAssets.length < 2) {
            poolAssets = [0, ...poolAssets];
        }
        const pools = await this.pact.fetchPoolsByAssets(poolAssets[0], poolAssets[1]);
        const selectedPool = pools.filter((pool: any) => pool.liquidityAsset.index === lpTokenId)[0];
        return {
            asset1: selectedPool.primaryAsset.index,
            asset2: selectedPool.secondaryAsset.index,
            asset1Reserve: selectedPool.state.totalPrimary,
            asset2Reserve: selectedPool.state.totalSecondary,
            totalLiquidity: selectedPool.state.totalLiquidity,
        };
    }

    async getSwapCost(fromAsset: number, toAsset: number, amount: number): Promise<SwapQuote> {
        const pool = (await this.pact.fetchPoolsByAssets(fromAsset, toAsset))[0];
        const swap = pool.prepareSwap({
            asset: new pactsdk.Asset(this.algod, toAsset),
            amount: amount,
            slippagePct: 2,
        });
        const totalPrice = swap.effect.price;
        const perToken = totalPrice / amount;
        return {totalPrice, perToken};
    }
}

/**
 * Subset of Tinyman API implementation
 */
export class TinymanDex implements Dex {
    algod: algosdk.Algodv2;

    constructor(algod: algosdk.Algodv2) {
        this.algod = algod;
    }

    async getPoolInfo(poolAddress: string): Promise<PoolInfo> {
        const accountInfo = await algod.accountInformation(poolAddress).do();

        let appState: any;
        appState = accountInfo['apps-local-state'][0]['key-value'].reduce((acc: any, { key, value }: any) => {
            const newKey = Buffer.from(key, 'base64').toString();
            const newVal = value.type === 2 ? value.uint : value.bytes;
            return { [newKey]: newVal, ...acc };
        }, {});

        let { a1, a2, s1, s2, ilt } = appState;
        if (a1 > a2) {
            [a1, a2] = [a2, a1];
            [s1, s2] = [s2, s1];
        }

        return {
            asset1: a1,
            asset2: a2,
            asset1Reserve: s1,
            asset2Reserve: s2,
            totalLiquidity: ilt,
        };
    }

    async getSwapCost(fromAsset: number, toAsset: number, amount: number): Promise<SwapQuote> {
        const { res_tokens, price_per_token } = await backendGetSwapCost(fromAsset, toAsset, amount);
        return {
            totalPrice: res_tokens,
            perToken: price_per_token,
        };
    }
}

export type DexProvider =
    | 'T2' // Tinyman v1.1
    | 'PT' // Pact
    | 'MOCK'; // Mock dex (random tokens are staked)

export function makeDex(provider: DexProvider): Dex {
    return provider === 'PT' ? new PactDex(algod) : provider === 'T2' ? new TinymanDex(algod) : new MockDex();
}

// TODO: this function is a huge costyl
export function detectAssetProvider({ name }: {name: string}): DexProvider {
    name = name.toLowerCase();
    if (name.indexOf('tinyman') !== -1) {
        return 'T2';
    } else if (name.indexOf('liquidity') !== -1) {
        return 'PT';
    } else {
        return 'MOCK';
    }
}

export async function getLPTokenInfo(assetId: number, provider: DexProvider | undefined = undefined): Promise<LPTokenInfo> {
    const asset = await algod.getAssetByID(assetId).do();
    if (provider === undefined) {
        provider = detectAssetProvider(asset.params);
    }

    const dex = makeDex(provider);
    const { name, creator, decimals } = asset.params;
    const poolInfo = await dex.getPoolInfo(creator);

    // TODO: all of this should NOT be repeated for every fucking token
    const algoRate = await getCoinRate('ALGOUSDT');
    const algoPrice = Number(algoRate.price);

    let fstAssetPrice;
    if (poolInfo.asset1 === 0) {
        fstAssetPrice = algoPrice;
    } else {
        const priceInAlgo = (await dex.getSwapCost(poolInfo.asset1, 0, 1)).perToken;
        fstAssetPrice = algoPrice * priceInAlgo;
    }

    const price = (poolInfo.asset1Reserve * fstAssetPrice) / poolInfo.totalLiquidity;
    return { name, price, decimals };
}
