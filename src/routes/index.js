const express = require('express');
const investimentsRouter = require('./investments');
// const depositsAndWithdrawalsRoute = require('./depositsandwithdrawals');

const router = express.Router();

router.use('/investimentos', investimentsRouter);
// router.use('/conta', depositsAndWithdrawalsRoute);

module.exports = router;