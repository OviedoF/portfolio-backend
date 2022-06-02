const tecnologiesControllers = {};

tecnologiesControllers.getTecnology = (req, res) => {
    res.send('toma te doy la tecnología xddd');
}

tecnologiesControllers.postTecnology = (req, res) => {
    res.send('gracias posteaste un producto :D');
}

tecnologiesControllers.getAllTecnologies = (req, res) => {
    res.send('toma te doy todas las tecnologias');
}

module.exports = tecnologiesControllers;