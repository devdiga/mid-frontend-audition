import axios from 'axios';
import { Movie } from 'data/models/movie.model';
import { SwApiResponse } from 'data/models/swapi-response.model';

export const MovieService = {
  async getMovies({ url, search }: { url?: string; search?: string }) {
    const { data } = await axios.get<SwApiResponse<Movie>>(
      url || 'https://swapi.dev/api/films',
      { params: search ? { search } : {} }
    );
    return data;
  },

  async getMovie(movieId: string) {
    const { data } = await axios.get<Movie>(
      `https://swapi.dev/api/films/${movieId}`
    );
    return data;
  }
};
