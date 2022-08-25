import styled from 'styled-components';

export const InfoCardContainer = styled.div`
    width: 520px;
    height: 170px;
    //background: var(--newDarkGray);
    background: linear-gradient(270deg, rgba(92, 252, 60, 0.03) 0%, rgba(24, 24, 24, 0.03) 30.46%), #1c1c1c;
    border-radius: 20px;
    padding: 30px;
`;

export const InfoCardTitle = styled.div`
    font-family: 'Montserrat';
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
    font-family: 'Montserrat';
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
