const express = require('express');
const investmentsControllers = require('../controllers/investments.controller');
const WalletQuantityMiddlewate = require('../middlewares/validade.wallet.quantity.middlewate');
const assetQuantityMiddleware = require('../middlewares/validate.asset.quantity.middleware');
const validateInvestment = require('../middlewares/validate.investment.input');

const investimentsRouter = express.Router();

investimentsRouter.get('/teste', investmentsControllers.findAll);
investimentsRouter.post('/comprar', 
    validateInvestment, assetQuantityMiddleware, investmentsControllers.buyOrder);
investimentsRouter.post('/vender', 
    validateInvestment, WalletQuantityMiddlewate, investmentsControllers.sellOrder);

module.exports = investimentsRouter;