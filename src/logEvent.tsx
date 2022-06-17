export enum LogName {
    wallet,
    errors,
    fomo,
    swap,
    zap,
    farm,
}

export function logEvent(address: string | undefined, params: any, logName: LogName) {
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
                ...params,
            },
        }),
    };

    fetch('https://api.airtable.com/v0/appqAikFZd31XeJqW/' + LogName[logName], requestOptions);
}
