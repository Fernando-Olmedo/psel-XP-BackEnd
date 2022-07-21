const express = require('express');
const investimentsRouter = require('./investments');
const clientsRouter = require('./clients');
const assetsRouter = require('./assets');
const depAndWithRouter = require('./depositsandwithdrawals');
const loginRouter = require('./login');
const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use('/investimentos', authenticationMiddleware, investimentsRouter);
router.use('/clientes', clientsRouter);
router.use('/assets', assetsRouter);
router.use('/conta', depAndWithRouter);
router.use('/login', loginRouter);

module.exports = router;