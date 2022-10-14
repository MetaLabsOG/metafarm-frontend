import styled from 'styled-components';

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--borderColor);
    border-radius: 12px;
    cursor: pointer;
`;

export const OptionContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    font-family: Montserrat;
    white-space: nowrap;
`;

export const SelectModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;
    padding: 20px;
    background-color: var(--backgroundModal);
    border-radius: 12px;
`;

export const SelectSearch = styled.input`
    width: 100%;
    display: flex;
    padding: 10px;
    border: 1px solid var(--borderColor);
    border-radius: 12px;
    background-color: transparent;
    font-family: 'Montserrat';
    font-size: 14px;
    color: var(--newWhite);
    outline: none;
    margin-bottom: 10px;
`;

export const SelectOptionContainer = styled.div`
    :hover {
        background-color: var(--backgroundHover);
        cursor: pointer;
    }
`;

export const OptionTitle = styled.div`
    font-family: 'Montserrat';
    color: var(--newWhite);
    font-size: 16px;
    text-align: left;
`;

export const OptionSubtitle = styled.div`
    font-family: 'Montserrat';
    color: var(--newWhite);
    font-size: 12px;
    text-align: left;
`;

export const TokenIcon = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    margin: 10px;
`;

export const LpIcons = styled.div`
    display: flex;
    position: relative;
    height: 32px;
    width: 50px;
    margin: 10px;
`;

export const LpIcon = styled.img`
    left: 0;
    position: absolute;
    height: 100%;
    width: 32px;
    border: 0 solid;
    border-radius: 50%;
    background-color: black;
`;

export const OptionAdditionalInfo = styled.div`
    margin-left: auto;
    margin-right: 20px;
    text-align: right;
    font-family: 'Montserrat';
    font-size: 12px;
    color: #8b8b8b;
`;
