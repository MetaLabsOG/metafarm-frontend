import styled from 'styled-components';
import { theme } from '../../theme';

export const PoolHeaderContainer = styled.div`
    font-family: var(--font-body);
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
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 4px;
        line-height: 16px;
        font-size: 13px;
        padding: 0 2px;
        gap: 2px;
    }
`;

export const PoolInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 14px;
    margin-top: 4px;

    @media (max-width: 700px) {
        margin-left: 0;
        margin-top: 2px;
        align-items: center;
    }
`;

export const PoolTitle = styled.div`
    display: flex;
    font-family: 'Korona One';
    font-size: 12px;
    color: white;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 160px;
    letter-spacing: 0.2px;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

    @media (max-width: 1120px) {
        font-size: 10px;
        max-width: 140px;
        line-height: 1.1;
        font-weight: 700;
    }

    @media (max-width: 700px) {
        font-size: 12px;
        max-width: none;
        line-height: 1.2;
        letter-spacing: 0;
        font-weight: 700;
        justify-content: center;
    }
`;

export const PoolSubtitlesContainer = styled.div`
    padding-top: 5px;
    display: flex;
    padding-bottom: 1px;
    justify-content: left;
    width: 100%;
    margin-top: 3px;

    @media (max-width: 700px) {
        padding-top: 1px;
        margin-top: 1px;
        justify-content: center;
    }
`;

export const PoolSubtitle = styled.div`
    color: ${theme.niceGreen};
    font-family: var(--font-body);
    font-size: 11px;
    line-height: 1.2;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    max-width: 160px;
    letter-spacing: 0;

    @media (max-width: 1120px) {
        font-size: 11px;
        max-width: 140px;
    }

    @media (max-width: 700px) {
        font-size: 10px;
        max-width: none;
        line-height: 1.2;
        letter-spacing: 0;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }
`;

export const LpTokensIconsWrapper = styled.div`
    display: flex;
    position: relative;
    height: 32px; /* Reduced from 36px */
    width: 64px; /* Reduced from 72px */

    @media (max-width: 700px) {
        height: 24px; /* Further reduced from 28px */
        width: 48px; /* Further reduced from 56px */
    }
`;

export const LPTokensIcon = styled.div<{ first?: boolean; isWhite?: boolean }>`
    position: absolute;
    left: ${({ first }) => (first ? '0' : '24px')};
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50px;
    background-color: ${({ isWhite }) => (isWhite ? 'white' : 'black')};
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);

    @media (max-width: 1120px) {
        left: ${({ first }) => (first ? '0px' : '24px')};
    }

    @media (max-width: 700px) {
        left: ${({ first }) => (first ? '0px' : '18px')};
    }
`;

export const DexIcon = styled.img`
    position: absolute;
    left: 48px;
    background-color: white;
    height: 14px;
    border-radius: 4px;

    @media (max-width: 700px) {
        left: 36px; /* Adjust position for mobile */
        height: 10px; /* Smaller height for mobile */
        border-radius: 3px; /* Smaller border radius */
    }
`;

export const Game = styled.img`
    position: absolute;
    left: 42px;
    height: 14px;
    border-radius: 4px;
    background-color: white;

    @media (max-width: 700px) {
        left: 36px;
        height: 10px;
        border-radius: 3px;
    }
`;

export const ContractLockSuffix = styled.div`
    font-size: 11px;
    margin-right: 3px;
    color: var(--gray);
    @media (max-width: 1120px) {
        color: var(--lightGray);
    }
    @media (max-width: 700px) {
        font-size: 7px;
        opacity: 0.7;
        max-width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        letter-spacing: -0.1px;
        text-align: center;
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
    display: inline-block;
    white-space: nowrap;
`;
