import styled from 'styled-components';

// TODO: such components should be collected somewhere in a REUSABLE way across parts of the app

export const Action = styled.div<{ customColor?: boolean }>`
    display: flex;
    height: 40px;
    width: 100%;
    color: white;
`;

export const Button = styled.button<{ customColor?: boolean; isActive?: boolean }>`
    border: 2px solid;
    background-color: inherit;
    color: ${({ theme, isActive }) => (isActive ? 'inherit' : theme.gray)};
    width: 400px;
    min-height: 40px;
    cursor: pointer;
    ${Action}:hover & {
        color: inherit;
    }
`;
