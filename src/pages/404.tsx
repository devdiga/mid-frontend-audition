import React from 'react';
import Head from 'next/head';
import { Button } from 'components/interactions/button/button.component';
import { NotFoundContainer } from '@styles/404.styles';
import { useRouter } from 'next/router';

const NotFoundError = () => {
  const { push } = useRouter();
  return (
    <NotFoundContainer>
      <Head>
        <title>Not Found | Star Wars</title>
      </Head>
      <h1>404</h1>
      <p>you lost your own way my son!</p>
      <Button onClick={() => push('/')}>Come back home</Button>
    </NotFoundContainer>
  );
};

export default NotFoundError;
