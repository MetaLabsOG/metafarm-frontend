import styled from 'styled-components';

export const MetapunksContainer = styled.div`
    font-family: 'Montserrat';
    margin-top: 40px;
    color: var(--newLightGray);
    width: 90%;
    align-items: center;
    align-content: center;
`;

export const Header = styled.div`
    color: var(--newWhite);
    font-family: 'Montserrat';
    font-size: 30px;
    margin-bottom: 10px;

    @media (max-width: 640px) {
        font-size: 20px;
    }
`;

export const Subheader = styled.div`
    color: var(--newnewGray);
    font-family: 'Montserrat';
    font-size: 20px;
    margin-bottom: 20px;

    @media (max-width: 640px) {
        font-size: 20px;
    }
`;

export const PunkContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 0;
`;

export const PunkImage = styled.img`
    width: 300px;
    border-radius: 20px;
`;

export const PunkItem = styled.div`
    display: flex;
    @media (max-width: 640px) {
        flex-direction: column;
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

    :hover {
        color: var(--newWhite);
    }
`;

export const PunkDownload = styled.a`
    color: var(--newLightGray);
    font-family: 'Montserrat';
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    //padding: 5px;
    :hover {
        color: var(--newWhite);
    }
`;
