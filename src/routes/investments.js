const express = require('express');
const investmentsControllers = require('../controllers/investments.controller');
const assetQuantityMiddleware = require('../database/middlewares/asset.quantity.middleware');
const validateInvestment = require('../database/middlewares/validate.investment.input');

const investimentsRouter = express.Router();

investimentsRouter.get('/teste', investmentsControllers.findAll);
investimentsRouter.post('/comprar', 
    validateInvestment, assetQuantityMiddleware, investmentsControllers.buyOrder);
investimentsRouter.post('/vender', 
    validateInvestment, assetQuantityMiddleware, investmentsControllers.sellOrder);

module.exports = investimentsRouter;