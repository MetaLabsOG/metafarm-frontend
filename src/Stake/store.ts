// @ts-ignore
import { backend as distributionBackend } from '@metalabsog/distribution';
import { combine } from 'effector';
import { buildContractsStore, registerPricedAsset, $networkTime, $pricedAssets } from '../common/store';
import { sortPoolsOnStatus } from '../Farm/store';

const { $contracts, $contractStatesWithCache, setContractInfos } = buildContractsStore(
    'distribution',
    distributionBackend
);

export const $stakingPools = $contracts;
export const setStakingPoolInfos = setContractInfos;

$stakingPools.watch((v) => {}); //console.log('STAKE POOLS', v));

export const $sortedStakingPools = combine($networkTime, $stakingPools, (networkTime, pools) =>
    sortPoolsOnStatus({ networkTime, pools })
);

$sortedStakingPools.watch((v) => {}); //console.log(v));

$contractStatesWithCache.watch((states) =>
    states.valueSeq().forEach((s) => {
        registerPricedAsset(s.initial.token);
    })
);

export const $stakingTokens = combine($pricedAssets, $contractStatesWithCache, (tokens, states) =>
    states.map((state, _) => tokens.get(state.initial.token, null))
);
