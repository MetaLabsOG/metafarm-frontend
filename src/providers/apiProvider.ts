import axios from 'axios';
import pactsdk from '@pactfi/pactsdk';

import packages from '../../package.json';
import { Json, JsonWithBignum, resolveBignums } from '../common/lib';
import { AssetId, ContractType } from '../common/store/types';
import { ALGONET } from '../AppContext';
import { nonConcurrent } from '../common/store/utils';
import { DexProvider } from '../dexes/common';
import { logEvent, LogName } from '../logEvent';
import { pactDex } from '../dexes';
import { StakingAsset } from '../Farm/AddFarm';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_COMETA_API_URL,
});

type cost = { usd: number; microalgo: number };

export type TotalCost = {
    timestamp: number;
    cost: cost;
};

export async function getTotalCost(address: string, weeks = 6): Promise<TotalCost[]> {
    return instance
        .get<TotalCost[]>(`total_cost/${address}`, { params: { weeks_count: weeks } })
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            return [];
        });
}

type Asset = {
    name: string;
    ticker: string;
    amount: number;
    price: cost;
};

export type PoolInfo = {
    name: string;
    asset1_reserve: number;
    asset2_reserve: number;
    total_lp_tokens: number;
};

export type SwapCost = {
    res_tokens: number;
    price_per_token: number;
};

export type TinymanPool = {
    liquidity_asset: { id: AssetId };
    asset_1: { unit_name: string; id: AssetId };
    asset_2: { unit_name: string; id: AssetId };
    liquidity_in_usd: number;
    annual_percentage_rate: number;
};

export async function getAssets(address: string): Promise<Asset[]> {
    return instance
        .get<Asset[]>(`wallet_assets/${address}`)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            return [];
        });
}

export type WalletNFT = {
    asa_id: number;
    name: string;
    collection: string;
    image_url: string; // TODO it is url, maybe need a special type and validation
    floor_price: {
        usd: number;
        microalgo: number;
    };
    week_price_change: number;
};

export async function getWalletNFTs(wallet: string): Promise<WalletNFT[]> {
    return instance
        .get<WalletNFT[]>(`wallet_nfts/${wallet}`)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            return [];
        });
}

// TODO maybe typing could be improved
export async function getContracts(type: string): Promise<JsonWithBignum> {
    return instance
        .get<Json>(`/contracts?type=${type}`)
        .then(({ data }) => resolveBignums(data))
        .catch((error) => {
            console.log('ERR', error);
            return null;
        });
}

export async function getPoolInfo(asset1: number, asset2: number): Promise<PoolInfo> {
    return instance.get<PoolInfo>(`/pool?asset_1_id=${asset1}&asset_2_id=${asset2}`).then(({ data }) => data);
}

export async function getSwapCost(asset1: number, asset2: number, amount: number): Promise<SwapCost> {
    return instance
        .get<SwapCost>(`/asset_swap_cost?address=asdf?asset1_id=${asset1}&asset2_id=${asset2}&asset1_amount=${amount}`)
        .then(({ data }) => data);
}

export async function tokensaleWhitelist(contractId: number, address: string): Promise<boolean> {
    return instance
        .put<boolean>(`/whitelist_confirm?contract_id=${contractId}&address=${address}`)
        .then(({ data }) => data);
}

type AddContractType = {
    type: ContractType;
    id: number;
    version: string;
    description: string;
    metadata: Record<string, string | number | boolean | undefined>;
};

export const deployContractToBackend = async (
    accountAddress: string,
    contractId: number,
    contractType: ContractType,
    stakeToken: StakingAsset,
    rewardTokenId: number,
    extraAlgoRewardAmount: number,
    contractVersion?: string
) => {
    if (!contractVersion) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        contractVersion = packages.dependencies['@metalabsog/' + contractType] as string;
    }

    if (!contractVersion) {
        throw new Error('Wrong contract type:' + contractType);
    }

    const request: AddContractType = {
        type: contractType,
        id: contractId,
        version: contractVersion,
        description: stakeToken.name,
        metadata: {
            dex: stakeToken.dex,
            asset1_id: stakeToken.asset1_id,
            asset2_id: stakeToken.asset2_id,
            rewardTokenId: rewardTokenId,
            algoRewards: extraAlgoRewardAmount > 0,
        },
    };
    console.log('/contract/register', request);
    logEvent(
        accountAddress,
        { status: '[ADDFARM DEPLOY]', contractType, contractId: Number(contractId), params: JSON.stringify(request) },
        LogName.ADDFARM
    );

    await instance.post('/contract/register', request);
};

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const getTinymanPools = nonConcurrent(async (limit: number, search: string = ''): Promise<TinymanPool[]> => {
    const prefix = ALGONET.toLowerCase();
    let tinymanUrl = `https://${prefix}.analytics.tinyman.org/api/v1/pools/?limit=${limit}&with_statistics=false&verified_only=false&ordering=-liquidity'`;
    if (search) {
        tinymanUrl += `&search=${search}`;
    }
    const poolsResponse = await fetch(tinymanUrl);
    const pools = await poolsResponse.json();
    return pools.results;
});

export const getPactPools = nonConcurrent(async (): Promise<pactsdk.ApiPool[]> => {
    const response = await pactDex.pact.listPools();
    return response.results;
});
