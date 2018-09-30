/**
 * @file
 * @description Initializes express app
 */
'use strict';

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const { errorHandler } = require('./middlewares');
const routes = require('../routes');

const corsOptions = {
  allowedHears: ['Content-Type', 'Authorization']
};

module.exports = () => {
  const app = express();

  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors(corsOptions));

  if (process.env.NODE_ENV === 'development') {
    const swaggerDoc = yaml.load('./docs/api.yaml');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  }

  // set routes
  app.use('/api', routes);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    err.message = 'Route not found';
    next(err);
  });

  app.use(errorHandler);

  return app;
};
