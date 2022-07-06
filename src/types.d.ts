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

/**
 * Makes all optional fields in the record type (ones ending with `?`) non-optional.
 * E.g. `AllDetined<ContractState<T>>` __must__ have the `local` field.
 */
export type AllDefined<T> = {
    [Property in keyof T]-?: T[Property];
};

export type WalletTransactionGroup = {
    firstTxID: string;
    txns: WalletTransaction[];
    usedApps?: number[];
    usedAssets?: number[];
};

declare global {
    interface Window {
        algorand: Omit<AllDefined<ARC11_Wallet>, 'signTxns'> & {
            signTxns: (txns: WalletTransaction[], opts?: any) => Promise<string[]>;
        };
    }
}

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
