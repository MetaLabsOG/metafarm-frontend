import { FC } from 'react';
import pacman from '../../imgs/loader.gif';
import { InfoPanelContainer } from './styled';

type InfoPanelProps = {
    children: any[];
    isLoading: boolean;
};

export const InfoPanel: FC<InfoPanelProps> = ({ children, isLoading }: InfoPanelProps) => {
    if (isLoading) {
        return (
            <InfoPanelContainer style={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '50px', height: '50px', margin: 'auto' }} alt="loader" src={pacman} />
            </InfoPanelContainer>
        );
    }

    return <InfoPanelContainer>{children}</InfoPanelContainer>;
};
