import React from 'react';
import SwitchSelector from 'react-switch-selector';
import { MyVerifiedSwitchWrapper } from './styled';

interface SwitchSelectProps {
    switchStatus: any;
    onChange: (status: boolean) => void;
}

export const VerifiedSwitchDesktop: React.FC<SwitchSelectProps> = ({ onChange, switchStatus }) => {
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

    const handleChange = (newValue: any) => {
        onChange(newValue.value);
    };

    return (
        <MyVerifiedSwitchWrapper>
            <SwitchSelector
                onChange={handleChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#CF74AF'}
                fontColor={'white'}
                selectedFontColor="#1e1e1e"
                name="VerifiedSwitcherSelectDesktop"
            />
        </MyVerifiedSwitchWrapper>
    );
};
