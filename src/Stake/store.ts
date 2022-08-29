// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { backend as distributionBackend } from '@metalabsog/distribution';
import { combine, Store } from 'effector';
import { buildContractsStore, registerPricedAsset, $networkTime, $pricedAssets, Contract } from '../common/store';
import {
    $stakePools,
    $farmStakeTokens,
    projectContracts,
    PoolAggregates,
    createAggregates,
    PoolDollarInfo,
    createDollarInfos,
    createAprs,
    PoolWithStats,
    createSortedPoolsWithStats,
} from '../Farm/store';

const { $contracts, $contractStatesWithCache, setContractInfos } = buildContractsStore(
    'distribution',
    distributionBackend
);

export const $distributionPools = combine($contracts, $networkTime, projectContracts);
export const setDistributionPoolInfos = setContractInfos;

export const $allStakePools = combine(
    { stakePools: $stakePools, distributionPools: $distributionPools },
    ({ stakePools, distributionPools }) =>
        [...stakePools, ...distributionPools] as Array<Contract<'farm' | 'distribution'>>
);

$contractStatesWithCache.watch((states) =>
    states.valueSeq().forEach((s) => {
        registerPricedAsset(s.initial.token);
    })
);

export const $distributedTokens = combine($pricedAssets, $contractStatesWithCache, (tokens, states) =>
    states.map((state, _) => tokens.get(state.initial.token, null))
);

export const $stakingTokens = combine($distributedTokens, $farmStakeTokens, (distr, farm) => distr.merge(farm));

export const $distributionPoolDollarInfos: Store<PoolDollarInfo[]> = createDollarInfos($allStakePools);
export const $distributionPoolAggregates: Store<PoolAggregates> = createAggregates($distributionPoolDollarInfos);

export const $stakeAprs = createAprs($allStakePools, $stakingTokens);

export const $stakePoolsWithStats = combine(
    {
        pools: $allStakePools,
        aprs: $stakeAprs,
        dollarInfos: $distributionPoolDollarInfos,
    },
    ({ pools, aprs, dollarInfos }) => {
        if (pools.length !== aprs.length || pools.length !== dollarInfos.length) {
            return [];
        }
        return [...Array(pools.length).keys()].map((i) => {
            const element: PoolWithStats = {
                pool: pools[i],
                apr: aprs[i],
                dollarInfo: dollarInfos[i],
            };
            return element;
        });
    }
);

export const { sortPoolBy: sortStakePoolBy, $sortedPoolsWithStats: $sortedStakePoolsWithStats } =
    createSortedPoolsWithStats($stakePoolsWithStats);
