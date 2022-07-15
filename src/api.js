const express = require('express');
require('express-async-errors');
const router = require('./routes/index');
// const handleError = require('./middlewares/handleError');

const app = express();

app.use(express.json());

app.use(router);

// app.use(handleError);

module.exports = app;