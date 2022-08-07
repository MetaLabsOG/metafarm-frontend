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

export type WalletTransactionGroup = {
    firstTxID: string;
    txns: WalletTransaction[];
    usedApps?: number[];
    usedAssets?: number[];
};

declare global {
    interface Window {
        algorand: Omit<AllDefined<ARC11_Wallet>, 'signTxns'> & {
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
export type { Provider, Account, Address, Backend, ARC11_Wallet, WalletTransaction };

export { type Contract } from '@reach-sh/stdlib/dist/types/ALGO';
export {
    type EnableNetworkResult,
    type EnableOpts,
    type EnableAccountsResult,
    type EnableResult,
    type EnableAccountsOpts,
} from '@reach-sh/stdlib/ALGO_ARC11';
export { type ViewVal, type ViewMap, type ViewFunMap } from '@reach-sh/stdlib/dist/types/shared_impl';
