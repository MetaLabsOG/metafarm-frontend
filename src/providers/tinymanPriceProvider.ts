import { ALGONET, TESTNET } from '../AppContext';
import { Asset, AssetId } from '../common/store/types';
import { fetchAsset } from '../common/store/assets';
import { getAssetAlgoPriceFromVestige } from './coinPriceProvider';
import { makeDex, DexProvider } from '../dexes';

// ALGO asset ID is always 0
const ALGO_ASSET = 0;

// Slippage for price calculations
const PRICE_SLIPPAGE = 0.01;

/**
 * Calculates the price of an asset in ALGO using Tinyman SDK
 * @param asset The asset to calculate the price for
 * @returns The price in ALGO or null if calculation fails
 */
export async function getAssetPriceFromTinyman(asset: Asset | AssetId): Promise<number | null> {
  try {
    // If asset is an ID, fetch the asset details
    if (typeof asset === 'number') {
      asset = await fetchAsset(asset);
    }

    // ALGO price is always 1 ALGO
    if (asset.id === 0) {
      return 1;
    }

    // Try Tinyman v2 first, then v1.1
    const dexProviders = ALGONET === TESTNET ? ['T2', 'T3'] : ['T3', 'T2'];

    for (const provider of dexProviders) {
      try {
        const dex = makeDex(provider as DexProvider);
        const pool = await dex.getPoolByAssets(asset, ALGO_ASSET);

        // Use a standard amount for price calculation (10^decimals)
        const standardAmount = BigInt(10 ** asset.decimals);
        const swapQuote = await pool.getSwap(asset, standardAmount, PRICE_SLIPPAGE);

        return swapQuote.price;
      } catch (error) {
        console.log(`Failed to get price from ${provider} for asset ${asset.id}:`, error);
        // Continue to next provider
      }
    }

    // If we get here, all DEX providers failed
    return null;
  } catch (error) {
    console.error(`Error calculating price for asset ${typeof asset === 'number' ? asset : asset.id}:`, error);
    return null;
  }
}

/**
 * Gets the price of an asset in ALGO.
 * Uses Vestige API only — Tinyman DEX SDK calls are too expensive for page load
 * (each call hits mainnet.analytics.tinyman.org + algod, causing 429s at scale).
 * Tinyman price fetching is only used for explicit user actions (swap/zap).
 */
export async function getAssetPriceInAlgo(asset: Asset | AssetId): Promise<number | null> {
  try {
    const id = typeof asset === 'number' ? asset : asset.id;
    if (id === 0) return 1;

    // No retry — Vestige calls are batched with circuit breaker in coinPriceProvider.
    // Retries here would just create duplicate batches and worsen rate limits.
    return await getAssetAlgoPriceFromVestige(id);
  } catch (error) {
    console.error('Price fetching failed for asset', typeof asset === 'number' ? asset : asset.id, error);
    return null;
  }
}

/**
 * Calculates the price of an LP token based on its underlying assets
 * @param lpToken The LP token asset
 * @param asset1 The first asset in the pool
 * @param asset2 The second asset in the pool
 * @param asset1Reserve The reserve of the first asset
 * @param asset2Reserve The reserve of the second asset
 * @param totalLiquidity The total liquidity in the pool
 * @param algoPrice The price of ALGO in USD
 * @returns The price of the LP token in ALGO and USD
 */
export async function calculateLPTokenPrice(
  lpToken: Asset,
  asset1: Asset,
  asset2: Asset,
  asset1Reserve: bigint,
  asset2Reserve: bigint,
  totalLiquidity: bigint,
  algoPrice: number
): Promise<{ priceInAlgo: number; priceInUsd: number } | null> {
  try {
    // Get prices for both assets in the pool
    const asset1PriceInAlgo = await getAssetPriceInAlgo(asset1);
    const asset2PriceInAlgo = await getAssetPriceInAlgo(asset2);

    if (asset1PriceInAlgo === null || asset2PriceInAlgo === null) {
      return null;
    }

    // Cannot price LP token with zero liquidity
    if (totalLiquidity === 0n) {
      return null;
    }

    // Calculate the total value of the pool in ALGO
    const asset1ValueInAlgo = Number(asset1Reserve) * asset1PriceInAlgo / (10 ** asset1.decimals);
    const asset2ValueInAlgo = Number(asset2Reserve) * asset2PriceInAlgo / (10 ** asset2.decimals);
    const totalPoolValueInAlgo = asset1ValueInAlgo + asset2ValueInAlgo;

    // Calculate the LP token price
    const lpTokenPriceInAlgo = totalPoolValueInAlgo / (Number(totalLiquidity) / (10 ** lpToken.decimals));
    const lpTokenPriceInUsd = lpTokenPriceInAlgo * algoPrice;

    if (!isFinite(lpTokenPriceInAlgo) || !isFinite(lpTokenPriceInUsd)) {
      return null;
    }

    return {
      priceInAlgo: lpTokenPriceInAlgo,
      priceInUsd: lpTokenPriceInUsd
    };
  } catch (error) {
    console.error('Error calculating LP token price:', error);
    return null;
  }
}
