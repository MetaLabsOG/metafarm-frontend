import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

/* ── Swap Details Panel ────────────────────────────────────── */

export const SwapDetailsPanel = styled.div`
    width: 100%;
    margin-top: 16px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.02);
`;

/* ── Slippage Section ──────────────────────────────────────── */

export const SlippageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
`;

export const SlippageLabel = styled.span`
    color: ${theme.lightGray};
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: 500;
`;

export const SlippageBtnGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const SlippageBtn = styled.button<{ $active: boolean }>`
    padding: 5px 12px;
    border-radius: 8px;
    border: 1px solid
        ${({ $active }) => ($active ? 'rgba(66, 201, 63, 0.4)' : 'rgba(255, 255, 255, 0.08)')};
    background: ${({ $active }) => ($active ? 'rgba(66, 201, 63, 0.1)' : 'transparent')};
    color: ${({ $active }) => ($active ? theme.niceGreen : theme.lightGray)};
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;

    &:hover {
        border-color: rgba(66, 201, 63, 0.3);
        background: rgba(66, 201, 63, 0.06);
    }
`;

export const CustomSlippageInput = styled.input<{ $active: boolean }>`
    width: 64px;
    padding: 5px 8px;
    border-radius: 8px;
    border: 1px solid
        ${({ $active }) => ($active ? 'rgba(66, 201, 63, 0.4)' : 'rgba(255, 255, 255, 0.08)')};
    background: ${({ $active }) => ($active ? 'rgba(66, 201, 63, 0.1)' : 'transparent')};
    color: ${theme.newWhite};
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: 500;
    text-align: center;
    transition: all 0.15s ease;

    &::placeholder {
        color: ${theme.gray};
    }

    &:focus {
        outline: none;
        border-color: rgba(66, 201, 63, 0.4);
        box-shadow: 0 0 0 2px rgba(144, 238, 144, 0.2);
    }
`;

/* ── Clickable Rate ─────────────────────────────────────────── */

export const RateValue = styled.span`
    color: ${theme.newWhite};
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    user-select: none;
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.75;
    }
`;

export const InvertIcon = styled.span`
    font-size: 11px;
    color: ${theme.gray};
`;

/* ── Panel Divider ─────────────────────────────────────────── */

export const PanelDivider = styled.div`
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
`;

/* ── Details Section ───────────────────────────────────────── */

export const DetailsSection = styled.div`
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    min-height: 120px;
`;

export const DetailRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DetailLabel = styled.span`
    color: ${theme.gray};
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: 400;
`;

export const DetailValue = styled.span<{ $color?: string; $highlight?: boolean }>`
    color: ${({ $color }) => $color ?? theme.lightGray};
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: ${({ $highlight }) => ($highlight ? 600 : 400)};
`;

/* ── Price Impact Warning ──────────────────────────────────── */

export const ImpactWarning = styled.div<{ $critical: boolean }>`
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-family: 'Montserrat';
    font-weight: 500;
    line-height: 1.4;
    background: ${({ $critical }) =>
        $critical ? 'rgba(225, 99, 107, 0.08)' : 'rgba(232, 163, 23, 0.08)'};
    color: ${({ $critical }) => ($critical ? 'var(--red)' : 'var(--warning)')};
    border: 1px solid
        ${({ $critical }) =>
            $critical ? 'rgba(225, 99, 107, 0.15)' : 'rgba(232, 163, 23, 0.15)'};
`;

/* ── Refresh Countdown ─────────────────────────────────────── */

const pulse = keyframes`
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
`;

export const RefreshSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 16px 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const PulseDot = styled.span`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${theme.niceGreen};
    animation: ${pulse} 2s ease-in-out infinite;
`;

export const RefreshText = styled.span`
    color: ${theme.gray};
    font-size: 11px;
    font-family: 'Montserrat';
`;
