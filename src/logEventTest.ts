import { logEvent, LogName } from './logEvent';

function testLogFarmCreation() {
  logEvent(
    'test-address',
    {
      status: '[ADDFARM START]',
      contractType: 'farm',
      params: JSON.stringify({ foo: 'bar', test: true })
    },
    LogName.ADDFARM
  );
  console.log('Logged farm creation event');
}

function testLogFarmError() {
  logEvent(
    'test-address',
    {
      status: '[ADDFARM ERROR]',
      contractType: 'farm',
      error: 'Simulated error for testing',
      params: JSON.stringify({ foo: 'bar', test: true })
    },
    LogName.ADDFARM
  );
  console.log('Logged farm error event');
}

if (require.main === module) {
  testLogFarmCreation();
  testLogFarmError();
} 