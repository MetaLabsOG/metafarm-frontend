import styled from 'styled-components';

export const MyVerifiedSwitchWrapper = styled.div`
    width: 180px;
    height: 30px;
    margin-top: 9px;
    font-family: 'Montserrat';
    margin-left: 5%;
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
        width: 155px;
        height: 30px;
        margin-top: 10px;
    }

    @media (max-width: 430px) {
        margin-left: 10%;
    }
`;

export const PoolStateWrapper = styled.div`
    width: 150px;
    height: 30px;
    margin-top: 10px;
    font-weight: 300;

    @media (max-width: 700px) {
        margin-top: 12px;
        margin-left: 2px;
    }
`;

export const SwitchSelectWrapper = styled.div`
    width: 180px;
    height: 30px;
    margin-top: 10px;
    font-family: Montserrat;
    font-weight: 300;

    @media (max-width: 700px) {
        width: 170px;
        height: 30px;
        margin-top: 14px;
        padding-left: 2px;
    }
`;

export const DropDownSortWrapper = styled.div`
    margin-top: 15px;
    margin-left: 18%;
    padding-bottom: 10px;
`;
