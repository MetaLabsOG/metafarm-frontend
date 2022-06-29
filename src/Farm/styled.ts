import styled from 'styled-components';

export const FarmContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1114px;
    height: 100%;
    margin-top: 40px;
    font-family: 'Montserrat';
`;

export const DateInput = styled.input`
    height: 50px;
    width: 250px;
    padding: 10px;
    color: #ffffff;
    background-color: #272727;
    flex-shrink: 0;

    font-family: 'Montserrat';
    font-size: 18px;

    border: 1px solid rgba(125, 125, 125, 0.66);
    border-radius: 8px;
`;

export const PoolCreateModalContainer = styled.div`
    display: flex;
    margin-right: auto;

    @media (max-width: 1120px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;
