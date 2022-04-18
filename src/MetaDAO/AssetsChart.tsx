//@ts-nocheck
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getAssets } from '../providers/apiProvider';
import { METAWALLET } from '../AppContext';
import { useQuery } from 'react-query';
import { Pie } from 'react-chartjs-2';
import { assetsChartOptions } from './chartsConfig';
import { ChartTitle, AssetsChartStyled, Info, LegendValues } from './styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export const AssetsChart = (assets: any) => {
    const assetsQuery = useQuery(['assets', METAWALLET], () => getAssets(METAWALLET));

    const dataSet = assetsQuery.data ? assetsQuery.data : [];

    const data = {
        labels: dataSet.length ? dataSet?.map(({ ticker }) => ticker) : [],
        overrides: {
            plugins: {
                legend: {
                    positon: 'left',
                },
            },
        },
        datasets: [
            {
                data: dataSet?.map(({ amount }) => amount),
                backgroundColor: ['#027a00', '#59f63c', '#56CCF2'],
                borderColor: ['#027a00', '#59f63c', '#56CCF2'],
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
    };

    return (
        <AssetsChartStyled>
            <ChartTitle>Assets</ChartTitle>
            <Pie data={data} options={assetsChartOptions} />
            <LegendValues>
                {dataSet.map(({ amount, price }) => (
                    <Info>
                        <div>{amount}</div>
                        <div>({amount * price.usd}$)</div>
                    </Info>
                ))}
            </LegendValues>
        </AssetsChartStyled>
    );
};
