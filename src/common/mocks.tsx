import { BigNumber } from '@ethersproject/bignumber';
import { LPTokenInfo } from '../dexes';
import { Backend, Contract as ReachContract } from '../types';
import { META_TOKEN_ID } from '../AppContext';
import { Asset, Contract, Priced } from './store';

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

export const LaaSBackendContractsMock = [
    {
        type: 'laas',
        id: 1,
        version: '0.0.1',
        deployed_timestamp: 123,
        description: 'laas mock back',
        metadata: {},
    },
];

export const LaaSBackendMock: Backend = {
    _Connectors: {
        ALGO: {
            version: 1,
            ABI: null,
            appApproval: 'a',
            appClear: 'a',
            companionInfo: {
                a: 1,
            },
            extraPages: 1,
            stateSize: 1,
            stateKeys: 1,
            mapDataSize: 1,
            mapDataKeys: 1,
            unsupported: ['a'],
            warnings: ['a'],
        },
    },
    _backendVersion: 1,
    _getViews: (stdlib, viewlib) => {
        return {
            views: { [1]: [] },
            infos: {
                ['viewn']: {},
            },
        };
    },
    _getMaps: (stdlib) => {
        return {
            mapDataTy: {
                name: 'a',
                canonicalize: (x: any) => null,
                netSize: 1,
                toNet: (bv) => new Uint8Array([]),
                fromNet: (nv: Uint8Array) => null,
                netName: 'a',
                defaultValue: null,
            },
        };
    },
    _Participants: {
        ['1']: null,
    },
    _APIs: {
        ['1']: null,
    },
    _stateSourceMap: {
        [1]: null,
    },
    _getEvents: (stdlib) => ({
        ['1']: [null],
    }),
};

