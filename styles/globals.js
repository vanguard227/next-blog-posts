import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #845EC2;
  --color-primary-light: #FEF6FF;
  --color-primary-dark: #9B89B3;
  --color-primary-disabled: #BBA9D3;
  --color-secondary: #F5F4F0;
  --color-background: #FFFFFF;
  --color-title: #2f4f4f;
  --color-text: #202020;
  --color-hint: #909090;
}

html{
  box-sizing: border-box;
  background: var(--color-secondary);
  display:block;
  height: 100%;
  max-width: 720px;
  margin:0 auto;
  padding: 0;
}

body{
  background-color: var(--color-background);
  min-height: 100vh;
  padding: 1rem;
  margin-top: 0;
  font-family: Verdana;
}
`;