import { Sequelize, DataTypes } from 'sequelize';

export class Models {
    sequelize: Sequelize;
    Data: any;

    constructor(sequelize: Sequelize) {
        this.sequelize = sequelize;

        if (!this.sequelize.authenticate()) {
            console.log("Failed to connect to database");
        }

        this.initData();
    }

    async initData() {
        this.Data = this.sequelize.define('Data', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            data: {
                type: DataTypes.STRING
            }
        });

        await this.Data.sync();

        if (!(await this.Data.findAll()).length) {
            await this.Data.create({
                data: "data from database"
            });
            await this.Data.create({
                data: "more data from database"
            });
            await this.Data.create({
                data: "even more data from database"
            });
        }
    }
}

export const models = new Models(new Sequelize({
    dialect: 'sqlite',
    storage: 'data.db'
}));