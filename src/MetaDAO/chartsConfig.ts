export const assetsChartOptions = {
    layout: {
        padding: {
            top: 0,
            left: 20,
        },
    },
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            position: 'right',
            align: 'center',

            labels: {
                usePointStyle: true,
                boxWidth: 28,
                boxHeight: 28,
                padding: 30,
                pointStyle: 'rectRounded',
                color: 'white',
                font: {
                    size: 16,
                    family: 'Inter',
                },
            },
        },
    },
};

export const metaTreasuryChartOptions = {
    layout: {
        padding: {
            rigth: 20,
            top: 10,
        },
    },
    scales: {
        borderWidth: 2,
        x: {
            display: true,
            grid: {
                borderColor: 'white',
            },
            ticks: {
                display: true,
                color: '#59f63c',
                font: {
                    size: 15,
                    family: 'Korona One',
                    weight: 'bold',
                },
            },
        },
        y: {
            beginAtZero: true,
            type: 'linear',
            grid: {
                borderColor: 'white',
            },
            ticks: {
                callback: function (value: number) {
                    return Math.floor(value / 1000);
                },
                color: 'white',
                font: {
                    size: 16,
                    family: 'Korona One',
                    weight: 'bold',
                },
            },
        },
    },
    elements: {
        point: {
            backgroundColor: 'white',
            radius: 5,
            hoverBorderWidth: 7,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            displayColors: false,
            backgroundColor: '#05FF00',
            titleAlign: 'center',
            bodyColor: 'black',
            titleColor: 'black',
            titleFont: { family: 'Korona One', weight: 'bold', size: 14 },
            footerColor: 'black',
            footerFont: { family: 'Korona One', weight: 'bold', size: 14 },
            callbacks: {
                //@ts-ignore
                title: function (context) {
                    const indexPrevPrice = context[0].parsed.x - 1;
                    if (indexPrevPrice >= 0) {
                        const prevPrice = context[0].dataset.data[indexPrevPrice];
                        const currentPrice = context[0].dataset.data[indexPrevPrice + 1];
                        return `${Math.floor(((currentPrice - prevPrice) / currentPrice) * 100)}%`;
                    }

                    return `0%`;
                },
                //@ts-ignore
                footer: function (context) {
                    return `${context[0].formattedValue}$`;
                },
                label: function () {
                    return '';
                },
            },
        },
    },
};
