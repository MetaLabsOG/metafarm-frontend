import axios from 'axios';
import { AssetId } from '../common/store/types';

type Rate = {
    currency: string;
    price: number;
    timestamp: number;
};

type VestigePriceResponse = {
    network_id: number;
    asset_id: number;
    denominating_asset_id: number;
    price: number;
    confidence: number;
    total_lockup: number;
};

const instance = axios.create({
    baseURL: 'https://api.vestigelabs.org',
});

// Circuit breaker: stop sending requests after consecutive failures
let consecutiveFailures = 0;
let circuitOpenUntil = 0;
const MAX_FAILURES = 5;
const CIRCUIT_OPEN_MS = 30_000; // 30 seconds cooldown

function isCircuitOpen(): boolean {
    if (consecutiveFailures < MAX_FAILURES) return false;
    if (Date.now() > circuitOpenUntil) {
        consecutiveFailures = MAX_FAILURES - 1;
        return false;
    }
    return true;
}

function recordSuccess(): void {
    consecutiveFailures = 0;
}

function recordFailure(): void {
    consecutiveFailures++;
    if (consecutiveFailures >= MAX_FAILURES) {
        circuitOpenUntil = Date.now() + CIRCUIT_OPEN_MS;
        console.warn(`Vestige circuit breaker OPEN — pausing requests for ${CIRCUIT_OPEN_MS / 1000}s`);
    }
}

// Batch queue: collect asset IDs and flush in one request
type BatchEntry = {
    assetId: AssetId;
    denominatingAssetId: number;
    resolve: (price: number | null) => void;
};

const batchQueue: BatchEntry[] = [];
let batchTimer: ReturnType<typeof setTimeout> | null = null;
let flushing = false;
const BATCH_DELAY_MS = 250;
const MAX_BATCH_SIZE = 25;

async function flushBatch(): Promise<void> {
    batchTimer = null;
    if (flushing || batchQueue.length === 0) return;
    flushing = true;

    // Drain queue synchronously into local groups
    const groups = new Map<number, BatchEntry[]>();
    while (batchQueue.length > 0) {
        const entry = batchQueue.shift()!;
        const key = entry.denominatingAssetId;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key)!.push(entry);
    }

    try {
        for (const [denomId, entries] of groups) {
            if (isCircuitOpen()) {
                for (const entry of entries) entry.resolve(null);
                continue;
            }

            for (let i = 0; i < entries.length; i += MAX_BATCH_SIZE) {
                const chunk = entries.slice(i, i + MAX_BATCH_SIZE);
                const assetIds = chunk.map(e => e.assetId).join(',');

                try {
                    const response = await instance.get<VestigePriceResponse[]>(
                        `assets/price?asset_ids=${assetIds}&network_id=0&denominating_asset_id=${denomId}`
                    );
                    recordSuccess();

                    const priceMap = new Map<number, number>();
                    if (response.data) {
                        for (const item of response.data) {
                            priceMap.set(item.asset_id, item.price);
                        }
                    }

                    for (const entry of chunk) {
                        entry.resolve(priceMap.get(entry.assetId) ?? null);
                    }
                } catch (error) {
                    recordFailure();
                    if (axios.isAxiosError(error) && error.response?.status === 429) {
                        console.warn(`Vestige 429 rate limit on batch of ${chunk.length} assets`);
                    }
                    for (const entry of chunk) entry.resolve(null);
                }
            }
        }
    } finally {
        flushing = false;
        // If new items arrived while we were flushing, schedule another flush
        if (batchQueue.length > 0) {
            scheduleBatch();
        }
    }
}

function scheduleBatch(): void {
    if (batchTimer !== null) return;
    // Flush immediately if queue already has enough items for a full batch
    const delay = batchQueue.length >= MAX_BATCH_SIZE ? 0 : BATCH_DELAY_MS;
    batchTimer = setTimeout(() => void flushBatch(), delay);
}

function enqueuePriceRequest(assetId: AssetId, denominatingAssetId: number): Promise<number | null> {
    if (isCircuitOpen()) return Promise.resolve(null);
    return new Promise<number | null>((resolve) => {
        batchQueue.push({ assetId, denominatingAssetId, resolve });
        scheduleBatch();
    });
}

export async function getAlgoRateFromVestige(): Promise<Rate | null> {
    try {
        if (isCircuitOpen()) return null;

        const response = await instance.get<VestigePriceResponse[]>(`assets/price?asset_ids=31566704&network_id=0&denominating_asset_id=0`);
        recordSuccess();

        if (response.data && response.data.length > 0) {
            const usdInAlgo = response.data[0].price;
            const algoInUsd = 1 / usdInAlgo;

            return {
                currency: 'USD',
                price: algoInUsd,
                timestamp: Date.now()
            };
        }

        console.error('No price data received from Vestige API');
        return null;
    } catch (error) {
        recordFailure();
        console.error(`Failed to fetch ALGO price: ${error}`);
        return null;
    }
}

export async function getAssetRateFromVestige(assetId: AssetId): Promise<number | null> {
    return enqueuePriceRequest(assetId, 31566704);
}

export async function getAssetAlgoPriceFromVestige(assetId: AssetId): Promise<number | null> {
    return enqueuePriceRequest(assetId, 0);
}
