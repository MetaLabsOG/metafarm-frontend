import styled from 'styled-components';
import React from 'react';

export enum ButtonType {
    primary,
    secondary,
    disabled,
}

export const SecondaryButton = styled.button`
    border-radius: 4px;
    width: 137px;
    height: 34px;
    background-color: inherit;
    color: var(--green);
    border: 1px solid;
    display: flex;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Korona One';

    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    position: relative;

    :hover {
        border: 1px solid #009427;
        color: black !important;
        background-color: transparent;
        text-shadow: none;
    }

    :hover:before {
        bottom: 0;
        top: auto;
        height: 100%;
    }

    :before {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 0;
        width: 100%;
        z-index: 0;
        content: '';
        color: black !important;
        background: linear-gradient(270deg, #06a903 1.29%, #00ff29 100%);
        transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    }
`;

export const PrimaryButton = styled(SecondaryButton)`
    background: linear-gradient(270deg, #06a903 1.29%, #00ff29 100%);
    border: 1px solid #009427;
    color: black;

    :hover {
        border: 1px solid var(--green);
        color: var(--green) !important;
        background-color: black;
        text-shadow: none;
    }

    :before {
        color: var(--green) !important;
        background: black;
        border-radius: 4px;
    }
`;

export const DisabledButton = styled(SecondaryButton)`
    background: transparent;
    border: 1px solid var(--gray);
    color: var(--gray);

    :hover {
        border: 1px solid var(--gray);
        color: var(--gray) !important;
        background-color: transparent;
        text-shadow: none;
        cursor: default;
    }

    :before {
        color: var(--gray) !important;
        background: transparent;
        border-radius: 4px;
    }
`;

export function Button({
    onClick,
    buttonText,
    type = ButtonType.secondary,
    style,
}: {
    onClick: React.MouseEventHandler | undefined;
    buttonText: string;
    type?: ButtonType;
    style?: React.CSSProperties;
}) {
    if (type == ButtonType.disabled) {
        return (
            <DisabledButton style={style}>
                <span style={{ position: 'relative' }}>{buttonText}</span>
            </DisabledButton>
        );
    }

    if (type == ButtonType.secondary) {
        return (
            <SecondaryButton style={style} onClick={onClick}>
                <span style={{ position: 'relative' }}>{buttonText}</span>
            </SecondaryButton>
        );
    }

    return (
        <PrimaryButton style={style} onClick={onClick}>
            <span style={{ position: 'relative' }}>{buttonText}</span>
        </PrimaryButton>
    );
}
