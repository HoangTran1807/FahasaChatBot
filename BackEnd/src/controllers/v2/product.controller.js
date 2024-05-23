const Product = require('../../models/product.model');

const getAll = async (req, res) => {
    try {
        console.log('get all products');
        const product = await Product.getAll();
        data = 
        {
            status: 200,
            message: 'Success',
            data: product
        }
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.query.id;
        console.log('get product by id', id);
        const product = await Product.getById(id);
        data = 
        {
            status: 200,
            message: 'Success',
            data: product
        }
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getByName = async (req, res) => {
    try {
        const name = req.query.name;
        console.log('get product by name', name);
        const product = await Product.getByName(name);
        const data = 
        {
            status: 200,
            message: 'Success',
            data: product
        }
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getByAuthorID = async (req, res) => {
    try{
        const author_id = req.query.author_id;
        console.log('get product by author id', author_id);
        const products = await Product.getByAuthorID(author_id);
        const data = 
        {
            status: 200,
            message: 'Success',
            data: products
        }

        res.json(data)
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
