import algosdk from 'algosdk';
import pactsdk from '@pactfi/pactsdk';

import { ALGONET, TESTNET, algod } from '../AppContext';
import { Asset, AssetId, assetId, fetchAsset, AppId, Amount } from '../common/store';
import { WalletTransactionGroup } from '../types';
import { toReachTxn } from '../common/lib';
import { Dex, DexPool, DexProvider, Swap, Mint, Zap } from './common';

function fromPactTxGroup(
    pactTxs: pactsdk.TransactionGroup,
    usedApps: AppId[],
    usedAssets: AssetId[]
): WalletTransactionGroup[] {
    const firstTxID = pactTxs.transactions[0].txID();
    const txns = pactTxs.transactions.map(toReachTxn);
    return [{ firstTxID, txns, usedApps, usedAssets }];
}

async function fromPactSwap(swap: pactsdk.Swap): Promise<Swap> {
    const assetIn = await fetchAsset(swap.assetDeposited.index);
    const assetOut = await fetchAsset(swap.assetReceived.index);

    return {
        dex: 'PT',
        assetIn,
        assetOut,
        amountIn: BigInt(swap.effect.amountDeposited),
        amountOut: BigInt(swap.effect.amountReceived),
        minimalAmountOut: BigInt(swap.effect.minimumAmountReceived),
        price: swap.effect.price,
        fee: BigInt(swap.effect.fee),
        slippage: swap.slippagePct / 100,

        prepareTxs: async (sender) => {
            const pactTxs = await swap.prepareTxGroup(sender);
            return fromPactTxGroup(pactTxs, [], [assetId(assetIn), assetId(assetOut)]);
        },
    };
}

async function fromPactMint(mint: pactsdk.LiquidityAddition, slippage: number): Promise<Mint> {
    const assetA = await fetchAsset(mint.pool.primaryAsset.index);
    const assetB = await fetchAsset(mint.pool.secondaryAsset.index);
    const lpToken = await fetchAsset(mint.pool.liquidityAsset.index);

    return {
        dex: 'PT',
        assetA,
        assetB,
        lpToken,
        amountA: BigInt(mint.primaryAssetAmount),
        amountB: BigInt(mint.secondaryAssetAmount),
        liquidityIssued: BigInt(mint.effect.mintedLiquidityTokens),
        minimalLiquidityIssued: BigInt(Math.floor(mint.effect.mintedLiquidityTokens * (1 - slippage))),
        slippage,

        prepareTxs: async (sender) => {
            const pactTxs = await mint.prepareTxGroup(sender);
            return fromPactTxGroup(pactTxs, [], [assetA, assetB, lpToken].map(assetId));
        },
    };
}

async function fromPactZap(zap: pactsdk.Zap): Promise<Zap> {
    const swap = await fromPactSwap(zap.swap);
    const mint = await fromPactMint(zap.liquidityAddition, zap.slippagePct / 100);
    const { primaryAsset, secondaryAsset, liquidityAsset } = zap.pool;

    return {
        dex: 'PT',
        swap,
        mint,
        prepareTxs: async (sender) => {
            const pactTxs = await zap.prepareTxGroup(sender);
            return fromPactTxGroup(pactTxs, [], [primaryAsset.index, secondaryAsset.index, liquidityAsset.index]);
        },
    };
}

/**
 * Wrapper for `pactsdk.Pool`.
 */
export class PactPool implements DexPool {
    poolDex: DexProvider = 'PT';
    dexFeeApr = 0; // TODO

    private _dex: PactDex;
    private _pool: pactsdk.Pool;

    readonly poolId: AppId;
    readonly asset1: AssetId;
    readonly asset2: AssetId;
    readonly liquidityAsset: AssetId;

    asset1Reserve: Amount;
    asset2Reserve: Amount;
    totalLiquidity: Amount;

    constructor(dex: PactDex, pool: pactsdk.Pool) {
        this._dex = dex;
        this._pool = pool;
        this.poolId = pool.appId;
        this.asset1 = pool.primaryAsset.index;
        this.asset2 = pool.secondaryAsset.index;
        this.liquidityAsset = pool.liquidityAsset.index;

        this.asset1Reserve = BigInt(pool.state.totalPrimary);
        this.asset2Reserve = BigInt(pool.state.totalSecondary);
        this.totalLiquidity = BigInt(pool.state.totalLiquidity);
    }

