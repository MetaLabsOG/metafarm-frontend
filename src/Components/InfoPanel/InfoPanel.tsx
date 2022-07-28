import { FC } from 'react';
import { InfoPanelContainer } from './styled';
import pacman from '../../imgs/loader.gif';

export const InfoPanel: FC<{ isLoading: boolean }> = ({ children, isLoading }) => {
    if (isLoading) {
        return (
            <InfoPanelContainer style={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '50px', height: '50px', margin: 'auto' }} alt="loader" src={pacman} />
            </InfoPanelContainer>
        );
    }

    return <InfoPanelContainer>{children}</InfoPanelContainer>;
};
