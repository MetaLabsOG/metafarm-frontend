import styled from 'styled-components';

export const MetaDAOContainer = styled.div`
    width: 90%;
    margin-top: 40px;
`;

export const WalletInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const Header = styled.div`
    color: var(--green);
    font-family: 'Montserrat';
    font-size: 30px;

    @media (max-width: 640px) {
        font-size: 20px;
    }
`;

export const Wallet = styled.a`
    font-size: 16px;
    margin-top: 20px;
    font-weight: 200;
    font-family: 'Montserrat';
    color: var(--green);
    text-overflow: ellipsis;
    width: 400px;
    overflow: hidden;
    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const MetaTreasury = styled.div`
    margin-top: 60px;
    color: white;
    display: flex;
    align-items: baseline;
`;

export const MetaTreasuryBalance = styled.div`
    font-size: 30px;
`;

export const MetaTreasuryText = styled.div`
    font-size: 16px;
`;

export const Charts = styled.div`
    display: flex;
    margin-top: 50px;
    width: 100%;
    justify-content: flex-start;
    @media (max-width: 640px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const MetaTreasuryChartStyled = styled.div`
    width: 50%;
    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const MetaTreasuryChartContainer = styled.div`
    width: 90%;
`;

export const MetaTreasuryChartXTitle = styled.div`
    margin-left: 10px;
    font-size: 16px;
`;

export const MetaTreasuryChartYTitle = styled.div`
    margin-top: 15px;
    margin-left: 15px;
`;

export const ChartTitle = styled.div`
    color: white;
    font-size: 20px;
    margin-bottom: 30px;
`;

export const AssetsChartStyled = styled.div`
    width: 50%;
    @media (max-width: 640px) {
        width: 100%;
        margin-bottom: 50px;
    }
`;

export const NFTListContainer = styled.div`
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    @media (max-width: 640px) {
        margin-top: 20px;
    }
`;

export const NFTCard = styled.div`
    border-radius: 16px;
    border: 0.91px solid #3d3d3d;
    width: 300px;
    height: 400px;
    margin-bottom: 50px;
    margin-right: 35px;
`;

export const NFTCardInfo = styled.div`
    display: flex;
    height: 35%;
    flex-direction: column;
    padding: 0 26px 30px 26px;
    align-items: flex-start;
    text-decoration: none;
    color: var(--green);
`;

export const Nft = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 70%;
    border-radius: 16px 16px 0 0;
`;

export const NftPrice = styled.div`
    margin-top: 10px;
`;

export const NftName = styled.div`
    color: white;
    margin-top: 10px;
`;

export const NftWeekPriceChange = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

export const NFtPriceValue = styled.div`
    margin: 5px;
`;

export const Fail = styled.div`
    margin: 0 auto;
    font-size: 20px;
`;

export const Subtext = styled.div`
    color: var(--gray);
    font-size: 16px;
`;

export const Features = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const FeatureBlock = styled.div`
    width: 40%;
    margin-right: 50px;
    @media (max-width: 640px) {
        width: 100%;
    }
`;
