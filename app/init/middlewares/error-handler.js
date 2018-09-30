/**
 * @file
 * @description Eror handling middleware
 */
'use strict';

const debug = require('debug')('app');

module.exports = (err, req, res, next) => {
  debug('"app/init/middlewares/error-handler.js" to be implemented');
  res.status = err.status || 500;
  res.json(err);
};
