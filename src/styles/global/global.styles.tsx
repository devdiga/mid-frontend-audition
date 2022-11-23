import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background};
  }

  html {
    overflow: auto;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Poppins', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
