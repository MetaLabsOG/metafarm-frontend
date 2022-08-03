import React, { FC } from 'react';
import { InfoKey, InfoRowContainer, InfoValue } from './styled';

interface InfoRowProps {
    title: string;
    value: string | number;
    style?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    valueStyle?: React.CSSProperties;
}

export const InfoRow: FC<InfoRowProps> = ({ title, value, style, titleStyle, valueStyle }) => {
    return (
        <InfoRowContainer style={style}>
            <InfoKey style={titleStyle}>{title}</InfoKey>
            <InfoValue style={valueStyle}>{value}</InfoValue>
        </InfoRowContainer>
    );
};
