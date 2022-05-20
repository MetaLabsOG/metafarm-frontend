import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Mandinor';
    src: url('../fonts/Mandinor-Italian-FY-Regular.woff');
    src: url('../fonts/Mandinor-Italian-FY-Regular.woff2');
    src: url('../fonts/Mandinor.ttf');
}

@font-face {
  font-family: 'Montserrat';
  src: url('../fonts/Montserrat-VariableFont_wght.ttf');
}

@font-face {
    font-family: 'Inter';
    src: url('../fonts/Inter-Regular.woff');
    src: url('../fonts/Inter-Regular.woff2');
    src: url('../fonts/Inter-VariableFont_slnt\,wght.ttf');
}

@font-face {
    font-family: 'Korona One';
    src: url('../fonts/krona-one-v9-latin-regular.woff');
    src: url('../fonts/krona-one-v9-latin-regular.woff2');
    src: url('../fonts/KronaOne-Regular.ttf');
}
  
  body {
    background-color: #000;
    width: 100%;
    height: 100%;
    color: #5cfc3c;
    font-family: 'Korona One';
  }
`;

export default GlobalStyle;
