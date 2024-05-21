const People = require('../models/people.model');

const getAll = async (req, res) => {
    try {
        const people = await People.getAll();
        res.json(people);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const people = await People.getById(id);
        res.json(people);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAll,
    getById
}