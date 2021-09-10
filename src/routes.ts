import { Router } from 'express';

import SearchController from './controllers/search.ctrl';

const SearchRouter = Router();
SearchRouter.get('/', SearchController.searchImages);
export { SearchRouter };
