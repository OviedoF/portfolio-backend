const tecnologiesControllers = {};
const tecnologyModel = require('../models/tecnology.model');
require('dotenv').config();

tecnologiesControllers.getTecnology = async (req, res) => {
    try {
        const id = req.params.id;

        const tecnology = tecnologyModel.findById(id);

        res.status(201).send(tecnology);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

tecnologiesControllers.getAllTecnologies = async (req, res) => {
    try {
        const data = await tecnologyModel.find();

        res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error.message)
    }
}


tecnologiesControllers.postTecnology = async (req, res) => {
    try {
        const body = {
            ...req.body,
            imgUrl: `${process.env.URL}/images/${req.file.filename}`
        };

        const newTecnology = new tecnologyModel(body);

        await newTecnology.save();

        res.status(201).redirect('/api/tecnologies');
    } catch (error) {
        res.status(500).send(error.message)
    }
}

tecnologiesControllers.deleteTecnology = async (req,res) => {
    try {
        const id = req.params.id;

        await tecnologyModel.findByIdAndDelete(id);

        res.status(201).send('deleteado')
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

tecnologiesControllers.updateTecnology = async (req,res) => {
    try {
        const id = req.params.id;
        const body = {
            ...req.body,
            imgUrl: `${process.env.URL}/images/${req.file.filename}`
        };

        await tecnologyModel.findByIdAndUpdate(id, body);

        res.status(201).send('updateado')
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}


module.exports = tecnologiesControllers;