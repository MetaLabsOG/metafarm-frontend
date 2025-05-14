// Simple script to test price calculation
const { getAssetPriceFromTinyman, getAssetPriceInAlgo } = require('../providers/tinymanPriceProvider');
const { getAssetRateFromVestige } = require('../providers/coinPriceProvider');
const { fetchAsset } = require('../common/store/assets');

// Test asset IDs
const TEST_ASSET_IDS = [31566704, 386192725, 1134696561];

async function runTests() {
  console.log('Starting price calculation tests...');
  
  for (const assetId of TEST_ASSET_IDS) {
    try {
      console.log(`\nTesting asset ID: ${assetId}`);
      
      const asset = await fetchAsset(assetId);
      console.log(`Asset name: ${asset.name} (${asset.unitName})`);
      
      // Test Tinyman price
      console.log('\nTesting Tinyman price calculation:');
      try {
        const tinymanPrice = await getAssetPriceFromTinyman(asset);
        if (tinymanPrice !== null) {
          console.log(`✅ Tinyman price: ${tinymanPrice} ALGO`);
        } else {
          console.log('❌ Failed to get price from Tinyman');
        }
      } catch (error) {
        console.error('❌ Error getting Tinyman price:', error.message);
      }
      
      // Test Vestige price
      console.log('\nTesting Vestige price calculation:');
      try {
        const vestigePrice = await getAssetRateFromVestige(assetId);
        if (vestigePrice !== null) {
          console.log(`✅ Vestige price: ${vestigePrice} ALGO`);
        } else {
          console.log('❌ Failed to get price from Vestige');
        }
      } catch (error) {
        console.error('❌ Error getting Vestige price:', error.message);
      }
      
      // Test fallback mechanism
      console.log('\nTesting fallback mechanism:');
      try {
        const price = await getAssetPriceInAlgo(asset);
        if (price !== null) {
          console.log(`✅ Final price with fallback: ${price} ALGO`);
        } else {
          console.log('❌ Failed to get price with fallback');
        }
      } catch (error) {
        console.error('❌ Error with fallback mechanism:', error.message);
      }
    } catch (error) {
      console.error(`Error testing asset ${assetId}:`, error);
    }
  }
  
  console.log('\nTests completed!');
}

runTests().catch(console.error);
