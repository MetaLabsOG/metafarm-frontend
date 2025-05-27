// Standalone test script for logging
import fetch from 'node-fetch';

const LogName = {
  ADDFARM: 'addfarm'
};

function logEvent(address, parameters, logName) {
  const event = parameters.message ?? parameters.status ?? '';
  
  // Airtable logging
  const airtableOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer pat2Cv2OOI2W41O5H.cbc7ca141ddf15d1672e54414d302b23e7ee9bca896dbbdea8be9551651ee67b',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        address: address ?? '',
        timestamp: Date.now(),
        date: new Date(Date.now()).toUTCString(),
        algonet: 'test',
        ...parameters
      }
    })
  };

  if (logName === LogName.ADDFARM) {
    console.log('Sending to Airtable:', JSON.parse(airtableOptions.body));
    return fetch('https://api.airtable.com/v0/appwDPUpZRUCUOnRI/tblcnNvIzJEnbNPke', airtableOptions)
      .then(res => res.json())
      .then(json => {
        console.log('Airtable response:', json);
        return json;
      })
      .catch(err => {
        console.warn('Failed to log event to Airtable:', err);
        throw err;
      });
  }

  // Amplitude logging
  const amplitudeOptions = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify({
      api_key: '91836797cfc6bdf5e35d828744747bb9',
      events: [{
        user_id: address ?? '',
        event_type: event,
        time: Date.now(),
        event_properties: {
          algonet: 'test',
          ...parameters
        },
        platform: 'test',
        os_name: 'test'
      }]
    })
  };

  console.log('Sending to Amplitude:', JSON.parse(amplitudeOptions.body));
  return fetch('https://api2.amplitude.com/2/httpapi', amplitudeOptions)
    .then(res => res.json())
    .then(json => {
      console.log('Amplitude response:', json);
      return json;
    })
    .catch(err => {
      console.warn('Failed to log event to Amplitude:', err);
      throw err;
    });
}

async function runTests() {
  try {
    // Test farm creation log
    await logEvent(
      'test-address',
      {
        status: '[ADDFARM START]',
        contractType: 'farm',
        params: JSON.stringify({ foo: 'bar', test: true })
      },
      LogName.ADDFARM
    );
    console.log('Sent farm creation event\n');

    // Test farm error log
    await logEvent(
      'test-address',
      {
        status: '[ADDFARM ERROR]',
        contractType: 'farm', 
        error: 'Simulated error for testing',
        params: JSON.stringify({ foo: 'bar', test: true })
      },
      LogName.ADDFARM
    );
    console.log('Sent farm error event\n');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

runTests(); 