import React, { FC } from 'react';
import { theme } from '../../theme';
import { InfoCardContainer, InfoCardTitle, InfoCardSubtitle } from './styled';

type InfoCardProps = {
    title: string;
    subtitle: string;
    linkText: string;
    link: string;
    style?: React.CSSProperties;
};

export const InfoCard: FC<InfoCardProps> = ({ title, subtitle, linkText, link, style }: InfoCardProps) => {
    return (
        <InfoCardContainer style={style}>
            <InfoCardTitle>{title}</InfoCardTitle>
            {subtitle && <InfoCardSubtitle>{subtitle}</InfoCardSubtitle>}
            <a target="_blank" href={link} rel="noreferrer" style={{ color: theme.lightGreen, textDecoration: 'none' }}>
                {linkText}
            </a>
        </InfoCardContainer>
    );
};
