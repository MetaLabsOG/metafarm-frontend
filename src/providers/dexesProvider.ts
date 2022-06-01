import algosdk from 'algosdk';
import pactsdk from '@pactfi/pactsdk';
import { max, min } from 'ramda';
import { Buffer } from 'buffer';

import { ALGONET, MAINNET, TESTNET, algod } from '../AppContext';
import { AppId, Asset, AssetId } from '../common/store/types';
import { assetId } from '../common/store/utils';

import TINYMAN_ASC from './tinyman_asc.json';

export type DexProvider =
    | 'T2' // Tinyman v1.1
    | 'PT' // Pact
    | 'MOCK'; // Mock dex (random tokens are staked)

export type PoolInfo = {
    poolId: AppId;
    poolDex: DexProvider;
    asset1: number;
    asset2: number;
    asset1Reserve: number;
    asset2Reserve: number;
    totalLiquidity: number;
};

export type LPTokenInfo = Asset & PoolInfo;

export type SwapQuote = {
    totalPrice: number;
    perToken: number;
};

export interface Dex {
    getPoolInfo: (poolId: AppId) => Promise<PoolInfo>;
    getPoolInfoByAddress: (poolAddress: string) => Promise<PoolInfo>;
    getPoolInfoByAssets: (asset1: AssetId | Asset, asset2: AssetId | Asset) => Promise<PoolInfo>;
    getSwapCost: (fromAsset: AssetId | Asset, toAsset: AssetId | Asset, amount: number) => Promise<SwapQuote>;
}

/**
 * Mock API for dexes (yields data with arbitrary numbers)
 */
export class MockDex implements Dex {
    async getPoolInfo(_: AppId): Promise<PoolInfo> {
        return {
            poolId: 0,
            poolDex: 'MOCK',
            asset1: 0,
            asset2: 10000,
            asset1Reserve: 100000000,
            asset2Reserve: 200000000,
            totalLiquidity: 100000000,
        };
    }

    getPoolInfoByAddress(_: string): Promise<PoolInfo> {
        return this.getPoolInfo(0);
    }

    getPoolInfoByAssets(_1: AssetId | Asset, _2: AssetId | Asset): Promise<PoolInfo> {
        return this.getPoolInfo(0);
    }

    async getSwapCost(_2: AssetId | Asset, _1: AssetId | Asset, amount: number): Promise<SwapQuote> {
        const perToken = 0.01;
        return {
            totalPrice: perToken * amount,
            perToken,
        };
    }
}

/**
 * Subset of Pact API implementation
 */
export class PactDex implements Dex {
    algod: algosdk.Algodv2;
    pact: pactsdk.PactClient;

    constructor(algod: algosdk.Algodv2) {
        this.algod = algod;
        this.pact = new pactsdk.PactClient(
            this.algod,
            ALGONET === TESTNET ? { pactApiUrl: 'https://api.testnet.pact.fi' } : {}
        );
    }

    poolToPoolInfo(pool: pactsdk.Pool, assets: number[]): PoolInfo {
        return {
            poolId: pool.appId,
            poolDex: 'PT',
            asset1: assets[0],
            asset2: assets[1],
            asset1Reserve: pool.state.totalPrimary,
            asset2Reserve: pool.state.totalSecondary,
            totalLiquidity: pool.state.totalLiquidity,
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
        pactsdk.Asset.assetsCache[assetId(asset)] = pAsset; // never fetch it again
        return pAsset;
    }

    async getMostLiquidPool(a1: AssetId | Asset, a2: AssetId | Asset): Promise<pactsdk.Pool> {
        const pools = await this.pact.fetchPoolsByAssets(assetId(a1), assetId(a2));
        if (pools.length === 0) {
            throw new Error(`No Pact pool for assets [${assetId(a1)}, ${assetId(a2)}] found`);
        }
        return pools.sort((a, b) => b.state.totalLiquidity - a.state.totalLiquidity)[0];
    }

    async getPoolInfo(poolId: AppId): Promise<PoolInfo> {
        return this.poolToPoolInfo(await this.pact.fetchPoolById(poolId), [0, 0]);
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
        const selectedPool = pools.filter((pool: any) => pool.liquidityAsset.index === lpTokenId)[0];

        return this.poolToPoolInfo(selectedPool, poolAssets);
    }

    async getPoolInfoByAssets(a1: AssetId | Asset, a2: AssetId | Asset): Promise<PoolInfo> {
        return this.getMostLiquidPool(a1, a2).then((pool) => this.poolToPoolInfo(pool, [assetId(a1), assetId(a2)]));
    }

    async getSwapCost(fromAsset: AssetId | Asset, toAsset: AssetId | Asset, amount: number): Promise<SwapQuote> {
        const pool = await this.getMostLiquidPool(fromAsset, toAsset);
        const swap = pool.prepareSwap({
            asset: this.makePactAsset(toAsset),
            amount: amount,
            slippagePct: 2,
        });
        const totalPrice = swap.effect.price;
        const perToken = totalPrice / amount;
        return { totalPrice, perToken };
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
export class TinymanDex implements Dex {
    static readonly VALIDATOR_APP_ID = {
        [TESTNET]: 62368684,
        [MAINNET]: 552635992,
    };

    algod: algosdk.Algodv2;
    validatorAppId: AppId;

    constructor(algod: algosdk.Algodv2) {
        this.algod = algod;
        this.validatorAppId = TinymanDex.VALIDATOR_APP_ID[ALGONET];
    }

    getPoolLogicSig(a1: AssetId, a2: AssetId, validatorAppId: AppId = this.validatorAppId): algosdk.LogicSigAccount {
        const program = Tinyman.getProgram(TINYMAN_ASC.contracts.pool_logicsig.logic, {
            validator_app_id: validatorAppId,
            asset_id_1: max(a1, a2),
            asset_id_2: min(a1, a2),
        });
        return new algosdk.LogicSigAccount(program);
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

        return {
            poolId,
            poolDex: 'T2',
            asset1: a1,
            asset2: a2,
            asset1Reserve: s1,
            asset2Reserve: s2,
            totalLiquidity: ilt,
        };
    }

    async getPoolInfoByAssets(a1: AssetId | Asset, a2: AssetId | Asset): Promise<PoolInfo> {
        const logicSig = this.getPoolLogicSig(assetId(a1), assetId(a2));
        return this.getPoolInfoByAddress(logicSig.address());
    }

    async getSwapCost(assetIn: AssetId | Asset, assetOut: AssetId | Asset, amountIn: number): Promise<SwapQuote> {
        const pool = await this.getPoolInfoByAssets(assetIn, assetOut);
        const [inputSupply, outputSupply] =
            assetIn === pool.asset1
                ? [pool.asset1Reserve, pool.asset2Reserve]
                : [pool.asset2Reserve, pool.asset1Reserve];

        const k = pool.asset1Reserve * pool.asset2Reserve;

        // We assume that amount is in microalgos
        const amountAfterFees = (amountIn * 997) / 1000;
        const amountOut = outputSupply - k / (inputSupply - amountAfterFees);

        return {
            totalPrice: amountOut,
            perToken: amountOut / amountIn,
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
    amountIn: number
): Promise<SwapQuote> {
    let err = null;
    for (const provider of DEX_TRY_ORDER) {
        try {
            return await makeDex(provider).getSwapCost(assetIn, assetOut, amountIn);
        } catch (e) {
            err = e;
        }
    }
    throw err;
}
