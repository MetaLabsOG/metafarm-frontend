import styled from 'styled-components';

export const WalletHeader = styled.div`
    font-family: 'Korona One';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin-bottom: 20px;
    white-space: nowrap;

    color: var(--newWhite);

    @media (max-width: 450px) {
        font-size: 18px;
    }
`;

export const WalletModalContainer = styled.div<{ finishedOpening: boolean }>`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 30px;
    gap: 20px;
    margin: auto;
    background-color: var(--backgroundCard);
    border-radius: 20px;

    transform: ${(props) => `translate3d(0px, ${props.finishedOpening ? '0' : '100'}px, 0px)`};
    opacity: ${(props) => (props.finishedOpening ? 100 : 0)};
    transition: transform 500ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 500ms cubic-bezier(0, 0, 0.25, 1) 0s;

    @media (max-width: 450px) {
        padding: 40px 20px 32px;
    }
`;

export const WalletButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 24px;

    width: 100%;
    height: 60px;

    background: var(--backgroundModal);
    border-radius: 30px;

    :hover {
        background-color: var(--backgroundHover);
    }
`;

export const PeraButton = styled.button`
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 10px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    &:focus {
        outline: 2px solid var(--lightGreen);
    }
    
    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

export const DeflyButton = styled.button`
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 10px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    &:focus {
        outline: 2px solid var(--lightGreen);
    }
    
    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

export const WalletText = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: var(--newWhite);
`;
