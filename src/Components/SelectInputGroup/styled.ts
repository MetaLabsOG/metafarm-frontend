import styled from 'styled-components';

export const SelectInputGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    width: 350px;
    margin-bottom: 10px;
    position: relative;
`;

export const SelectContainer = styled.div`
    display: flex;
    padding: 10px;
    position: absolute;
    height: 56px;
    width: 164px;
    background: var(--backgroundCard);
    border-radius: 8px;
    left: 8px;
    top: 8px;
    z-index: 2;
`;

export const TokenInput = styled.input`
    height: 72px;
    width: 100%;
    padding: 8px 16px 8px 230px;
    background-color: var(--background);

    font-family: 'Korona One';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: var(--newWhite);
    text-align: right;

    border: 1px solid var(--borderColor);
    border-radius: 12px;
    flex-grow: 1;
    appearance: none;

    :focus {
        border: 1px solid var(--newLightGray);
    }
`;

export const TokenBalance = styled.div`
    color: var(--red);
    text-align: left;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.06em;

    position: absolute;
    top: 105%;
    left: 10px;
`;
