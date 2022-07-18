const express = require('express');
const investmentsControllers = require('../controllers/investments.controller');

const investimentsRouter = express.Router();

investimentsRouter.get('/teste', investmentsControllers.findAll);
investimentsRouter.post('/comprar', investmentsControllers.buyOrder);

module.exports = investimentsRouter;