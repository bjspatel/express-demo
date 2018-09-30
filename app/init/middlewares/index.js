/**
 * @file
 * @description App level middlewares
 */

const requestLogger = require('./request-logger');
const authenticationHandler = require('./authentication-handler');
const errorHandler = require('./error-handler');

module.exports = {
  requestLogger,
  authenticationHandler,
  errorHandler
};
