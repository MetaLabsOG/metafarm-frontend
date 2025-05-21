import React, { useEffect, useState } from 'react';
import { getAssetPriceFromTinyman, getAssetPriceInAlgo } from '../providers/tinymanPriceProvider';
import { getAssetRateFromVestige } from '../providers/coinPriceProvider';
import { fetchAsset } from '../common/store/assets';
import { Asset } from '../common/store/types';

// Test asset IDs
const TEST_ASSET_IDS = [31566704, 386192725, 1134696561];

interface PriceResult {
  assetId: number;
  assetName: string;
  tinymanPrice: number | null;
  vestigePrice: number | null;
  finalPrice: number | null;
  error?: string;
  loading: boolean;
}

const PriceTest: React.FC = () => {
  const [results, setResults] = useState<PriceResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runTests = async () => {
      setLoading(true);
      const newResults: PriceResult[] = [];

      for (const assetId of TEST_ASSET_IDS) {
        try {
          const initialResult: PriceResult = {
            assetId,
            assetName: 'Loading...',
            tinymanPrice: null,
            vestigePrice: null,
            finalPrice: null,
            loading: true,
          };
          
          newResults.push(initialResult);
          setResults([...newResults]);
          
          // Fetch asset details
          const asset = await fetchAsset(assetId);
          
          // Update result with asset name
          const resultIndex = newResults.findIndex(r => r.assetId === assetId);
          if (resultIndex !== -1) {
            newResults[resultIndex] = {
              ...newResults[resultIndex],
              assetName: `${asset.name} (${asset.unitName})`,
            };
            setResults([...newResults]);
          }
          
          // Test Tinyman price
          let tinymanPrice: number | null = null;
          try {
            tinymanPrice = await getAssetPriceFromTinyman(asset);
            if (resultIndex !== -1) {
              newResults[resultIndex] = {
                ...newResults[resultIndex],
                tinymanPrice,
              };
              setResults([...newResults]);
            }
          } catch (error) {
            console.error('Error getting Tinyman price:', error);
          }
          
          // Test Vestige price
          let vestigePrice: number | null = null;
          try {
            vestigePrice = await getAssetRateFromVestige(assetId);
            if (resultIndex !== -1) {
              newResults[resultIndex] = {
                ...newResults[resultIndex],
                vestigePrice,
              };
              setResults([...newResults]);
            }
          } catch (error) {
            console.error('Error getting Vestige price:', error);
          }
          
          // Test fallback mechanism
          let finalPrice: number | null = null;
          try {
            finalPrice = await getAssetPriceInAlgo(asset);
            if (resultIndex !== -1) {
              newResults[resultIndex] = {
                ...newResults[resultIndex],
                finalPrice,
                loading: false,
              };
              setResults([...newResults]);
            }
          } catch (error) {
            console.error('Error with fallback mechanism:', error);
            if (resultIndex !== -1) {
              newResults[resultIndex] = {
                ...newResults[resultIndex],
                error: 'Failed to get price with fallback',
                loading: false,
              };
              setResults([...newResults]);
            }
          }
        } catch (error) {
          console.error(`Error testing asset ${assetId}:`, error);
          newResults.push({
            assetId,
            assetName: 'Error',
            tinymanPrice: null,
            vestigePrice: null,
            finalPrice: null,
            error: `Failed to test asset: ${error}`,
            loading: false,
          });
          setResults([...newResults]);
        }
      }
      
      setLoading(false);
    };

    runTests();
  }, []);

  const calculatePercentDiff = (price1: number | null, price2: number | null): string => {
    if (price1 === null || price2 === null || price2 === 0) {
      return 'N/A';
    }
    
    const percentDiff = Math.abs((price1 - price2) / price2) * 100;
    return `${percentDiff.toFixed(2)}%`;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Price Calculation Test</h1>
      
      {loading && <p>Running tests...</p>}
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Asset ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Asset Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Tinyman Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Vestige Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Final Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Difference</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.assetId}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{result.assetId}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{result.assetName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {result.tinymanPrice !== null ? result.tinymanPrice.toFixed(6) : 'N/A'}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {result.vestigePrice !== null ? result.vestigePrice.toFixed(6) : 'N/A'}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {result.finalPrice !== null ? result.finalPrice.toFixed(6) : 'N/A'}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {calculatePercentDiff(result.tinymanPrice, result.vestigePrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {results.some(r => r.error) && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          <h3>Errors:</h3>
          <ul>
            {results.filter(r => r.error).map((result) => (
              <li key={`error-${result.assetId}`}>{result.error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PriceTest;
