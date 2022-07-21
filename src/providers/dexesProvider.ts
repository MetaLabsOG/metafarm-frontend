import algosdk from 'algosdk';
import pactsdk from '@pactfi/pactsdk';
import { max, min } from 'ramda';
import { Buffer } from 'buffer';

import { ALGONET, MAINNET, TESTNET, algod } from '../AppContext';
import { AppId, Asset, AssetId, Amount } from '../common/store/types';
import { assetId } from '../common/store/utils';

import TINYMAN_ASC from './tinyman_asc.json';
import { ALGO_ASSET, fetchAsset } from '../common/store';
import { WalletTransactionGroup } from '../types';
import { toReachTxn } from '../common/lib';

export type DexProvider =
    | 'T2' // Tinyman v1.1
    | 'PT' // Pact
    | 'MOCK'; // Mock dex (random tokens are staked)

export interface PoolInfo {
    poolId: AppId;
    poolDex: DexProvider;
    asset1: AssetId;
    asset2: AssetId;
    liquidityAsset: AssetId;
    asset1Reserve: Amount;
    asset2Reserve: Amount;
    totalLiquidity: Amount;
}

export type LPTokenInfo = Asset & PoolInfo;

export type SwapQuote = {
    assetIn: Asset;
    assetOut: Asset;
    amountIn: Amount; // In MICROTOKENS
    amountOut: Amount; // In MICROTOKENS
    minimalAmountOut: Amount; // this is to account for the slippage
    price: number; // but price is calculated in FULL TOKENS (considering the DECIMALS of assets), following the Pact interface
    fee: Amount; // yet the fee is still in MICROROKENS
    slippage: number;
};

export type MintQuote = {
    assetA: Asset;
    assetB: Asset;
    lpToken: Asset;
    amountA: Amount;
    amountB: Amount;
    liquidityIssued: Amount;
    minimalLiquidityIssued: Amount;
    slippage: number;
};

export type BestSwapQuote = {
    best: SwapQuote;
    direct?: SwapQuote;
    path: SwapQuote[];
};

export type ZapQuote = {
    swap: BestSwapQuote;
    mint: MintQuote;
};

export abstract class Dex {
    abstract getPoolInfo(poolId: AppId): Promise<PoolInfo>;
    abstract getPoolInfoByAddress(poolAddress: string): Promise<PoolInfo>;
    abstract getPoolInfoByAssets(asset1: AssetId | Asset, asset2: AssetId | Asset): Promise<PoolInfo>;

    // The amount provided is in MICROTOKENS (bigint).
    abstract getSwapQuote(
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        slippage: number,
        pool?: PoolInfo
    ): Promise<SwapQuote>;
    abstract getSwapTxs(
        sender: string,
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        amountOut: Amount
    ): Promise<WalletTransactionGroup[]>;

    async getSwapTxsFromQuote(sender: string, quote: SwapQuote): Promise<WalletTransactionGroup[]> {
        return this.getSwapTxs(sender, quote.assetIn, quote.assetOut, quote.amountIn, quote.minimalAmountOut);
    }

    abstract getMintQuote(
        assetA: AssetId | Asset,
        assetB: AssetId | Asset,
        amountA: Amount,
        slippage: number,
        pool?: PoolInfo
    ): Promise<MintQuote>;
    abstract getMintTxs(
        sender: string,
        assetA: AssetId | Asset,
        assetB: AssetId | Asset,
        amountA: Amount,
        amountB: Amount,
        lpAmount: Amount
    ): Promise<WalletTransactionGroup[]>;

    async getMintTxsFromQuote(sender: string, quote: MintQuote): Promise<WalletTransactionGroup[]> {
        return this.getMintTxs(
            sender,
            quote.assetA,
            quote.assetB,
            quote.amountA,
            quote.amountB,
            quote.minimalLiquidityIssued
        );
    }

