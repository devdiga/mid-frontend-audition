import { HomeContent, HomeLogo, HomeContainer } from '@styles/home.styles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Logo from '@images/logo.svg';
import { useState } from 'react';
import { Button } from 'components/interactions/button/button.component';
import { GetStaticProps } from 'next';

const Home = () => {
  const { t } = useTranslation('home');
  const [play, setPlay] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handlePay = () => {
    setPlay(true);
    let audio = document.querySelector('audio');
    if (audio) {
      audio.play();
      audio.currentTime = 0;
    }

    if (timer) {
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        setPlay(false);
      }, 88000)
    );
  };

  return (
    <HomeContainer>
      <HomeLogo play={play ? 1 : 0}>
        <Image src={Logo} alt="Star Wars" />
      </HomeLogo>

      <HomeContent play={play ? 1 : 0}>
        <div>
          <h2>{t('episode')}</h2>
          <br />
          <h2>{t('title')}</h2>
          <br />
          <p>{t('paragraph1')}</p>
          <br />
          <p>{t('paragraph2')}</p>
          <br />
          <p>{t('paragraph3')}</p>
        </div>
      </HomeContent>

      <audio
        src="https://raw.githubusercontent.com/glaucia86/sounds/master/starwars.mp3"
        autoPlay={play}
      />
      {!play && <Button onClick={handlePay}>{t('playButton')}</Button>}
    </HomeContainer>
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
