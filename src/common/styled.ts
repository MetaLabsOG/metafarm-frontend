import styled from 'styled-components';
import { theme } from '../theme';

export const NFTCard = styled.div`
    border-radius: 16px;
    border: 0.91px solid #3d3d3d;
    width: 50%;
    max-width: 550px;
    max-height: 530px;
    margin: 0 auto;
    @media (max-width: 640px) {
        width: 80%;
        margin-top: 20px;
    }
`;

export const NFTCardInfo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 0 26px 30px 26px;
    align-items: flex-start;
    @media (max-width: 640px) {
        height: 350px;
    }
`;

export const Nft = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 70%;
    border-radius: 16px 16px 0 0;
    margin: 0 auto;
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

export const ContentContainer = styled.main`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    @media (max-width: 979px) {
        margin-top: 86px; /* ~50px header row + 36px mobile nav row */
    }
`;

export const InfoHeader = styled.h2`
    width: 100%;
    height: 100%;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    font-family: 'Korona One';
`;

export const Heading2 = styled.h2`
    font-family: 'Korona One';
    font-size: 16px;
    text-align: left;
    width: 100%;
    padding: 10px;
    color: var(--gray);
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--background);
    border-radius: 10px;
    padding: 30px;
    margin-top: 10px;
    position: relative;

    input {
        &:focus {
            outline: none;
            border-color: rgba(144, 238, 144, 0.4);
            box-shadow: 0 0 0 2px rgba(144, 238, 144, 0.2);
        }
    }

    @media (max-width: 390px) {
        padding: 15px;
    }
`;

export const SwapChartContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 990px) {
        flex-direction: column;
    }
`;

export const ModalTitle = styled.h1`
    color: var(--white);
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    font-family: 'Korona One';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.04em;
`;

export const ModalSubtitle = styled.h3`
    color: var(--newnewGray);
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 30px;
`;

export const ModalCloseButton = styled.img`
    width: 28px;
    position: absolute;
    right: 15px;
    top: 15px;
    outline: none;

    :hover {
        cursor: pointer;
    }

    :focus {
        outline: 2px solid var(--lightGreen);
        border-radius: 4px;
    }

    :focus:not(:focus-visible) {
        outline: none;
    }
`;

export const Plus = styled.img`
    width: 15px;
    height: 15px;
`;

export const SwapContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
    margin-top: 2px;
    margin-bottom: 10px;
`;

export const SwapArrow = styled.img`
    width: 32px;
    transition: transform 0.2s ease;

    :hover {
        transform: translate(0) rotate(180deg);
        cursor: pointer;
    }
`;

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    user-select: none;
`;

export const SwitchText = styled.h3`
    color: var(--gray);
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    margin-left: 10px;
`;

export const DexButton = styled.img<{ isActive?: boolean }>`
    background-color: white;
    height: 25px;
    border-radius: 5px;
    margin-right: 10px;
    filter: ${({ isActive }) => (isActive ? 'brightness(100%)' : 'brightness(50%)')};

    :hover {
        cursor: pointer;
        filter: brightness(90%);
    }
`;

export const DexSwitchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const DexName = styled.div`
    color: var(--lightGray);
    font-family: var(--font-body);
    font-size: 12px;
    margin-top: 5px;

    :hover {
        color: var(--white);
    }
`;

export const WelcomeText = styled.div`
    font-family: var(--font-body);
    font-size: 20px;
    text-align: left;
    width: 100%;
    padding: 10px;
    color: var(--white);
`;

export const WalletActionButton = styled.a`
    text-decoration: none;

    :hover {
        color: var(--lightGreen);
        text-shadow: 0 4px 28px var(--text-primary), 0 2px 10px rgba(29, 247, 3, 0.3);
    }

    &.active {
        color: var(--lightGreen);
        text-shadow: 0 4px 28px var(--text-primary), 0 2px 10px rgba(29, 247, 3, 0.3);
    }

    :hover,
    :focus,
    :active {
        text-decoration: none;
    }
`;

export const PrettyButtonContainer = styled(WalletActionButton)`
    color: ${theme.pureWhite};
    border: 2px solid ${theme.newLightGray};
    text-decoration: none;
    background-color: rgba(30, 30, 30, 0.5);

    &:focus {
        outline: 2px solid var(--lightGreen);
        outline-offset: 2px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
    border-radius: 15px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    height: 32px;
    padding: 5px 13px 5px 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    backdrop-filter: blur(5px);

    &:hover {
        background-color: rgba(30, 30, 30, 0.7);
        border-color: ${theme.lightGreen};
    }

    @media (max-width: 700px) {
        backdrop-filter: none;
        height: 30px;
        padding: 0 12px;
        font-size: 11px;
        border-radius: 16px;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.08);
        margin-right: 0;

        &::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--lightGreen);
            margin-right: 6px;
            flex-shrink: 0;
        }
    }
`;

export const StyledVestigeChart = styled.div`
    border-radius: 15px;
    display: flex;
    margin-left: 30px;
    border: 1px solid ${theme.darkGray};

    @media (max-width: 890px) {
        width: 400px;
        height: 450px;
    }
`;
