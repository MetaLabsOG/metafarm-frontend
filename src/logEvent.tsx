import { LPTokenInfo } from './dexes';
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
    const asset1 = lpTokenInfo !== null && 'asset1' in lpTokenInfo ? lpTokenInfo.asset1 : null;
    const asset2 = lpTokenInfo !== null && 'asset2' in lpTokenInfo ? lpTokenInfo.asset2 : null;

    const data = {
        message: '[' + action.toUpperCase() + ']',
        amount: amount.toString(),
        lp_token_name: lpTokenInfo?.name,
        lp_token_id: lpTokenInfo?.id,
        reward_token_id: rewardAsset?.id,
        reward_token_name: rewardAsset?.unitName,
        error,
        lp_asset1_id: asset1,
        lp_asset2_id: asset2,
    };

    logEvent(account?.networkAccount.addr, data, LogName.FARM);
}

export function logEvent(address: string | undefined, parameters: Record<string, unknown>, logName: LogName) {
    // Console.log('LOG', address, status, error);
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
                ...parameters,
            },
        }),
    };

    fetch('https://api.airtable.com/v0/appqAikFZd31XeJqW/' + LogName[logName].toLowerCase(), requestOptions).catch(
        () => {
            console.warn('Faliled to log event to Airtable');
        }
    );
}
