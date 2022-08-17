import { AppId, Asset, AssetId, Amount } from '../common/store/types';
import { assetId } from '../common/store/utils';

import { ALGO_ASSET, fetchAsset } from '../common/store/assets';
import { WalletTransactionGroup } from '../types';

export type DexProvider =
    | 'T2' // Tinyman v1.1
    | 'PT' // Pact
    | 'MOCK'; // Mock dex (random tokens are staked)

export interface PoolInfo {
    readonly poolId: AppId;
    readonly poolDex: DexProvider;
    readonly asset1: AssetId;
    readonly asset2: AssetId;
    readonly liquidityAsset: AssetId;

    asset1Reserve: Amount;
    asset2Reserve: Amount;
    totalLiquidity: Amount;
    dexFeeApr: number;
}

export type LPTokenInfo = Asset & PoolInfo;

export interface SwapQuote {
    assetIn: Asset;
    assetOut: Asset;
    amountIn: Amount; // In MICROTOKENS
    amountOut: Amount; // In MICROTOKENS
    minimalAmountOut: Amount; // This is to account for the slippage
    price: number; // But price is calculated in FULL TOKENS (considering the DECIMALS of assets), following the Pact interface
    fee: Amount; // Yet the fee is still in MICROROKENS
    slippage: number;
}

export interface MintQuote {
    assetA: Asset;
    assetB: Asset;
    lpToken: Asset;
    amountA: Amount;
    amountB: Amount;
    liquidityIssued: Amount;
    minimalLiquidityIssued: Amount;
    slippage: number;
}

export interface BestSwapQuote {
    best: SwapQuote;
    direct?: SwapQuote;
    path: SwapQuote[];
}

export interface ZapQuote {
    swap: SwapQuote;
    mint: MintQuote;
}

export interface Operation {
    prepareTxs(sender: string): Promise<WalletTransactionGroup[]>;
}

export interface Swap extends SwapQuote, Operation {}
export interface Mint extends MintQuote, Operation {}
export interface BestSwap extends BestSwapQuote, Operation {}
export interface Zap extends ZapQuote, Operation {
    swap: Swap;
    mint: Mint;
}

/**
 * Pool object knows how to do operations on itself.
 */
export interface DexPool extends PoolInfo {
    getSwap(assetIn: AssetId | Asset, amountIn: Amount, slippage: number): Promise<Swap>;
    getMint(assetIn: AssetId | Asset, amountIn: Amount, slippage: number): Promise<Mint>;
    getZap(assetIn: AssetId | Asset, amountIn: Amount, slippage: number): Promise<Zap>;
}

export class BestSwap implements BestSwapQuote, Operation {
    best: SwapQuote;
    direct?: SwapQuote;
    path: Swap[];

    constructor(best: SwapQuote, path: Swap[], direct?: SwapQuote) {
        this.best = best;
        this.path = path;
        this.direct = direct;
    }

    async prepareTxs(sender: string): Promise<WalletTransactionGroup[]> {
        let txs: WalletTransactionGroup[] = [];
        for (const sw of this.path) {
            const curSwap = await sw.prepareTxs(sender);
            txs = [...txs, ...curSwap];
        }
        return txs;
    }
}

/**
 * Dex class: get `DexPool` objects by reference and do routed swaps.
 */
export abstract class Dex {
    abstract getPool(poolId: AppId): Promise<DexPool>;
    abstract getPoolByAddress(poolAddress: string): Promise<DexPool>;
    abstract getPoolByAssets(asset1: AssetId | Asset, asset2: AssetId | Asset): Promise<DexPool>;

