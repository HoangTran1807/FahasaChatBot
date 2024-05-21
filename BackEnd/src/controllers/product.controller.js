const Product = require('../models/product.model');

const getAll = async (req, res) => {
    try {
        const product = await Product.getAll();
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.getById(id);
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getByName = async (req, res) => {
    try {
        const name = req.params.name;
        const product = await Product.getByName(name);
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getByAuthorID = async (req, res) => {
    try{
        const author_id = req.params.author_id;
        const products = await Product.getByAuthorID(author_id);
        res.json(products)
    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = {
    getAll,
    getById,
    getByName,
    getByAuthorID
}
