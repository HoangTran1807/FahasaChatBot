const sqlConfig = require("../config/database");

class Discount {
    constructor() {
        this.code = id;
        this.title = null;
        this.value = null;
        this.type = null;
        
    }

    static async getAll() {
        const query = "SELECT * FROM Discount";
        try{
            const discounts = await sqlConfig.query(query);
            if (discounts.recordset.length === 0) return null;
            return discounts.recordset;
        } catch (error) {
            console.error(`Error occurred while fetching all discount: ${error}`);
            return null;
        }
    }

    static async getById(id) {
        const query = `SELECT * FROM Discount WHERE code = ${id}`;
        try {
            const discount = await sqlConfig.query(query);
            if (discounts.recordset.length === 0) return null;
            return discount.recordset;
        } catch (error) {
            console.error(`Error occurred while fetching discount by id: ${error}`);
            return null;
        }
    }

    static async getUseAbleDiscount() {
        const query = `select * from Discount as ds where ds.DateStart < GETDATE() and ds.DateExpired > GETDATE() and ds.Used < ds.LimitUsed`;
       try{
        const discount = await sqlConfig.query(query);
        if(discount.recordset.length === 0) return null;
        return discount.recordset;
       }
         catch (error) {
          console.error(`Not useable discount avalible: ${error}`);
          return null;
        }
    }



}

module.exports = Discount;