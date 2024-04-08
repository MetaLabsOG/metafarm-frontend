import React from 'react';
import SwitchSelector from 'react-switch-selector';
import { SwitchSelectWrapper } from './styled';

interface SwitchSelectProps {
    onChange: (value: boolean) => void;
    isEnabled: boolean;
}

export const SwitchSelectPools: React.FC<SwitchSelectProps> = ({ onChange, isEnabled }) => {
    const options = [
        {
            label: 'All',
            value: false,
            selectedBackgroundColor: '#90ee90',
        },
        {
            label: 'My Pools',
            value: true,
            selectedBackgroundColor: '#90ee90',
        },
    ];
    const initialSelectedIndex = options.findIndex(({ value }) => value === isEnabled);

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
