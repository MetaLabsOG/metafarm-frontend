import { indexer } from '../AppContext';
import { AlgodAccountInfo } from './typedAlgod';

export type IndexerLookupResponse = {
    account: AlgodAccountInfo;
    'current-round': number;
};

export async function lookupAccountByID(addr: string, _indexer = indexer) {
    return _indexer.lookupAccountByID(addr).do() as Promise<IndexerLookupResponse>;
}
