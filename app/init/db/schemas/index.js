/**
 * @file
 * @description Contains all schemas
 */
'use strict';

const userSchema = require('./user');
const testSchema = require('./test');
const testAttemptSchema = require('./test-attempt');

module.exports = {
  user: userSchema,
  test: testSchema,
  testAttempt: testAttemptSchema
};
