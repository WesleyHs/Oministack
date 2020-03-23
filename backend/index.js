const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    return res.json('vamos la')
})

app.listen(3333);