const express = require('express');

const dbConnection = require('../../database');
const ListModel = require('../models/listModel');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        const connection = dbConnection();

        ListModel.getList(connection, function(error, result) {
            return res.send({ result });
        });
    } catch(err) {
        return res.sendStatus(400).send({ erro: 'Erro ao conectar no banco de dados' });
    }
});

router.post('/', async(req, res) => {
    try {
        const list = req.body;
        
        const connection = dbConnection();

        ListModel.createList(connection, list, function(error, result) {
            return res.sendStatus(200);
        });
    } catch(err) {
        return res.sendStatus(400).send({ erro: 'Erro ao conectar no banco de dados' });
    }
});

router.put('/', async(req, res) => {
    try {
        const list = req.body;

        const connection = dbConnection();

        ListModel.updateList(connection, list, function(error, result) {
            return res.sendStatus(200);
        });
    } catch {
        return res.sendStatus(400).send({ erro: 'Error ao conectar no banco de dados' });
    }
});

router.delete('/:itemID', async(req, res) => {
    try {
        const itemID = parseInt(req.params.itemID);
        
        const connection = dbConnection();

        ListModel.deleteList(connection, itemID, function(error, result) {
            return res.sendStatus(200);
        });
    } catch {
        return res.sendStatus(400).send({ erro: 'Error ao conectar no banco de dados' });
    }
});

module.exports = app => app.use('/list', router);