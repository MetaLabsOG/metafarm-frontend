import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js';
import dayjs from 'dayjs';
import { TotalCost } from '../providers/apiProvider';
import {
    MetaTreasuryChartStyled,
    ChartTitle,
    MetaTreasuryChartXTitle,
    MetaTreasuryChartContainer,
    MetaTreasuryChartYTitle,
} from './styled';
import { metaTreasuryChartOptions } from './chartsConfig';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

export function MetaTreasuryChart({ dataset }: { dataset: TotalCost[] }) {
    const labels = dataset.map((element) => dayjs(element.timestamp * 1000).format('D.MM'));
    const data = {
        labels,
        datasets: [
            {
                data: labels.map((element, i) => (dataset.length > 0 ? dataset[i]?.cost?.usd : '')),
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
}
