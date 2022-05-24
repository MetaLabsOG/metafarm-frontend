import { Account } from '../../types';
import { createEffect, createEvent, forward, restore, sample } from 'effector';
import { algod } from '../../AppContext';

export const setAccount = createEvent<Account>();
export const $account = restore(setAccount, null);

export const fetchAccountInfo = createEffect((account: Account) =>
    algod.accountInformation(account.networkAccount.addr).do()
);

forward({
    from: setAccount,
    to: fetchAccountInfo,
});

export const $accountInfo = restore(fetchAccountInfo.doneData, null);

export const refreshAccountInfo = createEvent();

sample({
    //@ts-ignore
    clock: refreshAccountInfo,
    source: $account,
    filter: account => account !== null,
    target: fetchAccountInfo,
})