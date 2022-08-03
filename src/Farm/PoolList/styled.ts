import styled from 'styled-components';

export const PoolListHeader = styled.div`
    display: flex;
    color: ${(props) => props.theme.gray};
    font-size: 16px;
    height: 71px;
    width: 95%;
    align-items: center;
    justify-content: flex-start;
    padding-right: 40px;
    padding-left: 20px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    @media (max-width: 1120px) {
        display: none;
    }
`;

export const PoolListHeaderElement = styled.div<{ width: string }>`
    width: ${({ width }) => width};
    padding-right: 20px;
`;

export const PoolListContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #272727;
    width: 80%;
    min-width: 1114px;
    border-radius: 10px;

    @media (max-width: 1120px) {
        background-color: black;
        min-width: auto;
        margin-top: 0;
    }
`;
