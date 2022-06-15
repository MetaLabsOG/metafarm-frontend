import type {
    Provider,
    ProviderEnv,
    ProviderName,
    Token,
    ContractInfo,
    Contract,
    Address,
    NetworkAccount,
    Ty,
    Backend,
    Account,
} from '@reach-sh/stdlib/dist/types/ALGO';
import type {
    ARC11_Wallet,
    WalletTransaction,
    EnableNetworkResult,
    EnableAccountsResult,
    EnableOpts,
    EnableResult,
    EnableAccountsOpts,
} from '@reach-sh/stdlib/ALGO_ARC11';
import type { ViewVal, ViewMap, ViewFunMap } from '@reach-sh/stdlib/dist/types/shared_impl';
import type { Stdlib_User } from '@reach-sh/stdlib/dist/types/interfaces';

export type ReachStdlib = Stdlib_User<
    Provider,
    ProviderEnv,
    ProviderName,
    Token,
    ContractInfo,
    Address,
    NetworkAccount,
    Ty,
    Backend,
    Account
> & { clearProvider: () => void };
export type {
    Provider,
    Account,
    Address,
    Backend,
    ViewVal,
    ViewMap,
    ViewFunMap,
    Contract,
    ARC11_Wallet,
    WalletTransaction,
    EnableNetworkResult,
    EnableAccountsResult,
    EnableOpts,
    EnableResult,
    EnableAccountsOpts,
};
