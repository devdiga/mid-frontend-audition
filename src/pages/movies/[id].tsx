import {
  MovieDetailContainer,
  MovieDetailHeader
} from '@styles/movie-detail.styles';
import { MoviesContainer, MoviesContent } from '@styles/movies.styles';
import { Loading } from 'components/data-display/loading/loading.component';
import { MovieCard } from 'components/data-display/movie-card/movie-card.component';
import { MovieDetailCard } from 'components/data-display/movie-detail-card/movie-detail-card.component';
import { Button } from 'components/interactions/button/button.component';
import { IconButton } from 'components/interactions/icon-button/icon-button.component';
import { Input } from 'components/interactions/Input/input.component';
import { Movie } from 'data/models/movie.model';
import { SwApiResponse } from 'data/models/swapi-response.model';
import { CharacterService } from 'data/services/character.service';
import { MovieService } from 'data/services/movie.service';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderPageContainer } from 'styles/header-page.styles';

interface MoviesProps {
  initialData: Movie;
}

const Movies: React.FC<MoviesProps> = ({ initialData }) => {
  const [data, setData] = useState<null | Movie>(null);
  const [play, setPlay] = useState(false);

  const { t } = useTranslation('movies');

  const handlePay = () => {
    setPlay(true);
    let audio = document.querySelector('audio');
    if (audio) {
      audio.play();
      audio.currentTime = 0;
    }
  };

  useEffect(() => {
    if (initialData) {
      Promise.all(
        initialData.characters.map(characterUrl =>
          CharacterService.getCharacter(`${characterUrl}`.replace(/\D/g, ''))
        )
      ).then(characters => setData({ ...initialData, characters }));
    }
  }, [initialData]);

  return (
    <MovieDetailContainer>
      {play ? (
        <div />
      ) : (
        <>
          {data ? (
            <>
              <MovieDetailHeader>
                <IconButton icon={'fa-arrow-left'} />
                <h1>{t('title')}</h1>
              </MovieDetailHeader>
              <MovieDetailCard movie={data} />
              <Button onClick={handlePay}>{t('playButton')}</Button>
            </>
          ) : (
            <Loading title="Carregando Dados..." />
          )}
        </>
      )}
      <audio src="/audio/star-wars.mp3" autoPlay={play} />
    </MovieDetailContainer>
  );
};

export default Movies;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params
}) => {
  let initialData;
  try {
    if (!params?.id) {
      throw new Error('Param is required');
    }
    initialData = await MovieService.getMovie(`${params.id}`);
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'movieDetail',
        'common'
      ])),
      pageTitle: initialData?.title,
      initialData
    }
  };
};