    async getBestSwapQuote(
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        slippage: number,
        pool?: PoolInfo
    ): Promise<BestSwapQuote> {
        assetIn = typeof assetIn === 'number' ? await fetchAsset(assetIn) : assetIn;
        assetOut = typeof assetOut === 'number' ? await fetchAsset(assetOut) : assetOut;

        let direct = undefined;
        // Make direct swap right away if one of the assets is ALGO
        if (assetIn.id === 0 || assetOut.id === 0) {
            const best = (direct = await this.getSwapQuote(assetIn, assetOut, amountIn, slippage, pool));
            return { best, direct, path: [best] };
        }

        // Try to find direct swap
        try {
            direct = await this.getSwapQuote(assetIn, assetOut, amountIn, slippage, pool);
        } catch (err) {
            console.log(`Direct swap for token IDs ${assetIn.id} ${assetOut.id} not found`);
        }

        try {
            const toAlgo = await this.getSwapQuote(assetIn, ALGO_ASSET, amountIn, slippage);
            const fromAlgo = await this.getSwapQuote(ALGO_ASSET, assetOut, toAlgo.minimalAmountOut, slippage);
            const decRatio = 10 ** (assetIn.decimals - assetOut.decimals);
            const throughAlgo = {
                assetIn,
                assetOut,
                amountIn: toAlgo.amountIn,
                amountOut: fromAlgo.amountOut,
                minimalAmountOut: fromAlgo.minimalAmountOut,
                price: (Number(fromAlgo.minimalAmountOut) / Number(toAlgo.amountIn)) * decRatio,
                fee: toAlgo.fee + fromAlgo.fee,
                slippage,
            };

            if (!direct || direct.price < throughAlgo.price) {
                return { best: throughAlgo, direct, path: [toAlgo, fromAlgo] };
            } else {
                return { best: direct, direct, path: [direct] };
            }
        } catch (err) {
            console.log(`Could not find a routed swap for token IDs ${assetIn.id} ${assetOut.id}`);
            if (direct) {
                return { best: direct, direct, path: [direct] };
            } else {
                throw new Error(`Failed to find any swap for token IDs ${assetIn.id} ${assetOut.id}`);
            }
        }
    }

    async getBestSwapTxsFromQuote(sender: string, quote: BestSwapQuote): Promise<WalletTransactionGroup[]> {
        let txs: WalletTransactionGroup[] = [];
        for (const q of quote.path) {
            const curSwap = await this.getSwapTxsFromQuote(sender, q);
            txs = [...txs, ...curSwap];
        }
        return txs;
    }

    async getZapQuote(
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        slippage: number
    ): Promise<ZapQuote> {
        const halfForSwap = amountIn / BigInt(2);
        const halfForMint = amountIn - halfForSwap;
        const pool = await this.getPoolInfoByAssets(assetIn, assetOut);

        const swap = await this.getBestSwapQuote(assetIn, assetOut, halfForSwap, slippage, pool);
        const amountOut = swap.best.minimalAmountOut;

        // FIXME: The problem with zap is that after the swap is complete,
        // the distribution of tokens in the pool has changed. So the slippage is inevitable.
        // Here we can make sure that we have enough tokens to perform the mint
        // in the state of the pool which was __before__ the swap. But it will not be the
        // same after the swap is done (unless, ironically, if the swap was routed - then everything
        // is simpler). If the swap was small in comparison to the pool's liquidity, then the
        // slippage will cover it. But I suspect that on testnet it is routinely not the case.
        //
        // To be precise, we will have to __simulate__ the swap on the pool so that the mint quote is
        // as valid as the quote obtained from the pool after the swap is done. This is pain in the
        // ass and requires even more code rewrites.
        // ALTERNATIVELY, we can just prepare and execute swap and mint sequentially. This will
        // always work as well as doing it manually, but the user will have to sign transactions twice
        // AND the end result might differ a lot from the quote displayed to the user.
        if (swap.path.length === 1) {
            // only do this in case of direct swap, because otherwise the pool is actually
            // unaffected
            // also, it's stupid here and of course works only for Tinyman because we need to
            // account for FEES.
            if (assetId(assetIn) === pool.asset1) {
                pool.asset1Reserve += (swap.best.amountIn * BigInt(997)) / BigInt(1000);
                pool.asset2Reserve -= swap.best.minimalAmountOut;
            } else if (assetId(assetIn) === pool.asset2) {
                pool.asset2Reserve += (swap.best.amountIn * BigInt(997)) / BigInt(1000);
                pool.asset1Reserve -= swap.best.minimalAmountOut;
            } else {
                throw new Error('impossible: bad pool');
            }
        }

        // assetA = assetOut
        // assetB = assetIn
        let mint = await this.getMintQuote(assetOut, assetIn, amountOut, slippage, pool);

        if (mint.amountB > halfForMint) {
            // try the other way
            mint = await this.getMintQuote(assetIn, assetOut, halfForMint, slippage, pool);
            if (mint.amountB > amountOut) {
                // is it possible? seemingly not, but who knows, mb something something
                // integer division troubles
                throw new Error('impossible: cannot perform the mint either way!');
            }
        }

        return { swap, mint };
    }

