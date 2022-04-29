import styled from 'styled-components';

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
`;

export const AmountTitle = styled.div`
    color: ${(props) => props.theme.gray};
    margin-bottom: 12px;
`;

export const AmountValue = styled.div`
    color: ${(props) => props.theme.white};
`;

export const BalanceList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    &:first-child {
    }

    @media (max-width: 640px) {
        display: none;
    }
`;
