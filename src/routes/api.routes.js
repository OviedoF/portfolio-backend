const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('holi, soy la api general');
});

module.exports = router;