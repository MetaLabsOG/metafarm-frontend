import styled from 'styled-components';

export const InfoCardContainer = styled.div`
    width: 520px;
    height: 170px;
    //background: var(--newDarkGray);
    background: linear-gradient(270deg, rgba(54, 54, 54, 0.01) 0%, rgba(54, 54, 54, 0.01) 30.46%), rgba(20, 20, 20, 0.3);
    backdrop-filter: blur(8px);
    backdrop-saturate: 150%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 30px;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(270deg, rgba(54, 54, 54, 0.02) 0%, rgba(54, 54, 54, 0.02) 30.46%), rgba(20, 20, 20, 0.4);
        transform: translateY(-2px);
    }
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
