const sqlConfig = require('../config/database');

class People{
    constructor(){
        this.id = id;
        this.name = null;
        this.gender = null;
        this.dob = null;
        this.email = null;
        this.username = null;

    }

    static async getAll(){
        return new Promise((resolve, reject) => {
            sqlConfig.query('SELECT id, name, gender, gmail, username FROM People', (err, result) => {
                if(err) reject(err);
                resolve(result.recordset);
            });
        });
    }

    static getById(id){
        return new Promise((resolve, reject) => {
            sqlConfig.query(`SELECT * FROM People WHERE id = ${id}`, (err, result) => {
                if(err) reject(err);
                resolve(result.recordset);
            });
        });
    }


}

module.exports = People;