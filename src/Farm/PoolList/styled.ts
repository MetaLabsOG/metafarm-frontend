import styled from 'styled-components';

export const PoolListHeader = styled.div`
    display: flex;
    color: ${(props) => props.theme.gray};
    height: 71px;
    width: 95%;
    align-items: center;
    justify-content: flex-start;
    padding-right: 40px;
    padding-left: 20px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    @media (max-width: 1120px) {
        display: none;
    }
`;

export const PoolListHeaderElement = styled.div<{ width: string }>`
    width: ${({ width }) => width};
    padding-right: 20px;
`;

export const PoolListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--newDarkGray);
    width: 80%;
    min-width: 1114px;
    border-radius: 10px;

    @media (max-width: 1120px) {
        background-color: black;
        min-width: auto;
        margin-top: 0;
    }
`;
