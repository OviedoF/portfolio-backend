const projectsController = {};

projectsController.getProject = (req,res) => {
    res.send('toma te mando un proyecto');
}

projectsController.getAllProjects = (req, res) => {
    res.send('toma te mando todos los proyectos');
}

projectsController.postPorjesct = (req, res) => {
    res.send('gracias por postear un proyecto')
}