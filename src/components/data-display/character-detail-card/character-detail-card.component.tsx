import { Character } from 'data/models/characters.model';
import { useTranslation } from 'react-i18next';
import { CharacterCardInfo } from '../character-card/character-card.styles';
import {
  CharacterDetailCardContainer,
  CharacterDetailMoviesContainer
} from './character-detail-card.styles';

interface CharacterDetailCardProps {
  character: Character;
}
export const CharacterDetailCard: React.FC<CharacterDetailCardProps> = ({
  character
}) => {
  const { t } = useTranslation('characterDetail');

  return (
    <CharacterDetailCardContainer>
      <h2>{character.name}</h2>
      <hr />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <CharacterCardInfo>
          <strong>{t('characterDetailCard.gender')}</strong>
          <span>{t(`characterDetailCard.genders.${character.gender}`)}</span>
        </CharacterCardInfo>

        <CharacterCardInfo>
          <strong>{t('characterDetailCard.birthDate')}</strong>
          <span>
            {character.birth_year === 'unknown'
              ? t(`characterDetailCard.${character.birth_year}`)
              : character.birth_year}
          </span>
        </CharacterCardInfo>

        <CharacterCardInfo>
          <strong>{t('characterDetailCard.homeWorld')}</strong>
          <span>{character.homeworld}</span>
        </CharacterCardInfo>
      </div>

      <br />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <CharacterCardInfo>
          <strong>{t('characterDetailCard.height')}</strong>
          {character.height === 'unknown' ? (
            <small>{t(`characterDetailCard.${character.height}`)}</small>
          ) : (
            <small>{character.height} cm</small>
          )}
        </CharacterCardInfo>

        <CharacterCardInfo>
          <strong>{t('characterDetailCard.weight')}</strong>
          {character.mass === 'unknown' ? (
            <small>{t(`characterDetailCard.${character.mass}`)}</small>
          ) : (
            <small>{character.mass} kg</small>
          )}
        </CharacterCardInfo>

        <CharacterCardInfo>
          <strong>{t('characterDetailCard.hair')}</strong>
          <span>{character.hair_color}</span>
        </CharacterCardInfo>

        <CharacterCardInfo>
          <strong>{t('characterDetailCard.eye')}</strong>
          <span>{character.eye_color}</span>
        </CharacterCardInfo>

        <CharacterCardInfo>
          <strong>{t('characterDetailCard.skin')}</strong>
          <span>{character.skin_color}</span>
        </CharacterCardInfo>
      </div>

      <br />

      <strong>
        <legend>{t('characterDetailCard.movies')}</legend>
      </strong>
      <CharacterDetailMoviesContainer>
        {character.films.map(movie => (
          <p key={movie?.title}>{movie?.title}</p>
        ))}
      </CharacterDetailMoviesContainer>
    </CharacterDetailCardContainer>
  );
};
