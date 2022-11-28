import React from 'react';
import Head from 'next/head';
import { Button } from 'components/interactions/button/button.component';
import { NotFoundContainer } from '@styles/404.styles';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const NotFoundError = () => {
  const { push } = useRouter();
  const { t } = useTranslation('404');

  return (
    <NotFoundContainer>
      <h1>404</h1>
      <p>{t('message')}</p>
      <Button onClick={() => push('/')}>{t('buttonTitle')}</Button>
    </NotFoundContainer>
  );
};

export default NotFoundError;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['404', 'common'])),
      pageTitle: 'notFoundTitle'
    }
  };
};
