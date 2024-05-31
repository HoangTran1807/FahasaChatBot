const db = require('../config/database');

class Order{
    static async getAll() {
        try {
            const orders = await db.query("SELECT * FROM [Fahasa].[dbo].[Order]");
            if (orders.recordset.length === 0) return null;
            return orders.recordset;
        } catch (error) {
            console.error(`Error occurred while fetching all orders: ${error}`);
            return null;
        }
    }

    static async getById(id) {
        try {
            const order =  await db.query(`SELECT * FROM [Fahasa].[dbo].[Order] WHERE id = ${id}`);
            if (order.recordset.length === 0) return null;
            return order.recordset;
        } catch (error) {
            console.error(`Error occurred while fetching order by id: ${error}`);
            return null;
        }
    }

    static async getByUserId(userId) {
        try {
            const orders = await db.query(`SELECT * FROM [Fahasa].[dbo].[Order] WHERE Customerid = ${userId}`);
            if (orders.recordset.length === 0) return null;
            return orders.recordset;
        } catch (error) {
            console.error(`Error occurred while fetching order by userId: ${error}`);
            return null;
        }
    }
}

module.exports = Order;