import { useEffect, useState } from 'react';
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
    const init = options.findIndex(({ value }) => value === switchStatus);
    const [initialSelectedIndex, setInitialSelectedIndex] = useState(init);
    const handleChange = (newValue: any) => {
        onChange(newValue.value);
    };

    useEffect(() => {
        const val = options.findIndex(({ value }) => value === switchStatus);

        setInitialSelectedIndex(val);
    }, [switchStatus]);

    return (
        <PoolStateWrapper>
            <SwitchSelector
                onChange={handleChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'rgba(30, 30, 30, 0.25)'}
                fontColor={'white'}
                selectedFontColor="#1e1e1e"
                // borderColor and fontSize removed due to type errors
                name="LiveSwitchSelector"
                forcedSelectedIndex={initialSelectedIndex}
            />
        </PoolStateWrapper>
    );
};
