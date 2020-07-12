import { dbInterface, DbInterface } from './dbInterface';

export class Controller {
    dbInterface: DbInterface;

    constructor(dbInterface: DbInterface) {
        this.dbInterface = dbInterface;
    }

    async sendData() {
        const data = await this.dbInterface.getData('1');
        return { status: 200, data: data };
    }
}

export const controller = new Controller(dbInterface);