import { FC } from 'react';
import pacman from '../../imgs/loader.gif';
import { InfoPanelContainer } from './styled';

type InfoPanelProps = {
    children: any[];
    isLoading: boolean;
    minHeight?: number;
};

export const InfoPanel: FC<InfoPanelProps> = ({ children, isLoading, minHeight }: InfoPanelProps) => {
    if (isLoading) {
        return (
            <InfoPanelContainer
                style={{ display: 'flex', justifyContent: 'center', minHeight: minHeight ? minHeight + 'px' : '' }}
            >
                §
            </InfoPanelContainer>
        );
    }

    return <InfoPanelContainer>{children}</InfoPanelContainer>;
};
