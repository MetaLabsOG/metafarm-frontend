//@ts-nocheck
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';
import {
    MetaTreasuryChartStyled,
    ChartTitle,
    MetaTreasuryChartXTitle,
    MetaTreasuryChartContainer,
    MetaTreasuryChartYTitle,
} from './styled';
import { metaTreasuryChartOptions } from './chartsConfig';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const labels = [0, 1, 2, 3, 4, 5];

export const MetaTreasuryChart = ({ dataSet }) => {
    const data = {
        labels,
        datasets: [
            {
                data: labels.map((el, i) => (dataSet.length ? dataSet[i]?.cost?.usd : '')),
                borderColor: '#59f63c',
                borderWidth: 3,
            },
        ],
    };
    return (
        <MetaTreasuryChartStyled>
            <ChartTitle>MetaTreasury</ChartTitle>
            <MetaTreasuryChartContainer>
                <Line data={data} options={metaTreasuryChartOptions} />
            </MetaTreasuryChartContainer>
            <MetaTreasuryChartYTitle>$$</MetaTreasuryChartYTitle>
            <MetaTreasuryChartXTitle>weeks</MetaTreasuryChartXTitle>
        </MetaTreasuryChartStyled>
    );
};
