import { Database } from 'sqlite3';

export class DbInterface {
    dbHandle: Database;

    constructor(dbHandle: Database) {
        this.dbHandle = dbHandle;
    }

    getData(id: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.dbHandle.get("SELECT * FROM data WHERE _id=?", [id], (err, row) => {
                if (!err) {
                    resolve(row.data);
                } else {
                    reject(err);
                }
            })
        })
    }
}

export const dbInterface = new DbInterface(new Database('data.db'));