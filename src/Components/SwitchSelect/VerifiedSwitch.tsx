import React from 'react';
import SwitchSelector from 'react-switch-selector';
import { MyVerifiedSwitchWrapper } from './styled';

interface SwitchSelectProps {
    switchStatus: any;
    onChange: (status: boolean) => void;
}

export const VerifiedSwitch: React.FC<SwitchSelectProps> = ({ onChange, switchStatus }) => {
    const handleChange = (newValue: any) => {
        onChange(newValue.value);
    };

    const options = [
        {
            label: 'All',
            value: false,
            selectedBackgroundColor: '#90ee90',
        },
        {
            label: 'Verified',
            value: true,
            selectedBackgroundColor: '#90ee90',
        },
    ];

    const initialSelectedIndex = options.findIndex(({ value }) => value === switchStatus);

    return (
        <MyVerifiedSwitchWrapper>
            <SwitchSelector
                key={switchStatus}
                onChange={handleChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#1e1e1e'}
                fontColor={'white'}
                selectedFontColor="#1e1e1e"
                name="VerifiedSwitcherSelector"
            />
        </MyVerifiedSwitchWrapper>
    );
};
