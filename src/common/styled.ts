import styled from 'styled-components';

export const NFTCard = styled.div`
    border-radius: 16px;
    border: 0.91px solid #3d3d3d;
    width: 40%;
    max-width: 550px;
    max-height: 530px;
    @media (max-width: 640px) {
        position: absolute;
        top: 28%;
        right: 21%;
        height: 30%;
        width: 55%;
    }
`;

export const NFTCardInfo = styled.div`
    display: flex;
    height: 35%;
    flex-direction: column;
    padding: 0 26px 30px 26px;
    align-items: flex-start;
    @media (max-width: 640px) {
        width: 100%;
        padding: 0 10px 30px 10px;
    }
`;

export const Nft = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 70%;
    border-radius: 16px 16px 0 0;
`;
