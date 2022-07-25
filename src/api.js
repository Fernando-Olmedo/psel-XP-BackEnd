require('express-async-errors');
const express = require('express');
// const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/http.error.middleware');
// const { swaggerConfig } = require('./docs/swagger.config');
const swaggerFile = require('../swagger_output.json');

const app = express();

app.use(express.json());

// const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(errorMiddleware);

module.exports = app;