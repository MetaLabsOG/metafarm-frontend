import { Buffer } from 'buffer';
import { decodeUnsignedTransaction } from 'algosdk';
import { SwapMode, SwapParams, SwapQuote } from '@folks-router/js-sdk';
import { WalletTransactionGroup } from '../types';
import { DexProvider, Operation } from '../dexes';
import { Amount, Asset } from '../common/store';
import { folksRouterClient, METAWALLET } from '../AppContext';
import { fromSmallestUnits } from '../common/lib';

export const FOLKS_FEE_BPS = 30; // 0.3% integrator fee
export const FOLKS_SLIPPAGE_BPS = 100; // 1% default slippage
export const FOLKS_REFERRER = METAWALLET; // Cometa treasury receives 50% of fees

export async function fetchFolksQuote(
    assetA: Asset,
    assetB: Asset,
    microAmountIn: Amount,
): Promise<FolksSwap> {
    const swapParams: SwapParams = {
        fromAssetId: assetA.id,
        toAssetId: assetB.id,
        amount: microAmountIn,
        swapMode: SwapMode.FIXED_INPUT,
    };

    const quote = await folksRouterClient.fetchSwapQuote(
        swapParams,
        undefined, // maxGroupSize
        FOLKS_FEE_BPS,
        undefined, // userFeeDiscount
        FOLKS_REFERRER,
    );

    if (quote.quoteAmount <= 0n) {
        throw new Error('No liquidity available for this pair');
    }

    return new FolksSwap(swapParams, quote, assetA, assetB, microAmountIn);
}

export class FolksSwap implements Operation {
    assetA: Asset;
    assetB: Asset;
    microAmountIn: Amount;
    amountOut: number;
    quoteAmount: bigint;
    networkFeeMicroAlgo: number;
    pathString: string;
    dex: DexProvider;
    slippageBps: number;

    private swapParams: SwapParams;
    private swapQuote: SwapQuote;
    private rawPriceImpact: number;

    constructor(
        swapParams: SwapParams,
        swapQuote: SwapQuote,
        assetA: Asset,
        assetB: Asset,
        microAmountIn: Amount,
    ) {
        this.swapParams = swapParams;
        this.swapQuote = swapQuote;
        this.assetA = assetA;
        this.assetB = assetB;
        this.microAmountIn = microAmountIn;
        this.dex = 'FR';
        this.slippageBps = FOLKS_SLIPPAGE_BPS;

        this.quoteAmount = swapQuote.quoteAmount;
        this.amountOut = fromSmallestUnits(assetB, swapQuote.quoteAmount);
        this.rawPriceImpact = swapQuote.priceImpact;
        this.networkFeeMicroAlgo = swapQuote.microalgoTxnsFee;
        this.pathString = `${assetA.unitName} → ${assetB.unitName}`;
    }

    getPriceImpact(): number {
        // Folks Router returns priceImpact as a percentage value (e.g. 0.5 = 0.5%)
        // UI expects a ratio (0.005 = 0.5%), so divide by 100
        return this.rawPriceImpact / 100;
    }

    async prepareTxs(sender: string): Promise<WalletTransactionGroup[]> {
        const txnStrings = await folksRouterClient.prepareSwapTransactions(
            this.swapParams,
            sender,
            this.slippageBps,
            this.swapQuote,
        );

        const txns = txnStrings.map((txnBase64) => ({ txn: txnBase64 }));
        const firstTxn = decodeUnsignedTransaction(Buffer.from(txnStrings[0], 'base64'));

        return [{
            firstTxID: firstTxn.txID(),
            txns,
            usedAssets: [this.assetA.id, this.assetB.id],
        }];
    }
}
