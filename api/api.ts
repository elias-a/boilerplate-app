import { Router } from 'express';
import { controller, Controller } from './controller';

export class Api {
    router: Router;
    controller: Controller;

    constructor(controller: Controller) {
        this.router = Router();
        this.controller = controller;

        this.router.get('/get-data', async (_req, res) => {
            const { status, result } = await this.controller.sendData();
            res.status(status).send(result);
        });

        this.router.post('/add-data', async (req, res) => {
            const { data } = req.body;
            const { status, result } = await this.controller.addData(data);
            res.status(status).send(result);
        });
    }
}

export const api = new Api(controller);