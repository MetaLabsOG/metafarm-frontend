export const assetsChartOptions = {
    aspectRatio: 3,
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            position: 'right' as const,
            align: 'center' as const,

            labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded',
                color: 'white',
                font: {
                    size: 16,
                    family: 'Montserrat',
                },
            },
        },
    },
};

export const metaTreasuryChartOptions = {
    scales: {
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
                callback(value: string | number) {
                    if (typeof value === 'string') {
                        return Number.parseFloat(value);
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
                title(context: any[]) {
                    const indexPreviousPrice = context[0].parsed.x - 1;
                    if (indexPreviousPrice >= 0) {
                        const previousPrice = context[0].dataset.data[indexPreviousPrice];
                        const currentPrice = context[0].dataset.data[indexPreviousPrice + 1];
                        return `${Math.floor(((currentPrice - previousPrice) / currentPrice) * 100)}%`;
                    }

                    return `0%`;
                },
                footer(context: any[]) {
                    return `${context[0].formattedValue}$`;
                },
                label() {
                    return '';
                },
            },
        },
    },
};
