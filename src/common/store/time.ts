import { Event, createEvent, createStore } from 'effector';
import { indexer } from '../../AppContext';
import { createTimeDeferredStore, nonConcurrent } from './utils';

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
export const makeClock = (period: number): Event<number> => {
    const clock = createEvent<number>();
    setInterval(() => clock(Date.now()), period);
    return clock;
};

// updating network time once in 5 secs - seems like an okay trade-off
queryTimeUpdate();
makeClock(5000).watch(() => queryTimeUpdate());
