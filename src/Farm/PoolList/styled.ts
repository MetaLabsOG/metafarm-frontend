import styled from 'styled-components';

export const PoolListHeader = styled.div`
    display: flex;
    background: ${(props) => props.theme.darkGray};
    color: ${(props) => props.theme.gray};
    font-size: 16px;
    height: 60px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;
    @media (max-width: 640px) {
        display: none;
    }
`;
