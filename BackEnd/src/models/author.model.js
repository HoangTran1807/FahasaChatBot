const sqlConfig = require("../config/database");

class Author {
  constructor() {
    this.id = id;
    this.name = null;
    this.avatar = null;
    this.description = null;
  }

  static async getAll() {
    const query = "SELECT id, name FROM Author";
    const authors = await sqlConfig.query(query);
    if (authors.recordset.length === 0) return null;
    return authors.recordset;
  }

  static async getById(id) {
    const query = `SELECT * FROM Author WHERE id = ${id}`;
    const author = await sqlConfig.query(query);
    console.log(author)
    return author.recordset;
  }

  static async getByName(name) {
    const query = `SELECT * FROM Author WHERE name like N'%${name}%'`;
    try {
      const author = await sqlConfig.query(query);
      if(author.recordset != null)
        return author.recordset;
    } catch (error) {
      console.error(`Error occurred while fetching author by name: ${error}`);
      return null;
    }
  }
}

module.exports = Author;
