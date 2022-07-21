const express = require('express');
const depAndWithController = require('../controllers/depAndWith.controller');
const checkAccountBalance = require('../middlewares/check.account.balance');
const validateDepAndWithInput = require('../middlewares/validate.depAndWith.input');

const depAndWithRouter = express.Router();

depAndWithRouter.post('/deposito', validateDepAndWithInput, depAndWithController.deposit);
depAndWithRouter.post('/saque',
    validateDepAndWithInput, checkAccountBalance, depAndWithController.withdrawal);

module.exports = depAndWithRouter;