import SwitchSelector from 'react-switch-selector';
import PropTypes from 'prop-types';
import { PoolStateWrapper } from './styled';

interface PoolStateSwitcherProps {
    switchStatus: boolean;
    onChange: (status: boolean) => void;
}

const options = [
    {
        label: 'Live',
        value: false,
        selectedBackgroundColor: '#90ee90',
    },
    {
        label: 'Ended',
        value: true,
        selectedBackgroundColor: '#90ee90',
    },
];

export const PoolStateSwitcher: React.FC<PoolStateSwitcherProps> = ({ switchStatus, onChange }) => {
    PoolStateSwitcher.propTypes = {
        switchStatus: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
    };
    const handleChange = (newValue: any) => {
        onChange(newValue.value);
    };

    const initialSelectedIndex = options.findIndex(({ value }) => value === switchStatus);

    return (
        <PoolStateWrapper>
            <SwitchSelector
                onChange={handleChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#1e1e1e'}
                fontColor={'white'}
                selectedFontColor="black"
                name="LiveSwitchSelector"
            />
        </PoolStateWrapper>
    );
};
