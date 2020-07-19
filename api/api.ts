import Router from 'koa-router';
import { controller, Controller } from './controller';

export class Api {
    router: Router;
    controller: Controller;

    constructor(controller: Controller) {
        this.router = new Router({
            prefix: '/api'
        });
        this.controller = controller;

        this.router.get('/get-data', async (ctx) => {
            const { status, result } = await this.controller.sendData();
            ctx.status = status;
            ctx.body = result;
        });

        this.router.post('/add-data', async (ctx) => {
            const { data } = ctx.request.body;
            const { status, result } = await this.controller.addData(data);
            ctx.status = status;
            ctx.body = result;
        });
    }
}

export const api = new Api(controller);