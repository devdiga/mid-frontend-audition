import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  CharacterDetailContainer,
  CharacterDetailHeader
} from '@styles/character-detail.styles';
import { CharacterDetailCard } from 'components/data-display/character-detail-card/character-detail-card.component';
import { IconButton } from 'components/interactions/icon-button/icon-button.component';
import { Character } from 'data/models/characters.model';
import { CharacterService } from 'data/services/character.service';
import { HomeWorldService } from 'data/services/home-world.service';

interface CharacterDetailProps {
  initialData: Character;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ initialData }) => {
  const { t } = useTranslation('characterDetail');
  const router = useRouter();

  return (
    <CharacterDetailContainer>
      <CharacterDetailHeader>
        <IconButton icon={'fa-arrow-left'} onClick={() => router.back()} />
        <h1>{t('title')}</h1>
      </CharacterDetailHeader>
      <CharacterDetailCard
        character={{ ...initialData, films: [] }}
        filmsUrl={initialData.films}
      />
    </CharacterDetailContainer>
  );
};

export default CharacterDetail;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params
}) => {
  try {
    if (!params?.id) {
      throw new Error('Param is required');
    }
    const initialData = await CharacterService.getCharacter(`${params.id}`);
    const homeworld = await HomeWorldService.getHomeWorldName(
      initialData.homeworld
    );

    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', [
          'characterDetail',
          'common'
        ])),
        pageTitle: initialData?.name,
        noTranslate: true,
        initialData: { ...initialData, homeworld }
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
