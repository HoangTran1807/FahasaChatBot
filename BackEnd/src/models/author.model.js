const sqlConfig = require("../config/database");

class Author {
  constructor() {
    this.id = id;
    this.name = null;
    this.avatar = null;
    this.description = null;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      sqlConfig.query("SELECT * FROM Author", (err, result) => {
        if (err) reject(err);
        resolve(result.recordset);
      });
    });
  }

  static getById(id) {
    const query = `SELECT * FROM Author WHERE id = ${id}`;
    try {
      return new Promise((resolve, reject) => {
        sqlConfig.query(
          query,
          (err, result) => {
            if (err) reject(err);
            resolve(result.recordset);
          }
        );
      });
    } catch (err) {
      console.log(err);
    }
  }

  static getByName(name) {
    const query = `SELECT * FROM Author WHERE name like N'%${name}%'`;
    console.log(query)
    return new Promise((resolve, reject) => {
        sqlConfig.query( query, (err, result) => {
            if(err) reject(err);
            resolve(result.recordset)
        });
    });
  }
}

module.exports = Author;
