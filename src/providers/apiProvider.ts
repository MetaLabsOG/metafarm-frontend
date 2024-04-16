import axios from 'axios';
import pactsdk from '@pactfi/pactsdk';

import packages from '../../package.json';
import { Json, JsonWithBignum, resolveBignums } from '../common/lib';
import { AssetId, ContractType } from '../common/store/types';
import { ALGONET, API_CONTRACTS_MAX_COUNT, TESTNET } from '../AppContext';
import { nonConcurrent } from '../common/store/utils';
import { logEvent, LogName } from '../logEvent';
import { StakingAsset } from '../Farm/AddFarm';
import * as MiniHumble from '../dexes/humbleReexports';
import { TokenOptionType } from '../Components/Select/types';
import { NftLottery } from '../Swap/NftWinModal';
import { DexProvider } from '../dexes';

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
        .get<TotalCost[]>(`wallet/${address}/total_cost`, { params: { weeks_count: weeks } })
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
        .get<Asset[]>(`wallet/${address}/assets`)
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
        .get<WalletNFT[]>(`wallet/${wallet}/nfts`)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            return [];
        });
}

// TODO maybe typing could be improved
export async function getContracts(
    type: string,
    user_address: string | undefined = undefined
): Promise<JsonWithBignum> {
    const params: { [key: string]: any } = {
        type: type,
    };
    if (user_address !== undefined) {
        params['include_address_pools'] = user_address;
    }
    if (API_CONTRACTS_MAX_COUNT !== undefined) {
        params['max_count'] = API_CONTRACTS_MAX_COUNT;
    }
    return instance
        .get<Json>(`/contracts`, { params })
        .then(({ data }) => resolveBignums(data))
        .catch((error) => {
            console.log('ERR', error);
            return null;
        });
}

export type PricedLpInfo = {
    id: number;
    token_id: number;
    asset1_id: number;
    asset2_id: number;
    dex_provider: DexProvider;
    address: string;

    asset1_reserve_micros: number;
    asset2_reserve_micros: number;
    issued_tokens_micros: number;

    asset1_reserve: number;
    asset2_reserve: number;
    issued_tokens: number;

    token_price_algo: number;
    token_price_usd: number;
    swap_fee_apr?: number;
};

export async function getPricedLpInfo(lp_token_id: number): Promise<PricedLpInfo> {
    return await instance
        .post<PricedLpInfo>(`/lp/state/priced?lp_token_id=${lp_token_id}`)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            throw error;
        });
}

export async function getPricedLpInfos(lp_token_ids?: number[]): Promise<PricedLpInfo[]> {
    const params: { [key: string]: any } = {};
    if (lp_token_ids) {
        params['lp_token_ids'] = lp_token_ids;
    }
    return await instance
        .post<PricedLpInfo[]>(`/lp/states/priced`, params)
        .then(({ data }) => data)
        .catch((error) => {
            console.log('ERR', error);
            throw error;
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
    rewardToken: TokenOptionType,
    rewardAmount: number,
    extraAlgoRewardAmount: number,
    beginBlock: number,
    endBlock: number,
    lockLengthBlocks: number,
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

    const description = `${stakeToken.name} -> ${rewardToken.unitName} ${extraAlgoRewardAmount > 0 ? '+ ALGO' : ''} ${
        lockLengthBlocks > 0 ? '(with lock)' : ''
    }`;

    const request: AddContractType = {
        type: contractType,
        id: contractId,
        version: contractVersion,
        description: description,
        metadata: {
            stake_token_id: stakeToken.id,
            dex: stakeToken.dex,
            asset1_id: stakeToken.asset1_id,
            asset2_id: stakeToken.asset2_id,
            reward_token_id: rewardToken.id,
            reward_token_name: rewardToken.name,
            reward_token_decimals: rewardToken.decimals,
            reward_amount: rewardAmount,
            algo_reward_amount: extraAlgoRewardAmount,
            algo_rewards: extraAlgoRewardAmount > 0, // TODO: remove, now for backward compatibility
            begin_block: beginBlock,
            end_block: endBlock,
            lock_length_blocks: lockLengthBlocks,
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

export const deployVaultToBackend = async (
    accountAddress: string,
    contractId: number,
    contractType: ContractType,
    asset1: TokenOptionType,
    asset2: TokenOptionType
) => {
    const request: AddContractType = {
        type: contractType,
        id: contractId,
        version: '1.0.0',
        description: `${asset1.unitName}/${asset2.unitName} laas vault`,
        metadata: {},
    };
    console.log('/contract/register', request);

    await instance.post('/contract/register', request);
};

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const getTinymanPools = nonConcurrent(async (limit: number, search = '', v2 = false): Promise<TinymanPool[]> => {
    const prefix = ALGONET.toLowerCase();
    let tinymanUrl = `https://${prefix}.analytics.tinyman.org/api/v1/pools/?limit=${limit}&with_statistics=false&verified_only=false&ordering=-liquidity'`;
    if (search) {
        tinymanUrl += `&search=${search}`;
    }
    if (v2) {
        tinymanUrl += `&version__in=2.0`;
    } else {
        tinymanUrl += `&version__in=1.1%2C2.0`;
    }

    const poolsResponse = await fetch(tinymanUrl);
    const pools = await poolsResponse.json();
    return pools.results;
});

export const getPactPools = nonConcurrent(async (limit: number, search = ''): Promise<pactsdk.ApiPool[]> => {
    // const response = await pactDex.pact.listPools();
    const prefix = ALGONET === TESTNET ? 'testnet.' : '';
    let pactUrl = `https://api.${prefix}pact.fi/api/pools?limit=${limit}&offset=0&ordering=-tvl_usd`;
    if (search) {
        pactUrl += `&details=${search}`;
    }
    const poolsResponse = await fetch(pactUrl);
    const pools = await poolsResponse.json();
    return pools.results;
});

export const getHumblePools = nonConcurrent(async (): Promise<MiniHumble.PoolDetails[]> => {
    return instance.get('/humble/pools/all').then(({ data }) => data);
});

export async function checkNftLottery(
    txids: string[],
    wallet: string,
    asset1_id: number,
    asset2_id: number,
    asset1_amount: number,
    asset2_amount: number
): Promise<NftLottery | null> {
    const request = {
        txids,
        wallet,
        asset1_id,
        asset2_id,
        asset1_amount,
        asset2_amount,
    };

    return instance.post('/lottery/swap', request).then(({ data }) => data);
}

export async function nftClaim(wallet: string): Promise<string> {
    return instance.patch(`/lottery/claim?wallet=${wallet}`).then(({ data }) => data);
}

export async function checkClaimLottery(address: string, pool_id: number): Promise<NftLottery | null> {
    const request = {
        address,
        pool_id,
    };

    return instance.post(`lottery/staking?address=${address}&pool_id=${pool_id}`).then(({ data }) => data);
}
