import algosdk from 'algosdk';
import pactsdk from '@pactfi/pactsdk';

import { ALGONET, TESTNET, algod } from '../AppContext';
import { Asset, AssetId, assetId, fetchAsset, AppId, Amount } from '../common/store';
import { WalletTransactionGroup } from '../types';
import { Dex, PoolInfo, SwapQuote, MintQuote } from './common';

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
            dexFeeApr: 0, // TODO
        };
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
        let poolAssets: AssetId[] = accountInfo.assets
            .map((a: any) => a['asset-id'])
            .filter((id: AssetId) => id !== lpTokenId);

        if (poolAssets.length < 2) {
            poolAssets = [0, ...poolAssets];
        }

        // Repeated code, yes, but we need to filter by lpTokenId here because Pact can have several pools on a pair
        const pools = await this.pact.fetchPoolsByAssets(poolAssets[0], poolAssets[1]);
        const selectedPool = pools.find((pool: pactsdk.Pool) => pool.liquidityAsset.index === lpTokenId)!;
        return this.fixPactPoolDefaults(selectedPool, poolAssets[0], poolAssets[1]).then((pool) =>
            this.poolToPoolInfo(pool)
        );
    }

    async getPoolInfoByAssets(a1: AssetId | Asset, a2: AssetId | Asset): Promise<PoolInfo> {
        return this.getMostLiquidPool(a1, a2).then((pool) => this.poolToPoolInfo(pool));
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
            this.makePactAsset(assetOut); // This simply ensures that Pact asset cache also gets updated
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

    /* eslint-disable */
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
    /* eslint-enable */
}
