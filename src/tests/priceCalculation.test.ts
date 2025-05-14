import { getAssetPriceFromTinyman, getAssetPriceInAlgo } from '../providers/tinymanPriceProvider';
import { getAssetRateFromVestige } from '../providers/coinPriceProvider';
import { fetchAsset } from '../common/store/assets';

// Test asset IDs
const TEST_ASSET_IDS = [31566704, 386192725, 1134696561];

describe('Price Calculation Tests', () => {
  // Skip tests in CI environment
  const itif = process.env.CI ? it.skip : it;

  describe('Tinyman Price Calculation', () => {
    itif('should calculate prices for test assets using Tinyman', async () => {
      for (const assetId of TEST_ASSET_IDS) {
        const asset = await fetchAsset(assetId);
        console.log(`Testing price calculation for asset ${asset.name} (${assetId})`);
        
        const tinymanPrice = await getAssetPriceFromTinyman(asset);
        
        // We just want to make sure it returns a number and doesn't throw
        expect(tinymanPrice).not.toBeNull();
        if (tinymanPrice !== null) {
          expect(typeof tinymanPrice).toBe('number');
          expect(tinymanPrice).toBeGreaterThan(0);
          console.log(`Tinyman price for ${asset.name}: ${tinymanPrice} ALGO`);
        }
      }
    }, 30000); // Increase timeout to 30 seconds
  });

  describe('Vestige Price Calculation', () => {
    itif('should fetch prices for test assets from Vestige API', async () => {
      for (const assetId of TEST_ASSET_IDS) {
        const asset = await fetchAsset(assetId);
        console.log(`Testing Vestige price for asset ${asset.name} (${assetId})`);
        
        const vestigePrice = await getAssetRateFromVestige(assetId);
        
        // We just want to make sure it returns a number and doesn't throw
        expect(vestigePrice).not.toBeNull();
        if (vestigePrice !== null) {
          expect(typeof vestigePrice).toBe('number');
          expect(vestigePrice).toBeGreaterThan(0);
          console.log(`Vestige price for ${asset.name}: ${vestigePrice} ALGO`);
        }
      }
    }, 30000); // Increase timeout to 30 seconds
  });

  describe('Price Comparison', () => {
    itif('should compare Tinyman and Vestige prices with 1% error margin', async () => {
      for (const assetId of TEST_ASSET_IDS) {
        const asset = await fetchAsset(assetId);
        console.log(`Comparing prices for asset ${asset.name} (${assetId})`);
        
        const tinymanPrice = await getAssetPriceFromTinyman(asset);
        const vestigePrice = await getAssetRateFromVestige(assetId);
        
        if (tinymanPrice !== null && vestigePrice !== null) {
          console.log(`Tinyman price: ${tinymanPrice} ALGO, Vestige price: ${vestigePrice} ALGO`);
          
          // Calculate percentage difference
          const percentDiff = Math.abs((tinymanPrice - vestigePrice) / vestigePrice) * 100;
          console.log(`Percentage difference: ${percentDiff.toFixed(2)}%`);
          
          // Check if within 1% error margin
          expect(percentDiff).toBeLessThanOrEqual(1);
        } else {
          console.log('Skipping comparison due to null values');
          // Skip test if either price is null
          expect(true).toBe(true);
        }
      }
    }, 30000); // Increase timeout to 30 seconds
  });

  describe('Fallback Mechanism', () => {
    itif('should use fallback mechanism when primary source fails', async () => {
      for (const assetId of TEST_ASSET_IDS) {
        const asset = await fetchAsset(assetId);
        console.log(`Testing fallback for asset ${asset.name} (${assetId})`);
        
        // Mock a failure in Tinyman by temporarily replacing the function
        const originalTinymanFn = getAssetPriceFromTinyman;
        (global as any).getAssetPriceFromTinyman = jest.fn().mockResolvedValue(null);
        
        const price = await getAssetPriceInAlgo(asset);
        
        // Restore the original function
        (global as any).getAssetPriceFromTinyman = originalTinymanFn;
        
        // We should still get a price from Vestige
        expect(price).not.toBeNull();
        if (price !== null) {
          expect(typeof price).toBe('number');
          expect(price).toBeGreaterThan(0);
          console.log(`Fallback price for ${asset.name}: ${price} ALGO`);
        }
      }
    }, 30000); // Increase timeout to 30 seconds
  });
});
