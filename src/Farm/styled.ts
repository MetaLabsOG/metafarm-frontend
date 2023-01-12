import styled from 'styled-components';

export const FarmContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1114px;
    height: 100%;
    margin-top: 40px;
    font-family: 'Montserrat';
`;

export const DateInput = styled.input`
    height: 50px;
    width: 250px;
    padding: 10px;
    color: white;
    background-color: transparent;
    flex-shrink: 0;
    color-scheme: dark;

    font-family: 'Montserrat';
    font-size: 18px;

    border: 1px solid rgba(125, 125, 125, 0.66);
    border-radius: 8px;
`;

export const AddFarmRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    align-items: center;
`;

export const BalanceContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const GovImg = styled.img`
    border-radius: 10px;
    height: 91px;
    @media (max-width: 700px) {
        height: 80px;
    }
`;
