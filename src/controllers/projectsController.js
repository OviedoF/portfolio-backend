const projectModel = require('../models/project.model');
const projectsController = {};

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
        const body = req.body;
        const newProject = new projectModel(body);
        const {fileName} = req.file;

        newProject.setImgUrl(fileName);

        await newProject.save();

        res.redirect('/api/projects');
    } catch (error) {
        console.log(error);
    }
}

module.exports = projectsController;