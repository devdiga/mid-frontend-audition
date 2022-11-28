import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/interactions/button/button.component';
import { Character } from 'data/models/characters.model';
import { Movie } from 'data/models/movie.model';
import { MovieService } from 'data/services/movie.service';

import { CharacterCardInfo } from '../character-card/character-card.styles';
import {
  CharacterDetailCardContainer,
  CharacterDetailCardInfoContainer,
  CharacterDetailMoviesContainer
} from './character-detail-card.styles';
import { toast } from 'react-toastify';

interface CharacterDetailCardProps {
  character: Character;
  filmsUrl: Movie[];
}
export const CharacterDetailCard: React.FC<CharacterDetailCardProps> = ({
  character,
  filmsUrl
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation('characterDetail');
  const { push } = useRouter();

  const handleSelectMovie = (movieUrl: string) => {
    push(`/movies/${movieUrl.replace(/\D/g, '')}`);
  };

  const getMovieAppearances = async () => {
    try {
      setLoading(true);
      const movieAppearances = await Promise.all(
        filmsUrl.map(filmUrl =>
          MovieService.getMovie(`${filmUrl}`.replace(/\D/g, ''))
        )
      );
      setMovies(movieAppearances);
    } catch (err) {
      toast.error('defaultMessage');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CharacterDetailCardContainer>
      <h2>{character.name}</h2>
      <hr />

      <CharacterDetailCardInfoContainer>
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
      </CharacterDetailCardInfoContainer>

      <br />

      <CharacterDetailCardInfoContainer>
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
      </CharacterDetailCardInfoContainer>

      <br />

      <strong>
        <legend>{t('characterDetailCard.movies')}</legend>
      </strong>
      <CharacterDetailMoviesContainer>
        {movies.map(movie => (
          <Button
            key={movie?.title}
            variant="text"
            onClick={() => handleSelectMovie(movie.url)}
          >
            {movie?.title}
          </Button>
        ))}
        {!movies.length && (
          <Button
            variant="text"
            onClick={getMovieAppearances}
            loading={loading}
          >
            {t('characterDetailCard.movieAppearances')}
          </Button>
        )}
      </CharacterDetailMoviesContainer>
    </CharacterDetailCardContainer>
  );
};
