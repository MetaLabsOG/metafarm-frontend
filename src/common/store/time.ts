import { Event, createEvent, createStore, sample, Unit } from 'effector';
import { interval } from 'patronum';
import { indexer } from '../../AppContext';
import { createTimeDeferredStore, nonConcurrent } from './utils';

// Time store
export const { $store: $networkTime, update: queryTimeUpdate } = createTimeDeferredStore<void, number>(
    0,
    1000, // Update once in a second max
    nonConcurrent(async () =>
        indexer
            .makeHealthCheck()
            .do()
            .then((data) => data.round as number)
    )
);

// TODO: we can probably aggregate this value from the history of network time queries?....
export const $meanRoundDuration = createStore<number>(3.7);

// Simple clock events
// Returns event which can be called to stop ticking
export const doEachTick = (period: number, unit: Unit<any>): Event<void> => {
    const startCounter = createEvent();
    const stopCounter = createEvent();
    const { tick } = interval({
        timeout: 5000,
        start: startCounter,
        stop: stopCounter,
    });

    sample({
        clock: tick,
        target: unit,
    });

    startCounter();
    return stopCounter;
};

// Updating network time once in 5 secs - seems like an okay trade-off
void doEachTick(5000, queryTimeUpdate);
