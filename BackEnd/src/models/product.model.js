const { query } = require("express");
const sqlConfig = require("../config/database");

class Product {
  constructor() {
    this.id = id;
    this.name = null;
    this.price = null;
    this.stockAvailable = null;
    this.supplier_id = null;
    this.author_id = null;
  }

  static async getAll() {
    const query =
      "SELECT id, name, price, stockAvailable, supplierid, authorid FROM Product";
    try {
      const products = await sqlConfig.query(query);
      return products.recordset;
    } catch (err) {
      console.error(`Error occurred while fetching all products: ${err}`);
      return null;
    }
  }

  static async getById(id) {
    query = `SELECT * FROM Product WHERE id = ${id}`;
    try {
      const product = sqlConfig.query(query);
      return product.recordset;
    } catch (err) {
      console.error(`Error occurred while fetching product by id: ${err}`);
      return null;
    }
  }

  static async getByName(name) {
    const query = `SELECT * FROM Product WHERE name like N'%${name}%'`;

    try {
      const product = sqlConfig.query(query);
      return product.recordset;
    } catch (err) {
      console.error(`Error occurred while fetching product by name: ${err}`);
      return null;
    }
  }

  static async getByAuthorID(authorID) {
    const query = `select id, name, price, stockAvailable, supplier_id,author_id from product where authorid = ${authorID}`;
    try {
      const products = await sqlConfig.query(query);
      return products.recordset;
    } catch (err) {
      console.error(
        `Error occurred while fetching product by authorID: ${err}`
      );
      return null;
    }
  }
}

module.exports = Product;
