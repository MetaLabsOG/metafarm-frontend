// @ts-expect-error No provided type bindings in contracts package
import { backend as distribution_17_0_4 } from 'metalabs-distribution-17_0_4';
// @ts-expect-error No provided type bindings in contracts package
import { backend as distribution_17_0_5 } from 'metalabs-distribution-17_0_5';

import { combine, Store } from 'effector';
import { buildReachContractsStore, registerPricedAsset, $networkTime, $pricedAssets, Contract } from '../common/store';
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
    combinePoolsWithInfo,
} from '../Farm/store';

const DISTRIBUTION_BACKENDS = {
    '17.0.4': distribution_17_0_4,
    '17.0.5': distribution_17_0_5,
};

const { $contracts, $contractStatesWithCache, setContractInfos } = buildReachContractsStore(
    'distribution',
    DISTRIBUTION_BACKENDS
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

export const $stakePoolsWithStats = combinePoolsWithInfo($allStakePools, $stakeAprs, $distributionPoolDollarInfos);

export const $sortedStakePoolsWithStats = createSortedPoolsWithStats($stakePoolsWithStats);
