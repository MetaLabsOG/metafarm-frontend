export type ColorTheme = {
    green: string;
    white: string;
    lightGray: string;
    gray: string;
    darkGray: string;
    red: string;
    lightGreen: string;
    niceGreen: string;
    pureWhite: string;
    backgroundColor: string;
    newWhite: string;
    backgroundModal: string;
    newLightGray: string;
};

export type ColorThemed<T> = T & { theme: ColorTheme };

export const theme: ColorTheme = {
    green: '#05FF00',
    white: '#E0E0E0',
    lightGray: '#B6B9BD',
    gray: '#676767',
    darkGray: '#1F1F1F',
    red: '#E1636B',
    lightGreen: '#A1FF8E',
    niceGreen: '#8bff74',
    pureWhite: '#FFFFFF',

    backgroundColor: '#272727',

    newWhite: '#E2E2E2',
    backgroundModal: '#2C2C2C',
    newLightGray: '#A2A2A2',
};
