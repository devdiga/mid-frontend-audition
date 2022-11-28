import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/interactions/button/button.component';
import { ROMAN } from 'data/constants/roman.constant';
import { Character } from 'data/models/characters.model';
import { Movie } from 'data/models/movie.model';
import { CharacterService } from 'data/services/character.service';
import { useDateFormat } from 'hooks/date-format.hook';

import {
  MovieDetailCardContainer,
  MovieDetailCharactersContainer,
  MovieDetailProducerContainer
} from './movie-detail-card.styles';
import { toast } from 'react-toastify';

interface MovieDetailCardProps {
  movie: Movie;
  castUrl: Character[];
}

export const MovieDetailCard: React.FC<MovieDetailCardProps> = ({
  movie,
  castUrl
}) => {
  const [cast, setCast] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation('movieDetail');
  const { format } = useDateFormat();
  const { push } = useRouter();

  const handleSelectCharacter = (characterUrl: string) => {
    push(`/characters/${characterUrl.replace(/\D/g, '')}`);
  };

  const getMovieCast = async () => {
    setLoading(true);
    try {
      const characters: Character[] = await Promise.all(
        castUrl.map(characterUrl =>
          CharacterService.getCharacter(`${characterUrl}`.replace(/\D/g, ''))
        )
      );
      setCast(characters);
    } catch (err) {
      toast.error('defaultMessage');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieDetailCardContainer>
      <p>
        {t('movieDetailCard.episode')} {ROMAN[movie.episode_id - 1]}
      </p>
      <h2>{movie.title}</h2>
      <hr />

      <p>{movie.opening_crawl}</p>

      <div style={{ textAlign: 'right', width: '100%' }}>
        <p>{format(movie.release_date)}</p>
      </div>

      <strong>
        <legend>{t('movieDetailCard.characters')}</legend>
      </strong>
      <MovieDetailCharactersContainer>
        {cast.map(character => (
          <Button
            key={character?.name}
            variant="text"
            onClick={() => handleSelectCharacter(character.url)}
          >
            {character?.name}
          </Button>
        ))}
        {!cast.length && (
          <Button variant="text" onClick={getMovieCast} loading={loading}>
            {t('movieDetailCard.seeCast')}
          </Button>
        )}
      </MovieDetailCharactersContainer>

      <br />

      <MovieDetailProducerContainer>
        <div>
          <strong>
            <legend>{t('movieDetailCard.producer')}</legend>
          </strong>
          <p>{movie.producer}</p>
        </div>
        <div>
          <strong>
            <legend>{t('movieDetailCard.director')}</legend>
          </strong>
          <p>{movie.director}</p>
        </div>
      </MovieDetailProducerContainer>
    </MovieDetailCardContainer>
  );
};
