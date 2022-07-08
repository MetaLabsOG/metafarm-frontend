import React, { useState } from 'react';
import pacman from '../../imgs/loader.gif';
import pacman_grey from '../../imgs/pacman.gif';
import './styled.css';
import classNames from 'classnames';

export function PacmanButton({
    buttonText,
    buttonStyle,
    onClickAction,
    isInactive,
    style,
}: {
    buttonText: string;
    buttonStyle: string;
    onClickAction: any;
    isInactive?: boolean;
    style?: React.CSSProperties;
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onClick = () => {
        setIsLoading(true);
        onClickAction().finally(() => setIsLoading(false));
    };

    return (
        <button
            style={isInactive ? {} : style}
            className={classNames(buttonStyle, {
                loading: isLoading,
                inactive: isInactive,
            })}
            onClick={!isLoading && !isInactive ? onClick : undefined}
        >
            {!isLoading ? <span style={{ position: 'relative' }}>{buttonText}</span> : ''}
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
