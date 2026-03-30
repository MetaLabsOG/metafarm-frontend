import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { Effect } from 'effector';
import { AllDefined } from '../../types';

// TODO move it to common types, it's not only for store
export type AssetId = number;
export type AppId = number;

// Better do this now if we have problems with conversion from bignums later
export type Time = number;
export type Amount = bigint;

// Assets
export type Asset = {
    id: AssetId;
    name: string;
    unitName: string;
    creator: string;
    reserve: string;
    decimals: number;
};

export type Priced<T> = T & { price: number; priceInAlgo: number };

/**
 * Makes both `number`s and `bigint`s inside the type be `BigNumber`s.
 * So that we can get "raw" types (as produced by Reach) from our
 * semantic types automatically.
 */
export type AllBignums<T> = T extends number | bigint
    ? BigNumber
    : T extends any | unknown[]
    ? { [K in keyof T]: AllBignums<T[K]> }
    : T;

// TODO: there should be a better way to add new contract types
// We should explore the possibility of providing types from the _contract packages_.
export type ContractType = 'farm' | 'distribution';
// | 'fomo'

export type FarmType = 'farm' | 'distribution';

export type ContractState<T extends ContractType> = {
    initial: InitialInfo[T];
    global: GlobalInfo[T];
    local?: LocalInfo[T];
};

/**
 * Type guard which makes the contract state `AllDefined`, if the local state is there.
 * @param state
 */
export function hasLocalState<T extends ContractType, S extends ContractState<T>>(state: S): state is AllDefined<S> {
    return Boolean(state.local);
}

// TODO what does it return?
export type ReachApiCallType = (payload: BigNumberish[]) => Promise<any>;

export type ReachApiEffectType = Effect<BigNumberish[], any>;

export type Contract<T extends ContractType> = {
    id: AppId;
    info: ContractInfo<T>;
    ctc: any | null; // TODO fix later (or fucking never) Is it just ReachContract?????
    state: ContractState<T> | null;
};

export type WithStateCache<T extends ContractType, V> = {
    cache?: AllBignums<ContractState<T>>;
} & V;

export type ContractInfo<T extends ContractType> = {
    type: T;
    id: AppId;
    version: string;
    deployed_timestamp: number;
    description: string | null;
    metadata: WithStateCache<T, ContractMetadata[T]>;
};

export type ContractMetadata = {
    farm: {
        dex?: string;
        verified?: boolean;
        stake_token_id?: string;
        asset1_id?: string;
        asset2_id?: string;
        reward_token_id?: number;
        reward_token_name?: string;
        reward_token_decimals?: number;
    };
    distribution: { verified?: boolean };
    crowdsale: { whitelist: string[] };
    fomo: unknown;
};

export type InitialInfo = {
    farm: FarmInitialInfo;
    distribution: DistributionInitialInfo;
    whitelist: string[];
};

export type GlobalInfo = {
    farm: FarmGlobalInfo;
    distribution: FarmGlobalInfo;
};

export type LocalInfo = {
    farm: FarmLocalInfo;
    distribution: FarmLocalInfo;
};

// Farm types

export type FarmInitialInfo = {
    beneficiary: string;
    creationFee: Amount;
    flatAlgoCreationFee: Amount;
    stakeToken: AssetId;
    rewardToken: AssetId;
    endBlock: Time;
    beginBlock: Time;
    totalRewardAmount: Amount;
    totalAlgoRewardAmount: Amount;
    lockLengthBlocks: Amount; // > 0 if lock
};

export type DistributionInitialInfo = {
    beneficiary: string;
    creationFee: Amount;
    flatAlgoCreationFee: Amount;
    token: AssetId;
    endBlock: Time;
    beginBlock: Time;
    totalRewardAmount: Amount;
    totalAlgoRewardAmount: Amount;
    lockLengthBlocks: Amount; // > 0 if lock
};

export type FarmGlobalInfo = {
    totalStaked: Amount;
    lastUpdateBlock: Time;
    rewardPerTokenStored: Amount;
};

