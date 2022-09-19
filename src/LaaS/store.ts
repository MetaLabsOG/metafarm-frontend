import { buildContractsStore, registerPricedAsset } from '../common/store';
import { LaaSBackendMock } from '../common/mocks';

const LAAS_BACKENDS = {
    '0_0_1': LaaSBackendMock,
};

const { $contracts, $contractStatesWithCache, setContractInfos } = buildContractsStore('laas', LAAS_BACKENDS);

export const $laasPools = $contracts;
export const setLaasPoolInfos = setContractInfos;

$contractStatesWithCache.watch((states) =>
    states.valueSeq().forEach((s) => {
        registerPricedAsset(s.initial.aToken);
        registerPricedAsset(s.initial.bToken);
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
