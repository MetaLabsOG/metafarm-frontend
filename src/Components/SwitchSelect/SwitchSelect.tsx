import React, { FC } from 'react';
import Switch from 'react-switch';
import { SwitchContainer, SwitchText } from '../../common/styled';
import { theme } from '../../theme';

interface SwitchProps {
    switchStatus: boolean;
    onChange: any;
    switchText: string;
}

export const SwitchSelect: FC<SwitchProps> = ({ switchStatus, onChange, switchText }) => {
    return (
        <SwitchContainer>
            <Switch
                onChange={onChange}
                checked={switchStatus}
                className="react-switch"
                onColor={theme.green}
                offColor={theme.lightGray}
                onHandleColor={theme.darkGray}
                offHandleColor={theme.gray}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
            />
            <SwitchText style={switchStatus ? { color: theme.lightGray } : {}}>{switchText}</SwitchText>
        </SwitchContainer>
    );
};
