import { Buffer } from 'buffer';
import algosdk from 'algosdk';
import { min, max } from 'ramda';

import { TESTNET, MAINNET, ALGONET } from '../../AppContext';
import { toReachTxn } from '../../common/lib';
import { AppId, Asset, AssetId, assetId, Amount, fetchAsset } from '../../common/store';
import { getTinymanPools } from '../../providers/apiProvider';
import { WalletTransactionGroup } from '../../types';

import { Dex, PoolInfo, SwapQuote, MintQuote } from '../common';
import * as Tinyman from './internal';

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
        // Funnily enough, getting the pool info by creator address is one step less,
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

        const poolId = appInfo.id;
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

        const liquidityAsset = accountInfo['created-assets'][0].index;

        const tinymanPoolData = await getTinymanPools(1, poolAddress);
        const dexFeeApr = tinymanPoolData[0].annual_percentage_rate;

        return {
            poolId,
            poolDex: 'T2',
            asset1: a1,
            asset2: a2,
            liquidityAsset,
            asset1Reserve: BigInt(s1),
            asset2Reserve: BigInt(s2),
            totalLiquidity: BigInt(appState.ilt),
            dexFeeApr,
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
        const newAmountAfterFees = amountAfterFees > BigInt(0) ? amountAfterFees : BigInt(1);
        const amountOut = outputSupply - k / (inputSupply + newAmountAfterFees);

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
            fee: BigInt(amountIn - newAmountAfterFees),
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
        const suggestedParameters = await this.algod.getTransactionParams().do();
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
            suggestedParams: suggestedParameters,
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

        let amount1: Amount;
        let amount2: Amount;
        let amountB: Amount;
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
        const suggestedParameters = await this.algod.getTransactionParams().do();
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
            suggestedParams: suggestedParameters,
        });

        const group = this.encodeMaybeTxs(txs);
        group.usedApps = [this.validatorAppId];
        group.usedAssets = [pool.asset1, pool.asset2, pool.liquidityAsset];
        return [group];
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
        let txGroups: WalletTransactionGroup[] = [];

        for (const { key, value } of st) {
            const decoded = Buffer.from(key, 'base64');
            const poolAddress = algosdk.encodeAddress(decoded.subarray(0, 32));
            const assetId = decoded.readUint32BE(decoded.length - 4);
            const assetAmount = value.uint;

            const pool = await this.getPoolInfoByAddress(poolAddress);
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

            const group = this.encodeMaybeTxs(maybeTxs);
            group.usedApps = [this.validatorAppId];
            group.usedAssets = [assetId];
            txGroups = [...txGroups, group];
        }

        return txGroups;
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
