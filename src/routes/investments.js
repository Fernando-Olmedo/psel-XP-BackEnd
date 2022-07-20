const express = require('express');
const investmentsControllers = require('../controllers/investments.controller');
const assetQuatityMiddleware = require('../database/middlewares/asset.quatity.middleware');
const { validateInvestment } = require('../database/middlewares/validate.investment.input');

const investimentsRouter = express.Router();

investimentsRouter.get('/teste', investmentsControllers.findAll);
investimentsRouter.post('/comprar', 
    validateInvestment, assetQuatityMiddleware, investmentsControllers.buyOrder);

module.exports = investimentsRouter;