    async getZapTxsFromQuote(sender: string, quote: ZapQuote): Promise<WalletTransactionGroup[]> {
        const swapTxs = await this.getBestSwapTxsFromQuote(sender, quote.swap);
        const mintTxs = await this.getMintTxsFromQuote(sender, quote.mint);
        return [...swapTxs, ...mintTxs];
    }
}

/**
 * Mock API for dexes (yields data with arbitrary numbers)
 */
export class MockDex extends Dex {
    async getPoolInfo(_: AppId): Promise<PoolInfo> {
        return {
            poolId: 0,
            poolDex: 'MOCK',
            asset1: 0,
            asset2: 10000,
            liquidityAsset: 100500,
            asset1Reserve: BigInt(100000000),
            asset2Reserve: BigInt(200000000),
            totalLiquidity: BigInt(100000000),
        };
    }

    getPoolInfoByAddress(_: string): Promise<PoolInfo> {
        return this.getPoolInfo(0);
    }

    getPoolInfoByAssets(_1: AssetId | Asset, _2: AssetId | Asset): Promise<PoolInfo> {
        return this.getPoolInfo(0);
    }

    async getSwapQuote(a1: AssetId | Asset, a2: AssetId | Asset, amount: Amount, slippage: number): Promise<SwapQuote> {
        const price = 0.01;
        const fee = BigInt(100);
        const assetIn = typeof a1 === 'number' ? await fetchAsset(a1) : a1;
        const assetOut = typeof a2 === 'number' ? await fetchAsset(a2) : a2;
        return {
            assetIn,
            assetOut,
            amountIn: BigInt(amount),
            amountOut: BigInt(Number(amount) * price),
            minimalAmountOut: BigInt(Number(amount) * price * (1 - slippage)),
            price,
            fee,
            slippage,
        };
    }

    async getSwapTxs(
        sender: string,
        fromAsset: AssetId | Asset,
        toAsset: AssetId | Asset,
        amountIn: Amount,
        amountOut: Amount
    ): Promise<WalletTransactionGroup[]> {
        throw new Error('getSwapTxs not implemented for MOCK dex');
    }

    async getMintQuote(
        assetA: number | Asset,
        assetB: number | Asset,
        amountA: bigint,
        slippage: number
    ): Promise<MintQuote> {
        throw new Error('getMintQuote not implemented for MOCK dex');
    }

    async getMintTxs(
        sender: string,
        assetA: number | Asset,
        assetB: number | Asset,
        amountA: bigint,
        amountB: bigint,
        lpAmount: Amount
    ): Promise<WalletTransactionGroup[]> {
        throw new Error('getMintTxs not implemented for MOCK dex');
    }
}

/*
 * Subset of Pact API implementation
 */
export class PactDex extends Dex {
    algod: algosdk.Algodv2;
    pact: pactsdk.PactClient;

    constructor(algod: algosdk.Algodv2) {
        super();
        this.algod = algod;
        this.pact = new pactsdk.PactClient(
            this.algod,
            ALGONET === TESTNET ? { pactApiUrl: 'https://api.testnet.pact.fi' } : {}
        );
    }

    poolToPoolInfo(pool: pactsdk.Pool): PoolInfo {
        return {
            poolId: pool.appId,
            poolDex: 'PT',
            asset1: pool.primaryAsset.index,
            asset2: pool.secondaryAsset.index,
            liquidityAsset: pool.liquidityAsset.index,
            asset1Reserve: BigInt(pool.state.totalPrimary),
            asset2Reserve: BigInt(pool.state.totalSecondary),
            totalLiquidity: BigInt(pool.state.totalLiquidity),
        };
    }

    makePactAsset(asset: AssetId | Asset): pactsdk.Asset {
        const id = assetId(asset);
        const pAsset = new pactsdk.Asset(this.algod, id);
        if (typeof asset === 'number') {
            return pAsset; // leave it to pact sdk to fetch everything else if needed
        }
        pAsset.name = asset.name;
        pAsset.unitName = asset.unitName;
        pAsset.decimals = asset.decimals;
        pAsset.ratio = 10 ** pAsset.decimals;
        pactsdk.Asset.assetsCache[id] = pAsset; // never fetch it again
        return pAsset;
    }

