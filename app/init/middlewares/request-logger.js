/**
 * @file
 * @description App level middleware for request logging
 */
'use strict';

const debug = require('debug')('app:tbd');

module.exports = (req, res, next) => {
  debug('"app/init/middlewares/reqest-logger.js" to be implemented');
  next();
};
