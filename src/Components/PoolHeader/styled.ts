import styled from 'styled-components';
import { theme } from '../../theme';

export const PoolHeaderContainer = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.white};

    @media (max-width: 1120px) {
        justify-content: center;
    }
`;

export const PoolInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 5px;
`;

export const PoolTitle = styled.div`
    display: flex;
    white-space: nowrap;
    font-family: 'Korona One';
    font-size: 14px;
    color: white;

    @media (max-width: 1120px) {
        font-size: 15px;
    }
`;

export const PoolSubtitlesContainer = styled.div`
    padding-top: 3px;
    display: flex;
    padding-bottom: 3px;
    justify-content: left;
    width: 100%;
`;

export const PoolSubtitle = styled.div`
    white-space: nowrap;
    color: ${theme.niceGreen}; // light green
    font-family: 'Korona One';
    font-size: 12px;

    @media (max-width: 1120px) {
        font-size: 13px;
    }
`;

export const LpTokensIconsWrapper = styled.div`
    display: flex;
    position: relative;
    height: 50px;
    width: 100px;
`;

export const LPTokensIcon = styled.div<{ first?: boolean; isWhite?: boolean }>`
    position: absolute;
    left: ${({ first }) => (first ? '0' : '35px')};
    height: 100%;
    border: 0 solid;
    border-radius: 50px;
    background-color: ${({ isWhite }) => (isWhite ? 'white' : 'black')};

    @media (max-width: 1120px) {
        left: ${({ first }) => (first ? '0px' : '35px')};
    }
`;

export const DexIcon = styled.img`
    position: absolute;
    left: 70px;
    background-color: white;
    height: 20px;
    border-radius: 5px;
`;

export const Game = styled.img`
    position: absolute;
    left: 59px;
    height: 20px;
    border-radius: 5px;
    background-color: white;
`;

export const ContractLockSuffix = styled.div`
    font-size: 12px;
    margin-right: 3px;
    color: var(--gray);
    @media (max-width: 1120px) {
        color: white;
    }
`;

// Даша: оставим на будущее, прикольная анимашка!!!
export const AnimatedText = styled.div`
    text-transform: uppercase;
    background-image: linear-gradient(-225deg, darkgreen 0%, greenyellow 29%, #ff1361 67%, #fff800 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: white;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    white-space: nowrap;

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
`;
