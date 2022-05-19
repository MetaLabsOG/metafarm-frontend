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

export type InfoFromCtc = InitialInfoFromCtc | GlobalInfoFromCtc | LocalInfoFromCtc;

export class InitialInfo {
    index: number;
    stakeToken: Token;
    rewardToken: Token;
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: number;

    constructor(index: number, data: InitialInfoFromCtc) {
        this.index = index;
        this.stakeToken = data.stakeToken;
        this.rewardToken = data.rewardToken;
        this.beginBlock = data.beginBlock.toNumber();
        this.endBlock = data.endBlock.toNumber();
        this.rewardPerBlock = data.rewardPerBlock.toNumber();
    }
}

export class GlobalInfo {
    index: number;
    totalStaked: number;

    constructor(index: number, data: GlobalInfoFromCtc) {
        this.index = index;
        this.totalStaked = data.totalStaked.toNumber();
    }
}

export class LocalInfo {
    index: number;
    reward: number;
    staked: number;

    constructor(index: number, data: LocalInfoFromCtc) {
        this.index = index
        this.reward = data.reward.toNumber();
        this.staked = data.staked.toNumber();
    }
}
