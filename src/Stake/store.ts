// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { backend as distributionBackend } from '@metalabsog/distribution';
import { combine } from 'effector';
import { buildContractsStore, registerPricedAsset, $networkTime, $pricedAssets } from '../common/store';
import { sortPoolsOnStatus, $stakePools, $farmStakeTokens } from '../Farm/store';

const { $contracts, $contractStatesWithCache, setContractInfos } = buildContractsStore(
    'distribution',
    distributionBackend
);

export const $distributionPools = $contracts;
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
