import styled from 'styled-components';

export const MyVerifiedSwitchWrapper = styled.div`
    width: 180px;
    height: 30px;
    margin-top: 9px;
    font-family: var(--font-body);
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 1120px) {
        width: 155px;
        font-size: 13px;
        height: 32px;
    }

    @media (max-width: 1120px) {
        width: 150px;
    }

    @media (max-width: 700px) {
        width: 100px;
        height: 28px;
        margin-top: 0;
        font-size: 11px;
    }
`;

export const PoolStateWrapper = styled.div`
    width: 170px;
    height: 30px;
    margin-top: 10px;
    font-family: var(--font-body);
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 700px) {
        width: 100px;
        height: 28px;
        margin-top: 0;
        margin-left: 0;
        font-size: 11px;
    }
`;

export const SwitchSelectWrapper = styled.div`
    width: 180px;
    height: 30px;
    margin-top: 10px;
    font-family: var(--font-body);
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 700px) {
        width: 100px;
        height: 28px;
        margin-top: 0;
        padding-left: 0;
        font-size: 11px;
    }
`;

/* ── Mobile compact segmented control (Live / Ended) ── */

export const MobileSegmentedControl = styled.div`
    display: inline-flex;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 2px;
    flex-shrink: 0;
`;

export const MobileSegmentOption = styled.button<{ $active: boolean }>`
    height: 26px;
    padding: 0 12px;
    border-radius: 14px;
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: ${({ $active }) => ($active ? 600 : 500)};
    letter-spacing: 0.02em;
    background: ${({ $active }) => ($active ? 'rgba(144, 238, 144, 0.15)' : 'transparent')};
    color: ${({ $active }) => ($active ? 'var(--lightGreen)' : 'rgba(255, 255, 255, 0.45)')};
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s ease, color 0.15s ease;
`;

/* ── Mobile toggle chip (Verified / Mine) ── */

export const MobileToggleChip = styled.button<{ $active: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 3px;
    height: 26px;
    padding: 0 10px;
    border-radius: 14px;
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.02em;
    background: ${({ $active }) => ($active ? 'rgba(144, 238, 144, 0.08)' : 'transparent')};
    color: ${({ $active }) => ($active ? 'var(--lightGreen)' : 'rgba(255, 255, 255, 0.5)')};
    border: 1px solid ${({ $active }) => ($active ? 'rgba(144, 238, 144, 0.4)' : 'rgba(255, 255, 255, 0.12)')};
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
    transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
`;
