const express = require('express');
const investimentsRoute = require('./investments');
// const depositsAndWithdrawalsRoute = require('./depositsandwithdrawals');

const router = express.Router();

router.use('/products', investimentsRoute);
// router.use('/conta', depositsAndWithdrawalsRoute);

module.exports = router;