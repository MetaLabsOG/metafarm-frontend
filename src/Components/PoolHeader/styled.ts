import styled from 'styled-components';

export const PoolHeaderContainer = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.white};
`;

export const PoolInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 5px;
`;

export const PoolTitle = styled.div`
    display: flex;
    white-space: nowrap;

    @media (max-width: 1120px) {
        font-family: 'Korona One';
        color: white;
    }
`;

export const PoolSubtitle = styled.div`
    display: flex;
    white-space: nowrap;

    @media (max-width: 1120px) {
        font-family: 'Korona One';
        color: var(--green);
    }
`;

export const LpTokensIconsWrapper = styled.div`
    display: flex;
    position: relative;
    height: 40px;
    width: 85px;
`;

export const LPTokensIcon = styled.div<{ first?: boolean }>`
    position: absolute;
    left: ${({ first }) => (first ? '0' : '30px')};
    height: 100%;
    //width: 40px;
    border: 0 solid;
    border-radius: 40px;
    background-color: black;
`;

export const DexIcon = styled.img`
    position: absolute;
    left: 59px;
    background-color: white;
    height: 16px;
    border-radius: 5px;
`;

export const ContractLockSuffix = styled.div`
    font-size: 12px;
    margin-right: 3px;
    color: #838383;
    @media (max-width: 1120px) {
        color: white;
    }
`;
