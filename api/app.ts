import express, { Express } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { Api } from './api';

export function App(api: Api): Express {
    const app = express();
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '../web')));
    app.use('/api', api.router);

    return app;
}