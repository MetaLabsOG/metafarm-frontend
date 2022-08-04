import { Event, createEvent, createStore, sample, Unit } from 'effector';
import { indexer } from '../../AppContext';
import { createTimeDeferredStore, nonConcurrent } from './utils';
import { interval } from 'patronum';

// Time store
export const { $store: $networkTime, update: queryTimeUpdate } = createTimeDeferredStore<void, number>(
    0,
    1000, // update once in a second max
    nonConcurrent(() =>
        indexer
            .makeHealthCheck()
            .do()
            .then((data) => data.round as number)
    )
);

// TODO: we can probably aggregate this value from the history of network time queries?....
export const $meanRoundDuration = createStore<number>(4.35);

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

// updating network time once in 5 secs - seems like an okay trade-off
void doEachTick(5000, queryTimeUpdate);
