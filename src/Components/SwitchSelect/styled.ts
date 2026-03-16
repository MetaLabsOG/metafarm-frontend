import styled from 'styled-components';

export const MyVerifiedSwitchWrapper = styled.div`
    width: 180px;
    height: 30px;
    margin-top: 9px;
    font-family: 'Montserrat';
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
        max-width: 700px;
        width: 170px;
        height: 30px;
        margin-top: 0;
    }

    @media (max-width: 430px) {
        margin-left: 0;
    }
`;

export const PoolStateWrapper = styled.div`
    width: 170px;
    height: 30px;
    margin-top: 10px;
    font-family: 'Montserrat';
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
        margin-top: 0;
        margin-left: 0;
    }
`;

export const SwitchSelectWrapper = styled.div`
    width: 180px;
    height: 30px;
    margin-top: 10px;
    font-family: 'Montserrat';
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
        width: 170px;
        height: 30px;
        margin-top: 0;
        padding-left: 0;
    }
`;
