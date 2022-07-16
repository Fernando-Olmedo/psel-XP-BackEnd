const express = require('express');
const investmentsControllers = require('../../draft/controllers/investments.controller');

const investimentsRouter = express.Router();

investimentsRouter.post('/', investmentsControllers.buyOrder);

module.exports = investimentsRouter;