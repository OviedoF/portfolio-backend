const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('holi')
});

router.get('/tecnologies', (req, res) => {
    res.send('api de tecnologias')
});

router.get('/projects', (req, res) => {
    res.send('api de proyectos')
});

router.get('/words', (req, res) => {
    res.send('palabritas');
})

module.exports = router;