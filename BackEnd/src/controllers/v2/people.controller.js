const People = require('../../models/people.model');

const getAll = async (req, res) => {
    try {
        console.log('get all people');
        const people = await People.getAll();
        data = 
        {
            status: 200,
            message: 'Success',
            data: people
        }
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.query.id;
        console.log('get people info by id', id);
        const people = await People.getById(id);
        data = 
        {
            status: 200,
            message: 'Success',
            data: people
        }
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAll,
    getById
}