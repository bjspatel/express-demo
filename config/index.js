/**
 * @file
 * @description Sets configuration values
 */
'use strict';

const path = require('path');
const nconf = require('nconf');
const joi = require('joi');
const debug = require('debug');
const bluebird = require('bluebird');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}
const filePath = path.join(
  __dirname,
  'values',
  `${process.env.NODE_ENV}.json`
);
nconf.env().file({ file: filePath });

const validator = {
  DB_URL: joi.string().required(),
  PORT: joi.number().required(),
  DEBUG: joi.string().required()
};

const errors = [];
for (let key in validator) {
  const value = nconf.get(key);
  const { error } = joi.validate(value, validator[key]);
  if (error) {
    errors.push(`"${key}": ${error.message}`);
  }
}

if (errors.length > 0) {
  throw new Error(`Configuration validation errors: ${errors.join('; ')}}`);
}

debug.enable(nconf.get('DEBUG'));
global.Promise = bluebird;

module.exports = { nconf };
