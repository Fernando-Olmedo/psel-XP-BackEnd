const express = require('express');
const investimentsRouter = require('./investments');
const clientsRouter = require('./clients');
// const depositsAndWithdrawalsRoute = require('./depositsandwithdrawals');

const router = express.Router();

router.use('/investimentos', investimentsRouter);
router.use('/clientes', clientsRouter);
// router.use('/conta', depositsAndWithdrawalsRoute);

module.exports = router;