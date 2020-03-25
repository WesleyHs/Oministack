const express = require ('express');
const routes = express.Router();


routes.post('/users', (req, res)=> {

    const body = req.body

    console.log(body)

    return res.json({
        evento: 'Semana oministack',
        aluno:'Cleiton'
    });
});

module.exports = routes;