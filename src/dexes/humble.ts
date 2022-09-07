import { CONSOLE_LEVELS } from '.store/@sentry-utils-npm-7.8.0-d80ccccdcb/package';
import * as humble from '@reach-sh/humble-sdk';
import algosdk from 'algosdk';
import { createEvent, createStore, sample, Store } from 'effector';
import { Map } from 'immutable';
import { maxBy } from 'ramda';

import { ALGONET, MAINNET } from '../AppContext';
import { Asset, AssetId, AppId, fetchAsset } from '../common/store';
import { assetId, fetchStore } from '../common/store/utils';
import { Dex, DexPool, DexProvider, Mint, Swap, Zap } from './common';

humble.initHumbleSDK({
    network: ALGONET,
    // Those fuckers are using a DIFFERENT master contract on their testnet!
    // You cannot imagine how long it took to figure out those params!
    customTriumvirateAddress: 'XSWSQVQPFMTEQO7UTXGQA5CSSYCDBT2WEN5XWNQ76EBLT2CFRV2HBYKZBE',
    customTriumvirateId: '93443561',
    providerEnv: process.env as unknown as humble.AlgoEnvOverride,
});

const humbleReach: humble.ReachStdLib = humble.createReachAPI();

export class HumblePool implements DexPool {
    poolId: number;
    poolDex: DexProvider = 'HM';
    asset1: number;
    asset2: number;
    liquidityAsset: number;
    asset1Reserve: bigint;
    asset2Reserve: bigint;
    totalLiquidity: bigint;
    dexFeeApr: number;

    ctc: any;
    origDetails: humble.PoolDetails;

    constructor(data: humble.PoolDetails, ctc: any) {
        console.log('HUMBLE POOL ID', data.poolAddress, data.poolTokenId);
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

        this.ctc = ctc;
        this.origDetails = data;
    }

    async getSwap(assetIn: AssetId | Asset, amountIn: bigint, slippage: number): Promise<Swap> {
        // Slippage is a fucking GLOBAL PARAMETER IN THIS SDK can you imagine?
        humble.setSlippage(slippage);
        if (typeof assetIn === 'number') {
            assetIn = await fetchAsset(assetIn);
        }
        const assetOut = await fetchAsset(assetId(assetIn) == this.asset1 ? this.asset2 : this.asset1);

        const swap = humble.calculateTokenSwap({
            pool: this.origDetails,
            swap: { tokenAId: assetId(assetIn), tokenBId: assetId(assetOut), amountA: amountIn },
        });

        return {
            dex: 'HM',
            assetIn,
            assetOut,
            amountIn: BigInt(swap.amountA),
            amountOut: BigInt(swap.amountB),
            minimalAmountOut: BigInt(swap.amountB), // humbleSDK does not separate those two concepts, I see...
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
    private algod: algosdk.Algodv2;
    private $existingPools: Store<Map<AppId, HumblePool>>;
    private account: humble.ReachAccount | null;

    constructor(algod: algosdk.Algodv2) {
        super();
        this.algod = algod;

        const poolExists = createEvent<HumblePool>();
        this.$existingPools = createStore(Map<AppId, HumblePool>());

        this.$existingPools.on(poolExists, (pools, pool) => pools.set(pool.poolId, pool));
        this.account = null;

        humbleReach.createAccount().then((acc) => {
            this.account = acc;
            humble.subscribeToPoolStream(acc, {
                onPoolFetched: ({ succeeded, data: { pool, tradeable }, contract }: any) => {
                    if (succeeded && pool) {
                        poolExists(new HumblePool(pool, contract));
                    } else {
                        console.log('failed humble pool?', pool);
                    }
                },
            });
        });
    }

    async getPool(poolId: AppId, n2nn = true): Promise<HumblePool> {
        // TODO: All will be rewritten after pool list is on the backend
        const TIMEOUT = 10000; // arbitraty timeout

        return new Promise<HumblePool>((resolve, reject) => {
            sample({ source: this.$existingPools.map((pools) => pools.get(poolId)) }).watch(
                (pool) => pool && resolve(pool)
            );
            setTimeout(() => reject('humble pool wait timeout'), TIMEOUT);
        });
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

    async getPoolsByAssets(asset1: number | Asset, asset2: number | Asset): Promise<HumblePool[]> {
        return this.waitForPoolsFiltered((pool: HumblePool) => {
            return (
                (pool.asset1 === assetId(asset1) && pool.asset2 === assetId(asset2)) ||
                (pool.asset2 === assetId(asset1) && pool.asset1 === assetId(asset2))
            );
        });
    }

    private async waitForPoolsFiltered(criterion: (pool: HumblePool) => boolean): Promise<HumblePool[]> {
        // TODO: Look at this. Isn't it пиздец какой-то?
        const TIMEOUT = 10000; // arbitraty timeout

        return new Promise<HumblePool[]>((resolve, reject) => {
            const unsub = sample({ source: this.$existingPools }).watch((pools) => {
                const res = pools.toList().toArray().filter(criterion);

                if (res.length > 0) {
                    // if (unsub) {
                    //     unsub();
                    // }
                    resolve(res);
                }
            });

            setTimeout(() => reject('humble pool wait timeout'), TIMEOUT);
        });
    }
}
