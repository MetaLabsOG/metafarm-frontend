import type {
    Provider,
    ProviderEnv,
    ProviderName,
    Token,
    ContractInfo,
    Address,
    NetworkAccount,
    Ty,
    Backend,
    Account,
} from '@reach-sh/stdlib/dist/types/ALGO';
import type { ARC11_Wallet, WalletTransaction } from '@reach-sh/stdlib/ALGO_ARC11';

import type { Stdlib_User } from '@reach-sh/stdlib/dist/types/interfaces';

/**
 * Makes all optional fields in the record type (ones ending with `?`) non-optional.
 * E.g. `AllDetined<ContractState<T>>` __must__ have the `local` field.
 */
export type AllDefined<T> = {
    [Property in keyof T]-?: T[Property];
};

/**
 * Substitutes one type for another recursively in T
 */
export type SubstituteType<T, A, B> = T extends A
    ? B
    : T extends Record<string, unknown>
    ? { [K in keyof T]: SubstituteType<T[K], A, B> }
    : T;

export type WalletTransactionGroup = {
    firstTxID: string;
    txns: WalletTransaction[];
    usedApps?: number[];
    usedAssets?: number[];
};

declare global {
    interface Window {
        algorand?: Omit<AllDefined<ARC11_Wallet>, 'signTxns'> & {
            signTxns: (txns: WalletTransaction[], options?: any) => Promise<string[]>;
            disconnect: () => Promise<void>;
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

export {
    type Contract,
    type Provider,
    type Address,
    type Account,
    type Backend,
} from '@reach-sh/stdlib/dist/types/ALGO';
export {
    type EnableNetworkResult,
    type EnableOpts,
    type EnableAccountsResult,
    type EnableResult,
    type EnableAccountsOpts,
    type ARC11_Wallet,
    type WalletTransaction,
} from '@reach-sh/stdlib/ALGO_ARC11';
export { type ViewVal, type ViewMap, type ViewFunMap } from '@reach-sh/stdlib/dist/types/shared_impl';
