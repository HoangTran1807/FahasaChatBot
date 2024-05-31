const Order = require('../../models/order.model');

class OrderController{
    static async getAll(req, res) {
        try {
            const orders = await Order.getAll();
            if (!orders) {
                return res.status(404).json({ message: 'Orders not found' });
            }
            return res.status(200).json(orders);
        } catch (error) {
            console.error(`Error occurred while fetching all orders: ${error}`);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getById(req, res) {
        try {
            const order = await Order.getById(req.params.id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            return res.status(200).json(order);
        } catch (error) {
            console.error(`Error occurred while fetching order by id: ${error}`);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getByUserId(req, res) {
        try {
            const order = await Order.getByUserId(req.params.userId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            return res.status(200).json(order);
        } catch (error) {
            console.error(`Error occurred while fetching order by userId: ${error}`);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = OrderController;