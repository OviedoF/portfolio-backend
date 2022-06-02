const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser');

/* INITIALIZE */
require('dotenv').config();
const port = process.env.PORT || 4000;
const app = express();
require('./mongoDB');
/* -------- */

/* settings */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 
/* -------- */

/* middlewares */
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require(path.join(__dirname, 'config/multer.config')));
/* -------- */

/* routes */
app.get('/', (req, res) => {
    res.render('index');
})

app.use('/api', require(path.join(__dirname, 'routes/api.routes')));
app.use('/api/projects', require(path.join(__dirname, 'routes/projects.routes')));
app.use('/api/tecnologies', require(path.join(__dirname, 'routes/tecnologies.routes')));
app.use('/api/texts', require(path.join(__dirname, 'routes/texts.routes')));
/* -------- */

app.listen(port, (e) => {
    console.log('servidor escuchando el puerto', port);
})