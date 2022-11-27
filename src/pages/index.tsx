import { useState } from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import Logo from '@images/logo.svg';
import {
  HomeContainer,
  HomeContainerPresentationContainer
} from '@styles/home.styles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Presentation } from 'components/data-display/presentation/presentation.component';

const Home = () => {
  const { t } = useTranslation('home');
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started && (
        <HomeContainer>
          <Image src={Logo} alt="Star Wars" />
        </HomeContainer>
      )}
      <HomeContainerPresentationContainer>
        <Presentation
          onStart={() => setStarted(true)}
          onStop={() => setStarted(false)}
          title={t('title')}
          episode={t('episode')}
          opening={[t('paragraph1'), t('paragraph2'), t('paragraph3')]}
        />
      </HomeContainerPresentationContainer>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['home', 'common'])),
      pageTitle: 'homeTitle'
    }
  };
};
