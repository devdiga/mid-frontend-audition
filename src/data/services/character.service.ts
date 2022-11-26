import axios from 'axios';
import { Character } from 'data/models/characters.model';
import { SwApiResponse } from 'data/models/swapi-response.model';

export const CharacterService = {
  async getCharacters({ url, search }: { url?: string; search?: string }) {
    const { data } = await axios.get<SwApiResponse<Character>>(
      url || 'https://swapi.dev/api/people',
      { params: search ? { search } : {} }
    );
    return data;
  },

  async getCharacter(characterId: string) {
    const { data } = await axios.get<Character>(
      `https://swapi.dev/api/people/${characterId}`
    );
    return data;
  }
};
