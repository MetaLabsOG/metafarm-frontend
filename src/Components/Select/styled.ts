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
    font-family: var(--font-body);
    white-space: nowrap;
`;

export const SelectModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 700px;
    padding: 20px;
    background-color: var(--background);
    border-radius: 12px;

    @media (max-height: 700px) {
        height: calc(100vh - 150px);
    }

    @media (max-width: 400px) {
        width: calc(100vw - 30px);
    }
`;

export const SelectSearch = styled.input`
    width: 100%;
    display: flex;
    padding: 10px 10px 10px 30px;
    border: 1px solid var(--borderColor);
    border-radius: 12px;
    background-color: transparent;
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--white);
    margin-bottom: 10px;
    margin-top: 35px;

    &:focus {
        outline: none;
        border-color: rgba(144, 238, 144, 0.4);
        box-shadow: 0 0 0 2px rgba(144, 238, 144, 0.2);
    }
`;

export const SelectOptionContainer = styled.div`
    :hover {
        background-color: var(--backgroundCard);
        cursor: pointer;
    }
`;

export const SelectInputGroupContainer = styled.div`
    pointer-events: none;
    display: flex;
    gap: 10px;
    font-family: var(--font-body);
    color: white;
    align-items: center;
`;

export const OptionTitle = styled.div`
    font-family: var(--font-body);
    color: var(--white);
    font-size: 16px;
    text-align: left;
`;

export const OptionSubtitle = styled.div`
    font-family: var(--font-body);
    color: var(--white);
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
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--newLightGray);
`;

export const Loupe = styled.img`
    position: absolute;
    left: 30px;
    top: 67px;
    width: 15px;
`;
