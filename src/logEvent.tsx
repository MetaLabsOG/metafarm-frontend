import { LPTokenInfo } from './providers/dexesProvider';
import { Asset, Priced } from './common/store';
import { Account } from './types';
import { ALGONET } from './AppContext';

export enum LogName {
    WALLET,
    ERRORS,
    FOMO,
    SWAP,
    ZAP,
    FARM,
}

export function logFarmActionData(
    account: Account | null,
    action: string,
    amount: number | string,
    lpTokenInfo: LPTokenInfo | Asset | null = null,
    rewardAsset: Priced<Asset> | null = null,
    error: string | null = null
) {
    const data = {
        message: '[' + action.toUpperCase() + ']',
        amount: amount.toString(),
        lp_token_name: lpTokenInfo?.name,
        lp_token_id: lpTokenInfo?.id,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        lp_asset1_id: lpTokenInfo?.asset1,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        lp_asset2_id: lpTokenInfo?.asset2,
        reward_token_id: rewardAsset?.id,
        reward_token_name: rewardAsset?.unitName,
        error: error,
    };

    logEvent(account?.networkAccount.addr, data, LogName.FARM);
}

export function logEvent(address: string | undefined, params: Record<string, unknown>, logName: LogName) {
    // console.log('LOG', address, status, error);
    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer keyVWFbLtlqU1tMht',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fields: {
                address: address ?? '',
                timestamp: Date.now(),
                date: new Date(Date.now()).toUTCString(),
                algonet: ALGONET.toString(),
                ...params,
            },
        }),
    };

    fetch('https://api.airtable.com/v0/appqAikFZd31XeJqW/' + LogName[logName].toLowerCase(), requestOptions).catch(
        () => {
            console.warn('Faliled to log event to Airtable');
        }
    );
}
