import { AssetId } from './store/types';

// Cache time to live in milliseconds (3 minutes)
const CACHE_TTL = 3 * 60 * 1000;

export interface CachedPrice {
  price: number;
  timestamp: number;
}

export interface AssetPriceCache {
  priceInAlgo: CachedPrice;
  priceInUsd?: CachedPrice;
}

const CACHE_PREFIX = 'price_cache_';

/**
 * Gets a cached price for an asset
 * @param assetId The asset ID
 * @returns The cached price or null if not in cache or expired
 */
export function getCachedPrice(assetId: AssetId): AssetPriceCache | null {
  try {
    const cacheKey = `${CACHE_PREFIX}${assetId}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (!cachedData) {
      return null;
    }
    
    const cache = JSON.parse(cachedData) as AssetPriceCache;
    const now = Date.now();
    
    // Check if cache is expired
    if (now - cache.priceInAlgo.timestamp > CACHE_TTL) {
      return null;
    }
    
    return cache;
  } catch (error) {
    console.error('Error reading from price cache:', error);
    return null;
  }
}

/**
 * Caches a price for an asset
 * @param assetId The asset ID
 * @param priceInAlgo The price in ALGO
 * @param priceInUsd Optional price in USD
 */
export function cachePrice(assetId: AssetId, priceInAlgo: number, priceInUsd?: number): void {
  try {
    const cacheKey = `${CACHE_PREFIX}${assetId}`;
    const now = Date.now();
    
    const cache: AssetPriceCache = {
      priceInAlgo: {
        price: priceInAlgo,
        timestamp: now
      }
    };
    
    if (priceInUsd !== undefined) {
      cache.priceInUsd = {
        price: priceInUsd,
        timestamp: now
      };
    }
    
    localStorage.setItem(cacheKey, JSON.stringify(cache));
  } catch (error) {
    console.error('Error writing to price cache:', error);
  }
}

/**
 * Clears all cached prices
 */
export function clearPriceCache(): void {
  try {
    const keysToRemove: string[] = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(CACHE_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => localStorage.removeItem(key));
  } catch (error) {
    console.error('Error clearing price cache:', error);
  }
}

/**
 * Implements exponential backoff for retrying operations
 * @param operation The operation to retry
 * @param maxRetries Maximum number of retries
 * @param baseDelay Base delay in milliseconds
 * @returns The result of the operation
 */
export async function retryWithExponentialBackoff<T>(
  operation: () => Promise<T>,
  maxRetries: number = 2,
  baseDelay: number = 500
): Promise<T> {
  let retries = 0;

  while (true) {
    try {
      return await operation();
    } catch (error: unknown) {
      // Don't retry on rate limits — back off immediately and let circuit breaker handle it
      const isRateLimit = error instanceof Error && (
        error.message.includes('429') ||
        error.message.includes('Too Many Requests') ||
        error.message.includes('rate limit')
      );
      if (isRateLimit) {
        console.warn('Rate limited — skipping retry');
        throw error;
      }

      if (retries >= maxRetries) {
        throw error;
      }

      const delay = baseDelay * Math.pow(2, retries);
      console.log(`Retrying operation after ${delay}ms (attempt ${retries + 1}/${maxRetries})`);
      await new Promise(resolve => setTimeout(resolve, delay));
      retries++;
    }
  }
}
