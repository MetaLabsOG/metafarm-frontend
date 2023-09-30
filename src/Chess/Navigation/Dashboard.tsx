// Dashboard.tsx
import React, { useState } from 'react';
import { useEvent, useStore, useUnit } from 'effector-react';

import { $battleStage, $txAuthResult, setDetailedHero, setBattleStage } from '../store';
import BuffSelector from '../BuffSelector';

import {
    $battleData,
    $endBattleResponse,
    $startBattleResponse,
    endBattleClicked,
    endBattleFx,
    newBattleClicked,
    startBattleClicked,
    startBattleFx,
} from './store';
import { EndBattleRequest, Hero } from './types';

const Dashboard: React.FC = () => {
    const preBattleStage = useUnit($battleStage);
    const battleStage = useUnit($battleStage);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>

            <div className="battle">
                {preBattleStage === 'ReadyToStart' && <NewBattle />}
                {preBattleStage === 'SelectHeroes' && <SelectHeroes />}
                {battleStage === 'PlayTurn' && <PlayTurn />}
                {battleStage === 'ReviewTurn' && <ReviewTurn />}
            </div>
        </div>
    );
};
const NewBattle: React.FC = () => {
    const newBattleEvent = useEvent(newBattleClicked);
    const handleNewBattle = () => {
        newBattleEvent();
    };
    return (
        <div>
            <button className="btn btn-primary" onClick={handleNewBattle}>
                NEW BATTLE
            </button>
        </div>
    );
};

const SelectHeroes: React.FC = () => {
    // TODO: move to store of heroes
    const battleData = useStore($battleData);
    const setDetailedHeroEvent = useEvent(setDetailedHero);
    const setBattleStageEvent = useEvent(setBattleStage);

    const [isStartBattleDisabled, setIsStartBattleDisabled] = useState<boolean>(true);
    const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);
    const [selectedBuff, setSelectedBuff] = useState<string | null>(null);

    const startBattleEvent = useUnit(startBattleClicked);

    if (battleData === null) {
        console.log('BattleData is null (sesh)');
        return <div />;
    }

    const toggleHero = (hero: Hero) => {
        if (selectedHeroes.includes(hero.id)) {
            setSelectedHeroes(selectedHeroes.filter((id) => hero.id !== id));
        } else if (selectedHeroes.length < 5) {
            setSelectedHeroes([...selectedHeroes, hero.id]);
        }

        setIsStartBattleDisabled(selectedHeroes.length !== 5);
    };

    const handleStartButton = () => {
        if (isStartBattleDisabled) {
            console.log('Select 5 heroes!'); // TODO: Add toast or some other notification
            return;
        }
        if (selectedBuff == null) {
            console.log('Select buff!'); // TODO: Add toast or some other notification
            return;
        }
        const request = { battle_id: battleData.battle_id, chosen_hero_ids: selectedHeroes, chosen_buff: selectedBuff };
        startBattleEvent(request);
        setBattleStageEvent('PlayTurn');
    };

    return (
        <div>
            <div className="grid grid-cols-6 gap-2 mb-4">
                {battleData.heroes.map((hero) => (
                    <div
                        key={hero.id}
                        onMouseOver={() => setDetailedHeroEvent(hero)}
                        onMouseOut={() => setDetailedHeroEvent(null)}
                        onClick={() => toggleHero(hero)}
                        className="p-1"
                    >
                        <img
                            src={hero.image_url}
                            alt={hero.name}
                            className="w-full h-auto max-h-[100px] object-cover rounded-lg shadow-sm"
                        />
                    </div>
                ))}
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="text-xl mb-4">Select Buff</h4>
                <BuffSelector buffs={battleData.buffs} selectedBuff={selectedBuff} onSelect={setSelectedBuff} />
                <button className="btn btn-primary mt-4" onClick={handleStartButton}>
                    SELECT
                </button>
            </div>
        </div>
    );
};

const PlayTurn: React.FC = () => {
    const battleData = useUnit($battleData);

    const [selectedCommand, setSelectedCommand] = useState<string>('');

    const setBattleStageEvent = useEvent(setBattleStage);

    const endBattleEvent = useUnit(endBattleClicked);

    const handleFinishButton = () => {
        if (!battleData?.battle_id || selectedCommand === '') {
            console.log('command not selected (sesh)');
            return;
        }

        const request = {
            battle_id: battleData.battle_id,
            chosen_command: selectedCommand,
        };

        endBattleEvent(request);
        setBattleStageEvent('ReviewTurn');
    };

    return (
        <div>
            <div className="mb-4">
                <label className="label">
                    <span className="label-text">Select Command</span>
                </label>
                <select
                    className="select select-bordered"
                    value={selectedCommand}
                    onChange={(e) => setSelectedCommand(e.target.value)}
                >
                    <option disabled={true} value="">
                        Select option
                    </option>
                    <option value="command1">Command 1</option>
                    <option value="command2">Command 2</option>
                    <option value="command3">Command 3</option>
                </select>
            </div>
            <button className="btn btn-primary" onClick={handleFinishButton}>
                Finish Battle
            </button>
        </div>
    );
};

const ReviewTurn: React.FC = () => {
    const endBattleResponse = useUnit($endBattleResponse);
    const rewards = endBattleResponse?.rewards;

    return (
        <div className="card w-1/2 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Battle Results</h2>

                <div>
                    <strong>Player 1 Won:</strong> {endBattleResponse?.is_won ? 'Yes' : 'No'}
                </div>

                <div>
                    <strong>Dead Heroes:</strong> {endBattleResponse?.dead_hero_ids.join(', ')}
                </div>

                <div className="divider" />

                <div>
                    <strong>Player Update</strong>
                </div>

                <div>
                    <strong>Coins Earned:</strong> {rewards?.coins_earned}
                </div>

                <div>
                    <strong>EXP Gain:</strong> {rewards?.exp_gain}
                </div>

                <div>
                    <strong>Meta Earned:</strong> {rewards?.meta_earned}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
