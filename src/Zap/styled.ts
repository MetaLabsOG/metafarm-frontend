import styled from 'styled-components';
import { SelectInputGroupContainer } from '../Components/SelectInputGroup/styled';

// Zap-specific container — wider and more spacious than shared ModalContainer
export const ZapContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--background);
    border-radius: 16px;
    padding: 28px 24px;
    margin-top: 10px;
    position: relative;
    width: 420px;

    input:focus {
        outline: none;
        border-color: rgba(66, 201, 63, 0.35);
        box-shadow: 0 0 0 1px rgba(66, 201, 63, 0.15);
    }

    ${SelectInputGroupContainer} {
        width: 100%;
    }

    @media (max-width: 460px) {
        width: 100%;
        padding: 20px 16px;
    }
`;

export const ZapTitle = styled.h1`
    color: var(--white);
    font-family: 'Korona One';
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.06em;
    text-align: center;
    margin: 0;
`;

export const ZapSubtitle = styled.p`
    color: var(--gray);
    font-family: var(--font-body);
    font-size: 13px;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 6px 0 24px;
`;

// Flow separator between token inputs
export const FlowSeparator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2px 0;
    gap: 12px;
`;

export const FlowLine = styled.div`
    flex: 1;
    height: 1px;
    background: var(--borderColor);
`;

export const FlowIcon = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: var(--backgroundCard);
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray);
    font-size: 14px;
    font-family: 'Korona One';
    flex-shrink: 0;
`;

// Feature toggle cards
export const FeatureToggles = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    margin: 16px 0;
`;

export const FeatureCard = styled.label<{ $isActive: boolean }>`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 10px;
    background: ${({ $isActive }) => $isActive ? 'rgba(66, 201, 63, 0.05)' : 'var(--backgroundCard)'};
    border: 1px solid ${({ $isActive }) => $isActive ? 'rgba(66, 201, 63, 0.18)' : 'transparent'};
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
    user-select: none;
    gap: 10px;

    &:hover {
        border-color: ${({ $isActive }) => $isActive ? 'rgba(66, 201, 63, 0.3)' : 'var(--borderColor)'};
    }
`;

export const FeatureLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
`;

export const FeatureTitle = styled.span`
    color: var(--white);
    font-family: var(--font-body);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.01em;
    white-space: nowrap;
`;

export const FeatureHint = styled.span`
    color: var(--gray);
    font-family: var(--font-body);
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// Output preview panel
export const OutputPanel = styled.div`
    width: 100%;
    padding: 20px;
    background: var(--backgroundCard);
    border-radius: 12px;
    text-align: center;
`;

export const OutputLabel = styled.div`
    font-family: var(--font-body);
    font-size: 11px;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
`;

export const OutputHero = styled.div`
    font-family: 'Korona One';
    font-size: 26px;
    color: var(--white);
    letter-spacing: 0.02em;
    line-height: 1.3;
`;

export const OutputBreakdown = styled.div`
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--newLightGray);
    margin-top: 4px;
`;

export const OutputMeta = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const OutputMetaItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`;

export const OutputMetaLabel = styled.span`
    font-family: var(--font-body);
    font-size: 11px;
    color: var(--gray);
`;

export const OutputMetaValue = styled.span`
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--newLightGray);
`;

// Details toggle
export const DetailsButton = styled.button`
    background: none;
    border: none;
    color: var(--gray);
    font-family: var(--font-body);
    font-size: 11px;
    cursor: pointer;
    padding: 0;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.15s ease;

    &:hover {
        color: var(--newLightGray);
    }
`;

export const DetailsContent = styled.div`
    width: 100%;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    display: flex;
    justify-content: space-between;
`;

export const DetailItem = styled.div`
    font-family: var(--font-body);
    font-size: 12px;
`;

export const DetailKey = styled.span`
    color: var(--gray);
`;

export const DetailVal = styled.span`
    color: var(--newLightGray);
    margin-left: 6px;
`;

// Manual link
export const ManualLink = styled.a`
    color: var(--gray);
    font-family: var(--font-body);
    font-size: 12px;
    margin-top: 8px;
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover {
        color: var(--lightGray);
    }
`;

// USD hint below token inputs
export const UsdHint = styled.div`
    width: 100%;
    text-align: right;
    font-family: var(--font-body);
    font-size: 12px;
    color: var(--gray);
    padding: 4px 16px 0;
    min-height: 20px;
`;

// Price impact indicator
export const PriceImpact = styled.span<{ $severity: 'low' | 'medium' | 'high' }>`
    color: ${({ $severity }) =>
        $severity === 'low' ? '#4ade80' :
        $severity === 'medium' ? '#f59e0b' :
        '#ef4444'};
`;

// Loading skeleton for output panel
export const OutputSkeleton = styled.div`
    width: 100%;
    padding: 24px 20px;
    background: var(--backgroundCard);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 120px;
`;
