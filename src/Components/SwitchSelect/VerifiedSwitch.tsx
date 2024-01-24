import React from 'react';
import SwitchSelector from 'react-switch-selector';

interface SwitchSelectProps {
    switchStatus: boolean;
    onChange: (status: boolean) => void;
}

export const VerifiedSwitch: React.FC<SwitchSelectProps> = ({ onChange, switchStatus }) => {
    const handleChange = (newValue: any) => {
        onChange(newValue.value);
    };

    const options = [
        {
            label: 'Verified',
            value: true,
            selectedBackgroundColor: '#808080',
        },
        {
            label: 'All',
            value: false,
            selectedBackgroundColor: '#808080',
        },
    ];

    const initialSelectedIndex = options.findIndex(({ value }) => value === switchStatus);

    return (
        <div className="myWrapper" style={{ width: 180, height: 30, marginTop: 10, fontFamily: 'Montserrat' }}>
            <div className="midsizeWrapper" style={{ maxWidth: 890, width: '75%', height: 30, marginLeft: 35 }}>
                <div className="mobileWrapper" style={{ maxWidth: 700, width: '100%', height: 30, marginLeft: 22 }}>
                    <SwitchSelector
                        onChange={handleChange}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={'#1e1e1e'}
                        fontColor={'#676767'}
                        selectedFontColor="white"
                        name="VerifiedSwitcher"
                    />
                </div>
            </div>
        </div>
    );
};
