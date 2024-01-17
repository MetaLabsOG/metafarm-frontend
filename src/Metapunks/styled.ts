import styled from 'styled-components';

export const MetapunksContainer = styled.div`
    font-family: 'Montserrat';
    margin-top: 40px;
    color: var(--newLightGray);
    width: 90%;
    align-items: center;
    align-content: center;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    color: var(--newWhite);
    font-family: 'Montserrat';
    font-size: 30px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;

    @media (max-width: 700px) {
        font-size: 20px;
        text-align: center;
    }
`;

export const Subheader = styled.div`
    color: var(--newnewGray);
    font-family: 'Montserrat';
    font-size: 20px;
    margin-bottom: 20px;
    padding: 20px;

    @media (max-width: 640px) {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        font-size: 12px;
    }
`;

export const Subheader2 = styled.div`
    color: var(--newnewGray);
    font-family: 'Montserrat';
    font-size: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;

    @media (max-width: 640px) {
        font-size: 20px;
    }
`;

export const PunkContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0 20px 0;
    border-radius: 10px;
    margin-bottom: 60px;

    @media (max-width: 700px) {
        margin-top: -20px;
        gap: 40px;
    }
`;

export const PunkImage = styled.img`
    width: 300px;
    border-radius: 10px;
    margin-top: 50px;
    border: 2px solid var(--green);
    box-shadow: 0 4px 28px #5cfc3c, 0 2px 10px rgba(29, 247, 3, 0.3);
    @media (max-width: 700px) {
        width: 90vw;
        margin-top: 30px;
    }
`;

export const PunkItem = styled.div`
    display: flex;
    @media (max-width: 700px) {
        flex-direction: column;
        items-align: center;
    }
`;

export const PunkName = styled.a`
    font-size: 30px;
    color: var(--newLightGray);
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    text-align: left;
    margin-top: 30px;

    :hover {
        color: var(--newWhite);
    }

    @media (max-width: 700px) {
        font-size: 25px;
        text-align: center;
    }
`;

export const PunkDownload = styled.a`
    font-family: 'Korona One';
    color: var(--newWhite);
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    //padding: 5px;
    :hover {
        color: var(--green);
    }

    @media (max-width: 700px) {
        display: none;
    }
`;
