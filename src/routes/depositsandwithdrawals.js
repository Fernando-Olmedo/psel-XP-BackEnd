const express = require('express');
const depAndWithController = require('../controllers/depAndWith.controller');
const validateDepAndWithInput = require('../middlewares/validate.depAndWith.input');

const depAndWithRouter = express.Router();

depAndWithRouter.post('/deposito', validateDepAndWithInput, depAndWithController.deposit);

module.exports = depAndWithRouter;