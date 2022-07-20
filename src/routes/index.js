const express = require('express');
const investimentsRouter = require('./investments');
const clientsRouter = require('./clients');
const assetsRouter = require('./assets');

// const depositsAndWithdrawalsRoute = require('./depositsandwithdrawals');

const router = express.Router();

router.use('/investimentos', investimentsRouter);
router.use('/clientes', clientsRouter);
router.use('/assets', assetsRouter);
// router.use('/conta', depositsAndWithdrawalsRoute);

module.exports = router;