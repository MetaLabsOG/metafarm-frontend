import { createEffect, createEvent, restore, sample } from 'effector';
import { Account } from '../../types';
import { getAccountInformation } from '../../providers/typedAlgod';

export const setAccount = createEvent<Account | null>();
export const $account = restore(setAccount, null);

export const fetchAccountInfoFx = createEffect(async (account: Account | null) => {
    return account === null ? null : getAccountInformation(account.networkAccount.addr);
});

sample({
    clock: setAccount,
    target: fetchAccountInfoFx,
});

export const $accountInfo = restore(fetchAccountInfoFx.doneData, null);

export const refreshAccountInfo = createEvent();

sample({
    clock: refreshAccountInfo,
    source: $account,
    filter: (account) => account !== null,
    target: fetchAccountInfoFx,
});
