import React, { useState } from 'react';
import pacman from '../../imgs/loader.gif';
import pacman_grey from '../../imgs/pacman.gif';
import './styled.css';

export function PacmanButton({
    buttonText,
    buttonStyle,
    onClickAction,
    isInactive,
}: {
    buttonText: string;
    buttonStyle: string;
    onClickAction: any;
    isInactive?: boolean;
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onClick = () => {
        setIsLoading(true);
        onClickAction()
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
    };

    var buttonClassName = buttonStyle;
    buttonClassName += isLoading ? ' loading' : '';
    buttonClassName += isInactive ? ' inactive' : '';

    return (
        <button className={buttonClassName} onClick={!isLoading && !isInactive ? onClick : undefined}>
            {!isLoading ? buttonText : ''}
            {isLoading && (
                <span className="loading">
                    <img
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                        alt="loader"
                        src={isInactive ? pacman_grey : pacman}
                    />
                </span>
            )}
        </button>
    );
}
