/**
 * @file
 * @description App level middleware for authentication
 */
'use strict';

const debug = require('debug')('app:tbd');

module.exports = () => {
  const handler = (req, res, next) => {
    debug(
      '"app/init/middlewares/authentication-handler.js" to be implemented'
    );
    next();
  };
  return handler;
};
