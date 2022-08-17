import { algod, ALGONET, TESTNET } from '../AppContext';
import { AppId, Asset, AssetId, Amount, fetchAsset } from '../common/store';
import { WalletTransactionGroup } from '../types';

import { Dex, PoolInfo, SwapQuote, MintQuote, DexProvider } from './common';
import { PactDex } from './pact';
import { TinymanDex } from './tinyman';

/**
 * Mock API for dexes (yields data with arbitrary numbers)
 */
export class MockDex extends Dex {
    async getPoolInfo(_: AppId): Promise<PoolInfo> {
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
        };
    }

    async getPoolInfoByAddress(_: string): Promise<PoolInfo> {
        return this.getPoolInfo(0);
    }

    async getPoolInfoByAssets(_1: AssetId | Asset, _2: AssetId | Asset): Promise<PoolInfo> {
        return this.getPoolInfo(0);
    }

    async getSwapQuote(a1: AssetId | Asset, a2: AssetId | Asset, amount: Amount, slippage: number): Promise<SwapQuote> {
        const price = 0.01;
        const fee = BigInt(100);
        const assetIn = typeof a1 === 'number' ? await fetchAsset(a1) : a1;
        const assetOut = typeof a2 === 'number' ? await fetchAsset(a2) : a2;
        return {
            assetIn,
            assetOut,
            amountIn: BigInt(amount),
            amountOut: BigInt(Number(amount) * price),
            minimalAmountOut: BigInt(Number(amount) * price * (1 - slippage)),
            price,
            fee,
            slippage,
        };
    }

    /* eslint-disable */
    async getSwapTxs(
        sender: string,
        fromAsset: AssetId | Asset,
        toAsset: AssetId | Asset,
        amountIn: Amount,
        amountOut: Amount
    ): Promise<WalletTransactionGroup[]> {
        throw new Error('getSwapTxs not implemented for MOCK dex');
    }

    async getMintQuote(
        assetA: number | Asset,
        assetB: number | Asset,
        amountA: bigint,
        slippage: number
    ): Promise<MintQuote> {
        throw new Error('getMintQuote not implemented for MOCK dex');
    }

    async getMintTxs(
        sender: string,
        assetA: number | Asset,
        assetB: number | Asset,
        amountA: bigint,
        amountB: bigint,
        lpAmount: Amount
    ): Promise<WalletTransactionGroup[]> {
        throw new Error('getMintTxs not implemented for MOCK dex');
    }
    /* eslint-enable */
}

export const tinymanDex = new TinymanDex(algod);
export const pactDex = new PactDex(algod);
export const mockDex = new MockDex();

export function makeDex(provider: DexProvider): Dex {
    return provider === 'PT' ? pactDex : provider === 'T2' ? tinymanDex : mockDex;
}

// In which order to call dexes for the swap price for each token.
// if no pair on Tinyman, try Pact; otherwise provide dummy prices on testnet or throw on mainnet.
const DEX_TRY_ORDER: DexProvider[] = ALGONET === TESTNET ? ['T2', 'PT', 'MOCK'] : ['T2', 'PT'];

export async function getSwapCostSomewhere(
    assetIn: AssetId | Asset,
    assetOut: AssetId | Asset,
    amountIn: Amount,
    slippage: number
): Promise<SwapQuote> {
    let error = null;
    for (const provider of DEX_TRY_ORDER) {
        try {
            return await makeDex(provider).getSwapQuote(assetIn, assetOut, amountIn, slippage);
        } catch (error_) {
            error = error_;
        }
    }
    throw error;
}

export * from './common';
