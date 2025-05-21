import React, { useEffect, useState } from 'react';
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

    const init = options.findIndex(({ value }) => value === isEnabled);
    const [initialSelectedIndex, setInitialSelectedIndex] = useState(init);

    const handleSelectorChange = (newValue: any) => {
        onChange(newValue.value);
    };

    useEffect(() => {
        const val = options.findIndex(({ value }) => value === isEnabled);

        setInitialSelectedIndex(val);
    }, [isEnabled]);

    return (
        <SwitchSelectWrapper>
            <SwitchSelector
                onChange={handleSelectorChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'rgba(30, 30, 30, 0.25)'}
                fontColor={'white'}
                selectedFontColor="#1e1e1e"
                // borderColor and fontSize removed due to type errors
                name="PoolSwitchSelector"
                forcedSelectedIndex={initialSelectedIndex}
            />
        </SwitchSelectWrapper>
    );
};
