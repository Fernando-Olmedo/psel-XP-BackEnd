const express = require('express');
const investmentsController = require('../controllers/investments.controller');
const WalletQuantityMiddlewate = require('../middlewares/validade.wallet.quantity.middlewate');
const assetQuantityMiddleware = require('../middlewares/validate.asset.quantity.middleware');
const validateInvestment = require('../middlewares/validate.investment.input');

const investimentsRouter = express.Router();

investimentsRouter.get('/teste', investmentsController.findAll);
investimentsRouter.post('/comprar', 
    validateInvestment, assetQuantityMiddleware, investmentsController.buyOrder);
investimentsRouter.post('/vender', 
    validateInvestment, WalletQuantityMiddlewate, investmentsController.sellOrder);

module.exports = investimentsRouter;