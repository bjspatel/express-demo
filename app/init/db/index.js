/**
 * @file
 * @description Manages mongodb connection
 */
'use strict';

const mongoose = require('mongoose');
const nconf = require('nconf');
const debug = require('debug')('app:init');
const schemas = require('./schemas');

module.exports = async () => {
  debug('Initializing database connection');

  mongoose.Promise = global.Promise;
  mongoose.set('debug', process.env.NODE_ENV === 'development');
  mongoose.set('useCreateIndex', true);

  if (mongoose.connection && mongoose.connection.readyState === 0) {
    await mongoose.connection.close();
  }

  mongoose.connection.on('error', err => {
    debug('Connection error', err);
    process.exit(1);
  });

  mongoose.connection.on('reconnectFailed', () => {
    debug('Database reconnection failed');
    process.exit(1);
  });

  mongoose.connection.on('connected', () => {
    debug('Database connected');
    // register models
    for (let [schemaName, schema] of Object.entries(schemas)) {
      mongoose.model(schemaName, schema);
    }
  });

  mongoose.connection.on('disconnected', () => {
    debug('Database disconnected');
  });

  const connectionOptions = {
    useNewUrlParser: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    reconnectTries: 10,
    reconnectInterval: 1000
  };

  // mongoose connection does not reject promise if there is `error` event listener
  // wrap it try/catch to avoid potential exceptions on mongoose updates
  try {
    const mongooseInstance = await mongoose.connect(
      nconf.get('DB_URL'),
      connectionOptions
    );
    return mongooseInstance;
  } catch (err) {
    debug('Connection error', err);
    process.exit(1);
  }
};
