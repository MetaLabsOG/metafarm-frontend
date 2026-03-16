import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
    position: relative;
    width: 250px;
    min-height: 77px;
    padding-top: 18px;
`;

export const ProgressBarTitleContainer = styled.div`
    font-family: var(--font-body);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--lightGray);
`;

export const ProgressContainer = styled.div`
    position: absolute;
    width: 250px;
    height: 8px;
    left: 0;
    top: 51px;
    background: var(--gray);
    border-radius: 10px;
`;

export const ProgressLine = styled.div<{ progress: number }>`
    position: absolute;
    width: ${({ progress }) => `${progress * 100}%`};
    height: 8px;
    left: 0;
    top: 51px;
    background: linear-gradient(270deg, #06a903 1.29%, #00ff29 100%);
    border-radius: 10px 0 0 10px;
`;
