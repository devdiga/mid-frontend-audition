import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global/global.styles';
import { darkTheme, lightTheme } from 'styles/global/theme.styles';
import { AppContainer } from 'styles/pages/_app.styles';
import useDarkMode from 'use-dark-mode';

const App = ({ Component, pageProps }: AppProps) => {
  const darkmode = useDarkMode(true);

  return (
    <ThemeProvider theme={darkmode.value ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
