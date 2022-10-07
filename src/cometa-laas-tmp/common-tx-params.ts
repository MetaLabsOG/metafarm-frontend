import { AlgoTransferParam, SignType, TransactionType } from '@algo-builder/web/build/types';
import { Account } from 'algosdk';
import { Address } from '../types';

// TODO is somewhat arbitrary
// Fund app account with some ALGO
export function makeFundAppTx(fromAccount: Account, address: Address): AlgoTransferParam {
    const minBalance = 1_000_000;
    return {
        type: TransactionType.TransferAlgo,
        sign: SignType.SecretKey,
        fromAccount,
        toAccountAddr: address,
        amountMicroAlgos: minBalance + 2e6,
        payFlags: { totalFee: 1000 },
    };
}
