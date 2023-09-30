import { FC } from 'react';

export type MidBattleData = {
    battle_description: string;
    p1_commands: string[];
    p2_commands: string[];
};

interface MidBattleDisplayProps {
    data: MidBattleData;
    selectedP1Command: string;
    setSelectedP1Command: React.Dispatch<React.SetStateAction<string>>;
    selectedP2Command: string;
    setSelectedP2Command: React.Dispatch<React.SetStateAction<string>>;
}

const MidBattleDisplay: FC<MidBattleDisplayProps> = ({
    data,
    selectedP1Command,
    setSelectedP1Command,
    selectedP2Command,
    setSelectedP2Command,
}) => {
    return (
        <div>
            <h1>{data.battle_description}</h1>

            <div className="flex space-x-4">
                {/* Selector for Player 1 */}
                <label>
                    Player 1 Commands:
                    <select
                        className="select select-bordered"
                        value={selectedP1Command}
                        onChange={(e) => setSelectedP1Command(e.target.value)}
                    >
                        {data.p1_commands.map((cmd, index) => (
                            <option key={index} value={cmd}>
                                {cmd}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                {/* Selector for Player 2 */}
                <label>
                    Player 2 Commands:
                    <select
                        className="select select-bordered"
                        value={selectedP2Command}
                        onChange={(e) => setSelectedP2Command(e.target.value)}
                    >
                        {data.p2_commands.map((cmd, index) => (
                            <option key={index} value={cmd}>
                                {cmd}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
};

export default MidBattleDisplay;