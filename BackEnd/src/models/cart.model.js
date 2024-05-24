const sqlConfig = require("../config/database");

class Cart {
    static async getCardById(id) {
        const query = `SELECT * FROM Cart Where userid = ${id}`;
        try {
            const card = await sqlConfig.query(query);
            if (card.recordset.length === 0) return null;
            return card.recordset;
        } catch (error) {
            console.error(`Error occurred while fetching card by id: ${error}`);
            return null;
        }
    }

    static async createCard(userid, productid, quantity) {
        const query = `INSERT INTO Cart (userid, productid, Amount
        ) VALUES (${userid}, ${productid}, ${quantity})`;
        try {
            const card = await sqlConfig.query(query);
            console.log(card);
            if(card.rowsAffected[0] === 0) return false;
            return true;
        } catch (error) {
            console.error(`Error occurred while creating card: ${error}`);
            return null;
        }
    }

}

module.exports = Cart;



