import { MoviesContainer, MoviesContent } from '@styles/movies.styles';
import { MovieCard } from 'components/data-display/movie-card/movie-card.component';
import { Button } from 'components/interactions/button/button.component';
import { Input } from 'components/interactions/Input/input.component';
import { Movie } from 'data/models/movie.model';
import { SwApiResponse } from 'data/models/swapi-response.model';
import { MovieService } from 'data/services/movie.service';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderPageContainer } from 'styles/header-page.styles';

interface MoviesProps {
  initialData: SwApiResponse<Movie>;
}

const Movies: React.FC<MoviesProps> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const { t } = useTranslation('movies');

  const handleNextPage = async () => {
    setNextPageLoading(true);
    try {
      const nextPageData = await MovieService.getMovies({
        url: data.next
      });

      setData(prev => ({
        ...nextPageData,
        results: [...prev.results, ...nextPageData.results]
      }));
    } catch (err) {
      console.log(err);
    } finally {
      setNextPageLoading(false);
    }
  };

  const handleSearch = async (searchTerm: string) => {
    setSearchLoading(true);
    try {
      const searchData = await MovieService.getMovies({
        search: searchTerm
      });

      setData(searchData);
    } catch (err) {
      console.log(err);
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <MoviesContainer>
      <HeaderPageContainer>
        <h1>{t('title')}</h1>
        <Input
          placeholder={t('search')}
          onChange={handleSearch}
          loading={searchLoading}
        />
      </HeaderPageContainer>
      <MoviesContent>
        {data?.results?.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </MoviesContent>

      {!data?.results?.length && <p>{t('noData')}</p>}

      {data.next ? (
        <Button onClick={handleNextPage} loading={nextPageLoading}>
          {t('nextPageButton')}
        </Button>
      ) : (
        <small style={{ borderTop: '1px solid' }}>{t('finalList')}</small>
      )}
    </MoviesContainer>
  );
};

export default Movies;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let initialData;
  try {
    initialData = await MovieService.getMovies({});
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['movies', 'common'])),
      pageTitle: 'moviesTitle',
      initialData
    }
  };
};
