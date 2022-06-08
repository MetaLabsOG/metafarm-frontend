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
    width: 80%;
    min-width: 1114px;
    display: flex;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.darkGray};
    height: 91px;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 10px;
    font-size: 18px;

    &:first-child {
    }

    @media (max-width: 1100px) {
        min-width: auto;
    }

    @media (max-width: 640px) {
        display: none;
    }
`;
