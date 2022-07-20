import styled from 'styled-components';

export const NFTCard = styled.div`
    border-radius: 16px;
    border: 0.91px solid #3d3d3d;
    width: 50%;
    max-width: 550px;
    max-height: 530px;
    margin: 0 auto;
    @media (max-width: 640px) {
        width: 80%;
        margin-top: 20px;
    }
`;

export const NFTCardInfo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 0 26px 30px 26px;
    align-items: flex-start;
    @media (max-width: 640px) {
        height: 350px;
    }
`;

export const Nft = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 70%;
    border-radius: 16px 16px 0 0;
    margin: 0 auto;
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

export const ContentContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
`;

export const InfoHeader = styled.h2`
    width: 100%;
    height: 100%;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    font-family: 'Korona One';
`;

export const Heading2 = styled.h2`
    font-family: 'Korona One';
    font-size: 16px;
    text-align: left;
    width: 100%;
    padding: 10px;
    color: #7a7a7a;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #272727;
    border-radius: 10px;
    padding: 30px;
    margin-top: 30px;

    input {
        outline: none;
    }

    @media (max-width: 390px) {
        padding: 15px;
    }
`;

export const ModalTitle = styled.h1`
    color: #d3d3d3;
    width: 100%;
    text-align: left;
    font-size: 22px;
    margin-bottom: 20px;
`;

export const ModalSubtitle = styled.h3`
    color: #8b8b8b;
    margin-top: 5px;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 10px;
`;
