import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--background);
    width: 100%;
    height: 100%;
    color: #5cfc3c;
    font-family: 'Korona One';

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
`;

export default GlobalStyle;
