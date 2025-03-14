import { Buffer } from 'buffer';
import algosdk from 'algosdk';

import { TESTNET, MAINNET, ALGONET } from '../../AppContext';
import { toReachTxn } from '../../common/lib';
import { AppId, Asset, AssetId, assetId, Amount, fetchAsset } from '../../common/store';
import { getTinymanPools } from '../../providers/apiProvider';
import { WalletTransactionGroup } from '../../types';

import { Dex, PoolInfo, SwapQuote, MintQuote, DexPool, DexProvider, Mint, Swap, Zap } from '../common';
import * as Tinyman from './internal';

function encodeMaybeTxs(txs: Tinyman.MaybeSignedTx[]): WalletTransactionGroup {
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

/**
 * Tinyman pool can into swap mint and zap
 */
export class TinymanPool implements DexPool {
    readonly dex: TinymanDex;

    readonly poolDex: DexProvider = 'T2';
    readonly poolId: AppId;
    readonly asset1: AssetId;
    readonly asset2: AssetId;
    readonly liquidityAsset: AssetId;
    asset1Reserve: Amount;
    asset2Reserve: Amount;
    totalLiquidity: Amount;
    dexFeeApr: number;

    constructor(dex: TinymanDex, accountInfo: any, tinymanStatsData: any) {
        this.dex = dex;

        const appInfo = accountInfo['apps-local-state'][0];
        if (!appInfo) {
            // throw new Error(`No Tinyman pool for address ${poolAddress} is found`);
            throw new Error(`no pool state found`);
        }

        this.poolId = appInfo.id;

        const appState = appInfo['key-value'].reduce((acc: any, { key, value }: any) => {
            const newKey = Buffer.from(key, 'base64').toString();
            const newValue = value.type === 2 ? value.uint : value.bytes;
            return { [newKey]: newValue, ...acc };
        }, {});

        let { a1, a2, s1, s2 } = appState;
        if (a1 > a2) {
            [a1, a2] = [a2, a1];
            [s1, s2] = [s2, s1];
        }

        this.asset1 = a1;
        this.asset2 = a2;
        this.liquidityAsset = accountInfo['created-assets'][0].index;
        this.asset1Reserve = BigInt(s1);
        this.asset2Reserve = BigInt(s2);
        this.totalLiquidity = BigInt(appState.ilt);
        this.dexFeeApr = tinymanStatsData.annual_percentage_rate;
    }

    async getSwap(assetIn: AssetId | Asset, amountIn: Amount, slippage: number): Promise<Swap> {
        if (assetId(assetIn) !== this.asset1 && assetId(assetIn) !== this.asset2) {
            throw new Error(
                `cannot get swap with input token ${assetId(assetIn)} from pool of tokens ${this.asset1} ${this.asset2}`
            );
        }

        if (typeof assetIn === 'number') {
            assetIn = await fetchAsset(assetIn);
        }

        const [assetOut, inputSupply, outputSupply] =
            assetIn.id === this.asset1
                ? [await fetchAsset(this.asset2), this.asset1Reserve, this.asset2Reserve]
                : [await fetchAsset(this.asset1), this.asset2Reserve, this.asset1Reserve];

        const k = this.asset1Reserve * this.asset2Reserve;

        // We assume that amount is in microalgos
        const amountAfterFees = (amountIn * BigInt(997)) / BigInt(1000);
        const newAmountAfterFees = amountAfterFees > BigInt(0) ? amountAfterFees : BigInt(1);
        const amountOut = outputSupply - k / (inputSupply + newAmountAfterFees);

        const decRatio = 10 ** (assetIn.decimals - assetOut.decimals);
        const bignumSlippage = BigInt(slippage * 1000);
        const minimalAmountOut = amountOut - (amountOut * bignumSlippage) / BigInt(1000);

        const swapPrice = Number(amountOut) / Number(amountIn);
        const poolPrice = Number(outputSupply) / Number(inputSupply);
        const priceImpact = Math.abs(swapPrice / poolPrice - 1);

        return new TinymanSwap(this, {
            assetIn,
            assetOut,
            amountIn,
            amountOut,
            minimalAmountOut,
            price: (Number(minimalAmountOut) / Number(amountIn)) * decRatio,
            fee: BigInt(amountIn - newAmountAfterFees),
            slippage,
            priceImpact,
        });
    }

    async getMint(assetA: AssetId | Asset, amountA: bigint, slippage: number): Promise<Mint> {
        if (assetId(assetA) !== this.asset1 && assetId(assetA) !== this.asset2) {
            throw new Error(
                `cannot get mint with token ${assetId(assetA)} from pool of tokens ${this.asset1} ${this.asset2}`
            );
        }

        if (this.totalLiquidity === BigInt(0)) {
            throw new Error('first mint is not supported yet');
        }

        if (typeof assetA === 'number') {
            assetA = await fetchAsset(assetA);
        }

        const lpToken = await fetchAsset(this.liquidityAsset);

        let amount1: Amount;
        let amount2: Amount;
        let amountB: Amount;
        let assetB: Asset;
        if (assetA.id === this.asset1) {
            amount1 = amountA;
            amountB = amount2 = (amount1 * this.asset2Reserve) / this.asset1Reserve;
            assetB = await fetchAsset(this.asset2);
        } else {
            amount2 = amountA;
            amountB = amount1 = (amount2 * this.asset1Reserve) / this.asset2Reserve;
            assetB = await fetchAsset(this.asset1);
        }

        const liqA = (amount1 * this.totalLiquidity) / this.asset1Reserve;
        const liqB = (amount2 * this.totalLiquidity) / this.asset1Reserve;
        const liquidityIssued = liqA < liqB ? liqA : liqB;
        const bigintSlippage = BigInt(slippage * 1000);
        const minimalLiquidityIssued = liquidityIssued - (liquidityIssued * bigintSlippage) / BigInt(1000);

        return new TinymanMint(this, {
            assetA,
            assetB,
            lpToken,
            amountA,
            amountB,
            liquidityIssued,
            minimalLiquidityIssued,
            slippage,
        });
    }

    async getZap(assetIn: AssetId | Asset, amountIn: Amount, slippage: number): Promise<Zap> {
        const halfForSwap = amountIn / BigInt(2);
        const halfForMint = amountIn - halfForSwap;

        const swap = await this.getSwap(assetIn, halfForSwap, slippage);
        const assetOut = swap.assetOut;
        const amountOut = swap.minimalAmountOut;

        // FIXME: The problem with zap is that after the swap is complete,
        // the distribution of tokens in the pool has changed. So the slippage is inevitable.
        // Here we can make sure that we have enough tokens to perform the mint
        // in the state of the pool which was __before__ the swap. But it will not be the
        // same after the swap is done (unless, ironically, if the swap was routed - then everything
        // is simpler). If the swap was small in comparison to the pool's liquidity, then the
        // slippage will cover it. But I suspect that on testnet it is routinely not the case.
        //
        // To be precise, we will have to __simulate__ the swap on the pool so that the mint quote is
        // as valid as the quote obtained from the pool after the swap is done.

        // we need to account for FEES.
        if (assetId(assetIn) === this.asset1) {
            this.asset1Reserve += (swap.amountIn * BigInt(997)) / BigInt(1000);
            this.asset2Reserve -= swap.minimalAmountOut;
        } else if (assetId(assetIn) === this.asset2) {
            this.asset2Reserve += (swap.amountIn * BigInt(997)) / BigInt(1000);
            this.asset1Reserve -= swap.minimalAmountOut;
        } else {
            throw new Error('impossible: bad pool');
        }

        // AssetA = assetOut
        // assetB = assetIn
        let mint = await this.getMint(assetOut, amountOut, slippage);

        if (mint.amountB > halfForMint) {
            // Try the other way
            mint = await this.getMint(assetIn, halfForMint, slippage);
            if (mint.amountB > amountOut) {
                // Is it possible? seemingly not, but who knows, mb something something
                // integer division troubles
                throw new Error('impossible: cannot perform the mint either way!');
            }
        }

        return {
            swap,
            mint,
            dex: 'T2',
            prepareTxs: async (sender: string) => {
                const swapTxs = await swap.prepareTxs(sender);
                const mintTxs = await mint.prepareTxs(sender);
                return [...swapTxs, ...mintTxs];
            },
        };
    }
}

/**
 * Swap operation on Tinyman
 */
export class TinymanSwap implements Swap {
    private pool: TinymanPool;
    dex: DexProvider = 'T2';

    assetIn: Asset;
    assetOut: Asset;
    amountIn: Amount;
    amountOut: Amount;
    minimalAmountOut: Amount;
    price: number;
    fee: Amount;
    slippage: number;
    priceImpact: number;

    constructor(pool: TinymanPool, params: SwapQuote) {
        this.pool = pool;

        this.assetIn = params.assetIn;
        this.assetOut = params.assetOut;
        this.amountIn = params.amountIn;
        this.amountOut = params.amountOut;
        this.minimalAmountOut = params.minimalAmountOut;
        this.price = params.price;
        this.fee = params.fee;
        this.slippage = params.slippage;
        this.priceImpact = params.priceImpact;
    }

    async prepareTxs(sender: string): Promise<WalletTransactionGroup[]> {
        const suggestedParameters = await this.pool.dex.algod.getTransactionParams().do();
        const txs = Tinyman.prepareSwapTransactions({
            validatorAppId: this.pool.dex.validatorAppId,
            a1: this.pool.asset1,
            a2: this.pool.asset2,
            lpTokenId: this.pool.liquidityAsset,
            assetInId: assetId(this.assetIn),
            assetInAmount: Number(this.amountIn),
            assetOutAmount: Number(this.minimalAmountOut),
            swapType: 'fi',
            sender,
            suggestedParams: suggestedParameters,
        });

        const group = encodeMaybeTxs(txs);
        group.usedApps = [this.pool.dex.validatorAppId];
        group.usedAssets = [this.pool.asset1, this.pool.asset2];
        return [group];
    }
}

export class TinymanMint implements Mint {
    private pool: TinymanPool;
    dex: DexProvider = 'T2';

    assetA: Asset;
    assetB: Asset;
    lpToken: Asset;
    amountA: Amount;
    amountB: Amount;
    liquidityIssued: Amount;
    minimalLiquidityIssued: Amount;
    slippage: number;

    constructor(pool: TinymanPool, params: MintQuote) {
        this.pool = pool;

        this.assetA = params.assetA;
        this.assetB = params.assetB;
        this.lpToken = params.lpToken;
        this.amountA = params.amountA;
        this.amountB = params.amountB;
        this.liquidityIssued = params.liquidityIssued;
        this.minimalLiquidityIssued = params.minimalLiquidityIssued;
        this.slippage = params.slippage;
    }

    async prepareTxs(sender: string): Promise<WalletTransactionGroup[]> {
        const suggestedParameters = await this.pool.dex.algod.getTransactionParams().do();
        const txs = Tinyman.prepareMintTransactions({
            validatorAppId: this.pool.dex.validatorAppId,
            a1: assetId(this.assetA),
            a2: assetId(this.assetB),
            lpTokenId: assetId(this.lpToken),
            assetInAmount: Number(this.amountA),
            assetOutAmount: Number(this.amountB),
            lpAmount: Number(this.minimalLiquidityIssued),
            sender,
            suggestedParams: suggestedParameters,
        });

        const group = encodeMaybeTxs(txs);
        group.usedApps = [this.pool.dex.validatorAppId];
        group.usedAssets = [this.pool.asset1, this.pool.asset2, this.pool.liquidityAsset];
        return [group];
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

    algod: any;
    validatorAppId: AppId;

    constructor(algod: any) {
        super();
        this.algod = algod;
        this.validatorAppId = TinymanDex.VALIDATOR_APP_ID[ALGONET];
    }

    async getPool(poolId: AppId): Promise<TinymanPool> {
        // Funnily enough, getting the pool info by creator address is one step less,
        // because Tinyman pool is a LogicSig and everything is in the creator's local state.
        const { creator } = await this.algod.getApplicationByID(poolId).do();
        return this.getPoolByAddress(creator);
    }

    getPoolAddress(asset1_id: AssetId, asset2_id: AssetId): string {
        const logicSig = Tinyman.getPoolLogicSig(asset1_id, asset2_id, this.validatorAppId);
        return logicSig.address();
    }

    async getPoolByAddress(poolAddress: string): Promise<TinymanPool> {
        const accountInfo = await this.algod.accountInformation(poolAddress).do();
        const tinymanPoolData = await getTinymanPools(1, poolAddress);

        try {
            return new TinymanPool(this, accountInfo, tinymanPoolData[0]);
        } catch (e) {
            console.log('No tinyman pool found', e);
            throw new Error(`No Tinyman pool for address ${poolAddress} is found`);
        }
    }

    async getPoolByAssets(a1: AssetId | Asset, a2: AssetId | Asset): Promise<TinymanPool> {
        const logicSig = Tinyman.getPoolLogicSig(assetId(a1), assetId(a2), this.validatorAppId);
        return this.getPoolByAddress(logicSig.address());
    }

    async getAllRedeemTxs(sender: string | any): Promise<WalletTransactionGroup[]> {
        const suggestedParams = await this.algod.getTransactionParams().do();

        if (typeof sender === 'string') {
            sender = await this.algod.accountInformation(sender).do();
        }

        const validatorLocalState = sender['apps-local-state'].filter((app: any) => app.id === this.validatorAppId);
        if (validatorLocalState.length === 0) {
            console.warn('No validator local state found!');
            return [];
        }

        const st = validatorLocalState[0]['key-value'];
        if (!st) {
            return [];
        }
        let txGroups: WalletTransactionGroup[] = [];

        for (const { key, value } of st) {
            const decoded = Buffer.from(key, 'base64');
            const poolAddress = algosdk.encodeAddress(decoded.subarray(0, 32));
            const assetId = decoded.readUint32BE(decoded.length - 4);
            const assetAmount = value.uint;

            const pool = await this.getPoolByAddress(poolAddress);
            const maybeTxs = Tinyman.prepareRedeemTransactions({
                validatorAppId: this.validatorAppId,
                a1: pool.asset1,
                a2: pool.asset2,
                lpTokenId: pool.liquidityAsset,
                assetOutId: assetId,
                assetOutAmount: assetAmount,
                sender: sender.address,
                suggestedParams,
            });

            const group = encodeMaybeTxs(maybeTxs);
            group.usedApps = [this.validatorAppId];
            group.usedAssets = [assetId];
            txGroups = [...txGroups, group];
        }

        return txGroups;
    }
}
