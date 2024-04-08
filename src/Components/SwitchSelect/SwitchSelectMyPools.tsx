import React from 'react';
import SwitchSelector from 'react-switch-selector';
import { SwitchSelectWrapper } from './styled';

interface SwitchSelectProps {
    onChange: (value: any) => void;
    value: any;
}

export const SwitchSelectPools: React.FC<SwitchSelectProps> = ({ value, onChange }) => {
    const options = [
        {
            label: 'All',
            value: true, // Indicates showing user's pools
            selectedBackgroundColor: '#90ee90',
        },
        {
            label: 'My Pools',
            value: false, // Indicates showing all pools
            selectedBackgroundColor: '#90ee90',
        },
    ];
    const initialSelectedIndex = options.findIndex(({ value: optionValue }) => optionValue === value);

    const handleSelectorChange = (newValue: any) => {
        onChange(newValue.value);
    };

    return (
        <SwitchSelectWrapper>
            <SwitchSelector
                onChange={handleSelectorChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#1e1e1e'}
                fontColor={'white'}
                selectedFontColor="black"
                name="PoolSwitchSelector"
            />
        </SwitchSelectWrapper>
    );
};
