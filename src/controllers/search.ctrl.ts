import { Request, Response } from 'express';
import { default as SearchService } from '../services/search.service';

class SearchController {
  async searchImages(req: Request, res: Response) {
    try {
      const { q = '', page = 0, size = 10 } = req.query;

      const response = await SearchService.search(q, page, size);

      const { data = [], pagination = {} } = response;

      res.json({
        success: true,
        data: data.map(image => ({
          id: image.id,
          url: image.images?.original?.url,
        })),
        pagination: {
          total: pagination.total_count,
          count: pagination.count,
          offset: pagination.offset,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch images',
      });
    }
  }
}

export default new SearchController();
