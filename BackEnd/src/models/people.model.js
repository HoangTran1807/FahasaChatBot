const sqlConfig = require('../config/database');

class People{
    constructor(){
        this.id = id;
        this.name = name;
        this.gender = _gender;
        this.dob = null;
        this.email = null;
        this.phone = null;
        this.username = null;
        this.password = null;
        this.group_id = null;
        this.locked = false;
        this.avatar = null;
        this.street = null;
        this.distric = null;
        this.province = null;
    }

    static async getAll(){
        return new Promise((resolve, reject) => {
            sqlConfig.query('SELECT * FROM People', (err, result) => {
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