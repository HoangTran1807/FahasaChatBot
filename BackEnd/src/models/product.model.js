const sqlConfig = require("../config/database");

class Product {
  constructor() {
    this.id = id;
    this.name = null;
    this.price = null;
    this.soonrelease = false;
    this.stockAvailable = null;
    this.supplier_id = null;
    this.author_id = null;
    this.cover_id = null;
    this.description = null;
    this.amount = null;
    this.discount = null;
    this.publisher = null;
    this.brand = null;
    this.origin = null;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      sqlConfig.query("SELECT * FROM Product", (err, result) => {
        if (err) reject(err);
        resolve(result.recordset);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      sqlConfig.query(
        `SELECT * FROM Product WHERE id = ${id}`,
        (err, result) => {
          if (err) reject(err);
          resolve(result.recordset);
        }
      );
    });
  }

  static getByName(name) {
    const query = `SELECT * FROM Product WHERE name like N'%${name}%'`;
    console.log(query);
    return new Promise((resolve, reject) => {
      sqlConfig.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result.recordset);
      });
    });
  }

  static getByAuthorID(authorID){
    const query = `select * from product where authorid = ${authorID}`;
    return new Promise((resolve, reject) => {
        sqlConfig.query(query, (err, result) => {
          if (err) reject(err);
          resolve(result.recordset);
        });
      });
  }
}

module.exports = Product;