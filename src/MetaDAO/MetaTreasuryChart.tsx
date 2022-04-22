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
import dayjs from 'dayjs';
import { metaTreasuryChartOptions } from './chartsConfig';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export const MetaTreasuryChart = ({ dataSet }) => {
    const labels = dataSet.map((el) => dayjs(el.timestamp * 1000).format('D.MM'));
    console.log(labels);

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
            <MetaTreasuryChartXTitle>week</MetaTreasuryChartXTitle>
        </MetaTreasuryChartStyled>
    );
};
