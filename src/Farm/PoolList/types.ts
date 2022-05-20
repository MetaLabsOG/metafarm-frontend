import { BigNumber } from 'ethers';

export type PoolT = {
    type: 'farm';
    id: number;
    version: string;
    deployed_timestamp: number;
    description: string;
};

export type TokenId = number;
// TODO make it actually typed
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
    stakeToken: TokenId;
    rewardToken: TokenId;
    beginBlock: number;
    endBlock: number;
    rewardPerBlock: number;

    constructor(index: number, data: InitialInfoFromCtc) {
        this.index = index;
        this.stakeToken = data.stakeToken.toNumber();
        this.rewardToken = data.rewardToken.toNumber();
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
        this.index = index;
        this.reward = data.reward.toNumber();
        this.staked = data.staked.toNumber();
    }
}