    async getSwap(assetIn: AssetId | Asset, amountIn: Amount, slippage: number): Promise<Swap> {
        return fromPactSwap(
            this._pool.prepareSwap({
                asset: this._dex.makePactAsset(assetIn),
                amount: Number(amountIn), // Pact SDK assumes that input amounts fit into Number
                slippagePct: slippage * 100,
            })
        );
    }

    async getMint(assetA: AssetId | Asset, amountA: Amount, slippage: number): Promise<Mint> {
        let primaryAssetAmount, secondaryAssetAmount: number;

        if (assetId(assetA) == this.asset1) {
            primaryAssetAmount = Number(amountA);
            secondaryAssetAmount = Math.floor(primaryAssetAmount * this._pool.state.primaryAssetPrice);
        } else {
            secondaryAssetAmount = Number(amountA);
            primaryAssetAmount = Math.floor(secondaryAssetAmount * this._pool.state.secondaryAssetPrice);
        }

        return fromPactMint(
            this._pool.prepareAddLiquidity({
                primaryAssetAmount,
                secondaryAssetAmount,
            }),
            slippage
        );
    }

    async getZap(assetIn: AssetId | Asset, amountIn: Amount, slippage: number): Promise<Zap> {
        return fromPactZap(
            this._pool.prepareZap({
                asset: this._dex.makePactAsset(assetIn),
                amount: Number(amountIn),
                slippagePct: slippage * 100,
            })
        );
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

    makePactAsset(asset: AssetId | Asset): pactsdk.Asset {
        const id = assetId(asset);
        const pAsset = new pactsdk.Asset(this.algod, id);
        if (typeof asset === 'number') {
            return pAsset; // Leave it to pact sdk to fetch everything else if needed
        }
        pAsset.name = asset.name;
        pAsset.unitName = asset.unitName;
        pAsset.decimals = asset.decimals;
        pAsset.ratio = 10 ** pAsset.decimals;
        pactsdk.Asset.assetsCache[id] = pAsset; // Never fetch it again
        return pAsset;
    }

    async fixPactPoolDefaults(pool: pactsdk.Pool, a1: AssetId | Asset, a2: AssetId | Asset): Promise<pactsdk.Pool> {
        // Weird shit with incompleteness of Pact's pool state info
        if (pool.primaryAsset.index === 0 && pool.secondaryAsset.index === 0) {
            if (assetId(a2) < assetId(a1)) {
                [a2, a1] = [a1, a2];
            }

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

    async getPool(poolId: AppId): Promise<PactPool> {
        // TODO: how to fix stupid 0/0 pact pool defaults here?
        return new PactPool(this, await this.pact.fetchPoolById(poolId));
    }

    // TODO: No easier way to figure out the Pact pool from its address
    async getPoolByAddress(poolAddress: string): Promise<PactPool> {
        const accountInfo = await algod.accountInformation(poolAddress).do();
        const lpTokenId = accountInfo['created-assets'][0].index;
        let poolAssets: AssetId[] = accountInfo.assets
            .map((a: any) => a['asset-id'])
            .filter((id: AssetId) => id !== lpTokenId);

        if (poolAssets.length < 2) {
            poolAssets = [0, ...poolAssets];
        }

        // Repeated code, yes, but we need to filter by lpTokenId here because Pact can have several pools on a pair
        const pools = await this.pact.fetchPoolsByAssets(poolAssets[0], poolAssets[1]);
        const selectedPool = pools.find((pool: pactsdk.Pool) => pool.liquidityAsset.index === lpTokenId)!;
        return new PactPool(this, await this.fixPactPoolDefaults(selectedPool, poolAssets[0], poolAssets[1]));
    }

    async getPoolByAssets(a1: AssetId | Asset, a2: AssetId | Asset): Promise<PactPool> {
        return new PactPool(this, await this.getMostLiquidPool(a1, a2));
    }
}
