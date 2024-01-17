import SwitchSelector from 'react-switch-selector';

interface SecondSwitcherProps {
    switchStatus: boolean;
    onChange: (status: boolean) => void;
}

const options = [
    {
        label: 'Live',
        value: false,
        selectedBackgroundColor: '#808080',
    },
    {
        label: 'Ended',
        value: true,
        selectedBackgroundColor: '#808080',
    },
];
const initialSelectedIndex = options.findIndex(({ value }) => value === true);

const secondSwitcher: React.FC<SecondSwitcherProps> = ({ switchStatus, onChange }) => {
    const handleChange = (newValue: any) => {
        onChange(newValue.value);
    };

    const initialSelectedIndex = options.findIndex(({ value }) => value === switchStatus);

    return (
        <div className="your-required-wrapper" style={{ width: 150, height: 30, marginTop: 10 }}>
            <SwitchSelector
                onChange={handleChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#1e1e1e'}
                fontColor={'#676767'}
                selectedFontColor="#90ee90"
                name="LiveSwitchSelector"
            />
        </div>
    );
};

export default secondSwitcher;
