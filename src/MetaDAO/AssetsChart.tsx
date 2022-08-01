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

    console.log(dataSet);

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
                data: dataSet?.map(({ amount, price }) => amount * price.usd),
                backgroundColor: ['#027a00', '#59f63c', '#56CCF2', '#FBF33B', '#828282'],
                borderColor: ['#027a00', '#59f63c', '#56CCF2', '#FBF33B', '#828282'],
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
                    <Info key={`${amount}${price}`}>
                        <div>{amount}</div>
                        <div>({Math.floor(amount * price.usd)}$)</div>
                    </Info>
                ))}
            </LegendValues>
        </AssetsChartStyled>
    );
};
