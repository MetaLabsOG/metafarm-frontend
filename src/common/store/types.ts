import { BigNumber } from '@ethersproject/bignumber';

export type AssetId = number;
export type AppId = number;

// better do this now if we have problems with conversion from bignums later
export type Time = number;
export type Amount = bigint;

// Assets
export type Asset = {
    id: AssetId;
    name: string;
    unitName: string;
    creator: string;
    decimals: number;
};

export type Priced<T> = T & { price: number; priceInAlgo: number };

/**
 * Makes all optional fields in the record type (ones ending with `?`) non-optional.
 * E.g. `AllDetined<ContractState<T>>` __must__ have the `local` field.
 */
export type AllDefined<T> = {
    [Property in keyof T]-?: T[Property];
};

// TODO: there should be a better way to add new contract types
// We should explore the possibility of providing types from the _contract packages_.
export type ContractType = 'farm' | 'crowdsale' | 'distribution';
// | 'fomo'

export type FarmType = 'farm' | 'distribution';

export type ContractState<T extends ContractType> = {
    initial: InitialInfo[T];
    global: GlobalInfo[T];
    local?: LocalInfo[T];
};

export type Contract<T extends ContractType> = {
    id: AppId;
    info: ContractInfo<T>;
    ctc: any | null; // fix later (or fucking never)
    state: ContractState<T> | null;
};

export type WithStateCache<T extends ContractType, V> = {
    cache?: ContractState<T>;
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
    farm: {};
    distribution: null;
    crowdsale: { whitelist: Array<string> };
    fomo: {};
};

type InitialInfo = {
    farm: FarmInitialInfo;
    distribution: DistributionInitialInfo;
    crowdsale: CrowdsaleInitialInfo;
};

type GlobalInfo = {
    farm: FarmGlobalInfo;
    distribution: FarmGlobalInfo;
    crowdsale: CrowdsaleGlobalInfo;
};

type LocalInfo = {
    farm: FarmLocalInfo;
    distribution: FarmLocalInfo;
    crowdsale: CrowdsaleLocalInfo;
};

// Farm types

type FarmInitialInfo = {
    stakeToken: AssetId;
    rewardToken: AssetId;
    endBlock: Time;
    beginBlock: Time;
    rewardPerBlock: Amount;
};

type DistributionInitialInfo = {
    token: AssetId;
    endBlock: Time;
    beginBlock: Time;
    rewardPerBlock: Amount;
};

export type FarmGlobalInfo = {
    totalStaked: Amount;
    lastUpdateBlock: Time;
    rewardPerTokenStored: Amount;
};

export type FarmLocalInfo = {
    reward: Amount;
    staked: Amount;
};

// Crowdsale types

type CrowdsaleInitialInfo = {
    soldToken: AssetId;
    totalAmount: Amount;
    rate: [Amount, Amount];
    individualCap: Amount;
};

type CrowdsaleGlobalInfo = {
    sold: Amount;
    revoked: boolean;
};

type CrowdsaleLocalInfo = {
    alreadyBought: Amount;
};

// CONVERSIONS
// I wish it could be done better, if only I had normal fucking typeclasses...
// This is very boilerplate-y, it is probably possible to do such things generically
// in Typescript somehow but I'll probably spend several hours more trying to understand
// how to do it
// TODO: maybe some sort of codegen exists?...
export function parseView<T extends ContractType, V extends keyof ContractState<T>>(
    contractType: T,
    viewType: V
): (obj: any) => AllDefined<ContractState<T>>[V] {
    const parseFarmInitialInfo = (obj: any): FarmInitialInfo => ({
        stakeToken: obj.stakeToken.toNumber(),
        rewardToken: obj.rewardToken.toNumber(),
        endBlock: obj.endBlock.toNumber(),
        beginBlock: obj.beginBlock.toNumber(),
        rewardPerBlock: obj.rewardPerBlock.toBigInt(),
    });

    const parseFarmGlobalInfo = (obj: any): FarmGlobalInfo => ({
        totalStaked: obj.totalStaked.toBigInt(),
        lastUpdateBlock: obj.lastUpdateBlock.toNumber(),
        rewardPerTokenStored: obj.rewardPerTokenStored.toBigInt(),
    });

    const parseFarmLocalInfo = (obj: any): FarmLocalInfo => ({
        reward: obj.reward.toBigInt(),
        staked: obj.staked.toBigInt(),
    });

    const parseDistributionInitialInfo = (obj: any): DistributionInitialInfo => ({
        token: obj.rewardToken.toNumber(),
        endBlock: obj.endBlock.toNumber(),
        beginBlock: obj.beginBlock.toNumber(),
        rewardPerBlock: obj.rewardPerBlock.toBigInt(),
    });

    const parseCrowdsaleInitialInfo = (obj: any): CrowdsaleInitialInfo => ({
        soldToken: obj.soldToken.toNumber(),
        totalAmount: obj.totalAmount.toBigInt(),
        rate: obj.rate.map((v: BigNumber) => v.toBigInt()),
        individualCap: obj.individualCap.toBigInt(),
    });

    const parseCrowdsaleGlobalInfo = (obj: any): CrowdsaleGlobalInfo => ({
        sold: obj.sold.toBigInt(),
        revoked: obj.revoked,
    });

    const parseCrowdsaleLocalInfo = (obj: any): CrowdsaleLocalInfo => ({
        alreadyBought: obj.alreadyBought.toBigInt(),
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
        } else if (contractType === 'crowdsale') {
            if (viewType === 'initial') {
                //@ts-ignore
                return parseCrowdsaleInitialInfo(obj);
            } else if (viewType === 'global') {
                //@ts-ignore
                return parseCrowdsaleGlobalInfo(obj);
            } else {
                //@ts-ignore
                return parseCrowdsaleLocalInfo(obj);
            }
        }

        throw new Error('impossible: not matched any type');
    };
}