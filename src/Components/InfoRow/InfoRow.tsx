import React, { FC } from 'react';
import { theme } from '../../theme';
import { InfoKey, InfoRowContainer, InfoValue } from './styled';

interface InfoRowProps {
    title: string;
    value: string | number;
    valueLink?: string;
    style?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    valueStyle?: React.CSSProperties;
}

export const InfoRow: FC<InfoRowProps> = ({ title, value, valueLink, style, titleStyle, valueStyle }) => {
    return (
        <InfoRowContainer style={style}>
            <InfoKey style={titleStyle}>{title}</InfoKey>
            {!valueLink && <InfoValue style={valueStyle}>{value}</InfoValue>}
            {valueLink && (
                <a target="_blank" href={valueLink} rel="noreferrer" style={{ color: theme.lightGray }}>
                    <InfoValue style={valueStyle}>{value}</InfoValue>
                </a>
            )}
        </InfoRowContainer>
    );
};
