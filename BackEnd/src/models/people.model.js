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
        const query = 'SELECT id, name, gender, Email, username FROM People';
        const peoples = await sqlConfig.query(query);
        if(peoples.recordset.length === 0) return null;
        return peoples.recordset;
    }

    static async getById(id){
        const query =  `SELECT * FROM People WHERE id = ${id}`;
        const people = await sqlConfig.query(query);
        if(people.recordset.length === 0) return null;
        return people.recordset;

    }


}

module.exports = People;