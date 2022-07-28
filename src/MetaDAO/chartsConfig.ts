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
            position: 'right' as const,
            align: 'center' as const,

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
        // TODO(qumeric): I was unable to get it through typescript checker
        // borderWidth: 2,
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
            type: 'linear' as const,
            grid: {
                borderColor: 'white',
            },
            ticks: {
                callback: function (value: string | number) {
                    if (typeof value == 'string') {
                        return parseFloat(value);
                    }
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
            mode: 'index' as const,
            intersect: false,
            displayColors: false,
            backgroundColor: '#05FF00',
            titleAlign: 'center' as const,
            bodyColor: 'black',
            titleColor: 'black',
            titleFont: { family: 'Korona One', weight: 'bold', size: 14 },
            footerColor: 'black',
            footerFont: { family: 'Korona One', weight: 'bold', size: 14 },
            callbacks: {
                title: function (context: any[]) {
                    const indexPrevPrice = context[0].parsed.x - 1;
                    if (indexPrevPrice >= 0) {
                        const prevPrice = context[0].dataset.data[indexPrevPrice];
                        const currentPrice = context[0].dataset.data[indexPrevPrice + 1];
                        return `${Math.floor(((currentPrice - prevPrice) / currentPrice) * 100)}%`;
                    }

                    return `0%`;
                },
                footer: function (context: any[]) {
                    return `${context[0].formattedValue}$`;
                },
                label: function () {
                    return '';
                },
            },
        },
    },
};
