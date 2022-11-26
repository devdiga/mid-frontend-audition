import { Button } from 'components/interactions/button/button.component';
import { ROMAN } from 'data/constants/roman.constant';
import { Movie } from 'data/models/movie.model';
import { useDateFormat } from 'hooks/date-format.hook';
import { useTranslation } from 'react-i18next';
import {
  MovieDetailCardContainer,
  MovieDetailCharactersContainer,
  MovieDetailProducerContainer
} from './movie-detail-card.styles';

interface MovieDetailCardProps {
  movie: Movie;
}

export const MovieDetailCard: React.FC<MovieDetailCardProps> = ({ movie }) => {
  const { t } = useTranslation('movieDetail');
  const { format } = useDateFormat();

  return (
    <MovieDetailCardContainer>
      <p>
        {t('episode')} {ROMAN[movie.episode_id - 1]}
      </p>
      <h2>{movie.title}</h2>
      <hr />
      <p>{movie.opening_crawl}</p>
      <div style={{ textAlign: 'right', width: '100%' }}>
        <p>{format(movie.release_date)}</p>
      </div>
      <strong>
        <legend>{t('characters')}</legend>
      </strong>
      <MovieDetailCharactersContainer>
        {movie.characters.map(character => (
          <p key={character?.name}>{character?.name}</p>
        ))}
      </MovieDetailCharactersContainer>

      <br />

      <MovieDetailProducerContainer>
        <div>
          <strong>
            <legend>{t('producer')}</legend>
          </strong>
          <p>{movie.producer}</p>
        </div>
        <div>
          <strong>
            <legend>{t('director')}</legend>
          </strong>
          <p>{movie.director}</p>
        </div>
      </MovieDetailProducerContainer>
    </MovieDetailCardContainer>
  );
};
