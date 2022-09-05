import * as humble from '@reach-sh/humble-sdk';
import algosdk from 'algosdk';
import { createEvent, createStore, sample, Store } from 'effector';
import { Map } from 'immutable';

import { ALGONET, MAINNET } from '../AppContext';
import { $account, Asset, AssetId, AppId, fetchAsset } from '../common/store';
import { assetId, fetchStore } from '../common/store/utils';
import { WalletTransactionGroup } from '../types';
import { Dex, DexPool, DexProvider, Mint, Swap, Zap } from './common';

humble.initHumbleSDK({
    network: ALGONET,
    providerEnv: process.env as unknown as humble.AlgoEnvOverride,
});

const humbleReach: humble.ReachStdLib = humble.createReachAPI();

// export class HumbleSwap implements Swap {
//     dex: DexProvider = 'HM';

//     assetIn: Asset;
//     assetOut: Asset;
//     amountIn: bigint;
//     amountOut: bigint;
//     minimalAmountOut: bigint;
//     price: number;
//     fee: bigint;
//     slippage: number;
//     priceImpact: number;

//     constructor(info: humble.SwapInfo) {

//     }

//     prepareTxs(sender: string): Promise<WalletTransactionGroup[]> {
//         throw new Error('Method not implemented.');
//     }
// }

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
        this.poolId = Number(data.poolAddress); // it's always a `number` for Algorand...
        this.asset1 = Number(data.tokenAId);
        this.asset2 = Number(data.tokenBId);
        this.liquidityAsset = Number(data.poolTokenId);

        this.asset1Reserve = BigInt(data.tokenABalance ?? 0);
        this.asset2Reserve = BigInt(data.tokenBBalance ?? 0);
        this.totalLiquidity = BigInt(data.mintedLiquidityTokens ?? 0);

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
    private $existingPools: Store<Map<[AssetId, AssetId], AppId>>;

    constructor(algod: algosdk.Algodv2) {
        super();
        this.algod = algod;

        const poolAvailable = createEvent<[AppId, AssetId, AssetId]>();
        this.$existingPools = createStore(Map<[AssetId, AssetId], AppId>());

        this.$existingPools.on(poolAvailable, (pools, [appId, assetA, assetB]) => pools.set([assetA, assetB], appId));

        humbleReach.createAccount().then((acc) => {
            humble.subscribeToPoolStream(acc, {
                onPoolReceived: (info: any) => poolAvailable(info.map(Number)),
            });
        });
    }

    async getPool(poolId: number | string): Promise<HumblePool> {
        // A very un-idiomatic way of fetching an account but what else to do
        let account = (await fetchStore($account)) as humble.ReachAccount | null;

        if (account === null) {
            account = await humbleReach.createAccount();
        }

        console.log('HUMBLE: account used', account.networkAccount.addr);

        const { succeeded, data, contract, message } = await humble.fetchLiquidityPool(account, {
            n2nn: true, // TODO: wtf to do about this fucking flag?
            poolAddress: poolId,
        });

        console.log('HUMBLE POOL FETCHED!', data);

        if (succeeded && data.pool !== null) {
            return new HumblePool(data.pool, contract);
        } else {
            throw new Error(`Could not fetch Humble pool: ${message}`);
        }
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

        return this.getPoolByAssets(assetA, assetB);
    }

    async getPoolByAssets(asset1: number | Asset, asset2: number | Asset): Promise<HumblePool> {
        const poolId = await this.waitForPoolByAssets(assetId(asset1), assetId(asset2));
        console.log('HUMBLE: poolId', poolId);
        return this.getPool(poolId);
    }

    private async waitForPoolByAssets(assetA: AssetId, assetB: AssetId): Promise<AppId> {
        // TODO: Look at this. Isn't it пиздец какой-то?
        const TIMEOUT = 5000; // arbitraty timeout

        return new Promise<AppId>((resolve, reject) => {
            const unsub = sample({ source: this.$existingPools }).watch((pools) => {
                const key = `${assetA},${assetB}`;
                // const res = pools.get([assetA, assetB], pools.get([assetB, assetA], null));
                const res = (pools.toJS()[key] as AppId) ?? null;

                if (res !== null) {
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
