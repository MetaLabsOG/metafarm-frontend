import styled from 'styled-components';

export const SelectInputGroupContainer = styled.div`
    display: flex;
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
`;

export const TokenInput = styled.input`
    height: 72px;
    width: 100%;
    padding: 8px 16px 8px 8px;
    background-color: transparent;

    font-family: 'Krona One';
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
`;

export const TokenBalance = styled.div`
    color: #8b8b8b;
    margin-top: 5px;
    font-family: 'Montserrat';
    font-size: 12px;
    margin-left: 10px;
    text-align: left;
`;
