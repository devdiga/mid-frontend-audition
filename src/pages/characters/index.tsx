import {
  CharactersContainer,
  CharactersContent
} from '@styles/characters.styles';
import { CharacterCard } from 'components/data-display/character-card/character-card.component';
import { Button } from 'components/interactions/button/button.component';
import { Input } from 'components/interactions/Input/input.component';
import { Character } from 'data/models/characters.model';
import { SwApiResponse } from 'data/models/swapi-response.model';
import { CharacterService } from 'data/services/character.service';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderPageContainer } from 'styles/header-page.styles';

interface CharactersProps {
  initialData: SwApiResponse<Character>;
}

const Characters: React.FC<CharactersProps> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const { t } = useTranslation('characters');

  const handleNextPage = async () => {
    setNextPageLoading(true);
    try {
      const nextPageData = await CharacterService.getCharacters({
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
      const searchData = await CharacterService.getCharacters({
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
    <CharactersContainer>
      <HeaderPageContainer>
        <h1>{t('title')}</h1>
        <Input
          placeholder={t('search')}
          onChange={handleSearch}
          loading={searchLoading}
        />
      </HeaderPageContainer>
      <CharactersContent>
        {data?.results?.map(character => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </CharactersContent>
      {!data?.results?.length && <p>{t('noData')}</p>}

      {data.next ? (
        <Button onClick={handleNextPage} loading={nextPageLoading}>
          {t('nextPageButton')}
        </Button>
      ) : (
        <>
          {!!data?.results?.length && (
            <small style={{ borderTop: '1px solid' }}>{t('finalList')}</small>
          )}
        </>
      )}
    </CharactersContainer>
  );
};

export default Characters;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let initialData;
  try {
    initialData = await CharacterService.getCharacters({});
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'characters',
        'common'
      ])),
      pageTitle: 'charactersTitle',
      initialData
    }
  };
};