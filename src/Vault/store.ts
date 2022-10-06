import { buildContractsStore, registerPricedAsset } from '../common/store';
import { VaultBackendMock } from '../common/mocks';

const VAULT_BACKENDS = {
    '0_0_1': VaultBackendMock,
};

const { $contracts, $contractStatesWithCache, setContractInfos } = buildContractsStore('vault', VAULT_BACKENDS);

export const $vaultPools = $contracts;
export const setVaultPoolInfos = setContractInfos;

$contractStatesWithCache.watch((states) =>
    states.valueSeq().forEach((s) => {
        registerPricedAsset(s.initial.aToken);
        registerPricedAsset(s.initial.bToken);
    })
);

// export const $vaultTokens = combine($pricedAssets, $contractStatesWithCache, (tokens, states) =>
//     states.map((state, _) => tokens.get(state.initial.aToken, null))
// );
// export const $vaultPoolDollarInfos: Store<PoolDollarInfo[]> = createDollarInfos($vaultPools);
// export const $vaultPoolAggregates: Store<PoolAggregates> = createAggregates($vaultPoolDollarInfos);
// export const $stakeAprs = createAprs($vaultPools, $vaultTokens);
// export const $vaultPoolsWithStats = combinePoolsWithInfo($vaultPools, $stakeAprs, $vaultPoolDollarInfos);
// export const $sortedVaultPoolsWithStats = createSortedPoolsWithStats($vaultPoolsWithStats);
