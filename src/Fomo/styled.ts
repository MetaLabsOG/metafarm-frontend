import styled from 'styled-components';

export const FomoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Info = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-left: 90px;
`;

export const Actions = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const Prize = styled.h1`
    position: relative;
    font-size: 22px;
    margin-bottom: 12px;
    margin-top: 30px;
`;

export const FomoSupply = styled.div`
    font-size: 18px;
    color: #4f4f4f;
    margin-top: 15px;
`;

export const Winner = styled.div`
    width: 100%;
`;

export const WinnerBid = styled.div`
    position: relative;
    font-size: 15px;
    margin-top: 10px;
    width: 300px;
    color: #197303;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Level = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelLevel = styled.div`
    font-size: 18px;
`;

export const LevelValue = styled.div`
    margin-top: 5px;
    font-size: 15px;
    color: #4f4f4f;
`;

export const Balance = styled.div`
    font-size: 21px;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    margin-top: 23px;
`;

export const Amounts = styled.div`
    margin-top: 5px;
    display: flex;
`;

export const Amount = styled.div<{ withIcon?: boolean }>`
    margin-right: 30px;
    position: relative;
`;

export const Update = styled.div`
    color: #05ff00;
    margin-bottom: 21px;
    margin-right: 19px;
    display: flex;
    align-items: center;
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

export const BoostButton = styled.button<{ disabled: boolean }>`
    color: ${({ disabled }) => (disabled ? '#4f4f4f' : '#05ff00')};
    border-radius: 10px;
    border: 1px solid;
    background: none;
    height: 40px;
    width: 94px;
    font-size: 16px;
    font-family: 'Korona One';
    cursor: pointer;
    :hover {
        color: ${({ disabled }) => (disabled ? '#4f4f4f' : 'black')};
        background: ${({ disabled }) => (disabled ? 'none' : '#05ff00;')};
    }
`;

export const BID = styled.h3`
    margin-top: 55px;
    font-size: 25px;
`;
