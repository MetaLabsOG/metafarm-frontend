import styled from 'styled-components';

export const MyVerifiedSwitchWrapper = styled.div`
    width: 190px;
    height: 30px;
    margin-top: 9px;
    font-family: 'MaxiPower';
    font-weight: 300;

    @media (max-width: 1120px) {
        width: 155px;
        font-size: 13px;
        font-weight: 300;
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
    font-weight: 300;
    font-family: 'MaxiPower';

    @media (max-width: 700px) {
        margin-top: 0;
        margin-left: 0;
    }
`;

export const SwitchSelectWrapper = styled.div`
    width: 200px;
    height: 30px;
    margin-top: 10px;
    font-family: 'MaxiPower';
    font-weight: 300;

    @media (max-width: 700px) {
        width: 170px;
        height: 30px;
        margin-top: 0;
        padding-left: 0;
    }
`;
