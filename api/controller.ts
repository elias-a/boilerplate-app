import { models, Models } from './models';

export class Controller {
    models: Models;

    constructor(models: Models) {
        this.models = models;
    }

    async sendData() {
        const data = await this.models.Data.findAll({
            attributes: ['id', 'data']
        });

        return { status: 200, data: data };
    }
}

export const controller = new Controller(models);