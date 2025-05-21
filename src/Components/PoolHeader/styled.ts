import styled from 'styled-components';
import { theme } from '../../theme';

export const PoolHeaderContainer = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.white};
    margin-bottom: 5px;

    @media (max-width: 1120px) {
        justify-content: center;
    }

    @media (max-width: 700px) {
        margin-bottom: 2px; /* Reduced margin for mobile */
        line-height: 16px; /* Reduced line height for mobile */
        font-size: 13px; /* Smaller font for mobile */
        padding: 0 2px; /* Add minimal padding */
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
    font-size: 11px; /* Reduced from 12px */
    color: white;

    @media (max-width: 1120px) {
        font-size: 11px; /* Reduced from 12px */
    }

    @media (max-width: 700px) {
        font-size: 8px; /* Further reduced from 9px */
        max-width: 70px; /* Further limit width */
        overflow: hidden;
        text-overflow: ellipsis; /* Add ellipsis for overflow */
        white-space: nowrap;
        letter-spacing: -0.2px; /* Tighter letter spacing */
        margin-bottom: 1px; /* Add small margin bottom */
    }
`;

export const PoolSubtitlesContainer = styled.div`
    padding-top: 2px;
    display: flex;
    padding-bottom: 2px;
    justify-content: left;
    width: 100%;
`;

export const PoolSubtitle = styled.div`
    white-space: nowrap;
    color: ${theme.niceGreen}; // light green
    font-family: 'Korona One';
    font-size: 10px;

    @media (max-width: 1120px) {
        font-size: 10px;
    }

    @media (max-width: 700px) {
        font-size: 8px; /* Even smaller font for mobile */
        max-width: 70px; /* Further limit width */
        overflow: hidden;
        text-overflow: ellipsis; /* Add ellipsis for overflow */
        letter-spacing: -0.1px; /* Tighter letter spacing */
        opacity: 0.9; /* Slightly transparent */
    }
`;

export const LpTokensIconsWrapper = styled.div`
    display: flex;
    position: relative;
    height: 36px; /* Reduced from 40px */
    width: 72px; /* Reduced from 80px */

    @media (max-width: 700px) {
        height: 28px; /* Further reduced from 32px */
        width: 56px; /* Further reduced from 64px */
    }
`;

export const LPTokensIcon = styled.div<{ first?: boolean; isWhite?: boolean }>`
    position: absolute;
    left: ${({ first }) => (first ? '0' : '28px')};
    height: 100%;
    border: 0 solid;
    border-radius: 50px;
    background-color: ${({ isWhite }) => (isWhite ? 'white' : 'black')};

    @media (max-width: 1120px) {
        left: ${({ first }) => (first ? '0px' : '28px')};
    }

    @media (max-width: 700px) {
        left: ${({ first }) => (first ? '0px' : '22px')}; /* Adjust position for mobile */
    }
`;

export const DexIcon = styled.img`
    position: absolute;
    left: 56px;
    background-color: white;
    height: 16px;
    border-radius: 4px;

    @media (max-width: 700px) {
        left: 44px; /* Adjust position for mobile */
        height: 12px; /* Smaller height for mobile */
        border-radius: 3px; /* Smaller border radius */
    }
`;

export const Game = styled.img`
    position: absolute;
    left: 48px;
    height: 16px;
    border-radius: 4px;
    background-color: white;
`;

export const ContractLockSuffix = styled.div`
    font-size: 11px;
    margin-right: 3px;
    color: var(--gray);
    @media (max-width: 1120px) {
        color: #cccccc;
    }
    @media (max-width: 700px) {
        font-size: 7px; /* Even smaller font for mobile */
        opacity: 0.7; /* More transparent */
        max-width: 70px; /* Further limit width */
        overflow: hidden;
        text-overflow: ellipsis; /* Add ellipsis for overflow */
        white-space: nowrap;
        letter-spacing: -0.1px; /* Tighter letter spacing */
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
