import { Character } from 'data/models/characters.model';
import { useRouter } from 'next/router';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CharacterCardCharacteristics,
  CharacterCardContainer,
  CharacterCardGroupContainer,
  CharacterCardInfo,
  CharacterCardHeightGroup,
  CharacterCardColor,
  CharacterCardCharacteristicsContainer,
  CharacterCardGenderText
} from './character-card.styles';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { t } = useTranslation('characters');
  const { push } = useRouter();

  const isColorValid = (color = '') => {
    const element = document.createElement('div');
    element.style.color = color;
    const isValid = !!element.style.color;
    element.remove();
    return isValid;
  };

  return (
    <CharacterCardContainer
      onClick={() => push(`/characters/${character.url.replace(/\D/g, '')}`)}
    >
      <CharacterCardInfo>
        <strong>{t('characterCard.name')}</strong>
        <span>{character.name}</span>
      </CharacterCardInfo>

      <CharacterCardGroupContainer>
        <CharacterCardInfo>
          <strong>{t('characterCard.gender')}</strong>
          <CharacterCardGenderText>
            {t(`characterCard.genders.${character.gender}`)}
          </CharacterCardGenderText>
        </CharacterCardInfo>

        <CharacterCardInfo>
          <strong style={{ whiteSpace: 'nowrap' }}>
            {t('characterCard.birthDate')}
          </strong>
          <span>
            {character.birth_year === 'unknown'
              ? t(`characterCard.${character.birth_year}`)
              : character.birth_year}
          </span>
        </CharacterCardInfo>
      </CharacterCardGroupContainer>

      <div style={{ width: '100%' }}>
        <strong>Características</strong>

        <CharacterCardHeightGroup>
          <div>
            <i className="fa fa-arrows-v" />
            {character.height === 'unknown' ? (
              <small>{t(`characterCard.${character.height}`)}</small>
            ) : (
              <small>{character.height} cm</small>
            )}
          </div>
          <div>
            <i className="fa fa-balance-scale" />
            {character.mass === 'unknown' ? (
              <small>{t(`characterCard.${character.mass}`)}</small>
            ) : (
              <small>{character.mass.replace(',', '')} kg</small>
            )}
          </div>
        </CharacterCardHeightGroup>

        <CharacterCardCharacteristicsContainer>
          <CharacterCardCharacteristics>
            <strong>{t('characterCard.hair')}</strong>
            {isColorValid(character.hair_color.split(',')[0]) ? (
              <CharacterCardColor color={character.hair_color.split(',')[0]} />
            ) : (
              <i className="fa fa-ban" />
            )}
          </CharacterCardCharacteristics>
          <CharacterCardCharacteristics>
            <strong>{t('characterCard.skin')}</strong>
            {isColorValid(character.skin_color.split(',')[0]) ? (
              <CharacterCardColor color={character.skin_color.split(',')[0]} />
            ) : (
              <i className="fa fa-ban" />
            )}
          </CharacterCardCharacteristics>
          <CharacterCardCharacteristics>
            <strong>{t('characterCard.eye')}</strong>
            {isColorValid(character.eye_color.split('characterCard.,')[0]) ? (
              <CharacterCardColor
                color={character.eye_color.split('characterCard.,')[0]}
              />
            ) : (
              <i className="fa fa-ban" />
            )}
          </CharacterCardCharacteristics>
        </CharacterCardCharacteristicsContainer>
      </div>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
