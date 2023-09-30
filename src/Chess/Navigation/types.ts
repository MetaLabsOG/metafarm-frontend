export type Hero = {
    name: string;
    description: string;
    type: string;
    element: string;
    skills: string[];
    id: string;
    image_url: string;
};

export type Arena = {
    name: string;
    description: string;
};

export type BattleData = {
    heroes: Hero[];
    arena: Arena;
    buffs: string[];
    battle_id: string;
};

export type Rewards = {
    exp_gain: number;
    meta_earned: number;
    coins_earned: number;
};

// Responses
export type StartBattleResponse = {
    battle_description: string;
    commands: string[];
};

export type EndBattleResponse = {
    battle_description: string;
    dead_hero_ids: string[];
    is_won: boolean;
    rewards: Rewards;
};

// Requests
export type StartBattleRequest = {
    battle_id: string;
    chosen_hero_ids: string[];
    chosen_buff: string;
};

export type EndBattleRequest = {
    battle_id: string;
    chosen_command: string;
};
