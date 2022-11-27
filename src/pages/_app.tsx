import Head from 'next/head';
import type { AppProps } from 'next/app';
import useDarkMode from 'use-dark-mode';
import { appWithTranslation, useTranslation } from 'next-i18next';

import { Footer } from 'components/surfaces/footer/footer.component';
import { Header } from 'components/surfaces/header/header.component';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global/global.styles';
import { darkTheme, lightTheme } from 'styles/global/theme.styles';
import { AppContainer } from 'styles/pages/_app.styles';

const App = ({ Component, pageProps }: AppProps) => {
  const darkmode = useDarkMode(true);
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>
          {pageProps?.noTranslate
            ? `${pageProps.pageTitle} | Star Wars`
            : `${t(`pageTitle.${pageProps.pageTitle}`)} | Star Wars`}
        </title>
      </Head>
      <ThemeProvider theme={darkmode.value ? darkTheme : lightTheme}>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
