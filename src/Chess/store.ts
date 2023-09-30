import { createStore, createEvent } from 'effector';
import { Hero } from './Navigation/types';

// Types
type LeftPanelInfo = {
    type: 'hero' | 'skill' | 'arena' | 'playerProfile';
    details: any; // Consider replacing with a specific type
};

type EventLog = {
    message: string;
};

type GlobalStage = 'LOGIN' | 'Dashboard';
type BattleStage = 'ReadyToStart' | 'SelectHeroes' | 'PlayTurn' | 'ReviewTurn'; 

// Left Panel
export const $leftPanelInfo = createStore<LeftPanelInfo | null>(null);
export const updateLeftPanelInfo = createEvent<LeftPanelInfo>();
$leftPanelInfo.on(updateLeftPanelInfo, (_, newInfo) => newInfo);

// Event Logs
export const $eventLogs = createStore<EventLog[]>([]);
export const addEventLog = createEvent<EventLog>();
$eventLogs.on(addEventLog, (state, newLog) => [...state, newLog]);

// Stages
export const $globalStage = createStore<GlobalStage>('LOGIN');
export const $battleStage = createStore<BattleStage>('ReadyToStart');

export const setGlobalStage = createEvent<GlobalStage>();
export const setBattleStage = createEvent<BattleStage>();

$globalStage.on(setGlobalStage, (_, stage) => stage);
$battleStage.on(setBattleStage, (_, stage) => stage);

// Authentication
export const setTxAuthResult = createEvent<string>();
export const $txAuthResult = createStore<string>('').on(setTxAuthResult, (_, txAuth) => txAuth);

// Hero Details
export const setDetailedHero = createEvent<Hero | null>();
export const $detailedHero = createStore<Hero | null>(null).on(setDetailedHero, (_, hero) => hero);

/*
Stage Tree:
- LOGIN
- Dashboard
  - PreBattle
    - SelectHeroes
    - SelectBuffs
  - Battle
    - PlayTurn
    -ReviewTurn
*/
