import hash from 'object-hash';
import { URLTokenBaseHTTPClient, TokenHeader } from '@reach-sh/stdlib/ALGO_UTBC';
import type { BaseHTTPClientResponse } from 'algosdk';
import type { Query } from 'algosdk/dist/types/src/client/baseHTTPClient';

/**
 * Global concurrency + circuit breaker for ALL algod/indexer requests.
 * Lives at HTTP client level so it covers Reach stdlib, DEX SDKs, and our code.
 */
const MAX_CONCURRENT = 6;
const CIRCUIT_BREAKER_PAUSE_MS = 10_000;

let _inFlight = 0;
const _queue: Array<() => void> = [];
let _circuitOpen = false;
let _circuitTimer: ReturnType<typeof setTimeout> | null = null;

function openCircuitBreaker(): void {
    if (_circuitOpen) return;
    _circuitOpen = true;
    console.warn(`[algod] Circuit breaker OPEN — pausing all requests for ${CIRCUIT_BREAKER_PAUSE_MS / 1000}s`);
    _circuitTimer = setTimeout(() => {
        _circuitOpen = false;
        _circuitTimer = null;
        console.log('[algod] Circuit breaker CLOSED — resuming requests');
        // Drain queued requests
        while (_queue.length > 0 && _inFlight < MAX_CONCURRENT) {
            _queue.shift()!();
        }
    }, CIRCUIT_BREAKER_PAUSE_MS);
}

async function withConcurrencyLimit<T>(fn: () => Promise<T>): Promise<T> {
    // Wait if circuit breaker is open or too many in-flight
    if (_circuitOpen || _inFlight >= MAX_CONCURRENT) {
        await new Promise<void>((resolve) => _queue.push(resolve));
    }
    _inFlight++;
    try {
        const result = await fn();
        return result;
    } catch (error: unknown) {
        // Detect 429 from response body or error message
        const is429 = error instanceof Error && (
            error.message.includes('429') ||
            error.message.includes('Too Many Requests') ||
            error.message.includes('rate limit')
        );
        if (is429) {
            openCircuitBreaker();
        }
        throw error;
    } finally {
        _inFlight--;
        if (!_circuitOpen && _queue.length > 0 && _inFlight < MAX_CONCURRENT) {
            _queue.shift()!();
        }
    }
}

export class NonRedundantHTTPClient extends URLTokenBaseHTTPClient {
    private pendingGetPromises: Record<string, Promise<BaseHTTPClientResponse>>;
    private readonly promiseCleanupDelay: number;

    constructor(
        tokenHeader: TokenHeader,
        baseServer: string,
        port?: string | number,
        promiseCleanupDelay?: number,
        defaultHeaders: Record<string, any> = {}
    ) {
        super(tokenHeader, baseServer, port, defaultHeaders);
        this.pendingGetPromises = {};
        this.promiseCleanupDelay = promiseCleanupDelay ?? 0;
    }

    async get(
        relativePath: string,
        query?: Query<string>,
        requestHeaders: Record<string, string> = {}
    ): Promise<BaseHTTPClientResponse> {
        const key = hash({ relativePath, query, requestHeaders });
        if (key in this.pendingGetPromises) {
            return this.pendingGetPromises[key];
        }
        return (this.pendingGetPromises[key] = withConcurrencyLimit(() =>
            super.get(relativePath, query, requestHeaders)
        ).finally(() => {
            if (this.promiseCleanupDelay > 0) {
                setTimeout(() => {
                    delete this.pendingGetPromises[key];
                }, this.promiseCleanupDelay);
            } else {
                delete this.pendingGetPromises[key];
            }
        }));
    }

    // We do not do many POST/DELETE requests, but we need to make sure that after those
    // are performed, the subsequent GET requests do not return stale cached data
    // (e.g. an old application state).
    // TODO: this logic is not shared between indexer and node! can we do something with that?

    async post(
        relativePath: string,
        data: Uint8Array,
        query?: Query<string>,
        requestHeaders: Record<string, string> = {}
    ): Promise<BaseHTTPClientResponse> {
        return withConcurrencyLimit(() =>
            super.post(relativePath, data, query, requestHeaders)
        ).finally(() => {
            this.pendingGetPromises = {};
        });
    }

    async delete(
        relativePath: string,
        data: Uint8Array,
        query?: Query<string>,
        requestHeaders?: Record<string, string>
    ): Promise<BaseHTTPClientResponse> {
        return withConcurrencyLimit(() =>
            super.delete(relativePath, data, query, requestHeaders)
        ).finally(() => {
            this.pendingGetPromises = {};
        });
    }
}
