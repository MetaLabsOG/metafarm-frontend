import styled from 'styled-components';
import { theme } from '../theme';

export const MyFundsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 16px 48px;
    box-sizing: border-box;
`;

export const MyFundsHeader = styled.h1`
    font-family: var(--font-heading, inherit);
    font-size: 32px;
    font-weight: 600;
    color: ${theme.pureWhite};
    margin: 0 0 8px;

    @media (max-width: 700px) {
        font-size: 24px;
    }
`;

export const MyFundsSubtitle = styled.p`
    color: ${theme.gray};
    font-size: 14px;
    line-height: 1.5;
    margin: 0 0 24px;
    max-width: 720px;
`;

export const SectionHeader = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.pureWhite};
    margin: 24px 0 12px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const SectionCount = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: ${theme.gray};
    background: rgba(255, 255, 255, 0.06);
    padding: 2px 8px;
    border-radius: 10px;
`;

export const WarningFooter = styled.div`
    margin-top: 32px;
    padding: 16px;
    border-radius: 8px;
    background: rgba(255, 180, 0, 0.08);
    border: 1px solid rgba(255, 180, 0, 0.25);
    color: ${theme.gray};
    font-size: 13px;
    line-height: 1.5;
`;

export const ConnectPrompt = styled.div`
    text-align: center;
    padding: 48px 20px;
    color: ${theme.gray};
    font-size: 15px;
`;

export const ErrorBox = styled.div`
    margin: 24px auto;
    max-width: 560px;
    padding: 24px 20px;
    border-radius: 12px;
    background: rgba(255, 80, 80, 0.08);
    border: 1px solid rgba(255, 80, 80, 0.28);
    text-align: center;
`;

export const ErrorTitle = styled.div`
    color: ${theme.pureWhite};
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const ErrorMessage = styled.p`
    color: ${theme.gray};
    font-size: 14px;
    line-height: 1.5;
    margin: 0 0 16px;
`;

export const RetryButton = styled.button`
    background: rgba(255, 255, 255, 0.08);
    color: ${theme.pureWhite};
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.14);
    }
`;
