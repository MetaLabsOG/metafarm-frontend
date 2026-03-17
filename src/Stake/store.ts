import { combine, createEvent, createStore, sample, Store } from 'effector';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { backend as distribution_17_0_4 } from '../vendor/metalabs-distribution-17_0_4';
// @ts-ignore
import { backend as distribution_17_0_5 } from '../vendor/metalabs-distribution-17_0_5';

import { buildContractsStore, registerPricedAsset, $pricedAssets, Contract } from '../common/store';
import {
    $stakePools,
    $farmStakeTokens,
    PoolAggregates,
    createAggregates,
    PoolDollarInfo,
    createDollarInfos,
    createAprs,
    PoolWithStats,
    createSortedPoolsWithStats,
    combinePoolsWithInfo,
    initializeFarmContract,
} from '../Farm/store';

const DISTRIBUTION_BACKENDS = {
    '17.0.4': distribution_17_0_4,
    '17.0.5': distribution_17_0_5,
};

const { $contracts, $contractStatesWithCache, setContractInfos, initializeContract } = buildContractsStore(
    'distribution',
    DISTRIBUTION_BACKENDS
);

// $distributionPools no longer depends on $networkTime — reward projection moved to Pool component
export const $distributionPools = $contracts;
export const setDistributionPoolInfos = setContractInfos;
export const initializeDistributionContract = initializeContract;

export const $distributionPoolsLoaded = createStore(false)
    .on(setContractInfos, () => true);

export const setDistributionPoolsError = createEvent<boolean>();
export const $distributionPoolsError = createStore(false)
    .on(setDistributionPoolsError, (_, v) => v)
    .on(setContractInfos, () => false);

export const $allStakePools = combine(
    { stakePools: $stakePools, distributionPools: $distributionPools },
    ({ stakePools, distributionPools }) =>
        [...stakePools, ...distributionPools] as Array<Contract<'farm' | 'distribution'>>
);

const _registeredStakeAssets = new Set<number>();

const _stakeStatesOnSet = sample({
    clock: setContractInfos,
    source: $contractStatesWithCache,
    fn: (states) => states,
});

_stakeStatesOnSet.watch((states) => {
    states.valueSeq().forEach((s) => {
        if (!_registeredStakeAssets.has(s.initial.token)) {
            _registeredStakeAssets.add(s.initial.token);
            registerPricedAsset(s.initial.token);
        }
    });
});

export const $distributedTokens = combine($pricedAssets, $contractStatesWithCache, (tokens, states) =>
    states.map((state, _) => tokens.get(state.initial.token, null))
);

export const $stakingTokens = combine($distributedTokens, $farmStakeTokens, (distr, farm) => distr.merge(farm));

export const $distributionPoolDollarInfos: Store<PoolDollarInfo[]> = createDollarInfos($allStakePools);
export const $distributionPoolAggregates: Store<PoolAggregates> = createAggregates($distributionPoolDollarInfos);

export const $stakeAprs = createAprs($allStakePools, $stakingTokens);

export const $stakePoolsWithStats = combinePoolsWithInfo($allStakePools, $stakeAprs, $distributionPoolDollarInfos);

export const $sortedStakePoolsWithStats = createSortedPoolsWithStats($stakePoolsWithStats);
