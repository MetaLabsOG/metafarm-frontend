export function logEvent(address, params, log_name="") {
    // console.log('LOG', address, status, error);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer keyVWFbLtlqU1tMht',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "fields": {
                address,
                timestamp: Date.now(),
                date: new Date(Date.now()).toUTCString(),
                ...params
            }
        })
    };

    

    if (log_name) {
        fetch("https://api.airtable.com/v0/appqAikFZd31XeJqW/" + log_name, requestOptions);
    } else {
        fetch("https://api.airtable.com/v0/appqAikFZd31XeJqW/fomo", requestOptions);
    }
}