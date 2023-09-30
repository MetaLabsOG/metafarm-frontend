import { FC } from 'react';

interface BuffSelectorProps {
    buffs: string[];
    selectedBuff: string | null;
    onSelect: (buff: string) => void;
}

const BuffSelector: FC<BuffSelectorProps> = ({ buffs, selectedBuff, onSelect }) => {
    return (
        <div className="flex flex-wrap">
            {buffs.map((buff) => {
                const isSelected = selectedBuff === buff;
                const buttonClasses = isSelected ? 'btn btn-primary m-2' : 'btn m-2';

                return (
                    <button key={buff} onClick={() => onSelect(buff)} className={buttonClasses}>
                        {buff}
                    </button>
                );
            })}
        </div>
    );
};

export default BuffSelector;
