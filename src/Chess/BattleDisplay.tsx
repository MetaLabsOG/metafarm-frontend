import React, { FC, useState } from 'react';
import BuffSelector from './BuffSelector';

type Hero = {
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

type Player = {
    player_id: string;
    heroes: Hero[];
    buff: string;
};

type Middle = {
    description: string;
    p1_commands: string[];
    p2_commands: string[];
};

type Final = {
    description: string;
    alive_heroes: string[];
    p1_won: boolean;
};

type Draft = {
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

interface BattleDisplayProps {
    battleData: BattleData;
    selectedHeroes: string[];
    setSelectedHeroes: React.Dispatch<React.SetStateAction<string[]>>;
    selectedBuff: string | null;
    setSelectedBuff: React.Dispatch<React.SetStateAction<string | null>>;
    setIsStartBattleDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const BattleDisplay: FC<BattleDisplayProps> = ({
    battleData,
    selectedHeroes,
    setSelectedHeroes,
    selectedBuff,
    setSelectedBuff,
    setIsStartBattleDisabled,
}) => {
    const { arena, draft, player1, player2, middle, final } = battleData;

    const handleBuffSelect = (buff: string) => {
        setSelectedBuff(buff);
        console.log('Buff selected: ', buff);
    };

    const toggleHero = (hero: Hero) => {
        if (selectedHeroes.includes(hero.name)) {
            setSelectedHeroes(selectedHeroes.filter((name) => name !== hero.name));
        } else if (selectedHeroes.length < 5) {
            setSelectedHeroes([...selectedHeroes, hero.name]);
        }

        setIsStartBattleDisabled(selectedHeroes.length !== 5)
    };

    const getElementColor = (element: string) => {
        switch (element) {
            case 'fire':
                return 'red';
            case 'water':
                return 'blue';
            case 'earth':
                return 'green';
            case 'light':
                return 'yellow';
            case 'dark':
                return 'purple';
            default:
                return 'gray';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'warrior':
                return 'favicon.ico';
            case 'mage':
                return 'https://i.imgur.com/0Q4p7Z1.png';
            case 'assassin':
                return 'https://i.imgur.com/0Q4p7Z1.png';
            case 'ranger':
                return 'https://i.imgur.com/0Q4p7Z1.png';
            case 'priest':
                return 'https://i.imgur.com/0Q4p7Z1.png';
            default:
                return 'https://i.imgur.com/0Q4p7Z1.png';
        }
    };

    const renderHeroes = (heroes: Hero[]) => {
        return heroes.map((hero, index) => (
            // <div
            //   key={index}
            //   className={`card ${selectedHeroes.includes(hero.name) ? 'bg-gray-200' : 'bg-white'} w-96 bg-base-100 cursor-pointer transition shadow-xl`}
            //   onClick={() => toggleHero(hero.name)}
            //   style={{ borderColor: getElementColor(hero.element) }}
            // >
            //   <figure><img src="nike.jpg" /></figure>
            //   <div className="card-body">
            //     <h2 className="card-title">{hero.name}</h2>
            //     <p>{hero.description}</p>
            //     <div>
            //       <img src={getTypeIcon(hero.type)} alt={hero.type} />
            //     </div>
            //     <div className="flex flex-wrap">
            //       {hero.skills.map((skill, sIndex) => (
            //         <div key={sIndex} className="flex items-center space-x-2">
            //           <div className="bg-yellow-400 h-5 w-5"></div> {/* Placeholder for SkillImage */}
            //           <span>{skill}</span>
            //         </div>
            //       ))}
            //     </div>
            //   </div>
            // </div>
            <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={hero.image_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{hero.name}</h2>
                    <p>{hero.description}</p>
                    <div className="card-actions justify-end">
                      {hero.skills.map((skill, sIndex) => (
                      <div key={sIndex} className="flex items-center space-x-2">
                        <div className="bg-yellow-400 h-5 w-5"></div> {/* Placeholder for SkillImage */}
                        <span>{skill}</span>
                      </div>
                      ))}
                          <div className="badge badge-outline">{hero.element}</div> 
                          <div className="badge badge-outline">{hero.type}</div>
                          <button className={`btn btn-square btn-outline ${selectedHeroes.includes(hero.name) ? 'btn-active' : 'bg-white'}`}
                            onClick={() => toggleHero(hero)}
                          >Select</button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="bg-gray-100 p-10 rounded-lg w-11/12 mx-auto">
            <h2 className="text-3xl mb-2">Arena: {arena}</h2>

            <div className="bg-gray-200 p-10 rounded-lg mb-4">
                <h3 className="text-2xl mb-4">Draft</h3>
                <h4 className="text-xl mb-4">Heroes:</h4>
                {renderHeroes(draft.heroes)}
            </div>

            <div className="bg-gray-200 p-10 rounded-lg">
                <h4 className="text-xl mb-4">Select Buff</h4>
                <BuffSelector
                    buffs={battleData.draft.p1_buffs}
                    selectedBuff={selectedBuff}
                    onSelect={handleBuffSelect}
                />
            </div>
        </div>
    );
};

export default BattleDisplay;
