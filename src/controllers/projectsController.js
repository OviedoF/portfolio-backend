const projectsController = {};

projectsController.getProject = (req,res) => {
    res.send('toma te mando un proyecto');
}

projectsController.getAllProjects = (req, res) => {
    res.send('toma te mando todos los proyectos');
}

projectsController.postProject = (req, res) => {
    console.log(req.file);
    res.send('gracias por postear un proyecto');
}

module.exports = projectsController;