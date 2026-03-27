import { useEffect, useState } from 'react';
import SwitchSelector from 'react-switch-selector';
import { PoolStateWrapper, MobileSegmentedControl, MobileSegmentOption } from './styled';

interface PoolStateSwitcherProps {
    switchStatus: boolean;
    onChange: (status: boolean) => void;
    compact?: boolean;
}

export const PoolStateSwitcher: React.FC<PoolStateSwitcherProps> = ({ switchStatus, onChange, compact }) => {
    const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 700;
    const fontSize = isMobileView ? '10px' : '13px';

    const options = [
        {
            label: 'Live',
            value: false,
            selectedBackgroundColor: '#90ee90',
            selectedFontColor: '#1e1e1e',
            fontColor: 'white',
            fontSize,
            fontWeight: 500,
        },
        {
            label: 'Ended',
            value: true,
            selectedBackgroundColor: '#90ee90',
            selectedFontColor: '#1e1e1e',
            fontColor: 'white',
            fontSize,
            fontWeight: 500,
        },
    ];

    const init = options.findIndex(({ value }) => value === switchStatus);
    const [initialSelectedIndex, setInitialSelectedIndex] = useState(init);
    const handleChange = (newValue: any) => {
        onChange(newValue.value);
    };

    useEffect(() => {
        const val = options.findIndex(({ value }) => value === switchStatus);
        setInitialSelectedIndex(val);
    }, [switchStatus]);

    if (compact) {
        return (
            <MobileSegmentedControl>
                <MobileSegmentOption
                    $active={!switchStatus}
                    onClick={() => { if (switchStatus) onChange(false); }}
                    aria-pressed={!switchStatus}
                >
                    Live
                </MobileSegmentOption>
                <MobileSegmentOption
                    $active={switchStatus}
                    onClick={() => { if (!switchStatus) onChange(true); }}
                    aria-pressed={switchStatus}
                >
                    Ended
                </MobileSegmentOption>
            </MobileSegmentedControl>
        );
    }

    return (
        <PoolStateWrapper>
            <SwitchSelector
                onChange={handleChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'rgba(30, 30, 30, 0.25)'}
                fontColor={'white'}
                selectedFontColor="#1e1e1e"
                name="LiveSwitchSelector"
                forcedSelectedIndex={initialSelectedIndex}
            />
        </PoolStateWrapper>
    );
};
