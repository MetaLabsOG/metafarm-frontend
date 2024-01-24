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
        <SwitchContainer style={{ paddingTop: 15, height: 15, paddingLeft: 30 }}>
            {window.screen.width >= 700 && (
                <SwitchText style={{ color: theme.lightGray, paddingRight: 5 }}>{switchText}</SwitchText>
            )}
            <Switch
                onChange={onChange}
                checked={switchStatus}
                className="react-switch"
                onColor={theme.green}
                offColor={theme.gray}
                onHandleColor={theme.darkGray}
                offHandleColor={theme.darkGray}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
            />
            {window.screen.width < 700 && (
                <SwitchText style={{ color: theme.lightGray, width: 100 }}>{switchText}</SwitchText>
            )}
        </SwitchContainer>
    );
};
