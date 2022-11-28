import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/interactions/button/button.component';
import Logo from '@images/logo.svg';

import {
  PresentationContainer,
  PresentationLogo,
  PresentationContent,
  PresentationButton
} from './presentation.styles';

interface PresentationProps {
  onStart: () => void;
  onStop: () => void;
  title: string;
  episode: string;
  opening: string[];
}

export const Presentation: React.FC<PresentationProps> = ({
  onStart,
  onStop,
  title,
  episode,
  opening = []
}) => {
  const { t } = useTranslation();
  const [play, setPlay] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handlePay = () => {
    setPlay(true);
    let audio = document.querySelector('audio');

    onStart();

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
        onStop();
      }, 88000)
    );
  };

  return (
    <>
      {play ? (
        <PresentationContainer>
          <PresentationLogo play={play ? 1 : 0}>
            <Image src={Logo} alt="Star Wars" />
          </PresentationLogo>

          <PresentationContent play={play ? 1 : 0}>
            <div>
              <h2>{episode}</h2>
              <br />
              <h2>{title}</h2>
              <br />
              {opening.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </PresentationContent>
        </PresentationContainer>
      ) : (
        <PresentationButton>
          <Button onClick={handlePay}>{t('playButton')}</Button>
        </PresentationButton>
      )}
      <audio src="/audio/star-wars.mp3" autoPlay={play} />
    </>
  );
};
