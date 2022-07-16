const express = require('express');
require('express-async-errors');
const router = require('./routes/index');
const errorMiddleware = require('./database/middlewares/http.error.middleware');

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

module.exports = app;