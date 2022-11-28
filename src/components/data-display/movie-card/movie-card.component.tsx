import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Movie } from 'data/models/movie.model';
import { useDateFormat } from 'hooks/date-format.hook';

import { MovieCardContainer, MovieCardInfo } from './movie-card.styles';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { t } = useTranslation('movies');
  const { format } = useDateFormat();
  const { push } = useRouter();

  return (
    <MovieCardContainer
      onClick={() => push(`/movies/${movie.url.replace(/\D/g, '')}`)}
    >
      <MovieCardInfo>
        <strong>{t('movieCard.title')}</strong>
        <span>{movie.title}</span>
      </MovieCardInfo>

      <MovieCardInfo>
        <strong>{t('movieCard.episode')}</strong>
        <span>#{movie.episode_id}</span>
      </MovieCardInfo>
      <MovieCardInfo>
        <strong>{t('movieCard.date')}</strong>
        <span>{format(movie.release_date)}</span>
      </MovieCardInfo>

      <MovieCardInfo>
        <strong>{t('movieCard.director')}</strong>
        <span>{movie.director}</span>
      </MovieCardInfo>

      <MovieCardInfo>
        <strong>{t('movieCard.producer')}</strong>
        {movie.producer
          .trim()
          .split(',')
          .map(producer => (
            <span key={producer}>{producer}</span>
          ))}
      </MovieCardInfo>
    </MovieCardContainer>
  );
};
