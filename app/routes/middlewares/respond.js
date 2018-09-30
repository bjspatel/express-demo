/**
 * @file
 * @description Route level middleware for transforming response data
 */
'use strict';

const debug = require('debug')('app:tbd');

module.exports = (req, res, next) => {
  debug('"app/routes/middlewares/respond.js" to be implemented');
  next();
};
