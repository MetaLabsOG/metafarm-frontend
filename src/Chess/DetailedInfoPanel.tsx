import { useStore } from 'effector-react';
import { $leftPanelInfo } from './store';
import { Hero } from './Navigation/types';

const DetailedInfoPanel: React.FC = () => {
    const leftPanelInfo = useStore($leftPanelInfo);

    const renderHero = (hero: Hero) => {
        if (hero === null) {
            return <div>Error: Null hero</div>;
        }
        return (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={hero.image_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{hero.name}</h2>
                    <p>{hero.description}</p>
                    <div className="card-actions justify-end">
                        {hero.skills.map((skill, sIndex) => (
                            <div key={sIndex} className="flex items-center space-x-2">
                                <div className="bg-yellow-400 h-5 w-5" /> {/* Placeholder for SkillImage */}
                                <span>{skill}</span>
                            </div>
                        ))}
                        <div className="badge badge-outline">{hero.element}</div>
                        <div className="badge badge-outline">{hero.type}</div>
                    </div>
                </div>
            </div>
        );
    };

    //     switch (element) {
    //         case 'fire':
    //             return 'red';
    //         case 'water':
    //             return 'blue';
    //         case 'earth':
    //             return 'green';
    //         case 'light':
    //             return 'yellow';
    //         case 'dark':
    //             return 'purple';
    //         default:
    //             return 'gray';
    //     }
    // };

    // const getTypeIcon = (type: string) => {
    //     switch (type) {
    //         case 'warrior':
    //             return 'favicon.ico';
    //         case 'mage':
    //             return 'https://i.imgur.com/0Q4p7Z1.png';
    //         case 'assassin':
    //             return 'https://i.imgur.com/0Q4p7Z1.png';
    //         case 'ranger':
    //             return 'https://i.imgur.com/0Q4p7Z1.png';
    //         case 'priest':
    //             return 'https://i.imgur.com/0Q4p7Z1.png';
    //         default:
    //             return 'https://i.imgur.com/0Q4p7Z1.png';
    //     }
    // };

    if (!leftPanelInfo) {
        return <div className="p-4">No Info to Display</div>;
    }

    const { type, details } = leftPanelInfo;

    let content;

    switch (type) {
        case 'hero':
            content = <div>Hero Details: {renderHero(details)}</div>;
            break;
        case 'skill':
            content = <div>Skill Details: {JSON.stringify(details)}</div>;
            break;
        case 'arena':
            content = <div>Arena Details: {JSON.stringify(details)}</div>;
            break;
        case 'playerProfile':
            content = <div>Player Profile: {JSON.stringify(details)}</div>;
            break;
        default:
            content = <div>Unknown Type</div>;
    }

    return <div className="left-panel p-4">{content}</div>;
};

export default DetailedInfoPanel;
