export type Hero = {
    name: string;
    description: string;
    type: string;
    element: string;
    skills: string[];
    created: string;
    updated: string;
    id: string;
    image_url: string;
};

export type Player = {
    player_id: string;
    heroes: Hero[];
    buff: string;
};

export type Middle = {
    description: string;
    p1_commands: string[];
    p2_commands: string[];
};

export type Final = {
    description: string;
    alive_heroes: string[];
    p1_won: boolean;
};

export type Draft = {
    heroes: Hero[];
    p1_buffs: string[];
    p2_buffs: string[];
};

export type BattleData = {
    arena: string;
    created: string;
    draft: Draft;
    player1: Player;
    player2: Player;
    middle: Middle;
    final: Final;
    updated: string;
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
    is_won: true;
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