    async fixPactPoolDefaults(pool: pactsdk.Pool, a1: AssetId | Asset, a2: AssetId | Asset): Promise<pactsdk.Pool> {
        // weird shit with incompleteness of Pact's pool state info
        if (pool.primaryAsset.index === 0 && pool.secondaryAsset.index === 0) {
            const primary = typeof a1 === 'number' ? await fetchAsset(a1) : a1;
            const secondary = typeof a2 === 'number' ? await fetchAsset(a2) : a2;
            pool.primaryAsset = this.makePactAsset(primary);
            pool.secondaryAsset = this.makePactAsset(secondary);
        }
        return pool;
    }

    async getMostLiquidPool(a1: AssetId | Asset, a2: AssetId | Asset): Promise<pactsdk.Pool> {
        const pools = await this.pact.fetchPoolsByAssets(assetId(a1), assetId(a2));
        if (pools.length === 0) {
            throw new Error(`No Pact pool for assets [${assetId(a1)}, ${assetId(a2)}] found`);
        }
        const pool = pools.sort((a, b) => b.state.totalLiquidity - a.state.totalLiquidity)[0];
        return this.fixPactPoolDefaults(pool, a1, a2);
    }

    async getPoolInfo(poolId: AppId): Promise<PoolInfo> {
        // TODO: how to fix stupid 0/0 pact pool defaults here?
        return this.poolToPoolInfo(await this.pact.fetchPoolById(poolId));
    }

    // TODO: No easier way to figure out the Pact pool from its address
    async getPoolInfoByAddress(poolAddress: string): Promise<PoolInfo> {
        const accountInfo = await algod.accountInformation(poolAddress).do();
        const lpTokenId = accountInfo['created-assets'][0].index;
        let poolAssets = accountInfo.assets.map((a: any) => a['asset-id']).filter((id: number) => id !== lpTokenId);

        if (poolAssets.length < 2) {
            poolAssets = [0, ...poolAssets];
        }

        // repeated code, yes, but we need to filter by lpTokenId here because Pact can have several pools on a pair
        const pools = await this.pact.fetchPoolsByAssets(poolAssets[0], poolAssets[1]);
        const selectedPool = pools.filter((pool: pactsdk.Pool) => pool.liquidityAsset.index === lpTokenId)[0];
        return this.fixPactPoolDefaults(selectedPool, poolAssets[0], poolAssets[1]).then(this.poolToPoolInfo);
    }

    async getPoolInfoByAssets(a1: AssetId | Asset, a2: AssetId | Asset): Promise<PoolInfo> {
        return this.getMostLiquidPool(a1, a2).then(this.poolToPoolInfo);
    }

    async getSwapQuote(
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        slippage: number
    ): Promise<SwapQuote> {
        // Fetch both assets if they are not already fetched and cached
        if (typeof assetIn === 'number') {
            assetIn = await fetchAsset(assetIn);
        }

        if (typeof assetOut === 'number') {
            assetOut = await fetchAsset(assetOut);
            this.makePactAsset(assetOut); // this simply ensures that Pact asset cache also gets updated
        }

        const pool = await this.getMostLiquidPool(assetIn, assetOut);
        const { effect } = pool.prepareSwap({
            asset: this.makePactAsset(assetIn),
            amount: Number(amountIn), // Pact SDK assumes that input amounts fit into Number
            slippagePct: slippage * 100,
        });
        // Pact SDK got updated and its interface have changed. The problem with fixed-input swaps does not exist anymore.
        return {
            assetIn,
            assetOut,
            amountIn: BigInt(effect.amountDeposited),
            amountOut: BigInt(effect.amountReceived),
            minimalAmountOut: BigInt(effect.minimumAmountReceived),
            price: effect.price,
            fee: BigInt(effect.fee),
            slippage,
        };
    }

    async getSwapTxs(
        sender: string,
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        amountOut: Amount
    ): Promise<WalletTransactionGroup[]> {
        throw new Error('getSwapTxs not implemented for Pact dex');
    }

    async getMintQuote(
        assetA: number | Asset,
        assetB: number | Asset,
        amountA: bigint,
        slippage: number
    ): Promise<MintQuote> {
        throw new Error('getMintQuote not implemented for Pact dex');
    }

