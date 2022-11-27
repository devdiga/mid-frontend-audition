import {
  CharacterDetailContainer,
  CharacterDetailHeader
} from '@styles/character-detail.styles';
import { CharacterDetailCard } from 'components/data-display/character-detail-card/character-detail-card.component';
import { Loading } from 'components/data-display/loading/loading.component';
import { IconButton } from 'components/interactions/icon-button/icon-button.component';
import { Character } from 'data/models/characters.model';
import { Movie } from 'data/models/movie.model';
import { CharacterService } from 'data/services/character.service';
import { HomeWorldService } from 'data/services/home-world.service';
import { MovieService } from 'data/services/movie.service';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CharacterDetailProps {
  initialData: Character;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ initialData }) => {
  const [data, setData] = useState<null | Character>(null);

  const { t } = useTranslation('characterDetail');
  const router = useRouter();

  useEffect(() => {
    if (initialData) {
      Promise.all([
        HomeWorldService.getHomeWorldName(initialData.homeworld),
        ...initialData.films.map(filmUrl =>
          MovieService.getMovie(`${filmUrl}`.replace(/\D/g, ''))
        )
      ])
        .then(result => ({ homeworld: result[0], films: result.slice(1) }))
        .then(({ homeworld, films }) =>
          setData({
            ...initialData,
            films: films as Movie[],
            homeworld
          })
        );
    }
  }, [initialData]);

  return (
    <CharacterDetailContainer>
      <CharacterDetailHeader>
        <IconButton icon={'fa-arrow-left'} onClick={() => router.back()} />
        <h1>{t('title')}</h1>
      </CharacterDetailHeader>
      {data ? (
        <CharacterDetailCard character={data} />
      ) : (
        <Loading title="Carregando Personagem" />
      )}
    </CharacterDetailContainer>
  );
};

export default CharacterDetail;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params
}) => {
  let initialData;
  try {
    if (!params?.id) {
      throw new Error('Param is required');
    }
    initialData = await CharacterService.getCharacter(`${params.id}`);
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'characterDetail',
        'common'
      ])),
      pageTitle: initialData?.name,
      initialData
    }
  };
};
