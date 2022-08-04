import { createEffect, createStore, sample, createEvent, Event, Store, restore, Effect } from 'effector';
import { sleep } from '../lib';
import { AssetId, Asset } from './types';
import hash from 'object-hash';

export const assetId = (a: AssetId | Asset): number => (typeof a === 'number' ? a : a.id);

/**
 * Asynchronously gets the value of the store
 * NB: we cannot use just `store.watch` here because:
 * 1. we will need to unsub so that the store watchers do not leak
 * 2. we cannot do that with `store.watch` because the first watcher call gets
 *    fired synchronously (apparently lol) so that
 *    `const unsub = store.watch((v) => {unsub(); resolve(v)})` does not work
 *    since `unsub` gets fired before it is defined.
 * So better just use a throwaway event which gets GCed later anyway.
 */
export function fetchStore<T>(store: Store<T>): Promise<T> {
    return new Promise<T>((resolve) => {
        sample({ source: store }).watch((v) => {
            resolve(v);
        });
    });
}

/**
 * Wait until an event with particular params happens
 * Here, the problem with undefined `unsub` is not really present
 * because the event watcher never calls first time synchronously
 * unlike store watcher.
 */
export async function waitForEvent<T, P, E>(
    event: Event<T>,
    failEvent?: Event<{ params: P; error: E }>, // designed to usually be provided effect.fail event
    filter?: (v: T) => boolean,
    failFilter?: (p: P) => boolean
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        let unsubFail = () => {
            return;
        };

        // What happens here: we resolve the promise when the event happens, and unsubscribe.
        // "event.watch" returns callable "Subscription". "Subscription" unsubscribes when it's called.
        const unsub = event.watch((v) => {
            if (filter === undefined || filter(v)) {
                unsub();
                unsubFail();
                resolve(v);
            }
        });
        if (failEvent !== undefined) {
            unsubFail = failEvent.watch((e) => {
                if (failFilter === undefined || failFilter(e.params)) {
                    unsub();
                    unsubFail();
                    reject(e.error);
                }
            });
        }
    });
}

/**
 * Creates a store and an update event for it which updates at most
 * once in `period` time. Needed to reduce amount of API calls when the
 * updated value is not supposed to change over a set period of time.
 */
export function createTimeDeferredStore<V, T>(
    initial: T,
    period: number,
    callback: (a: V) => Promise<T>
): { $store: Store<T>; update: Event<V> } {
    const updateFx = createEffect(callback);
    const $store = createStore(initial).on(updateFx.done, (_, { result }) => result);

    const tick = createEvent<number>();
    const $lastTick = restore(tick, 0);
    $store.updates.watch((_) => tick(Date.now()));

    const update = createEvent<V>();
    sample({
        clock: update,
        source: $lastTick,
        filter: (prevMoment: number, _) => Date.now() - prevMoment > period,
        fn: (_, v: V) => v,
        target: updateFx,
    });
    return { $store, update };
}

/**
 * Create an effect which does not start again if it is already in the pending state.
 * @param callback Async effect function
 */
export function createNonConcurrentEffect<V, T>(callback: (a: V) => Promise<T>): Effect<V, T> {
    const innerFx = createEffect(callback);
    return createEffect(
        (a: V) =>
            new Promise<T>((resolve, reject) => {
                fetchStore(innerFx.pending)
                    .then((pending) => {
                        if (!pending) {
                            innerFx(a);
                        }
                        innerFx.doneData.watch(resolve);
                        innerFx.failData.watch(reject);
                    })
                    .catch((err) => {
                        console.log('failed to fetch', err);
                    });
            })
    );
}

export type ExpBackoffParams = {
    firstDelay: number;
    multiplier: number;
    maxTries: number;
};

/**
 * Retry the async callback with exponential backoff on promise rejection.
 * TODO: later it would be better to reimplement retries as proper Effector events, if we want
 * to show info about retries somehow.
 */
export function expBackoff<V, T>(
    eff: (v: V) => Promise<T>,
    { firstDelay, multiplier, maxTries }: ExpBackoffParams = { firstDelay: 500, multiplier: 1.5, maxTries: 5 }
): (v: V) => Promise<T> {
    return async (v) => {
        let numTries = 0;
        let delay = firstDelay;

        for (;;) {
            try {
                return await eff(v);
            } catch (e) {
                numTries++;
                if (numTries > maxTries) {
                    console.log('END BACKOFF AND THROW', e);
                    throw e;
                }
                console.log(`EXP BACKOFF RETRY (${numTries} ${delay})`, v);
                await sleep(delay);
                delay *= multiplier;
            }
        }
    };
}

/**
 * Do not call the async function with the same parameters again if it has been already
 * called and is still resolving.
 * Good for not making the same request many times in parallel.
 */
export function nonConcurrent<A extends any[], V>(f: (...args: A) => Promise<V>): (...args: A) => Promise<V> {
    const promiseStorage: Record<string, Promise<V>> = {};
    return async (...args: A): Promise<V> => {
        const key = hash(args);
        if (key in promiseStorage) {
            return promiseStorage[key];
        } else {
            return (promiseStorage[key] = f(...args).finally(() => {
                delete promiseStorage[key];
            }));
        }
    };
}
