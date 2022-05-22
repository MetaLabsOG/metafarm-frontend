import { BigNumber } from 'ethers';

export type TokenId = number;
export type AppId = number;

// better do this now if we have problems with conversion from bignums later
export type Time = number;
export type Amount = number;

// TODO: there should be a better way to add new contract types
// We should explore the possibility of providing types from the _contract packages_.
export type ContractType
    = 'farm'
    | 'crowdsale'
    // | 'fomo'

export type ContractState<T extends ContractType> = {
    initial: InitialInfo[T];
    global: GlobalInfo[T];
    local: LocalInfo[T];
}

export type Contract<T extends ContractType> = {
    id: AppId;
    info: ContractInfo<T>;
    ctc: any | null; // fix later (or fucking never)
    state: ContractState<T> | null;
};

export type ContractInfo<T extends ContractType> = {
    type: T;
    id: AppId;    
    version: string;
    deployed_timestamp: number;
    description: string | null;
    metadata: ContractMetadata[T]
};

export type ContractMetadata = {
    farm: null;
    crowdsale: { whitelist: Array<string>; };
    fomo: null;
};

type InitialInfo = {
    farm: FarmInitialInfo;
    crowdsale: CrowdsaleInitialInfo;
};

type GlobalInfo = {
    farm: FarmGlobalInfo;
    crowdsale: CrowdsaleGlobalInfo;
};

type LocalInfo = {
    farm: FarmLocalInfo;
    crowdsale: CrowdsaleLocalInfo;
};


// Farm types

type FarmInitialInfo = {
    stakeToken: TokenId;
    rewardToken: TokenId;
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
    soldToken: TokenId;
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
}