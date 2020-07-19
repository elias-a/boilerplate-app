import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import { Api } from './api';

export function App(api: Api): Koa {
    const app = new Koa();

    app.use(bodyParser());

    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.status = 500;
            ctx.message = err.message || "An error has occurred";
        }
    });

    app.use(api.router.routes()).use(api.router.allowedMethods());
    app.use(serve(path.join(__dirname, '../web')));

    return app;
}