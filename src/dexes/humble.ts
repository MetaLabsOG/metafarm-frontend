import algosdk from 'algosdk';
import { maxBy } from 'ramda';

import { instance as backendAxios } from '../providers/apiProvider';
import { Asset, AssetId, AppId, fetchAsset } from '../common/store';
import { assetId } from '../common/store/utils';
import { fromSmallestUnits, getSmallestUnits } from '../common/lib';
import { Dex, DexPool, DexProvider, Mint, Swap, Zap } from './common';

import * as MiniHumble from './humbleReexports';

export class HumblePool implements DexPool {
    poolId: number;
    poolDex: DexProvider = 'H2';
    asset1: number;
    asset2: number;
    liquidityAsset: number;
    asset1Reserve: bigint;
    asset2Reserve: bigint;
    totalLiquidity: bigint;
    dexFeeApr: number;

    origDetails: MiniHumble.PoolDetails;

    constructor(data: MiniHumble.PoolDetails) {
        this.poolId = Number(data.poolAddress); // it's always a `number` for Algorand...
        this.asset1 = Number(data.tokenAId);
        this.asset2 = Number(data.tokenBId);
        this.liquidityAsset = Number(data.poolTokenId);

        this.totalLiquidity = BigInt(data.mintedLiquidityTokens ?? '0');

        this.asset1Reserve = data.tokenABalance
            ? BigInt(Math.round(Number(data.tokenABalance) * 10 ** (data.tokenADecimals ?? 0)))
            : BigInt(0);
        this.asset2Reserve = data.tokenBBalance
            ? BigInt(Math.round(Number(data.tokenABalance) * 10 ** (data.tokenADecimals ?? 0)))
            : BigInt(0);

        // I don't know what to do with this yet
        this.dexFeeApr = 0;

        this.origDetails = data;
    }

    async getSwap(assetIn: AssetId | Asset, amountIn: bigint, slippage: number): Promise<Swap> {
        if (typeof assetIn === 'number') {
            assetIn = await fetchAsset(assetIn);
        }
        const assetOut = await fetchAsset(assetId(assetIn) == this.asset1 ? this.asset2 : this.asset1);

        const amountInStr = fromSmallestUnits(assetIn, amountIn).toString();
        const swap = MiniHumble.calculateTokenSwap({
            pool: this.origDetails,
            swap: { tokenAId: assetId(assetIn), tokenBId: assetId(assetOut), amountA: amountInStr },
        });

        const amountOut = getSmallestUnits(assetOut, Number(swap.amountB));

        return {
            dex: 'H2',
            assetIn,
            assetOut,
            amountIn,
            amountOut,
            minimalAmountOut: (amountOut * BigInt(Math.round(100 - slippage * 100))) / BigInt(100),
            price: Number(swap.amountB) / Number(swap.amountA),
            priceImpact: 0, // TODO: calculate
            fee: BigInt(0), // TODO: how to fucking get it??? ok seems to be 0.25%
            slippage,

            prepareTxs: async (sender) => {
                throw new Error('Method not implemented');
            },
        };
    }
    getMint(assetIn: AssetId | Asset, amountIn: bigint, slippage: number): Promise<Mint> {
        throw new Error('Method not implemented.');
    }
    getZap(assetIn: AssetId | Asset, amountIn: bigint, slippage: number): Promise<Zap> {
        throw new Error('Method not implemented.');
    }
}

/**
 * Wrapper for Humble SDK
 */
export class HumbleDex extends Dex {
    private algod: any;

    constructor(algod: any) {
        super();
        this.algod = algod;
    }

    async getPool(poolId: AppId, n2nn = true): Promise<HumblePool> {
        const poolData = await backendAxios
            .get<MiniHumble.PoolDetails>(`/humble/pool/${poolId}`)
            .then(({ data }) => data);
        return new HumblePool(poolData);
    }

    async getPoolByAddress(poolAddress: string): Promise<HumblePool> {
        const poolAccountInfo = await this.algod.accountInformation(poolAddress).do();
        const liquidityToken: AssetId = poolAccountInfo['created-assets'][0]['index'];
        const ownedAssets = poolAccountInfo.assets
            .map((a: any) => a['asset-id'])
            .filter((id: AssetId) => id !== liquidityToken);

        if (ownedAssets.length < 2) {
            ownedAssets.unshift(0);
        }
        ownedAssets.sort();
        const [assetA, assetB] = ownedAssets;

        const fittingPools = await this.getPoolsByAssets(assetA, assetB);
        const foundPools = fittingPools.filter((pool) => pool.liquidityAsset === liquidityToken);
        if (foundPools.length === 0) {
            throw new Error(`Could not find any Humble pool fitting an address ${poolAddress}`);
        }
        return foundPools[0];
    }

    async getPoolByAssets(asset1: number | Asset, asset2: number | Asset): Promise<HumblePool> {
        const fittingPools = await this.getPoolsByAssets(asset1, asset2);
        const mostLiquid = fittingPools.reduce((a, b) => maxBy((p) => Number(p.totalLiquidity), a, b));
        return mostLiquid;
    }

    async getPoolsByAssets(assetA: number | Asset, assetB: number | Asset): Promise<HumblePool[]> {
        assetA = assetId(assetA);
        assetB = assetId(assetB);

        if (assetA > assetB) {
            [assetB, assetA] = [assetA, assetB];
        }

        const poolDatas = await backendAxios
            .get<MiniHumble.PoolDetails[]>(`/humble/pools?assetA=${assetA}&assetB=${assetB}`)
            .then(({ data }) => data);
        return poolDatas.map((pool) => new HumblePool(pool));
    }
}
