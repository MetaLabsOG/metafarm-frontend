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
    dex: DexProvider;
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
}
