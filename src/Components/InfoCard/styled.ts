import styled from 'styled-components';

export const InfoCardContainer = styled.div`
    width: 520px;
    height: 170px;
    background: rgba(20, 20, 20, 0.3);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-left: 3px solid var(--accent-muted);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    padding: 30px;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    }
`;

export const InfoCardTitle = styled.div`
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: var(--white);

    margin-bottom: 16px;
`;

export const InfoCardSubtitle = styled.div`
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: var(--gray);

    margin-bottom: 16px;
`;
