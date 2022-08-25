export type ColorTheme = {
    green: string;
    white: string;
    lightGray: string;
    gray: string;
    darkGray: string;
    red: string;
    lightGreen: string;
};

export type ColorThemed<T> = T & { theme: ColorTheme };

export const theme: ColorTheme = {
    green: '#05FF00',
    white: '#E0E0E0',
    lightGray: '#B6B9BD',
    gray: '#676767',
    darkGray: '#1F1F1F',
    red: '#d0373a',
    lightGreen: '#A1FF8E',
};
