const Discount = require("../../models/discount.model");

class DiscountController {
    static async getAll(req, res) {
        try {
            const discounts = await Discount.getAll();
            if (discounts != null) {
                const data = {
                    message: "Success",
                    status: 200,
                    data: discounts
                }
                res.json(data);
            } else {
                res.status(404).json({ message: "No discount found" });
            }
        } catch (error) {
            console.error(`Error occurred while fetching all discount: ${error}`);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getById(req, res) {
        const { id } = req.query;
        try {
            const discount = await Discount.getById(id);
            if (discount != null) {
                const data = {
                    message: "Success",
                    status: 200,
                    data: discount
                }
                res.json(data);
            } else {
                res.status(404).json({ message: "No discount found" });
            }
        } catch (error) {
            console.error(`Error occurred while fetching discount by id: ${error}`);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getUseAbleDiscount(req, res) {
        try {
            const discount = await Discount.getUseAbleDiscount();
            if (discount != null) {
                const data = {
                    message: "Success",
                    status: 200,
                    data: discount
                }
                res.json(data);
            } else {
                res.status(404).json({ message: "No discount found" });
            }
        } catch (error) {
            console.error(`Error occurred while fetching discount by id: ${error}`);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = DiscountController;