export type AssetId = number;
export type AppId = number;

// better do this now if we have problems with conversion from bignums later
export type Time = number;
export type Amount = number;

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
