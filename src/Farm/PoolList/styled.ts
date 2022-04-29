import styled from 'styled-components';

export const PoolListHeader = styled.div`
    display: flex;
    background: ${(props) => props.theme.darkGray};
    color: ${(props) => props.theme.gray};
    font-size: 16px;
    height: 60px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 4px;
    @media (max-width: 640px) {
        display: none;
    }
`;
