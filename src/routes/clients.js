const express = require('express');
const clientsController = require('../controllers/clients.controller');

const clientsRouter = express.Router();

clientsRouter.get('/ativos/:codCliente', clientsController.findAllAssets);

module.exports = clientsRouter;