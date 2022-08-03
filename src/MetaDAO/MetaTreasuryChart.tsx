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
import { TotalCost } from '../providers/apiProvider';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export const MetaTreasuryChart = ({ dataset }: { dataset: TotalCost[] }) => {
    const labels = dataset.map((el) => dayjs(el.timestamp * 1000).format('D.MM'));
    const data = {
        labels,
        datasets: [
            {
                data: labels.map((el, i) => (dataset.length ? dataset[i]?.cost?.usd : '')),
                borderColor: '#59f63c',
                borderWidth: 3,
            },
        ],
    };

    return (
        <MetaTreasuryChartStyled>
            <ChartTitle>MetaTreasury</ChartTitle>
            <MetaTreasuryChartYTitle>$$</MetaTreasuryChartYTitle>
            <MetaTreasuryChartContainer>
                <Line data={data} options={metaTreasuryChartOptions} />
            </MetaTreasuryChartContainer>
            <MetaTreasuryChartXTitle>week</MetaTreasuryChartXTitle>
        </MetaTreasuryChartStyled>
    );
};
