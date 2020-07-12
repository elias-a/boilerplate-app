import { Router } from 'express';
import { controller, Controller } from './controller';

export class Api {
    router: Router;
    controller: Controller;

    constructor(controller: Controller) {
        this.router = Router();
        this.controller = controller;

        this.router.get('/', async (_req, res) => {
            const { status, data } = await this.controller.sendData();
            res.status(status).send(data);
        });
    }
}

export const api = new Api(controller);