export const LaaSCtcMock: ReachContract = {
    getInfo: async () => {
        return new BigNumber(0, '16');
    },
    getViews: () => {
        return {
            ['1']: async () => {
                return null;
            },
        };
    },
    getContractAddress: async () => {
        return 'a';
    },
    getABI: (x?: boolean) => {},
    participants: {
        ['1']: async () => {
            return null;
        },
    },
    p: {
        ['1']: async () => {
            return null;
        },
    },
    views: {
        ['1']: async () => {
            return null;
        },
    },
    v: {
        ['1']: async () => {
            return null;
        },
    },
    unsafeViews: {
        ['1']: async () => {
            return null;
        },
    },
    apis: {
        ['1']: async () => {
            return null;
        },
    },
    a: {
        ['1']: async () => {
            return null;
        },
    },
    safeApis: {
        ['1']: async () => {
            return null;
        },
    },
    e: {
        ['1']: null,
    },
    events: {
        ['1']: null,
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    _initialize: () => null,
};

export const laasCtcMockSubscription: Contract<'laas'> = {
    id: 1,
    info: {
        type: 'laas',
        id: 1,
        version: '0.0.1',
        deployed_timestamp: 12,
        description: 'laas mock subscription contract',
        metadata: {
            cache: undefined,
            verified: true,
        },
    },
    ctc: {
        apis: {
            provide_b: (amount: number) => {},
            withdraw_excessive_a: () => {},
            end_vault: () => {},
            // seeker достает свои деньги скорее всего после аукциона
            ls_withdraw: () => {},
            withdraw_b: (amount: number) => {},
            auction_buy: (bAmount: number, aToBuyDesired: number) => {},
            change_priority: (new_priority_addr: string) => {},
        },
    },
    state: {
        initial: {
            startBlock: 24110498,
            vaultRunBlocks: 10000000,
            subscriptionBlock: 1000000,
            initialABalance: BigInt(100000),
            aToken: META_TOKEN_ID,
            bToken: 0,
            lpToken: 93085031,
            slpToken: 0,
            liquidityPoolApp: 123,
            creator: 'addr',
            liquidityPoolAddr: 'addr',
        },
        global: {
            totalALiqProvided: BigInt(50000),
            totalBLiqProvided: BigInt(10000),
            isFullySubscribed: false,

            lsAAccumulator: BigInt(10),
            lsBAccumulator: BigInt(10),
            priorityAddress: 'addr',

            totalBToWithdraw: BigInt(1000),

            auctionInitMarketPriceMult: BigInt(2),
            auctionStartBlock: 3000,
            auctionLeftToRaise: BigInt(10000),

            aBalance: BigInt(1000),
            bBalance: BigInt(1000),
            lpBalance: BigInt(1000),
        },
        local: {
            currentBlock: 10,
        },
    },
};

export const laasCtcMockRunning: Contract<'laas'> = {
    id: 2,
    info: {
        type: 'laas',
        id: 2,
        version: '0.0.1',
        deployed_timestamp: 12,
        description: 'laas mock running contract',
        metadata: {
            cache: undefined,
            verified: true,
        },
    },
    ctc: {
        apis: {
            provide_b: (amount: number) => {},
            withdraw_excessive_a: () => {},
            end_vault: () => {},
            // seeker достает свои деньги скорее всего после аукциона
            ls_withdraw: () => {},
            withdraw_b: (amount: number) => {},
            auction_buy: (bAmount: number, aToBuyDesired: number) => {},
            change_priority: (new_priority_addr: string) => {},
        },
    },
    state: {
        initial: {
            startBlock: 24110498,
            vaultRunBlocks: 100000,
            subscriptionBlock: 10000,
            initialABalance: BigInt(100000),
            aToken: META_TOKEN_ID,
            bToken: 0,
            lpToken: 93085031,
            slpToken: 0,
            liquidityPoolApp: 123,
            creator: 'addr',
            liquidityPoolAddr: 'addr',
        },
        global: {
            totalALiqProvided: BigInt(50000),
            totalBLiqProvided: BigInt(10000),
            isFullySubscribed: true,

            lsAAccumulator: BigInt(10),
            lsBAccumulator: BigInt(10),
            priorityAddress: 'addr',

            totalBToWithdraw: BigInt(1000),

            auctionInitMarketPriceMult: BigInt(2),
            auctionStartBlock: 24200498,
            auctionLeftToRaise: BigInt(10000),

            aBalance: BigInt(1000),
            bBalance: BigInt(1000),
            lpBalance: BigInt(1000),
        },
        local: {
            currentBlock: 10,
        },
    },
};

export const laasCtcMockAuction: Contract<'laas'> = {
    id: 3,
    info: {
        type: 'laas',
        id: 3,
        version: '0.0.1',
        deployed_timestamp: 12,
        description: 'laas mock auction contract',
        metadata: {
            cache: undefined,
            verified: true,
        },
    },
    ctc: {
        apis: {
            provide_b: (amount: number) => {},
            withdraw_excessive_a: () => {},
            end_vault: () => {},
            // seeker достает свои деньги скорее всего после аукциона
            ls_withdraw: () => {},
            withdraw_b: (amount: number) => {},
            auction_buy: (bAmount: number, aToBuyDesired: number) => {},
            change_priority: (new_priority_addr: string) => {},
        },
    },
    state: {
        initial: {
            startBlock: 24109498,
            vaultRunBlocks: 1000000,
            subscriptionBlock: 10,
            initialABalance: BigInt(100000),
            aToken: META_TOKEN_ID,
            bToken: 0,
            lpToken: 93085031,
            slpToken: 0,
            liquidityPoolApp: 123,
            creator: 'addr',
            liquidityPoolAddr: 'addr',
        },
        global: {
            totalALiqProvided: BigInt(50000),
            totalBLiqProvided: BigInt(10000),
            isFullySubscribed: false,

            lsAAccumulator: BigInt(10),
            lsBAccumulator: BigInt(10),
            priorityAddress: 'addr',

            totalBToWithdraw: BigInt(1000),

            auctionInitMarketPriceMult: BigInt(2),
            auctionStartBlock: 24110498,
            auctionLeftToRaise: BigInt(10000),

            aBalance: BigInt(1000),
            bBalance: BigInt(1000),
            lpBalance: BigInt(1000),
        },
        local: {
            currentBlock: 10,
        },
    },
};

export const laasCtcMockWithdraw: Contract<'laas'> = {
    id: 4,
    info: {
        type: 'laas',
        id: 4,
        version: '0.0.1',
        deployed_timestamp: 12,
        description: 'laas mock withdraw contract',
        metadata: {
            cache: undefined,
            verified: true,
        },
    },
    ctc: {
        apis: {
            provide_b: (amount: number) => {},
            withdraw_excessive_a: () => {},
            end_vault: () => {},
            // seeker достает свои деньги скорее всего после аукциона
            ls_withdraw: () => {},
            withdraw_b: (amount: number) => {},
            auction_buy: (bAmount: number, aToBuyDesired: number) => {},
            change_priority: (new_priority_addr: string) => {},
        },
    },
    state: {
        initial: {
            startBlock: 24109498,
            vaultRunBlocks: 10,
            subscriptionBlock: 5,
            initialABalance: BigInt(100000),
            aToken: META_TOKEN_ID,
            bToken: 0,
            lpToken: 93085031,
            slpToken: 0,
            liquidityPoolApp: 123,
            creator: 'addr',
            liquidityPoolAddr: 'addr',
        },
        global: {
            totalALiqProvided: BigInt(50000),
            totalBLiqProvided: BigInt(10000),
            isFullySubscribed: false,

            lsAAccumulator: BigInt(10),
            lsBAccumulator: BigInt(10),
            priorityAddress: 'addr',

            totalBToWithdraw: BigInt(1000),

            auctionInitMarketPriceMult: BigInt(2),
            auctionStartBlock: 24109500,
            auctionLeftToRaise: BigInt(0),

            aBalance: BigInt(1000),
            bBalance: BigInt(1000),
            lpBalance: BigInt(1000),
        },
        local: {
            currentBlock: 10,
        },
    },
};
