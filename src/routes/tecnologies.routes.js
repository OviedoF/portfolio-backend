const express = require('express');
const router = express.Router();
const tecnologiesController = require('../controllers/tecnologiesController');

router.get('/', tecnologiesController.getAllTecnologies);

router.get('/:id', tecnologiesController.getTecnology);

router.post('/', tecnologiesController.postTecnology);

module.exports = router;