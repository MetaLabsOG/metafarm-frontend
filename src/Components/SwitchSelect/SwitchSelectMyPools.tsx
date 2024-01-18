import React from 'react';
import SwitchSelector from 'react-switch-selector';

interface SwitchSelectProps {
    onChange: (value: any) => void;
    value: any;
}

export const SwitchSelectPools: React.FC<SwitchSelectProps> = ({ onChange }) => {
    const options = [
        {
            label: 'All Pools',
            value: true, // Indicates showing user's pools
            selectedBackgroundColor: '#808080',
        },
        {
            label: 'My Pools',
            value: false, // Indicates showing all pools
            selectedBackgroundColor: '#808080',
        },
    ];
    const initialSelectedIndex = options.findIndex(({ label }) => label === 'All Pools');

    const handleSelectorChange = (newValue: any) => {
        onChange(newValue.value);
    };

    return (
        <div className="myWrapper" style={{ width: 180, height: 30, marginTop: 10, fontFamily: 'Montserrat' }}>
            <div className="mobileWrapper" style={{ maxWidth: 700, width: '100%', height: 30 }}>
                <SwitchSelector
                    onChange={handleSelectorChange}
                    options={options}
                    initialSelectedIndex={initialSelectedIndex}
                    backgroundColor={'#1e1e1e'}
                    fontColor={'#676767'}
                    selectedFontColor="white"
                    name="PoolSwitchSelector"
                />
            </div>
        </div>
    );
};
