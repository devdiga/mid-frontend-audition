import { useCallback, useState } from 'react';
import { Character } from 'data/models/characters.model';
import { Movie } from 'data/models/movie.model';
import { useTranslation } from 'react-i18next';

export const useDashboardChartsFormat = (
  characters: Character[] = [],
  movies: Movie[] = []
) => {
  const { t } = useTranslation('dashboard');

  const [moviesCastData, setMoviesCastData] = useState({
    labels: [] as string[],
    castLength: {
      data: [] as number[],
      backgroundColor: '#e35241'
    }
  });
  const [movieAppearancesData, setMovieAppearancesData] = useState({
    labels: [] as string[],
    appearancesLength: {
      data: [] as number[],
      backgroundColor: '#0949da'
    }
  });
  const [heightAndMassData, setHeightAndMassData] = useState({
    labels: [] as string[],
    height: {
      label: t('height'),
      data: [] as number[],
      backgroundColor: '#0949da',
      borderColor: '#0949da'
    },
    weight: {
      label: t('weight'),
      data: [] as number[],
      backgroundColor: '#e35241',
      borderColor: '#e35241'
    }
  });
  const [genderData, setGenderData] = useState([0, 0, 0, 0]);

  const movieAppearancesDataFormat = (character: Character) => {
    setMovieAppearancesData(prev => ({
      labels: [...prev.labels, character.name],
      appearancesLength: {
        ...prev.appearancesLength,
        data: [...prev.appearancesLength.data, character.films.length]
      }
    }));
  };

  const heightAndMassDataFormat = (character: Character) => {
    if (character.height !== 'unknown' && character.mass !== 'unknown') {
      setHeightAndMassData(prev => ({
        labels: [...prev.labels, character.name],
        height: {
          ...prev.height,
          data: [
            ...prev.height.data,
            Number(character.height.replace(/\D/g, ''))
          ]
        },
        weight: {
          ...prev.weight,
          data: [...prev.weight.data, Number(character.mass.replace(/\D/g, ''))]
        }
      }));
    }
  };

  const genderDataFormat = (character: Character) => {
    switch (character.gender) {
      case 'male':
        setGenderData(prev => {
          const temp = [...prev];
          temp[0] = temp[0] + 1;
          return temp;
        });
        break;
      case 'female':
        setGenderData(prev => {
          const temp = [...prev];
          temp[1] = temp[1] + 1;
          return temp;
        });
        break;
      case 'hermaphrodite':
        setGenderData(prev => {
          const temp = [...prev];
          temp[2] = temp[2] + 1;
          return temp;
        });
        break;
      default:
        setGenderData(prev => {
          const temp = [...prev];
          temp[3] = temp[3] + 1;
          return temp;
        });
    }
  };

  const moviesCastDataFormat = useCallback(() => {
    movies.forEach(movie => {
      setMoviesCastData(prev => ({
        labels: [...prev.labels, movie.title],
        castLength: {
          ...prev.castLength,
          data: [...prev.castLength.data, movie.characters.length]
        }
      }));
    });
  }, [movies]);

  const loadMoreCharacters = (newsCharacters: Character[]) => {
    newsCharacters.forEach(character => {
      heightAndMassDataFormat(character);
      genderDataFormat(character);
      movieAppearancesDataFormat(character);
    });
  };

  const main = useCallback(() => {
    characters.forEach(character => {
      heightAndMassDataFormat(character);
      genderDataFormat(character);
      movieAppearancesDataFormat(character);
    });
    moviesCastDataFormat();
  }, [characters, moviesCastDataFormat]);

  return {
    heightAndMassData,
    genderData,
    moviesCastData,
    movieAppearancesData,
    loadMoreCharacters,
    main
  };
};
