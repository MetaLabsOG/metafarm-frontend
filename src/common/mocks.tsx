import { Asset, Contract, Priced } from './store';
import { LPTokenInfo } from '../providers/dexesProvider';
import { BigNumber } from '@ethersproject/bignumber';

export const rewardTokenInfoMock: Priced<Asset> = {
    id: 123,
    name: 'META',
    unitName: 'META',
    creator: 'fds',
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
                    stakeToken: BigNumber.from(123),
                    rewardToken: BigNumber.from(123),
                    endBlock: BigNumber.from(2345),
                    beginBlock: BigNumber.from(3),
                    rewardPerBlock: BigNumber.from(3456),
                    extraAlgoRewardPerBlock: BigNumber.from(0),
                    lockLengthBlocks: BigNumber.from(10),
                },
                global: {
                    totalStaked: BigNumber.from(123),
                    lastUpdateBlock: BigNumber.from(53565),
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
            stakeToken: 123,
            rewardToken: 123,
            endBlock: 2345,
            beginBlock: 3,
            rewardPerBlock: BigInt(3456),
            extraAlgoRewardPerBlock: BigInt(0),
            lockLengthBlocks: BigInt(10),
        },
        global: {
            totalStaked: BigInt(123),
            lastUpdateBlock: 53565,
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
