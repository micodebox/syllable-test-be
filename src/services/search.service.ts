import * as request from 'request-promise';

class SearchService {
  async search(q: string, page: number = 0, limit: number = 20) {
    const response = await request.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${q}&limit=${limit}&offset=${page * limit}`);
    return JSON.parse(response);
  }
}

export default new SearchService();
