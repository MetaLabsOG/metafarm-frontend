import styled from 'styled-components';

export const FarmContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1114px;
    width: 100%;
    height: 100%;
    margin-top: 35px;
    font-family: var(--font-body);
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

    font-family: var(--font-body);
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
    background-color: rgba(30, 30, 30, 0.25);
    flex-shrink: 0;
    color-scheme: dark;
    backdrop-filter: blur(4px);

    text-align: center;
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.02em;

    border: 1px solid rgba(80, 80, 80, 0.7);
    border-radius: 15px;
    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 860px) {
        width: 140px;
    }

    @media (max-width: 700px) {
        width: 140px;
        margin: 0;
        padding: 0 10px;
        border-radius: 15px;
        height: 30px;
        font-size: 12px;
        background-color: rgba(30, 30, 30, 0.25);
        border: 1px solid rgba(80, 80, 80, 0.7);
    }

    &:focus {
        outline: none;
        border-color: rgba(144, 238, 144, 0.4);
        background-color: rgba(30, 30, 30, 0.4);
        box-shadow: 0 0 0 2px rgba(144, 238, 144, 0.2);
    }

    &:hover {
        border-color: rgba(120, 120, 120, 0.8);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }
`;
