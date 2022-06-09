import {
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
import { ViewVal, ViewMap, ViewFunMap } from '@reach-sh/stdlib/dist/types/shared_impl';
import { Stdlib_User } from '@reach-sh/stdlib/dist/types/interfaces';

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
>;
export { Account, Backend, ViewVal, ViewMap, ViewFunMap, Contract };