export type FarmLocalInfo = {
    reward: Amount;
    staked: Amount;
    lockTimestamp: Time; // Lock BEGINS from this block
    rewardPerTokenPaid: Amount;
};

// Convert JSON-serialized BigNumber objects ({type: 'BigNumber', hex: '0x...'})
// back to ethers BigNumber instances. Needed because the API cache returns plain JSON,
// not live Reach objects with .toNumber()/.toBigInt() methods.
function toBN(val: any): BigNumber {
    if (val instanceof BigNumber) return val;
    if (val && typeof val === 'object' && val.type === 'BigNumber' && val.hex) {
        return BigNumber.from(val.hex);
    }
    if (typeof val === 'number' || typeof val === 'string' || typeof val === 'bigint') {
        return BigNumber.from(val);
    }
    return BigNumber.from(0);
}

// Recursively convert all JSON BigNumber objects in a cache structure to ethers BigNumber instances.
export function reviveBigNumbers(obj: any): any {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj !== 'object') return obj;
    if (obj.type === 'BigNumber' && obj.hex) {
        return BigNumber.from(obj.hex);
    }
    if (Array.isArray(obj)) return obj.map(reviveBigNumbers);
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
        result[key] = reviveBigNumbers(value);
    }
    return result;
}

// CONVERSIONS
// I wish it could be done better, if only I had normal fucking typeclasses...
// This is very boilerplate-y, it is probably possible to do such things generically
// in Typescript somehow but I'll probably spend several hours more trying to understand
// how to do it
// TODO: maybe some sort of codegen exists?...
/* eslint-disable */
export function parseView<T extends ContractType, V extends keyof ContractState<T>>(
    contractType: T,
    viewType: V
): (obj: any) => AllDefined<ContractState<T>>[V] {
    const parseFarmInitialInfo = (obj: any): FarmInitialInfo => {
        const isOldContract = 'rewardPerBlock' in obj;
        const endBlock = toBN(obj.endBlock).toNumber();
        const beginBlock = toBN(obj.beginBlock).toNumber();

        return {
            beneficiary: obj.beneficiary,
            creationFee: toBN(obj.creationFee).toBigInt(),
            flatAlgoCreationFee: toBN(obj.flatAlgoCreationFee).toBigInt(),
            stakeToken: toBN(obj.stakeToken || obj.token).toNumber(),
            rewardToken: toBN(obj.rewardToken || obj.token).toNumber(),
            endBlock,
            beginBlock,
            totalRewardAmount: isOldContract
                ? toBN(obj.rewardPerBlock).toBigInt() * BigInt(endBlock - beginBlock)
                : toBN(obj.totalRewardAmount).toBigInt(),
            totalAlgoRewardAmount: isOldContract
                ? toBN(obj.extraAlgoRewardPerBlock).toBigInt() * BigInt(endBlock - beginBlock)
                : toBN(obj.totalAlgoRewardAmount).toBigInt(),
            lockLengthBlocks: toBN(obj.lockLengthBlocks).toBigInt(),
        };
    };

    const parseFarmGlobalInfo = (obj: any): FarmGlobalInfo => {
        let totalStaked = toBN(obj.totalStaked).toBigInt();

        // WARNING FIXME: ну это полная хуйня если честно
        if (totalStaked === BigInt(1)) {
            // it is like 99.99% a virtual stake
            totalStaked = BigInt(0);
        }

        return {
            totalStaked,
            lastUpdateBlock: toBN(obj.lastUpdateBlock).toNumber(),
            rewardPerTokenStored: toBN(obj.rewardPerTokenStored).toBigInt(),
        };
    };

    const parseFarmLocalInfo = (obj: any): FarmLocalInfo => ({
        reward: toBN(obj.reward).toBigInt(),
        staked: toBN(obj.staked).toBigInt(),
        lockTimestamp: toBN(obj.lockTimestamp).toNumber(),
        rewardPerTokenPaid: toBN(obj.rewardPerTokenPaid).toBigInt(),
    });

    const parseDistributionInitialInfo = (obj: any): DistributionInitialInfo => {
        const isOldContract = 'rewardPerBlock' in obj;
        const endBlock = toBN(obj.endBlock).toNumber();
        const beginBlock = toBN(obj.beginBlock).toNumber();

        return {
            beneficiary: obj.beneficiary,
            creationFee: toBN(obj.creationFee).toBigInt(),
            flatAlgoCreationFee: toBN(obj.flatAlgoCreationFee).toBigInt(),
            token: toBN(obj.token).toNumber(),
            endBlock,
            beginBlock,
            totalRewardAmount: isOldContract
                ? toBN(obj.rewardPerBlock).toBigInt() * BigInt(endBlock - beginBlock)
                : toBN(obj.totalRewardAmount).toBigInt(),
            totalAlgoRewardAmount: isOldContract
                ? toBN(obj.extraAlgoRewardPerBlock).toBigInt() * BigInt(endBlock - beginBlock)
                : toBN(obj.totalAlgoRewardAmount).toBigInt(),
            lockLengthBlocks: toBN(obj.lockLengthBlocks).toBigInt(),
        };
    };

    const parseCrowdsaleInitialInfo = (obj: any): CrowdsaleInitialInfo => ({
        soldToken: toBN(obj.soldToken).toNumber(),
        totalAmount: toBN(obj.totalAmount).toBigInt(),
        rate: obj.rate.map((v: any) => toBN(v).toBigInt()),
        individualCap: toBN(obj.individualCap).toBigInt(),
    });

    const parseCrowdsaleGlobalInfo = (obj: any): CrowdsaleGlobalInfo => ({
        sold: toBN(obj.sold).toBigInt(),
        revoked: obj.revoked,
    });

    const parseCrowdsaleLocalInfo = (obj: any): CrowdsaleLocalInfo => ({
        alreadyBought: toBN(obj.alreadyBought).toBigInt(),
    });

    return (obj: any): AllDefined<ContractState<T>>[V] => {
        if (obj === null) {
            throw new Error(`View ${viewType} of contract ${contractType} appeared null`);
        }

        // Apparently, even with types of proxy values narrowed down particular types and view name,
        // Typescript does not automatically narrow down the __return__ type of the function, which
        // depends on those narrowed types. Hence all those ts-ignores.
        // Fucking I dunno tbh how to handle this better, but at least the parsing works properly now and
        // we have proper distinction between bignums and usual numbers elsewhere.
        if (contractType === 'farm') {
            if (viewType === 'initial') {
                //@ts-ignore
                return parseFarmInitialInfo(obj);
            } else if (viewType === 'global') {
                //@ts-ignore
                return parseFarmGlobalInfo(obj);
            } else {
                //@ts-ignore
                return parseFarmLocalInfo(obj);
            }
        } else if (contractType === 'distribution') {
            if (viewType === 'initial') {
                //@ts-ignore
                return parseDistributionInitialInfo(obj);
            } else if (viewType === 'global') {
                //@ts-ignore
                return parseFarmGlobalInfo(obj);
            } else {
                //@ts-ignore
                return parseFarmLocalInfo(obj);
            }
        }

        throw new Error('impossible: not matched any type');
    };
}
/* eslint-enable */

export function parseInitialInfo(contractType: ContractType, obj: any): InitialInfo {
    if (contractType === 'farm') {
        // ... existing farm code ...
    } else if (contractType === 'distribution') {
        // ... existing distribution code ...
    }
}

export function parseGlobalInfo(contractType: ContractType, obj: any): GlobalInfo {
    if (contractType === 'farm') {
        // ... existing farm code ...
    } else if (contractType === 'distribution') {
        // ... existing distribution code ...
    }
}

export function parseLocalInfo(contractType: ContractType, obj: any): LocalInfo {
    if (contractType === 'farm') {
        // ... existing farm code ...
    } else if (contractType === 'distribution') {
        // ... existing distribution code ...
    }
}
