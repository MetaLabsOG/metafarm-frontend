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

export const Nft = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 70%;
    border-radius: 16px;
`;

export const Actions = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const Prize = styled.h1`
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

export const Amount = styled.div`
    margin-right: 30px;
`;

export const Update = styled.div<{ color: string }>`
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
    top: 5px;
    ${BoostButtonConteiner}:hover & {
        display: inline;
    }
`;

export const BoostButton = styled.button`
    color: #05ff00;
    border-radius: 10px;
    border: 1px solid;
    background: none;
    height: 32px;
    width: 94px;
    font-size: 16px;
    font-family: 'Korona One';
    cursor: pointer;
    :hover {
        color: black;
        background: #05ff00;
    }
`;

export const BID = styled.h3`
    margin-top: 55px;
    font-size: 25px;
`;
