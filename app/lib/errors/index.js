/**
 * @file
 * @description Binds all errors together
 */
'use strict';

const ForbiddenError = require('./forbidden-error');
const InternalError = require('./internal-error');
const NotFoundError = require('./not-found-error');
const TooManyRequestsError = require('./too-many-requests-error');
const UnauthorizedError = require('./unauthorized-error');
const ValidationError = require('./validation-error');

module.exports = {
  ForbiddenError,
  InternalError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
  ValidationError
};
