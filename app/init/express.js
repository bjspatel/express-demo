/**
 * @file
 * @description Initializes express app
 */
'use strict';

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
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

  // enable cors
  app.use(cors(corsOptions));

  // set routes
  app.use('/api', routes);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
  });

  app.use(errorHandler);

  return app;
};
