import styled from 'styled-components';

export const FomoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FomoRulesTitle = styled.h1`
    text-align: center;
    font-size: 20px;
    color: #197303;
    margin: auto 10px;
    @media (max-width: 640px) {
        font-size: 12px;
        margin: 0px 10px 5px 10px;
    }
`;

export const Info = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-left: 90px;
    flex-grow: 0;
    @media (max-width: 640px) {
        width: 90%;
        padding: 10px;
        margin: 0 auto;
    }
`;

export const Actions = styled.div`
    display: flex;
    margin-top: 20px;

    @media (max-width: 640px) {
        flex-wrap: wrap-reverse;
    }
`;

export const Prize = styled.h1`
    position: relative;
    font-size: 22px;
    margin-bottom: 12px;
    margin-top: 30px;
    @media (max-width: 640px) {
        margin-top: 15px;
        font-size: 20px;
    }
`;

export const FomoSupply = styled.div`
    font-size: 18px;
    color: #4f4f4f;
    margin-top: 15px;
    @media screen {
        font-size: 16px;
    }
`;

export const Winner = styled.div`
    width: 100%;
    color: #197303;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
    margin-top: 10px;
    text-decoration: none;
`;

export const WinnerLink = styled.a`
    color: #027a00;
`;

export const WinnerBid = styled.div`
    position: relative;
    font-size: 15px;
    margin-top: 10px;
    width: 85%;
    color: #197303;
`;

export const Level = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelLevel = styled.div`
    font-size: 18px;
    @media screen {
        font-size: 16px;
    }
`;

export const LevelValue = styled.div`
    margin-top: 5px;
    font-size: 15px;
    color: #4f4f4f;
    @media screen {
        font-size: 13px;
    }
`;

export const Balance = styled.div`
    font-size: 21px;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    margin-top: 23px;
    @media (max-width: 640px) {
        font-size: 15px;
        margin-bottom: 26px;
        position: absolute;
        align-items: baseline;
        right: 5px;
        top: 2px;
    }
`;

export const Amounts = styled.div`
    margin-top: 5px;
    display: flex;
`;

export const Amount = styled.div<{ withIcon?: boolean }>`
    margin-right: 30px;
    position: relative;
    @media (max-width: 640px) {
        margin-right: 5px;
    }
`;

export const AvailableBalance = styled.div`
    color: #4f4f4f;
    font-size: 14px;
`;

export const Update = styled.div`
    color: #05ff00;
    margin-bottom: 21px;
    margin-right: 19px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`;

export const BoostButtonConteiner = styled.div`
    position: relative;
`;

export const BoostInfo = styled.div`
    position: absolute;
    color: #565656;
    display: none;
    width: 400px;
    left: 115px;
    top: 10px;
    ${BoostButtonConteiner}:hover & {
        display: inline;
    }
`;

export const BoostButton = styled.button<{ disabled: boolean; isLoading: boolean }>`
    position: relative;
    color: ${({ disabled }) => (disabled ? '#4f4f4f' : '#05ff00')};
    font-size: 16px;
    font-family: 'Korona One';
    border-radius: 10px;
    border: 1px solid;
    background: none;
    height: 40px;
    width: 94px;
    cursor: pointer;
    ::before {
        position: absolute;
        top: ${({ isLoading }) => (isLoading ? ' 5px' : '8px')};
        left: ${({ isLoading }) => (isLoading ? '30px' : '14px')};
        content: ' ';
        background-image: ${({ isLoading }) => (isLoading ? `url(${require('../imgs/loader.gif').default})` : null)};
        background-position: center center;
        background-size: cover;
        width: 40px;
        height: 70%;
    }

    :hover {
        color: ${({ disabled }) => (disabled ? '#4f4f4f' : 'black')};
        background: ${({ disabled, isLoading }) => (disabled || isLoading ? 'none' : '#05ff00;')};
    }
`;

export const BID = styled.h3`
    margin-top: 55px;
    font-size: 25px;
    width: 300px;
    @media (max-width: 640px) {
        margin-top: 10px;
        text-align: center;
        font-size: 20px;
    }
`;

export const MaxedOut = styled.div`
    color: #4f4f4f;
    font-size: 18px;
    width: 94px;
    text-align: center;
    @media (max-width: 640px) {
        font-size: 16px;
    }
`;

export const RulesItems = styled.div`
    color: #3d3d3d;
    margin: 35px 26px 40px 26px;
    font-family: Korona One;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`;

export const RulesStrong = styled.span`
    font-weight: 800;
    color: black;
    font-size: 13.5px;
`;

export const Subitems = styled.div`
    margin-left: 10px;
`;

export const RulesItemOrdinalNumber = styled.span`
    margin-right: 3px;
`;

export const RulesItemText = styled.div`
    display: block;
`;

export const RulesItem = styled.div`
    margin-bottom: 3px;
    display: flex;
`;
