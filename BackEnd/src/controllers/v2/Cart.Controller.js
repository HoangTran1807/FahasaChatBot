const Cart = require("../../models/cart.model");

class CartController {
    static async getCardById(req, res) {
        const { id } = req.query;
        console.log(id);
        try {
            const card = await Cart.getCardById(id);
            if (card != null) {
                const data = {
                    message: "Success",
                    status: 200,
                    data: card
                }
                res.json(data);
            } else {
                res.status(404).json({ message: "No card found" });
            }
        } catch (error) {
            console.error(`Error occurred while fetching card by id: ${error}`);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async createCard(req, res) {

        const userid = req.body.userid;
        const productid = req.body.productid;
        const quantity = req.body.quantity;

        console.log(req.body);


        try {
            const card = await Cart.createCard(userid, productid, quantity);
            if (card === true) {
                const data = {
                    message: "Success",
                    status: 200,
                }
                res.json(data);
            } else {
                res.status(404).json({ message: "No card found" });
            }
        } catch (error) {
            console.error(`Error occurred while creating card: ${error}`);
            res.status(500).json({ message: "Internal server error" });
        }
    }

}

module.exports = CartController;
