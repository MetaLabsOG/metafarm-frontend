import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--background);
    width: 100%;
    height: 100%;
    color: var(--text-primary);
    font-family: 'Korona One';
    font-variant-numeric: tabular-nums;

    @media (max-width: 768px) {
      /* Ensure the body doesn't override the background image */
      background-color: transparent;
    }
  }

  /* Ensure html has proper height for background to repeat */
  html {
    height: 100%;
    min-height: 100vh;
  }

  /* Hide column headers on mobile */
  @media (max-width: 700px) {
    .desktop-only-header {
      display: none !important;
    }
  }
`;

export default GlobalStyle;
