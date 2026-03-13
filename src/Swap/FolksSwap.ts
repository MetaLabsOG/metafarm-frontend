import { Buffer } from 'buffer';
import { decodeUnsignedTransaction } from 'algosdk';
import { SwapMode, SwapParams, SwapQuote } from '@folks-router/js-sdk';
import { WalletTransactionGroup } from '../types';
import { DexProvider, Operation } from '../dexes';
import { Amount, Asset } from '../common/store';
import { algod, folksRouterClient, METAWALLET } from '../AppContext';
import { fromSmallestUnits } from '../common/lib';

export const FOLKS_FEE_BPS = 30; // 0.3% integrator fee
export const FOLKS_SLIPPAGE_BPS = 100; // 1% default slippage
export const FOLKS_REFERRER = METAWALLET; // Cometa treasury receives 50% of fees

// Lsig address derived from METAWALLET via Folks Router SDK getReferrerLogicSig()
const REFERRER_LSIG = 'HOBWJ2VFJD6JGDSEU32OL2IMSPZHUUVNGW35MFJCYZS72XP33GXKWXUJQE';

let lsigAssetsCache: Set<number> | null = null;
let lsigCacheTime = 0;
const LSIG_CACHE_TTL = 60_000; // refresh every 60s

async function getReferrerLsigAssets(): Promise<Set<number>> {
    const now = Date.now();
    if (lsigAssetsCache && now - lsigCacheTime < LSIG_CACHE_TTL) {
        return lsigAssetsCache;
    }
    try {
        const info: any = await algod.accountInformation(REFERRER_LSIG).do();
        const assets = new Set<number>([0]); // ALGO is native — always available
        for (const a of info.assets ?? []) {
            assets.add(a['asset-id']);
        }
        lsigAssetsCache = assets;
        lsigCacheTime = now;
        return assets;
    } catch {
        return new Set([0]);
    }
}

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

    // Only charge referrer fee if lsig can receive both tokens
    const lsigAssets = await getReferrerLsigAssets();
    const useReferrer = lsigAssets.has(assetA.id) && lsigAssets.has(assetB.id);

    const quote = useReferrer
        ? await folksRouterClient.fetchSwapQuote(swapParams, undefined, FOLKS_FEE_BPS, undefined, FOLKS_REFERRER)
        : await folksRouterClient.fetchSwapQuote(swapParams);

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
