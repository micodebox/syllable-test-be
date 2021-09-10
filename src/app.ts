import * as dotenv from 'dotenv';
import * as express from 'express';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as lusca from 'lusca';
import * as cors from 'cors';
import * as expressValidator from 'express-validator';
import * as swaggerUI from 'swagger-ui-express';

import * as swaggerDocument from '../swagger.json';

dotenv.config({path: '.env' || '.env.example'});

// Create Express server
export const app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressValidator());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/ping', (req, res) => res.json({ success: true, message: 'Hello' }));

app.use((req: express.Request, resp: express.Response) => {
  resp.status(404).send({
    msg: 'Not Found!'
  });
});
