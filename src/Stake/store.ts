// @ts-expect-error No provided type bindings in contracts package
import { backend as distribution_17_0_4 } from 'metalabs-distribution-17_0_4';
// @ts-expect-error No provided type bindings in contracts package
import { backend as distribution_17_0_5 } from 'metalabs-distribution-17_0_5';

import { combine, Store } from 'effector';
import { buildContractsStore, registerPricedAsset, $networkTime, $pricedAssets } from '../common/store';
import {
    sortPoolsOnStatus,
    $stakePools,
    $farmStakeTokens,
    projectContracts,
    PoolAggregates,
    createAggregates,
} from '../Farm/store';

const DISTRIBUTION_BACKENDS = {
    '17.0.4': distribution_17_0_4,
    '17.0.5': distribution_17_0_5,
};

const { $contracts, $contractStatesWithCache, setContractInfos } = buildContractsStore(
    'distribution',
    DISTRIBUTION_BACKENDS
);

export const $distributionPools = combine($contracts, $networkTime, projectContracts);
export const setDistributionPoolInfos = setContractInfos;

export const $sortedStakingPools = combine(
    $networkTime,
    $stakePools,
    $distributionPools,
    (networkTime, stakePools, distrPools) => sortPoolsOnStatus({ networkTime, pools: [...stakePools, ...distrPools] })
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

export const $distributionPoolAggregates: Store<PoolAggregates> = createAggregates($sortedStakingPools);
