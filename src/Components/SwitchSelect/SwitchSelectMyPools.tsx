import React, { useEffect, useState } from 'react';
import SwitchSelector from 'react-switch-selector';
import { SwitchSelectWrapper, MobileToggleChip } from './styled';

interface SwitchSelectProps {
    onChange: (value: boolean) => void;
    isEnabled: boolean;
    compact?: boolean;
}

const options = [
    {
        label: 'All',
        value: false,
        selectedBackgroundColor: '#90ee90',
        selectedFontColor: '#1e1e1e',
        fontColor: 'white',
        fontSize: '13px',
        fontWeight: 500,
    },
    {
        label: 'My Pools',
        value: true,
        selectedBackgroundColor: '#90ee90',
        selectedFontColor: '#1e1e1e',
        fontColor: 'white',
        fontSize: '13px',
        fontWeight: 500,
    },
];

export const SwitchSelectPools: React.FC<SwitchSelectProps> = ({ onChange, isEnabled, compact }) => {

    const init = options.findIndex(({ value }) => value === isEnabled);
    const [initialSelectedIndex, setInitialSelectedIndex] = useState(init);

    const handleSelectorChange = (newValue: any) => {
        onChange(newValue.value);
    };

    useEffect(() => {
        const val = options.findIndex(({ value }) => value === isEnabled);
        setInitialSelectedIndex(val);
    }, [isEnabled]);

    if (compact) {
        return (
            <MobileToggleChip
                $active={isEnabled}
                onClick={() => onChange(!isEnabled)}
                aria-pressed={isEnabled}
            >
                {isEnabled && '✓ '}Mine
            </MobileToggleChip>
        );
    }

    return (
        <SwitchSelectWrapper>
            <SwitchSelector
                onChange={handleSelectorChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'rgba(30, 30, 30, 0.25)'}
                fontColor={'white'}
                selectedFontColor="#1e1e1e"
                name="PoolSwitchSelector"
                forcedSelectedIndex={initialSelectedIndex}
            />
        </SwitchSelectWrapper>
    );
};
