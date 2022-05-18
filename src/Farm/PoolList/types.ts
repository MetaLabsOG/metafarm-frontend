import { BigNumber } from 'ethers';

export type PoolT = {
    type: 'farm';
    id: number;
    version: string;
    deployed_timestamp: number;
    description: string;
};

// TODO make it actually typed
export type Token = any;
export type Contract = any;

export type InitialInfoFromCtc = {
    stakeToken: BigNumber;
    rewardToken: BigNumber;
    endBlock: BigNumber;
    beginBlock: BigNumber;
    rewardPerBlock: BigNumber;
};

export type GlobalInfoFromCtc = {
    totalStaked: BigNumber;
    lastUpdateBlock: BigNumber;
    rewardPerTokenStored: BigNumber;
};

export type LocalInfoFromCtc = {
    reward: BigNumber;
    staked: BigNumber;
};

export type InfoFromCtc = InitialInfoFromCtc | GlobalInfoFromCtc | LocalInfoFromCtc

export class InitialInfo {
    stakeToken: Token;
    rewardToken: Token;
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: number;

    constructor(data: InitialInfoFromCtc) {
        this.stakeToken = data.stakeToken;
        this.rewardToken = data.rewardToken;
        this.beginBlock = data.beginBlock.toNumber();
        this.endBlock = data.endBlock.toNumber();
        this.rewardPerBlock = data.rewardPerBlock.toNumber();
    }
}

export class GlobalInfo {
    totalStaked: number;

    constructor(data: GlobalInfoFromCtc) {
        this.totalStaked = data.totalStaked.toNumber();
    }
}

export class LocalInfo {
    reward: number;
    staked: number;

    constructor(data: LocalInfoFromCtc) {
        this.reward = data.reward.toNumber();
        this.staked = data.staked.toNumber();
    }
}
