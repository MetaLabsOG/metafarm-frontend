import hash from 'object-hash';
import { URLTokenBaseHTTPClient, TokenHeader } from '@reach-sh/stdlib/ALGO_UTBC';
import type { BaseHTTPClientResponse } from 'algosdk';
import type { Query } from 'algosdk/dist/types/src/client/baseHTTPClient';

export class NonRedundantHTTPClient extends URLTokenBaseHTTPClient {
    private pendingGetPromises: Record<string, Promise<BaseHTTPClientResponse>>;

    constructor(
        tokenHeader: TokenHeader,
        baseServer: string,
        port?: string | number,
        defaultHeaders: Record<string, any> = {}
    ) {
        super(tokenHeader, baseServer, port, defaultHeaders);
        this.pendingGetPromises = {};
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
                delete this.pendingGetPromises[key];
            }));
        }
    }
}
