const projectModel = require('../models/project.model');
const projectsController = {};
require('dotenv').config();

projectsController.getProject = async (req,res) => {
    try {
        const id = req.params.id;
        const projectSelected = await projectModel.findById(id);

        res.send(projectSelected);
    } catch (error) {
        console.log(error);
    }
}

projectsController.getAllProjects = async (req, res) => {
    try {
        const data = await projectModel.find({});
        res.send(data);
    } catch (error) {
        console.log(error)
    }
}

projectsController.postProject = async (req, res) => {
    try {
        const body = {
            ...req.body,
            imgUrl: `${process.env.URL}/images/${req.file.filename}`
        };

        const newProject = new projectModel(body);
        await newProject.save();

        res.status(201).redirect('/api/projects');
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

projectsController.deleteProject = async (req, res) => {
    try {
        const id = req.params.id;

        await projectModel.findByIdAndDelete(id);

        res.status(201).send('deleteado')
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

projectsController.updateProject = async (req,res) => {
    try {
        const id = req.params.id;
        const body = {
            ...req.body,
            imgUrl: `${process.env.URL}/images/${req.file.filename}`
        };

        await projectModel.findByIdAndUpdate(id, body);

        res.status(201).send('updateado')
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

module.exports = projectsController;