    async getMintTxs(
        sender: string,
        assetA: number | Asset,
        assetB: number | Asset,
        amountA: bigint,
        amountB: bigint,
        lpAmount: Amount
    ): Promise<WalletTransactionGroup[]> {
        throw new Error('getMintTxs not implemented for Pact dex');
    }
}

// TODO: all this should be somewhere else probably (a separate lib, our own limited implementation of Tinyman SDK?)
// These are basically rewrites of the Python Tinyman SDK library, so that we can fetch token prices from there
// without bothering the backend all the time (which does algoindexer queries anyway).
export namespace Tinyman {
    type VariableDef = {
        name: string;
        type: string;
        index: number;
        length: number;
    };

    type ProgramDef = {
        bytecode: string;
        address: string;
        size: number;
        variables: VariableDef[];
        source: string;
    };

    type SwapType = 'fi' | 'fo';

    type CommonPoolArgs = {
        validatorAppId: AppId;
        a1: AssetId;
        a2: AssetId;
        lpTokenId: AssetId;
        assetInAmount: number;
        assetOutAmount: number;
        sender: string;
        suggestedParams: algosdk.SuggestedParams;
    };

    type SwapTxArgs = CommonPoolArgs & {
        assetInId: AssetId;
        swapType: SwapType;
    };

    type MintTxArgs = CommonPoolArgs & {
        lpAmount: number;
    };

    type SignedTxn = {
        blob: Uint8Array;
        txID: string;
    };

    export type MaybeSignedTx = {
        txn: algosdk.Transaction;
        signedTxn: SignedTxn | null;
    };

    function toUint8Array(s: string): Uint8Array {
        return new Uint8Array(Buffer.from(s, 'utf-8'));
    }

    export function getPoolLogicSig(a1: AssetId, a2: AssetId, validatorAppId: AppId): algosdk.LogicSigAccount {
        const program = getProgram(TINYMAN_ASC.contracts.pool_logicsig.logic, {
            validator_app_id: validatorAppId,
            asset_id_1: max(a1, a2),
            asset_id_2: min(a1, a2),
        });
        return new algosdk.LogicSigAccount(program);
    }

    export function prepareSwapTransactions({
        validatorAppId,
        a1,
        a2,
        lpTokenId,
        assetInId,
        assetInAmount,
        assetOutAmount,
        swapType,
        sender,
        suggestedParams,
    }: SwapTxArgs): MaybeSignedTx[] {
        const poolLogicSig = getPoolLogicSig(a1, a2, validatorAppId);
        const poolAddress = poolLogicSig.address();
        const assetOutId = assetInId === a1 ? a2 : a1;
        const feeNote = toUint8Array('fee');
        const validatorArgs = ['swap', swapType].map(toUint8Array);
        const foreignAssets = [a1, a2, lpTokenId].filter((id) => id !== 0);

        let txns = [
            algosdk.makePaymentTxnWithSuggestedParams(sender, poolAddress, 2000, undefined, feeNote, suggestedParams),
            algosdk.makeApplicationNoOpTxn(
                poolAddress,
                suggestedParams,
                validatorAppId,
                validatorArgs,
                [sender],
                undefined,
                foreignAssets
            ),
            assetInId === 0
                ? algosdk.makePaymentTxnWithSuggestedParams(
                      sender,
                      poolAddress,
                      assetInAmount,
                      undefined,
                      undefined,
                      suggestedParams
                  )
                : algosdk.makeAssetTransferTxnWithSuggestedParams(
                      sender,
                      poolAddress,
                      undefined,
                      undefined,
                      assetInAmount,
                      undefined,
                      assetInId,
                      suggestedParams
                  ),
            assetOutId === 0
                ? algosdk.makePaymentTxnWithSuggestedParams(
                      poolAddress,
                      sender,
                      assetOutAmount,
                      undefined,
                      undefined,
                      suggestedParams
                  )
                : algosdk.makeAssetTransferTxnWithSuggestedParams(
                      poolAddress,
                      sender,
                      undefined,
                      undefined,
                      assetOutAmount,
                      undefined,
                      assetOutId,
                      suggestedParams
                  ),
        ];

        txns = algosdk.assignGroupID(txns);
        return signWithLogicSig(poolLogicSig, txns);
    }

