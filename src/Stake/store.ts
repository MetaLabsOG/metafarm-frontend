// @ts-ignore
import { backend as distributionBackend } from '@metalabsog/distribution';
import { combine } from 'effector';
import { buildContractsStore, registerAsset, registerPricedAsset, $networkTime, $pricedAssets } from '../common/store';
import { sortPoolsOnStatus } from '../Farm/store';

const { $contracts, $contractStates, setContractInfos } = buildContractsStore('distribution', distributionBackend);

export const $stakingPools = $contracts;
export const setStakingPoolInfos = setContractInfos;

$stakingPools.watch((v) => console.log('STAKE POOLS', v));

export const $sortedStakingPools = combine($networkTime, $stakingPools, (networkTime, pools) =>
    sortPoolsOnStatus({ networkTime, pools })
);

$sortedStakingPools.watch((v) => console.log(v));

$contractStates.watch((states) =>
    states.valueSeq().forEach((s) => {
        registerAsset(s.initial.token);
        registerPricedAsset(s.initial.token);
    })
);

export const $stakingTokens = combine($pricedAssets, $contractStates, (tokens, states) =>
    states.map((state, _) => tokens.get(state.initial.token, null))
);
