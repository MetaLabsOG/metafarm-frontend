import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getAssets } from '../providers/apiProvider';
import { METAWALLET } from '../AppContext';
import { useQuery } from 'react-query';
import { Pie } from 'react-chartjs-2';
import { assetsChartOptions } from './chartsConfig';
import { ChartTitle, AssetsChartStyled } from './styled';
import { formatNumber } from '../common/lib';

ChartJS.register(ArcElement, Tooltip, Legend);

export const AssetsChart = () => {
    const assetsQuery = useQuery(['assets', METAWALLET], () => getAssets(METAWALLET));
    const dataset = assetsQuery.data ?? [];
    console.log('DATASET', dataset);

    const data = {
        labels: dataset.map(
            ({ ticker, amount, price }) => formatNumber(amount) + ' ' + ticker + ' ($' + formatNumber(price.usd) + ')'
        ),
        datasets: [
            {
                data: dataset.map(({ amount, price }) => amount * price.usd),
                backgroundColor: ['#027a00', '#59f63c', '#56CCF2', '#FBF33B', '#828282'],
                borderColor: ['#027a00', '#59f63c', '#56CCF2', '#FBF33B', '#828282'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <AssetsChartStyled>
            <ChartTitle>Assets</ChartTitle>
            <Pie data={data} options={assetsChartOptions} />
        </AssetsChartStyled>
    );
};
