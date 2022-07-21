const express = require('express');
const assetsController = require('../controllers/assets.controller');

const assetsRouter = express.Router();

assetsRouter.post('/ativos/:codAtivo', assetsController.findAsset);

module.exports = assetsRouter;