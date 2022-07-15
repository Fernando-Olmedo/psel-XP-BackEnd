const express = require('express');
require('express-async-errors');
const router = require('./database/routes/index');
const handleError = require('./database/middlewares/handleError');

const app = express();

app.use(express.json());

app.use(router);

app.use(handleError);

module.exports = app;