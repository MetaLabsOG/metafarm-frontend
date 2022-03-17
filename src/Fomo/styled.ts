import styled from 'styled-components';

export const FomoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Info = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-left: 90px;
`;

export const Actions = styled.div`
    display: flex;
    margin-top: 40px;
`;

export const Prize = styled.h1`
    font-size: 27px;
    margin-bottom: 29px;
    margin-top: 34px;
`;

export const FomoSupply = styled.div`
    font-size: 18px;
    color: #4f4f4f;
    margin-top: 15px;
`;

export const Update = styled.div<{ color: string }>`
    position: relative;
    color: ${({ color }) => color};
    margin-bottom: 21px;
    margin-right: 19px;
`;

export const UpdateButton = styled.div`
    :before {
        position: absolute;
        right: 0;
        top: 32px;
        background-image: url('../imgs/dropdown.svg');
        content: ' ';
        background: #05ff00;
        border-radius: 8px;
        width: 36px;
        height: 36px;
    }
`;
