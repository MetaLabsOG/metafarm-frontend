import { Buffer } from 'buffer';
import { decodeUnsignedTransaction } from 'algosdk';
import { DeflexQuote } from '@deflex/deflex-sdk-js';
import { WalletTransaction, WalletTransactionGroup } from '../types';
import { DexProvider, Operation } from '../dexes';
import { Amount, Asset } from '../common/store';
import { deflexClient } from '../AppContext';
import { fromSmallestUnits } from '../common/lib';
import { SLIPPAGE } from './Swap';

export class DeflexSwap implements Operation {
    quote: DeflexQuote;
    assetA: Asset;
    assetB: Asset;
    microAmountIn: Amount;
    amountOut: number;
    pathString: string;
    dex: DexProvider;

    constructor(quote: DeflexQuote, assetA: Asset, assetB: Asset, microAmountIn: Amount) {
        // console.log('DEFLEX', quote);
        this.quote = quote;
        this.assetA = assetA;
        this.assetB = assetB;
        this.microAmountIn = microAmountIn;
        this.dex = 'T2';
        this.amountOut = quote.quote ? fromSmallestUnits(this.assetB, BigInt(quote.quote.valueOf())) : 0;
        // TODO: get unitName
        const best_path = quote.route.map(
            (route) =>
                route.percent.toString() +
                '%: ' +
                route.path.map((p) => p.inputASAID).join('-') +
                '-' +
                route.path[route.path.length - 1].outputASAID.toString()
        );
        this.pathString = best_path.join('\n');
    }

    getPriceImpact(): number {
        if (this.microAmountIn === null || this.quote.quote === null || this.quote.priceBaseline === null) {
            return 0;
        }
        const amountIn = fromSmallestUnits(this.assetA, this.microAmountIn);
        const amountOut = fromSmallestUnits(this.assetB, BigInt(this.quote.quote.valueOf()));

        return amountIn / this.quote.priceBaseline.valueOf() / amountOut - 1.0;
    }

    async prepareTxs(sender: string): Promise<WalletTransactionGroup[]> {
        const txnGroup = await deflexClient.getSwapQuoteTransactions(sender, this.quote, SLIPPAGE);
        const txns: WalletTransaction[] = txnGroup.txns.map((txn) => {
            // TODO Ya hz
            if (typeof txn.logicSigBlob === 'boolean') {
                return { txn: txn.data.toString() };
            }
            return { txn: txn.data.toString(), stxn: Buffer.from(txn.logicSigBlob).toString('base64') };
        });
        const firstUnsignedTxn = txns.filter((txn) => !txn.stxn)[0];
        const firstTxID = decodeUnsignedTransaction(Buffer.from(firstUnsignedTxn.txn, 'base64')).txID();

        const group: WalletTransactionGroup = {
            firstTxID: firstTxID,
            txns: txns,
            usedApps: this.quote.requiredAppOptIns.map((id) => id.valueOf()),
            usedAssets: [this.assetA.id, this.assetB.id],
        };

        return [group];
    }
}
