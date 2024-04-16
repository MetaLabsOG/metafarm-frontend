import { buildContractsStore } from '../common/store';
import { backend as laasBackend } from '../cometa-laas-tmp/wrapper';

// TODO shall we support multiple backends?
const { $contracts, $contractStatesWithCache, setContractInfos, initializeContract } = buildContractsStore(
    'laas',
    laasBackend
);

export const $laasPools = $contracts;
export const setLaasPoolInfos = setContractInfos;
export const initializeLaasPool = initializeContract;

$contractStatesWithCache.watch((states) =>
    states.valueSeq().forEach((s) => {
        // registerPricedAsset(s.initial.aToken);
        // registerPricedAsset(s.initial.bToken);
    })
);

// export const $laasTokens = combine($pricedAssets, $contractStatesWithCache, (tokens, states) =>
//     states.map((state, _) => tokens.get(state.initial.aToken, null))
// );
// export const $laasPoolDollarInfos: Store<PoolDollarInfo[]> = createDollarInfos($laasPools);
// export const $laasPoolAggregates: Store<PoolAggregates> = createAggregates($laasPoolDollarInfos);
// export const $stakeAprs = createAprs($laasPools, $laasTokens);
// export const $laasPoolsWithStats = combinePoolsWithInfo($laasPools, $stakeAprs, $laasPoolDollarInfos);
// export const $sortedLaasPoolsWithStats = createSortedPoolsWithStats($laasPoolsWithStats);