    export function prepareMintTransactions({
        validatorAppId,
        a1,
        a2,
        lpTokenId,
        assetInAmount,
        assetOutAmount,
        lpAmount,
        sender,
        suggestedParams,
    }: MintTxArgs): MaybeSignedTx[] {
        // to ensure that a1 is not algo
        if (a1 < a2) {
            const a = a2;
            a2 = a1;
            a1 = a;
            const amount = assetOutAmount;
            assetOutAmount = assetInAmount;
            assetInAmount = amount;
        }
        const poolLogicSig = getPoolLogicSig(a1, a2, validatorAppId);
        const poolAddress = poolLogicSig.address();
        const feeNote = toUint8Array('fee');
        const validatorArgs = ['mint'].map(toUint8Array);
        const foreignAssets = [a1, a2, lpTokenId].filter((id) => id !== 0);

        let txns = [
            algosdk.makePaymentTxnWithSuggestedParams(sender, poolAddress, 2000, undefined, feeNote, suggestedParams),
            algosdk.makeApplicationNoOpTxn(
                poolAddress,
                suggestedParams,
                validatorAppId,
                validatorArgs,
                [sender],
                undefined,
                foreignAssets
            ),
            algosdk.makeAssetTransferTxnWithSuggestedParams(
                sender,
                poolAddress,
                undefined,
                undefined,
                assetInAmount,
                undefined,
                a1,
                suggestedParams
            ),
            a2 === 0
                ? algosdk.makePaymentTxnWithSuggestedParams(
                      sender,
                      poolAddress,
                      assetOutAmount,
                      undefined,
                      undefined,
                      suggestedParams
                  )
                : algosdk.makeAssetTransferTxnWithSuggestedParams(
                      sender,
                      poolAddress,
                      undefined,
                      undefined,
                      assetOutAmount,
                      undefined,
                      a2,
                      suggestedParams
                  ),
            algosdk.makeAssetTransferTxnWithSuggestedParams(
                poolAddress,
                sender,
                undefined,
                undefined,
                lpAmount,
                undefined,
                lpTokenId,
                suggestedParams
            ),
        ];

        txns = algosdk.assignGroupID(txns);
        return signWithLogicSig(poolLogicSig, txns);
    }

    function signWithLogicSig(lsig: algosdk.LogicSigAccount, txns: algosdk.Transaction[]): MaybeSignedTx[] {
        return txns.map((txn) => {
            const signedTxn =
                algosdk.encodeAddress(txn.from.publicKey) === lsig.address()
                    ? algosdk.signLogicSigTransaction(txn, lsig)
                    : null;
            return { txn, signedTxn };
        });
    }

    /**
     * Variable encoding used by Tinyman contracts
     */
    function encodeVal(value: number, type: string): Buffer {
        if (type !== 'int') {
            throw new Error('tinymanEncodeVal: only int variables are supported');
        }
        let bytes = [];
        while (true) {
            const b = value & 0x7f;
            value >>= 7;
            if (value) {
                bytes.push(b | 0x80);
            } else {
                bytes.push(b);
                break;
            }
        }

        return Buffer.from(new Uint8Array(bytes));
    }

    /**
     * Substitutes variables into Tinyman LogicSig program
     */
    export function getProgram(definition: ProgramDef, variables: Record<string, number>): Uint8Array {
        const template = Buffer.from(definition.bytecode, 'base64');
        let buf = Buffer.alloc(template.length * 2);
        const varDefs = definition.variables.sort((a, b) => a.index - b.index);

        let templateIx = 0;
        let bufIx = 0;
        for (const v of varDefs) {
            template.copy(buf, bufIx, templateIx, v.index);
            bufIx += v.index - templateIx;
            templateIx = v.index + v.length;

            const name = v.name.slice('TMPL_'.length).toLowerCase();
            const value = variables[name];
            const encoded = encodeVal(value, v.type);
            encoded.copy(buf, bufIx);
            bufIx += encoded.length;
        }

        if (templateIx < template.length) {
            template.copy(buf, bufIx, templateIx, template.length);
            bufIx += template.length - templateIx;
        }

        if (bufIx < buf.length) {
            buf = buf.slice(0, bufIx);
        }
        return new Uint8Array(buf);
    }
}

/**
 * Subset of Tinyman API implementation
 */
export class TinymanDex extends Dex {
    static readonly VALIDATOR_APP_ID = {
        [TESTNET]: 62368684,
        [MAINNET]: 552635992,
    };

    algod: algosdk.Algodv2;
    validatorAppId: AppId;

    constructor(algod: algosdk.Algodv2) {
        super();
        this.algod = algod;
        this.validatorAppId = TinymanDex.VALIDATOR_APP_ID[ALGONET];
    }

