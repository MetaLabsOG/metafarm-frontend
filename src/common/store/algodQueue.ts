/**
 * Shared concurrency limiter for all Algorand node (algod/indexer) requests.
 * Nodely free tier: 60 req/s, 10 concurrent. We use conservative limits.
 */

const ALGOD_MAX_CONCURRENT = 8;
let _algodInFlight = 0;
const _algodQueue: Array<() => void> = [];

export async function withAlgodConcurrency<T>(fn: () => Promise<T>): Promise<T> {
    if (_algodInFlight >= ALGOD_MAX_CONCURRENT) {
        await new Promise<void>((resolve) => _algodQueue.push(resolve));
    }
    _algodInFlight++;
    try {
        return await fn();
    } finally {
        _algodInFlight--;
        if (_algodQueue.length > 0) {
            _algodQueue.shift()!();
        }
    }
}
