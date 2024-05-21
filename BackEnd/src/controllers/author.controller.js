const Author = require('../models/author.model');

const getAll = async (req, res) => {
    try {
        const author = await Author.getAll();
        res.json(author);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const author = await Author.getById(id);
        res.json(author);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getByName = async (req, res) => {
    try {
        const name = req.params.name;
        const author = await Author.getByName(name);
        console.log(author)
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