    async getPoolInfo(poolId: AppId): Promise<PoolInfo> {
        // funnily enough, getting the pool info by creator address is one step less,
        // because Tinyman pool is a LogicSig and everything is in the creator's local state.
        const { creator } = await this.algod.getApplicationByID(poolId).do();
        return this.getPoolInfoByAddress(creator);
    }

    async getPoolInfoByAddress(poolAddress: string): Promise<PoolInfo> {
        const accountInfo = await this.algod.accountInformation(poolAddress).do();

        const appInfo = accountInfo['apps-local-state'][0];
        if (!appInfo) {
            throw new Error(`No Tinyman pool for address ${poolAddress} is found`);
        }

        const poolId = appInfo['id'];
        const appState = appInfo['key-value'].reduce((acc: any, { key, value }: any) => {
            const newKey = Buffer.from(key, 'base64').toString();
            const newVal = value.type === 2 ? value.uint : value.bytes;
            return { [newKey]: newVal, ...acc };
        }, {});

        let { a1, a2, s1, s2, ilt } = appState;
        if (a1 > a2) {
            [a1, a2] = [a2, a1];
            [s1, s2] = [s2, s1];
        }

        const liquidityAsset = accountInfo['created-assets'][0]['index'];
        return {
            poolId,
            poolDex: 'T2',
            asset1: a1,
            asset2: a2,
            liquidityAsset,
            asset1Reserve: BigInt(s1),
            asset2Reserve: BigInt(s2),
            totalLiquidity: BigInt(ilt),
        };
    }

    async getPoolInfoByAssets(a1: AssetId | Asset, a2: AssetId | Asset): Promise<PoolInfo> {
        const logicSig = Tinyman.getPoolLogicSig(assetId(a1), assetId(a2), this.validatorAppId);
        return this.getPoolInfoByAddress(logicSig.address());
    }

    async getSwapQuote(
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        slippage: number,
        pool?: PoolInfo
    ): Promise<SwapQuote> {
        if (typeof assetIn === 'number') {
            assetIn = await fetchAsset(assetIn);
        }

        if (typeof assetOut === 'number') {
            assetOut = await fetchAsset(assetOut);
        }

        if (!pool) {
            pool = await this.getPoolInfoByAssets(assetIn, assetOut);
        } else if (pool.asset1 !== min(assetIn.id, assetOut.id) || pool.asset2 !== max(assetIn.id, assetOut.id)) {
            throw new Error('bad pool given');
        }

        const [inputSupply, outputSupply] =
            assetIn.id === pool.asset1
                ? [pool.asset1Reserve, pool.asset2Reserve]
                : [pool.asset2Reserve, pool.asset1Reserve];

        const k = pool.asset1Reserve * pool.asset2Reserve;

        // We assume that amount is in microalgos
        const amountAfterFees = (amountIn * BigInt(997)) / BigInt(1000);
        const amountOut = outputSupply - k / (inputSupply + amountAfterFees);

        const decRatio = 10 ** (assetIn.decimals - assetOut.decimals);
        const bignumSlippage = BigInt(slippage * 1000);
        const minimalAmountOut = amountOut - (amountOut * bignumSlippage) / BigInt(1000);

        return {
            assetIn,
            assetOut,
            amountIn,
            amountOut,
            minimalAmountOut,
            price: (Number(minimalAmountOut) / Number(amountIn)) * decRatio,
            fee: BigInt(amountIn - amountAfterFees),
            slippage,
        };
    }

    async getSwapTxs(
        sender: string,
        assetIn: AssetId | Asset,
        assetOut: AssetId | Asset,
        amountIn: Amount,
        amountOut: Amount
    ): Promise<WalletTransactionGroup[]> {
        const suggestedParams = await this.algod.getTransactionParams().do();
        const pool = await this.getPoolInfoByAssets(assetIn, assetOut);
        const txs = Tinyman.prepareSwapTransactions({
            validatorAppId: this.validatorAppId,
            a1: pool.asset1,
            a2: pool.asset2,
            lpTokenId: pool.liquidityAsset,
            assetInId: assetId(assetIn),
            assetInAmount: Number(amountIn),
            assetOutAmount: Number(amountOut),
            swapType: 'fi',
            sender,
            suggestedParams,
        });

        const group = this.encodeMaybeTxs(txs);
        group.usedApps = [this.validatorAppId];
        group.usedAssets = [pool.asset1, pool.asset2];
        return [group];
    }

