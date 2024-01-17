import React from 'react';
import SwitchSelector from 'react-switch-selector';

interface SwitchSelectProps {
    onChange: (value: any) => void;
    value: any;
}

export const SwitchSelectPools: React.FC<SwitchSelectProps> = ({ onChange }) => {
    const options = [
        {
            label: 'My Pools',
            value: false, // Indicates showing user's pools
            selectedBackgroundColor: '#808080',
        },
        {
            label: 'All Pools',
            value: true, // Indicates showing all pools
            selectedBackgroundColor: '#808080',
        },
    ];
    const initialSelectedIndex = options.findIndex(({ label }) => label === 'All Pools');

    const handleSelectorChange = (newValue: any) => {
        onChange(newValue.value);
    };

    return (
        <div className="myWrapper" style={{ width: 180, height: 30, marginTop: 10 }}>
            <div className="mobileWrapper" style={{ maxWidth: 700, width: '100%', height: 30 }}>
                <SwitchSelector
                    onChange={handleSelectorChange}
                    options={options}
                    initialSelectedIndex={initialSelectedIndex}
                    backgroundColor={'#1e1e1e'}
                    fontColor={'#676767'}
                    selectedFontColor="#90ee90"
                    name="PoolSwitchSelector"
                />
            </div>
        </div>
    );
};
