const Author = require('../models/author.model');

const getAll = async (req, res) => {
    try {
        console.log('get all authors');
        const author = await Author.getAll();
        res.json(author);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.query.id;
        console.log('get author info by id', id);
        const author = await Author.getById(id);
        res.json(author);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getByName = async (req, res) => {
    try {
        const name = req.query.name;
        console.log('get author info by name', name);
        const author = await Author.getByName(name);
        res.json(author);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAll,
    getById,
    getByName
}

