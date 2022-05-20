import styled from 'styled-components';

export const PoolListHeader = styled.div`
    display: flex;
    color: ${(props) => props.theme.gray};
    font-size: 16px;
    height: 71px;
    width: 97%;
    align-items: center;
    justify-content: flex-start;

    padding-left: 20px;
    padding-right: 20px;
    border-radius: 4px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15.4416px;
    line-height: 19px;
    @media (max-width: 640px) {
        display: none;
    }
`;

export const PoolListHeaderElement = styled.div<{ width?: number }>`
    width: ${({ width }) => (width ? `${width}%` : '16.5%')};
`;

export const PoolListContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #272727;
    width: 100%;
    border-radius: 10px;
`;
