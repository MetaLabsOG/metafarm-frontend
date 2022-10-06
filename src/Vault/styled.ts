import styled from 'styled-components';

export const VaultCardContainer = styled.div`
    width: 320px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: var(--darkGray);
    border-radius: 10px;
    padding: 30px;
    margin-top: 0;
    gap: 25px;
`;

export const VaultContainer = styled.div`
    font-family: 'Montserrat';
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;
    width: 1114px;
    height: 100%;
`;

export const VaultHeaderTitle = styled.div`
    display: flex;
    white-space: nowrap;
    font-family: 'Korona One';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: white;
`;

export const VaultHeaderSubtitle = styled.div`
    display: flex;
    white-space: nowrap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--lightGray);
`;

export const VaultInfoContainer = styled.div`
    width: 250px;
    min-height: 108px;
`;

export const ButtonSubtitle = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14.7347px;
    line-height: 18px;
    color: var(--lightGray);
    text-align: center;
    margin-top: 5px;
`;

export const VaultResultsContainer = styled.div`
    display: flex;
    gap: 13px;
`;

export const VaultSquare = styled.div`
    width: 123px;
    height: 77px;
    background: #272727;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const VaultResultNumber = styled.div`
    font-family: 'Krona One';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: var(--lightGray);
`;

export const VaultResultNumberSubtitle = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--gray);
`;

export const VaultAuctionContainer = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #272727;
    border-radius: 10px;
    padding: 30px 50px 30px 50px;
    gap: 10px;
    position: relative;

    input {
        outline: none;
    }
`;

export const VaultAuctionResult = styled.div`
    background-color: var(--darkGray);
    width: 100%;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
`;
