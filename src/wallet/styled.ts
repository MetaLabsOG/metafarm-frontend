import styled from 'styled-components';

// TODO: fix animation
export const WalletModalContainer = styled.div<{ finishedOpening: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 20px;
    background-color: var(--backgroundCard);
    border-radius: 20px;

    transform: ${(finishedOpening) => `translate3d(0px, ${finishedOpening ? '0' : '100'}px, 0px)`};
    opacity: ${(finishedOpening) => (finishedOpening ? 100 : 0)};
    transition: transform 500ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 500ms cubic-bezier(0, 0, 0.25, 1) 0s;
`;

export const WalletHeader = styled.div`
    font-family: 'Krona One';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin-bottom: 20px;

    color: var(--newWhite);
`;

export const WalletButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;

    width: 350px;
    height: 76px;

    background: var(--backgroundModal);
    border-radius: 12px;

    :hover {
        background-color: var(--backgroundHover);
    }
`;

export const WalletText = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: var(--newWhite);
`;