    async getBestSwapQuote(
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        slippage: number
    ): Promise<BestSwap> {
        assetIn = typeof assetIn === 'number' ? await fetchAsset(assetIn) : assetIn;
        assetOut = typeof assetOut === 'number' ? await fetchAsset(assetOut) : assetOut;

        // Try to find direct swap
        let direct;
        try {
            const pool = await this.getPoolByAssets(assetIn, assetOut);
            direct = await pool.getSwap(assetIn, amountIn, slippage);

            // Make direct swap right away if one of the assets is ALGO
            if (assetIn.id === 0 || assetOut.id === 0) {
                const best = direct;
                return new BestSwap(best, [best], direct);
            }
        } catch {
            console.log(`Direct swap for token IDs ${assetIn.id} ${assetOut.id} not found`);
        }

        try {
            const algoInPool = await this.getPoolByAssets(ALGO_ASSET, assetIn);
            const algoOutPool = await this.getPoolByAssets(ALGO_ASSET, assetOut);
            const toAlgo = await algoInPool.getSwap(assetIn, amountIn, slippage);
            const fromAlgo = await algoOutPool.getSwap(ALGO_ASSET, toAlgo.minimalAmountOut, slippage);

            const decRatio = 10 ** (assetIn.decimals - assetOut.decimals);
            const throughAlgo = {
                assetIn,
                assetOut,
                amountIn: toAlgo.amountIn,
                amountOut: fromAlgo.amountOut,
                minimalAmountOut: fromAlgo.minimalAmountOut,
                price: (Number(fromAlgo.minimalAmountOut) / Number(toAlgo.amountIn)) * decRatio,
                fee: toAlgo.fee + fromAlgo.fee,
                slippage,
            };

            if (!direct || direct.price < throughAlgo.price) {
                return new BestSwap(throughAlgo, [toAlgo, fromAlgo], direct);
            }
            return new BestSwap(direct, [direct], direct);
        } catch {
            console.log(`Could not find a routed swap for token IDs ${assetIn.id} ${assetOut.id}`);
            if (direct) {
                return new BestSwap(direct, [direct], direct);
            }
            throw new Error(`Failed to find any swap for token IDs ${assetIn.id} ${assetOut.id}`);
        }
    }

    // async getZapQuote(
    //     assetIn: AssetId | Asset,
    //     assetOut: AssetId | Asset,
    //     amountIn: Amount,
    //     slippage: number
    // ): Promise<ZapQuote> {
    //     const halfForSwap = amountIn / BigInt(2);
    //     const halfForMint = amountIn - halfForSwap;
    //     const pool = await this.getPoolInfoByAssets(assetIn, assetOut);

    //     const swap = await this.getBestSwapQuote(assetIn, assetOut, halfForSwap, slippage, pool);
    //     const amountOut = swap.best.minimalAmountOut;

    //     // FIXME: The problem with zap is that after the swap is complete,
    //     // the distribution of tokens in the pool has changed. So the slippage is inevitable.
    //     // Here we can make sure that we have enough tokens to perform the mint
    //     // in the state of the pool which was __before__ the swap. But it will not be the
    //     // same after the swap is done (unless, ironically, if the swap was routed - then everything
    //     // is simpler). If the swap was small in comparison to the pool's liquidity, then the
    //     // slippage will cover it. But I suspect that on testnet it is routinely not the case.
    //     //
    //     // To be precise, we will have to __simulate__ the swap on the pool so that the mint quote is
    //     // as valid as the quote obtained from the pool after the swap is done. This is pain in the
    //     // ass and requires even more code rewrites.
    //     // ALTERNATIVELY, we can just prepare and execute swap and mint sequentially. This will
    //     // always work as well as doing it manually, but the user will have to sign transactions twice
    //     // AND the end result might differ a lot from the quote displayed to the user.
    //     if (swap.path.length === 1) {
    //         // Only do this in case of direct swap, because otherwise the pool is actually
    //         // unaffected
    //         // also, it's stupid here and of course works only for Tinyman because we need to
    //         // account for FEES.
    //         if (assetId(assetIn) === pool.asset1) {
    //             pool.asset1Reserve += (swap.best.amountIn * BigInt(997)) / BigInt(1000);
    //             pool.asset2Reserve -= swap.best.minimalAmountOut;
    //         } else if (assetId(assetIn) === pool.asset2) {
    //             pool.asset2Reserve += (swap.best.amountIn * BigInt(997)) / BigInt(1000);
    //             pool.asset1Reserve -= swap.best.minimalAmountOut;
    //         } else {
    //             throw new Error('impossible: bad pool');
    //         }
    //     }

    //     // AssetA = assetOut
    //     // assetB = assetIn
    //     let mint = await this.getMintQuote(assetOut, assetIn, amountOut, slippage, pool);

    //     if (mint.amountB > halfForMint) {
    //         // Try the other way
    //         mint = await this.getMintQuote(assetIn, assetOut, halfForMint, slippage, pool);
    //         if (mint.amountB > amountOut) {
    //             // Is it possible? seemingly not, but who knows, mb something something
    //             // integer division troubles
    //             throw new Error('impossible: cannot perform the mint either way!');
    //         }
    //     }

    //     return { swap, mint };
    // }

    // async getZapTxsFromQuote(sender: string, quote: ZapQuote): Promise<WalletTransactionGroup[]> {
    //     const swapTxs = await this.getBestSwapTxsFromQuote(sender, quote.swap);
    //     const mintTxs = await this.getMintTxsFromQuote(sender, quote.mint);
    //     return [...swapTxs, ...mintTxs];
    // }
}
