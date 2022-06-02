const textController = {};

textController.getAllTexts = (req, res) => {
    res.send('toma te mando todos los textos');
}

textController.getEsTexts = (req, res) => {
    res.send('te mando los textitos en español');
}

textController.getEnTexts = (req, res) => {
    res.send('te mando los textitos en inglés');
}

textController.getText = (req, res) => {
    res.send('te mando un sólo textito');
}

textController.postText = (req, res) => {
    res.send('posteaste un textito');
}

module.exports = textController;