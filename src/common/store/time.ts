import { Event, createEvent } from "effector";
import { reach } from "../../AppContext";
import { createTimeDeferredStore } from "./utils";

// Time store
export const { $store: $networkTime, update: queryTimeUpdate } = createTimeDeferredStore<void, number>(
    0,
    1000, // update once in a second max
    () => reach.getNetworkTime().then((t) => t.toNumber())
);

// Simple clock events
export const makeClock = (period: number): Event<number> => {
    const clock = createEvent<number>();
    setInterval(() => clock(Date.now()), period);
    return clock;
};