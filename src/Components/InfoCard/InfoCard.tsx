import { FC } from 'react';
import { theme } from '../../theme';
import { InfoCardContainer, InfoCardTitle, InfoCardSubtitle } from './styled';

type InfoCardProps = {
    title: string;
    subtitle: string;
    linkText: string;
    link: string;
};

export const InfoCard: FC<InfoCardProps> = ({ title, subtitle, linkText, link }: InfoCardProps) => {
    return (
        <InfoCardContainer>
            <InfoCardTitle>{title}</InfoCardTitle>
            <InfoCardSubtitle>{subtitle}</InfoCardSubtitle>
            <a target="_blank" href={link} rel="noreferrer" style={{ color: theme.lightGreen, textDecoration: 'none' }}>
                {linkText}
            </a>
        </InfoCardContainer>
    );
};
