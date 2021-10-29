'use strict'
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes';
import { connect } from './database/database';
import helmet from 'helmet';
import promBundle from 'express-prom-bundle';

const promMetrics =  promBundle({includeMethod: true});

connect();
const app = express();
app.use(helmet());
app.use(promMetrics);


//caso necessite criar uma lista de hosts permitidos.
//app.use(cors(
//  {
//    origin: 'https://hostname'
// }
//));

app.use(express.json());
app.use(routes)

export default app;
