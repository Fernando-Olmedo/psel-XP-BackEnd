const express = require('express');
const depAndWithController = require('../controllers/depAndWith.controller');

const depAndWithRouter = express.Router();

depAndWithRouter.post('/deposito', depAndWithController.deposit);

module.exports = depAndWithRouter;