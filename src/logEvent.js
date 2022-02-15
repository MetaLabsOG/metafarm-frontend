export function logEvent(address, status="", log_name="") {
    // console.log('LOG', address, status, error);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer keyVWFbLtlqU1tMht',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "fields": {
                "address": address,
                "status": status,
                "timestamp": Date.now(),
                "date": new Date(Date.now()).toUTCString(),
            }
        })
    };
    fetch("https://api.airtable.com/v0/appqAikFZd31XeJqW/fomo", requestOptions);
}