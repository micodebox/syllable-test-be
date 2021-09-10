import * as errorHandler from 'errorhandler';
import * as http from 'http';

import { app } from './app';

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log('HTTP server listening on port %d', app.get('port'));
});

export default server;
