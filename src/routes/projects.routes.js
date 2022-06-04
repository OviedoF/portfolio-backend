const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

router.get('/', projectsController.getAllProjects);

router.get('/:id', projectsController.getProject);

router.post('/', projectsController.postProject);

router.delete('/:id', projectsController.deleteProject);

router.put('/:id', projectsController.updateProject);
module.exports = router;