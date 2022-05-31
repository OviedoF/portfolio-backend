const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('holi xddd');
})

app.use('/api', require('./routerApi'));

app.listen(port, (e) => {
    console.log('servidor escuchando el puerto: ' + port);
})