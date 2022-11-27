import {
  MovieDetailContainer,
  MovieDetailHeader
} from '@styles/movie-detail.styles';
import { Loading } from 'components/data-display/loading/loading.component';
import { MovieDetailCard } from 'components/data-display/movie-detail-card/movie-detail-card.component';
import { Presentation } from 'components/data-display/presentation/presentation.component';
import { IconButton } from 'components/interactions/icon-button/icon-button.component';
import { ROMAN } from 'data/constants/roman.constant';
import { Movie } from 'data/models/movie.model';
import { CharacterService } from 'data/services/character.service';
import { MovieService } from 'data/services/movie.service';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MovieDetailProps {
  initialData: Movie;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ initialData }) => {
  const [data, setData] = useState<null | Movie>(null);
  const [started, setStarted] = useState(false);

  const { t } = useTranslation('movieDetail');
  const router = useRouter();

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
    <>
      {!started && (
        <MovieDetailContainer>
          {data ? (
            <>
              <MovieDetailHeader>
                <IconButton
                  icon={'fa-arrow-left'}
                  onClick={() => router.back()}
                />
                <h1>{t('title')}</h1>
              </MovieDetailHeader>
              <MovieDetailCard movie={data} />
            </>
          ) : (
            <Loading title="Carregando Dados..." />
          )}
        </MovieDetailContainer>
      )}
      {!!data && (
        <div style={{ marginBottom: '32px' }}>
          <Presentation
            onStart={() => setStarted(true)}
            onStop={() => setStarted(false)}
            title={data.title.toUpperCase()}
            episode={`EPISODE ${ROMAN[data.episode_id - 1]}`}
            opening={data.opening_crawl.split('\r\n\r')}
          />
        </div>
      )}
    </>
  );
};

export default MovieDetail;

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
