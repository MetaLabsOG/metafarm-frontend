import ReactGA from 'react-ga';
import { LPTokenInfo } from './dexes';
import { Asset, Priced } from './common/store';
import { Account } from './types';
import { ALGONET } from './AppContext';
import { BROWSER } from './wallet/ConnectWallet';

export enum LogName {
    WALLET,
    ERRORS,
    FOMO,
    SWAP,
    ZAP,
    FARM,
    ADDFARM,
    LAAS,
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

export function logEvent(address: string | undefined, parameters: Record<string, any>, logName: LogName) {
    // console.log('LOG', address, parameters);
    const event: string = parameters.message ?? parameters.status ?? ''; // TODO
    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer pattoCqV44GNxV1xK.467bab14578f66afa4d0ecde5c136b337c051328af65fe9ab9934958cafcfc06',
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

    if (logName === LogName.ADDFARM) {
        fetch('https://api.airtable.com/v0/app7KHOjfNZ8vVEGe/' + LogName[logName].toLowerCase(), requestOptions).catch(
            () => {
                console.warn('Failed to log event to Airtable');
            }
        );
    }

    // AMPLITUDE
    const requestOptionsAmplitude = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            api_key: '91836797cfc6bdf5e35d828744747bb9',
            events: [
                {
                    user_id: address ?? '',
                    event_type: event,
                    time: Date.now(),
                    event_properties: {
                        algonet: ALGONET.toString(),
                        ...parameters,
                    },
                    platform: BROWSER?.name,
                    os_name: BROWSER?.os,
                },
            ],
        }),
    };

    fetch('https://api2.amplitude.com/2/httpapi', requestOptionsAmplitude).catch(() => {
        console.warn('Failed to log event to Amplitude');
    });

    ReactGA.event({
        category: 'User',
        action: event,
    });
}
