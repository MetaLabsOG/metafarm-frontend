import { BigNumber } from '@ethersproject/bignumber';
import { LPTokenInfo } from '../dexes';
import { Asset, Contract, Priced } from './store';

export const rewardTokenInfoMock: Priced<Asset> = {
    id: 123,
    name: 'META',
    unitName: 'META',
    creator: 'fds',
    reserve: '',
    decimals: 5,
    price: 1,
    priceInAlgo: 2,
};

export const lpTokenInfoMock: Priced<LPTokenInfo> = {
    poolId: 1,
    poolDex: 'T2',
    asset1: 12,
    asset2: 11,
    liquidityAsset: 13,
    asset1Reserve: BigInt(2),
    asset2Reserve: BigInt(23),
    totalLiquidity: BigInt(245),
    id: 123,
    name: 'META',
    unitName: 'META',
    creator: 'fds',
    reserve: '',
    decimals: 5,
    price: 1,
    priceInAlgo: 2,
    dexFeeApr: 0,
};

export const ctcMock: Contract<'farm'> = {
    id: 123,
    info: {
        type: 'farm',
        id: 123,
        version: '1',
        deployed_timestamp: 12,
        description: null,
        metadata: {
            cache: {
                initial: {
                    beneficiary: 'sdfafasdasd',
                    creationFee: BigNumber.from(100),
                    flatAlgoCreationFee: BigNumber.from(0),
                    stakeToken: BigNumber.from(123),
                    rewardToken: BigNumber.from(123),
                    endBlock: BigNumber.from(2345),
                    beginBlock: BigNumber.from(3),
                    totalRewardAmount: BigNumber.from(3456000),
                    totalAlgoRewardAmount: BigNumber.from(0),
                    lockLengthBlocks: BigNumber.from(10),
                },
                global: {
                    totalStaked: BigNumber.from(123),
                    lastUpdateBlock: BigNumber.from(53_565),
                    rewardPerTokenStored: BigNumber.from(34),
                },
            },
        },
    },
    ctc: {
        apis: {
            stake: {
                pending: false,
            },
        },
    },
    state: {
        initial: {
            beneficiary: 'sdfafasdasd',
            creationFee: BigInt(100),
            flatAlgoCreationFee: BigInt(0),
            stakeToken: 123,
            rewardToken: 123,
            endBlock: 2345,
            beginBlock: 3,
            totalRewardAmount: BigInt(3456000),
            totalAlgoRewardAmount: BigInt(0),
            lockLengthBlocks: BigInt(10),
        },
        global: {
            totalStaked: BigInt(123),
            lastUpdateBlock: 53_565,
            rewardPerTokenStored: BigInt(34),
        },
        local: {
            reward: BigInt(12),
            staked: BigInt(345),
            lockTimestamp: 0,
            rewardPerTokenPaid: BigInt(0),
        },
    },
};

