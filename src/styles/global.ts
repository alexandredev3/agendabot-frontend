import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-background: #F0F0F7;
  --color-primary: #E83F5C;
  --color-primary-dark: #8E2642;
  --color-primary-darker: #D92A50;
  --color-secundary: #32264D;
  --color-secundary-dark: #281F3C;
  --color-title-in-primary: #FFFFFF;
  --color-text-in-primary: #D4C2FF;
  --color-text-title: #32264D;
  --color-text-complement: #9C98A6;
  --color-text-base: #6A6180;
  --color-line-in-white: #AFBDD1;
  --color-input-background: #FAFAFC;
  --color-button-text: #FFFFFF;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    background: var(--color-background);
    color: var(--color-text-base);
    -webkit-font-smoothing: antialiased;
}

body , input , button {
  font: 16px 'Poppins', sans-serif;
}


h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
}


button{
    cursor: pointer;
}

`;
