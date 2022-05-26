import styled from 'styled-components';

export const MetaDAOContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    @media (max-width: 640px) {
        margin-top: 0px;
    }
`;

export const WalletInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    font-size: 20px;
`;

export const Wallet = styled.a`
    font-size: 16px;
    margin-top: 20px;
    font-weight: 200;
    font-family: 'Inter';
    color: #59f63c;
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
    flex-wrap: wrap;
    width: 100%;
    height: 25%;
    justify-content: flex-start;
    margin-right: 40px;
    margin-bottom: 60px;
    @media (max-width: 640px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const MetaTreasuryChartStyled = styled.div`
    width: 50%;
    height: 100%;
    margin-right: 100px;
    position: relative;
    padding-right: 60px;
    @media (max-width: 640px) {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 30%;
    }
`;

export const MetaTreasuryChartContainer = styled.div`
    width: 90%;
    margin-top: 30px;
`;

export const MetaTreasuryChartXTitle = styled.div`
    position: absolute;
    right: 10px;
    bottom: 26%;
    font-size: 16px;
    @media (max-width: 640px) {
        bottom: 20%;
        left: 90%;
    }
`;

export const MetaTreasuryChartYTitle = styled.div`
    position: absolute;
    top: 10%;
    left: 4%;
    @media (max-width: 640px) {
        top: 14%;
        left: 9%;
    }
`;

export const ChartTitle = styled.div`
    color: white;
    font-size: 20px;
`;

export const AssetsChartStyled = styled.div`
    height: 100%;
    width: 25%;
    position: relative;
    @media (max-width: 640px) {
        padding: 0;
        margin: 0;
        width: 75%;
        height: 30%;
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
    color: #59f63c;
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

export const Info = styled.div`
    font-size: 16;
    font-family: 'Inter';
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 10px;
`;

export const LegendValues = styled.div`
    position: absolute;
    left: 123%;
    top: 20%;
    @media (max-width: 640px) {
        left: 100%;
        top: 40%;
    }
`;

export const Fail = styled.div`
    margin: 0 auto;
    font-size: 20px;
`;
