const express = require('express');
const investimentsRouter = require('./investments');
const clientsRouter = require('./clients');
const assetsRouter = require('./assets');
const depAndWithRouter = require('./depositsandwithdrawals');
const loginRouter = require('./login');

const router = express.Router();

router.use('/investimentos', investimentsRouter);
router.use('/clientes', clientsRouter);
router.use('/assets', assetsRouter);
router.use('/conta', depAndWithRouter);
router.use('/login', loginRouter);

module.exports = router;