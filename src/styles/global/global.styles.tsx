import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  body {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: #71abf7;
    font-family: 'Poppins', sans-serif;
    background-image: ${({ theme }) =>
      `url(${theme.colors.background.image})`} ;
    background-position: center;
    background-size: cover;
  }

  html {
    overflow: auto;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
