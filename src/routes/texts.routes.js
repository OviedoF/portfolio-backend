const express = require('express');
const router = express.Router();
const path = require('path');
const textController = require(path.join(__dirname, '../controllers/textsController'));

router.get('/', textController.getAllTexts);

router.get('/es', textController.getEsTexts);

router.get('/en', textController.getEnTexts);

router.get('/:id', textController.getText);

router.post('/', textController.postText);

module.exports = router;

