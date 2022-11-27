import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  MovieDetailContainer,
  MovieDetailHeader
} from '@styles/movie-detail.styles';
import { MovieDetailCard } from 'components/data-display/movie-detail-card/movie-detail-card.component';
import { Presentation } from 'components/data-display/presentation/presentation.component';
import { IconButton } from 'components/interactions/icon-button/icon-button.component';
import { ROMAN } from 'data/constants/roman.constant';
import { Movie } from 'data/models/movie.model';
import { MovieService } from 'data/services/movie.service';

interface MovieDetailProps {
  initialData: Movie;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ initialData }) => {
  const [started, setStarted] = useState(false);

  const { t } = useTranslation('movieDetail');
  const router = useRouter();

  return (
    <>
      {!started && (
        <MovieDetailContainer>
          <MovieDetailHeader>
            <IconButton icon={'fa-arrow-left'} onClick={() => router.back()} />
            <h1>{t('title')}</h1>
          </MovieDetailHeader>

          <MovieDetailCard
            movie={{ ...initialData, characters: [] }}
            castUrl={initialData.characters}
          />
        </MovieDetailContainer>
      )}
      <div style={{ marginBottom: '32px' }}>
        <Presentation
          onStart={() => setStarted(true)}
          onStop={() => setStarted(false)}
          title={initialData.title.toUpperCase()}
          episode={`EPISODE ${ROMAN[initialData.episode_id - 1]}`}
          opening={initialData.opening_crawl.split('\r\n\r')}
        />
      </div>
    </>
  );
};

export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params
}) => {
  try {
    if (!params?.id) {
      throw new Error('Param is required');
    }
    const initialData = await MovieService.getMovie(`${params.id}`);

    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', [
          'movieDetail',
          'common'
        ])),
        pageTitle: initialData?.title,
        noTranslate: true,
        initialData
      }
    };
  } catch (err) {
    return {
      props: {},
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
};
