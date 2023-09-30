import { createEvent, createEffect, createStore, sample, forward } from 'effector';
import { SERVER_URL } from '../Chess';
import { $txAuthResult, setBattleStage } from '../store';
import {
    BattleData,
    EndBattleRequest,
    EndBattleResponse,
    Hero,
    StartBattleRequest,
    StartBattleResponse,
} from './types';

// Events
export const newBattleClicked = createEvent<void>();
export const startBattleClicked = createEvent<StartBattleRequest>();
export const endBattleClicked = createEvent<EndBattleRequest>();

// Effects
export const newBattleFx = createEffect<{ txAuthResult: string }, BattleData>();
export const startBattleFx = createEffect<{ txAuthResult: string; request: StartBattleRequest }, StartBattleResponse>();
export const endBattleFx = createEffect<{ txAuthResult: string; request: EndBattleRequest }, EndBattleResponse>();

// Stores
export const $battleData = createStore<BattleData | null>(null);
export const $startBattleResponse = createStore<StartBattleResponse | null>(null);
export const $endBattleResponse = createStore<EndBattleResponse | null>(null);

// Handlers
newBattleFx.use(async (txAuthResult) => {
    const response = await fetch(`${SERVER_URL}/battle/pve/new?auth_token=${txAuthResult}`, {
        method: 'POST',
        headers: { accept: 'application/json' },
    });
    return await response.json();
});

startBattleFx.use(async ({ txAuthResult, request }) => {
    const url = `${SERVER_URL}/battles/pve/start?auth_token=${txAuthResult}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(request),
    });
    return await response.json();
});

endBattleFx.use(async ({ txAuthResult, request }) => {
    const url = `${SERVER_URL}/battle/pve/end?auth_token=${txAuthResult}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(request),
    });
    return await response.json();
});

// Store Updates
$battleData.on(newBattleFx.doneData, (_, data) => data);
$startBattleResponse.on(startBattleFx.doneData, (_, data) => data);
$endBattleResponse.on(endBattleFx.doneData, (_, data) => data);

// Link Events to Effects
sample({
    source: $txAuthResult,
    clock: newBattleClicked,
    fn: (txAuthResult) => ({ txAuthResult }),
    target: newBattleFx,
});

sample({
    source: $txAuthResult,
    clock: startBattleClicked,
    fn: (txAuthResult, request) => ({ txAuthResult, request }),
    target: startBattleFx,
});

sample({
    source: $txAuthResult,
    clock: endBattleClicked,
    fn: (txAuthResult, request) => ({ txAuthResult, request }),
    target: endBattleFx,
});

// Miscellaneous logic
startBattleClicked.watch(() => setBattleStage('PlayTurn'));
endBattleClicked.watch(() => setBattleStage('PlayTurn'));
