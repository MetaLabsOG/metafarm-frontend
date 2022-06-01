// @ts-ignore
import { backend as distributionBackend } from '@metalabsog/distribution';
import { sample, combine } from 'effector';
import {
    buildContractsStore,
    registerAsset,
    registerPricedAsset,
    $algoUsdPrice,
    $pricedAssets,
    $networkTime,
} from '../common/store';
import { $lpTokenInfos, getLPTokenInfoFx, sortPoolsOnStatus } from '../Farm/store';

const { $contracts, $contractStates, setContractInfos, triggerStateUpdate, contractStateUpdated } = buildContractsStore(
    'farm',
    distributionBackend
);

export const $pools = $contracts;
export const setStakingPoolInfos = setContractInfos;
export const triggerPoolUpdate = triggerStateUpdate;

$pools.watch((v) => console.log('STAKE POOLS', v));

export const $sortedStakingPools = combine($networkTime, $pools, (networkTime, pools) =>
    sortPoolsOnStatus({ networkTime, pools })
);

$sortedStakingPools.watch((v) => console.log(v));

sample({
    clock: contractStateUpdated,
    source: combine({ tokenInfos: $lpTokenInfos, algoPrice: $algoUsdPrice }),
    filter: ({ tokenInfos }, { state }) => !(state.initial.stakeToken in tokenInfos),
    fn: ({ algoPrice }, { state }) => ({ asset: state.initial.stakeToken, algoPrice, provider: undefined }),
    target: getLPTokenInfoFx,
});

$contractStates.watch((states) =>
    states.valueSeq().forEach((s) => {
        registerAsset(s.initial.stakeToken);
        registerPricedAsset(s.initial.rewardToken);
    })
);

// These substores avoid a bug when token infos are not updated in components
export const $stakeLPTokens = combine($lpTokenInfos, $contractStates, (lpTokens, states) =>
    states.map((state, _) => lpTokens.get(state.initial.stakeToken, null))
);

export const $stakeRewardTokens = combine($pricedAssets, $contractStates, (tokens, states) =>
    states.map((state, _) => tokens.get(state.initial.rewardToken, null))
);
