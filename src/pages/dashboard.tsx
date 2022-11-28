import { DashboardContainer, DashboardContent } from '@styles/dashboard.styles';
import { BarChart } from 'components/data-display/charts/bar-chart/bar-chart.component';
import { LineChart } from 'components/data-display/charts/line-chart/line-chart.component';
import { PieChart } from 'components/data-display/charts/pie-chart/pie-chart.component';
import { Button } from 'components/interactions/button/button.component';
import { Character } from 'data/models/characters.model';
import { Movie } from 'data/models/movie.model';
import { SwApiResponse } from 'data/models/swapi-response.model';
import { CharacterService } from 'data/services/character.service';
import { MovieService } from 'data/services/movie.service';
import { useDashboardChartsFormat } from 'hooks/dashboard-charts-format.hook';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { HeaderPageContainer } from 'styles/header-page.styles';

interface DashboardProps {
  movies: SwApiResponse<Movie>;
  characters: SwApiResponse<Character>;
}

const Dashboard: React.FC<DashboardProps> = ({ movies, characters }) => {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation('dashboard');
  const {
    main,
    loadMoreCharacters,
    heightAndMassData,
    genderData,
    moviesCastData,
    movieAppearancesData
  } = useDashboardChartsFormat(characters.results, movies.results);

  if (!heightAndMassData?.labels?.length) {
    main();
  }

  const handleLoadMoreCharacters = async () => {
    setLoading(true);
    try {
      const loadedCharacters = await CharacterService.getCharacters({
        url: characters.next
      });
      loadMoreCharacters(loadedCharacters.results);
    } catch (err) {
      toast.error('defaultMessage');
    } finally {
      setLoading(false);
    }
  };
  return (
    <DashboardContainer>
      <HeaderPageContainer>
        <h1>{t('title')}</h1>
        {!!characters?.next && (
          <Button
            onClick={handleLoadMoreCharacters}
            loading={loading}
            style={{ width: 'auto', padding: '0 16px', marginLeft: 'auto' }}
          >
            {t('nextPageButton')}
          </Button>
        )}
      </HeaderPageContainer>

      <DashboardContent>
        {!!heightAndMassData && (
          <LineChart
            title={t('heightAndMassTitle')}
            labels={heightAndMassData.labels}
            datasets={[heightAndMassData.height, heightAndMassData.weight]}
          />
        )}

        {!!genderData && (
          <PieChart
            data={genderData}
            labels={[
              t('male'),
              t('female'),
              t('hermaphrodite'),
              t('undefined')
            ]}
            title={t('genderDiversity')}
          />
        )}

        {!!movieAppearancesData && (
          <BarChart
            title={t('movieAppearances')}
            labels={movieAppearancesData.labels}
            datasets={[movieAppearancesData.appearancesLength]}
            hasLegend={false}
          />
        )}

        {!!moviesCastData && (
          <BarChart
            title={t('moviesCastLength')}
            labels={moviesCastData.labels}
            datasets={[moviesCastData.castLength]}
            hasLegend={false}
          />
        )}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const movies = await MovieService.getMovies({});
    const characters = await CharacterService.getCharacters({});
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', [
          'dashboard',
          'common'
        ])),
        pageTitle: 'dashboardTitle',
        movies,
        characters
      }
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
};
