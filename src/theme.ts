// Color tokens — keep in sync with :root in src/css/index.css
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
    newWhite: string;
    backgroundModal: string;
    newLightGray: string;
    textPrimary: string;
    warning: string;
    success: string;
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
    newWhite: '#E2E2E2',
    backgroundModal: '#2C2C2C',
    newLightGray: '#A2A2A2',
    textPrimary: '#5cfc3c',
    warning: '#E8A317',
    success: '#42C93F',
};

// Breakpoints — use these instead of hardcoded px in media queries
export const breakpoints = {
    mobile: 700,
    tablet: 1120,
} as const;

export const media = {
    mobile: `@media (max-width: ${breakpoints.mobile}px)`,
    tablet: `@media (max-width: ${breakpoints.tablet}px)`,
} as const;
