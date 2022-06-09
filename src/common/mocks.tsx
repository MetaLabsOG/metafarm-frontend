import { Amount, Asset, Contract, Priced } from './store';
import { LPTokenInfo } from '../providers/dexesProvider';

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
    asset1Reserve: 2,
    asset2Reserve: 23,
    totalLiquidity: 245,
    id: 123,
    name: 'META',
    unitName: 'META',
    creator: 'fds',
    decimals: 5,
    price: 1,
    priceInAlgo: 2,
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
                    stakeToken: 123,
                    rewardToken: 123,
                    endBlock: 2345,
                    beginBlock: 3,
                    rewardPerBlock: 3456,
                },
                global: {
                    totalStaked: 123,
                    lastUpdateBlock: 53565,
                    // rewardPerTokenStored: 34,
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
            stakeToken: 123,
            rewardToken: 123,
            endBlock: 2345,
            beginBlock: 3,
            rewardPerBlock: 3456,
        },
        global: {
            totalStaked: 123,
            lastUpdateBlock: 53565,
            // rewardPerTokenStored: 34,
        },
        local: {
            reward: 12,
            staked: 345,
        },
    },
};
