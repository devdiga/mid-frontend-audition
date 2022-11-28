import axios from 'axios';

export const HomeWorldService = {
  async getHomeWorldName(url: string) {
    const { data } = await axios.get<{ name: string }>(url);
    return data.name;
  }
};
