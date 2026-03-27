import React from 'react';
import SwitchSelector from 'react-switch-selector';
import { MyVerifiedSwitchWrapper } from './styled';

interface SwitchSelectProps {
    switchStatus: any;
    onChange: (status: boolean) => void;
}

export const VerifiedSwitch: React.FC<SwitchSelectProps> = ({ onChange, switchStatus }) => {
    const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 700;
    const fontSize = isMobileView ? '10px' : '13px';

    const options = [
        {
            label: 'All',
            value: false,
            selectedBackgroundColor: '#90ee90',
            selectedFontColor: '#1e1e1e',
            fontColor: 'white',
            fontSize,
            fontWeight: 500,
        },
        {
            label: 'Verified',
            value: true,
            selectedBackgroundColor: '#90ee90',
            selectedFontColor: '#1e1e1e',
            fontColor: 'white',
            fontSize,
            fontWeight: 500,
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
                backgroundColor={'rgba(30, 30, 30, 0.25)'}
                fontColor={'white'}
                selectedFontColor="#1e1e1e"
                // borderColor and fontSize removed due to type errors
                name="VerifiedSwitcherSelect"
            />
        </MyVerifiedSwitchWrapper>
    );
};
