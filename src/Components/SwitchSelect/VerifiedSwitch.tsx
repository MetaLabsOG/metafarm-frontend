import React from 'react';
import SwitchSelector from 'react-switch-selector';
import { MyVerifiedSwitchWrapper, MobileToggleChip } from './styled';

interface SwitchSelectProps {
    switchStatus: any;
    onChange: (status: boolean) => void;
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
        label: 'Verified',
        value: true,
        selectedBackgroundColor: '#90ee90',
        selectedFontColor: '#1e1e1e',
        fontColor: 'white',
        fontSize: '13px',
        fontWeight: 500,
    },
];

export const VerifiedSwitch: React.FC<SwitchSelectProps> = ({ onChange, switchStatus, compact }) => {

    const initialSelectedIndex = options.findIndex(({ value }) => value === switchStatus);

    const handleChange = (newValue: any) => {
        onChange(newValue.value);
    };

    if (compact) {
        return (
            <MobileToggleChip
                $active={switchStatus}
                onClick={() => onChange(!switchStatus)}
                aria-pressed={!!switchStatus}
            >
                {switchStatus && '✓ '}Verified
            </MobileToggleChip>
        );
    }

    return (
        <MyVerifiedSwitchWrapper>
            <SwitchSelector
                onChange={handleChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'rgba(30, 30, 30, 0.25)'}
                fontColor={'white'}
                selectedFontColor="#1e1e1e"
                name="VerifiedSwitcherSelect"
            />
        </MyVerifiedSwitchWrapper>
    );
};
