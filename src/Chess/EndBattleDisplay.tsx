import { FC } from 'react';

type BattleResult = {
    alive_heroes: string[];
    p1_won: boolean;
}

type PlayerUpdate = {
    coins_earned: number,
    exp_gain: number,
    meta_data: number,
}

export type EndBattleData = {
    battle_result: BattleResult,
    player: PlayerUpdate,
};

interface EndBattleDisplayProps {
    data: EndBattleData;
}

const EndBattleDisplay: FC<EndBattleDisplayProps> = ({ data }) => {
    const { battle_result, player } = data;
    const { alive_heroes, p1_won } = battle_result;
    const { coins_earned, exp_gain, meta_data } = player;
  
    return (
      <div className="card w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Battle Results</h2>
          
          <div>
            <strong>Player 1 Won:</strong> {p1_won ? 'Yes' : 'No'}
          </div>
  
          <div>
            <strong>Alive Heroes:</strong> {alive_heroes.join(', ')}
          </div>
          
          <div className="divider"></div>
  
          <div>
            <strong>Player Update</strong>
          </div>
  
          <div>
            <strong>Coins Earned:</strong> {coins_earned}
          </div>
  
          <div>
            <strong>EXP Gain:</strong> {exp_gain}
          </div>
  
          <div>
            <strong>Meta Data:</strong> {meta_data}
          </div>
        </div>
      </div>
    );
  };
  
  export default EndBattleDisplay;
  