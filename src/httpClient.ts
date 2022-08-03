import hash from 'object-hash';
import { URLTokenBaseHTTPClient, TokenHeader } from '@reach-sh/stdlib/ALGO_UTBC';
import type { BaseHTTPClientResponse } from 'algosdk';
import type { Query } from 'algosdk/dist/types/src/client/baseHTTPClient';

export class NonRedundantHTTPClient extends URLTokenBaseHTTPClient {
    private pendingGetPromises: Record<string, Promise<BaseHTTPClientResponse>>;
    private promiseCleanupDelay: number;

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
        } else {
            return (this.pendingGetPromises[key] = super.get(relativePath, query, requestHeaders).finally(() => {
                if (this.promiseCleanupDelay > 0) {
                    setTimeout(() => {
                        delete this.pendingGetPromises[key];
                    }, this.promiseCleanupDelay);
                } else {
                    delete this.pendingGetPromises[key];
                }
            }));
        }
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
        return super.post(relativePath, data, query, requestHeaders).finally(() => {
            this.pendingGetPromises = {};
        });
    }

    async delete(
        relativePath: string,
        data: Uint8Array,
        query?: Query<string>,
        requestHeaders?: Record<string, string>
    ): Promise<BaseHTTPClientResponse> {
        return super.delete(relativePath, data, query, requestHeaders).finally(() => {
            this.pendingGetPromises = {};
        });
    }
}
