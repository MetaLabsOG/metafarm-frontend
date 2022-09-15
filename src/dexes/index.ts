import { algod, ALGONET, TESTNET } from '../AppContext';
import { AppId, Asset, AssetId, Amount, fetchAsset, ALGO_ASSET } from '../common/store';
import { WalletTransactionGroup } from '../types';

import { Dex, PoolInfo, SwapQuote, MintQuote, DexProvider, DexPool } from './common';
import { PactDex } from './pact';
import { TinymanDex } from './tinyman';
import { HumbleDex } from './humble';

/**
 * Mock API for dexes (yields data with arbitrary numbers)
 */
export class MockDex extends Dex {
    async getPool(_: AppId): Promise<DexPool> {
        return {
            poolId: 0,
            poolDex: 'MOCK',
            asset1: 0,
            asset2: 10_000,
            liquidityAsset: 100_500,
            asset1Reserve: BigInt(100_000_000),
            asset2Reserve: BigInt(200_000_000),
            totalLiquidity: BigInt(100_000_000),
            dexFeeApr: 0, // TODO

            getSwap: async (assetIn: AssetId | Asset, amountIn: Amount, slippage: number) => {
                assetIn = typeof assetIn === 'number' ? await fetchAsset(assetIn) : assetIn;
                const assetOut = ALGO_ASSET;
                const price = 0.01;
                const fee = BigInt(100);
                const priceImpact = 0;

                return {
                    dex: 'MOCK',
                    assetIn,
                    assetOut,
                    amountIn: amountIn,
                    amountOut: BigInt(Number(amountIn) * price),
                    minimalAmountOut: BigInt(Number(amountIn) * price * (1 - slippage)),
                    price,
                    fee,
                    slippage,
                    priceImpact,

                    prepareTxs: (_: string) => {
                        throw new Error('not implemented');
                    },
                };
            },

            getMint: (...args: any) => {
                throw new Error('not implemented');
            },

            getZap: (...args: any) => {
                throw new Error('not implemented');
            },
        };
    }

    async getPoolByAddress(_: string): Promise<DexPool> {
        return this.getPool(0);
    }

    async getPoolByAssets(_1: AssetId | Asset, _2: AssetId | Asset): Promise<DexPool> {
        return this.getPool(0);
    }
}

export const tinymanDex = new TinymanDex(algod);
export const pactDex = new PactDex(algod);
export const humbleDex = new HumbleDex(algod);
export const mockDex = new MockDex();

export function makeDex(provider: DexProvider): Dex {
    return provider === 'PT' ? pactDex : provider === 'T2' ? tinymanDex : provider === 'H2' ? humbleDex : mockDex;
}

// In which order to call dexes for the swap price for each token.
// if no pair on Tinyman, try Pact; otherwise provide dummy prices on testnet or throw on mainnet.
const DEX_TRY_ORDER: DexProvider[] = ALGONET === TESTNET ? ['T2', 'PT', 'H2', 'MOCK'] : ['T2', 'PT', 'H2'];

export async function getSwapCostSomewhere(
    assetIn: AssetId | Asset,
    assetOut: AssetId | Asset,
    amountIn: Amount,
    slippage: number
): Promise<SwapQuote> {
    let error = null;
    for (const provider of DEX_TRY_ORDER) {
        try {
            const pool = await makeDex(provider).getPoolByAssets(assetIn, assetOut);
            return await pool.getSwap(assetIn, amountIn, slippage);
        } catch (error_) {
            error = error_;
        }
    }
    throw error;
}

export * from './common';
