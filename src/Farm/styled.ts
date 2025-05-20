import styled from 'styled-components';

export const FarmContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1114px;
    height: 100%;
    margin-top: 35px;
    font-family: 'Montserrat';
    background-color: transparent;
    backdrop-filter: none;
    border-radius: 10px;
    padding: 20px;
    border: none;
    box-shadow: none;
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

export const PoolSearchInput = styled.input`
    height: 30px;
    width: 140px;
    padding: 10px;
    margin: 10px 0;
    color: white;
    background-color: rgba(30, 30, 30, 0.4);
    flex-shrink: 0;
    color-scheme: dark;
    backdrop-filter: blur(4px);

    text-align: center;
    font-family: 'Montserrat';
    font-size: 13px;

    border: 1px solid rgba(125, 125, 125, 0.4);
    border-radius: 15px;
    transition: all 0.3s ease;

    @media (max-width: 860px) {
        width: 140px;
    }

    @media (max-width: 820px) {
        display: none;
    }

    @media (max-width: 700px) {
        display: flex;
        width: 140px;
        margin: 0;
        padding: 0;
        border-radius: 15px;
        height: 30px;
        font-size: 12px;
    }

    &:focus {
        outline: none;
        border-color: #90ee90;
        background-color: rgba(30, 30, 30, 0.6);
    }

    &:hover {
        border-color: rgba(144, 238, 144, 0.5);
    }
`;
