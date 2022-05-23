import algosdk from 'algosdk';
import { Buffer } from 'buffer';
import { getSwapCost as backendGetSwapCost } from './apiProvider';
import { getCoinRate } from './binanceProvider';

import { ALGONET, MAINNET, TESTNET } from '../AppContext';
import pactsdk from '@pactfi/pactsdk';
import { AppId } from '../common/store';

import TINYMAN_ASC from './tinyman_asc.json';
import { max, min } from 'ramda';

export const algod = new algosdk.Algodv2(process.env.ALGO_TOKEN!, process.env.ALGO_SERVER, process.env.ALGO_PORT);

export type DexProvider =
    | 'T2' // Tinyman v1.1
    | 'PT' // Pact
    | 'MOCK'; // Mock dex (random tokens are staked)

export type PoolInfo = {
    poolId: AppId;
    asset1: number;
    asset2: number;
    asset1Reserve: number;
    asset2Reserve: number;
    totalLiquidity: number;
};

export type TokenInfoT = {
    id: number;
    name: string;
    price: number;
    decimals: number;
};

export type LPTokenInfo = TokenInfoT & {
    poolId: AppId;
    asset1: number;
    asset2: number;
    poolDex: DexProvider;
};

export type SwapQuote = {
    totalPrice: number;
    perToken: number;
};

export interface Dex {
    getPoolInfo: (poolId: AppId) => Promise<PoolInfo>;
    getPoolInfoByAddress: (poolAddress: string) => Promise<PoolInfo>;
    getPoolInfoByAssets: (asset1: number, asset2: number) => Promise<PoolInfo>;
    getSwapCost: (fromAsset: number, toAsset: number, amount: number) => Promise<SwapQuote>;
}

/**
 * Mock API for dexes (yields data with arbitrary numbers)
 */
export class MockDex implements Dex {
    async getPoolInfo(_: AppId): Promise<PoolInfo> {
        return {
            poolId: 0,
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

    getPoolInfoByAssets(_1: number, _2: number): Promise<PoolInfo> {
        return this.getPoolInfo(0);
    }

    async getSwapCost(fromAsset: number, toAsset: number, amount: number): Promise<SwapQuote> {
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

    poolToPoolInfo(pool: pactsdk.Pool): PoolInfo {
        return {
            poolId: pool.appId,
            asset1: pool.primaryAsset.index,
            asset2: pool.secondaryAsset.index,
            asset1Reserve: pool.state.totalPrimary,
            asset2Reserve: pool.state.totalSecondary,
            totalLiquidity: pool.state.totalLiquidity,
        };
    }

    async getPoolInfo(poolId: AppId): Promise<PoolInfo> {
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
        const selectedPool = pools.filter((pool: any) => pool.liquidityAsset.index === lpTokenId)[0];
        return this.poolToPoolInfo(selectedPool);
    }

    async getPoolInfoByAssets(a1: number, a2: number): Promise<PoolInfo> {
        const pools = await this.pact.fetchPoolsByAssets(a1, a2);
        // let's select the most liquid pool instead of just selecting first
        const selectedPool = pools.sort((a, b) => b.state.totalLiquidity - a.state.totalLiquidity)[0];
        return this.poolToPoolInfo(selectedPool);
    }

    async getSwapCost(fromAsset: number, toAsset: number, amount: number): Promise<SwapQuote> {
        const pool = (await this.pact.fetchPoolsByAssets(fromAsset, toAsset))[0];
        const swap = pool.prepareSwap({
            asset: new pactsdk.Asset(this.algod, toAsset),
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

    getPoolLogicSig(a1: number, a2: number, validatorAppId: number = this.validatorAppId): algosdk.LogicSigAccount {
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
            asset1: a1,
            asset2: a2,
            asset1Reserve: s1,
            asset2Reserve: s2,
            totalLiquidity: ilt,
        };
    }

    async getPoolInfoByAssets(a1: number, a2: number): Promise<PoolInfo> {
        const logicSig = this.getPoolLogicSig(a1, a2);
        return this.getPoolInfoByAddress(logicSig.address());
    }

    // TODO: can we not do backend calling here?
    // TODO: yes we can but later
    async getSwapCost(fromAsset: number, toAsset: number, amount: number): Promise<SwapQuote> {
        const { res_tokens, price_per_token } = await backendGetSwapCost(fromAsset, toAsset, amount);
        return {
            totalPrice: res_tokens,
            perToken: price_per_token,
        };
    }
}

export function makeDex(provider: DexProvider): Dex {
    return provider === 'PT' ? new PactDex(algod) : provider === 'T2' ? new TinymanDex(algod) : new MockDex();
}

// TODO: this function is a huge costyl
export function detectAssetProvider({ name }: { name: string }): DexProvider {
    name = name.toLowerCase();
    if (name.indexOf('tinyman') !== -1) {
        return 'T2';
    } else if (name.indexOf('liquidity') !== -1) {
        return 'PT';
    } else {
        return 'MOCK';
    }
}

export async function getLPTokenInfo(
    assetId: number,
    provider: DexProvider | undefined = undefined
): Promise<LPTokenInfo> {
    const asset = await algod.getAssetByID(assetId).do();
    if (provider === undefined) {
        provider = detectAssetProvider(asset.params);
    }

    const dex = makeDex(provider);
    const { name, creator, decimals } = asset.params;
    const poolInfo = await dex.getPoolInfoByAddress(creator);

    // TODO: remove this when pools name it will be not test names
    const formatLPTokenName = (name: string) => {
        return name.replace('/', ' • ').replace('liquidity', '');
    };

    // TODO: all of this should NOT be repeated for every fucking token
    const algoRate = await getCoinRate('ALGOUSDT');
    const algoPrice = Number(algoRate.price);

    let fstAssetPrice;
    if (poolInfo.asset1 === 0) {
        fstAssetPrice = algoPrice;
    } else {
        const priceInAlgo = (await dex.getSwapCost(poolInfo.asset1, 0, 1)).perToken;
        fstAssetPrice = algoPrice * priceInAlgo;
    }

    const price = (poolInfo.asset1Reserve * fstAssetPrice) / poolInfo.totalLiquidity;
    return {
        id: assetId,
        name: formatLPTokenName(name),
        price,
        decimals,
        poolId: poolInfo.poolId,
        poolDex: provider,
        asset1: poolInfo.asset1,
        asset2: poolInfo.asset2,
    };
}
