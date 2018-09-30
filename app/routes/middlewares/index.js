/**
 * @file
 * @description Route level middlewares
 */
'use strict';

const authenticate = require('./authenticate');
const authorize = require('./authorize');
const respond = require('./respond');
const validate = require('./validate');

module.exports = {
  authenticate,
  authorize,
  respond,
  validate
};
