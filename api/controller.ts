export class Controller {
    constructor() {

    }

    async sendData() {
        return { status: 200, data: "API data" };
    }
}

export const controller = new Controller();