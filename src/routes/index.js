const express = require('express');
const investimentsRouter = require('./investments');
const clientsRouter = require('./clients');
const assetsRouter = require('./assets');
const depAndWithRouter = require('./depositsandwithdrawals');
const loginRouter = require('./login');
const authenticationMiddleware = require('../middlewares/auth.middleware');
const permissionMiddleware = require('../middlewares/permission.middleware');

const router = express.Router();

router.use('/investimentos', authenticationMiddleware, permissionMiddleware, investimentsRouter);
router.use('/clientes', authenticationMiddleware, permissionMiddleware, clientsRouter);
router.use('/assets', assetsRouter);
router.use('/conta', authenticationMiddleware, permissionMiddleware, depAndWithRouter);
router.use('/login', loginRouter);

module.exports = router;