    async getMintQuote(
        assetA: number | Asset,
        assetB: number | Asset,
        amountA: bigint,
        slippage: number,
        pool?: PoolInfo
    ): Promise<MintQuote> {
        if (typeof assetA === 'number') {
            assetA = await fetchAsset(assetA);
        }

        if (typeof assetB === 'number') {
            assetB = await fetchAsset(assetB);
        }

        if (!pool) {
            pool = await this.getPoolInfoByAssets(assetA, assetB);
        } else if (pool.asset1 !== min(assetA.id, assetB.id) || pool.asset2 !== max(assetA.id, assetB.id)) {
            throw new Error('bad pool given');
        }

        const lpToken = await fetchAsset(pool.liquidityAsset);

        if (pool.totalLiquidity === BigInt(0)) {
            throw new Error('first mint is not supported yet');
        }

        let amount1: Amount, amount2: Amount, amountB: Amount;
        if (assetA.id === pool.asset1) {
            amount1 = amountA;
            amountB = amount2 = (amount1 * pool.asset2Reserve) / pool.asset1Reserve;
        } else {
            amount2 = amountA;
            amountB = amount1 = (amount2 * pool.asset1Reserve) / pool.asset2Reserve;
        }

        const liqA = (amount1 * pool.totalLiquidity) / pool.asset1Reserve;
        const liqB = (amount2 * pool.totalLiquidity) / pool.asset1Reserve;
        const liquidityIssued = liqA < liqB ? liqA : liqB;
        const bigintSlippage = BigInt(slippage * 1000);
        const minimalLiquidityIssued = liquidityIssued - (liquidityIssued * bigintSlippage) / BigInt(1000);
        return {
            assetA,
            assetB,
            lpToken,
            amountA,
            amountB,
            liquidityIssued,
            minimalLiquidityIssued,
            slippage,
        };
    }

    async getMintTxs(
        sender: string,
        assetA: number | Asset,
        assetB: number | Asset,
        amountA: bigint,
        amountB: bigint,
        lpAmount: Amount
    ): Promise<WalletTransactionGroup[]> {
        const suggestedParams = await this.algod.getTransactionParams().do();
        const pool = await this.getPoolInfoByAssets(assetA, assetB);
        const txs = Tinyman.prepareMintTransactions({
            validatorAppId: this.validatorAppId,
            a1: assetId(assetA),
            a2: assetId(assetB),
            lpTokenId: pool.liquidityAsset,
            assetInAmount: Number(amountA),
            assetOutAmount: Number(amountB),
            lpAmount: Number(lpAmount),
            sender,
            suggestedParams,
        });

        const group = this.encodeMaybeTxs(txs);
        group.usedApps = [this.validatorAppId];
        group.usedAssets = [pool.asset1, pool.asset2, pool.liquidityAsset];
        return [group];
    }

    private encodeMaybeTxs(txs: Tinyman.MaybeSignedTx[]): WalletTransactionGroup {
        const firstTxID = txs[0].txn.txID();
        return {
            firstTxID,
            txns: txs.map(({ txn, signedTxn }) => {
                const walletTx = toReachTxn(txn);
                if (signedTxn !== null) {
                    walletTx.stxn = Buffer.from(signedTxn.blob).toString('base64');
                }
                return walletTx;
            }),
        };
    }
}

export function makeDex(provider: DexProvider): Dex {
    return provider === 'PT' ? new PactDex(algod) : provider === 'T2' ? new TinymanDex(algod) : new MockDex();
}

// In which order to call dexes for the swap price for each token.
// if no pair on Tinyman, try Pact; otherwise provide dummy prices on testnet or throw on mainnet.
const DEX_TRY_ORDER: DexProvider[] = ALGONET === TESTNET ? ['T2', 'PT', 'MOCK'] : ['T2', 'PT'];

export async function getSwapCostSomewhere(
    assetIn: AssetId | Asset,
    assetOut: AssetId | Asset,
    amountIn: Amount,
    slippage: number
): Promise<SwapQuote> {
    let err = null;
    for (const provider of DEX_TRY_ORDER) {
        try {
            return await makeDex(provider).getSwapQuote(assetIn, assetOut, amountIn, slippage);
        } catch (e) {
            err = e;
        }
    }
    throw err;
}
