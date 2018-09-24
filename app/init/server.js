/**
 * @file
 * @description Starts server by using express app
 */
'use strict';

const http = require('http');
const nconf = require('nconf');
const getApp = require('./express');
const debug = require('debug')('app:init');

module.exports = () =>
  new Promise((resolve, reject) => {
    const app = getApp();

    const port = nconf.get('PORT');
    app.set('port', port);

    // Create HTTP server
    const server = http.createServer(app);

    // Make server instance available on exported object
    app.set('server', server);

    // Detect the error and show appropriate message
    server.on('error', err => {
      if (err.syscall !== 'listen') {
        reject(err);
      }

      // Handle specific errors with friendly messages
      switch (err.code) {
        case 'EACCES':
          debug(`${port} requires elevated privileges`, { err });
          process.exit(1);
        case 'EADDRINUSE':
          debug(`${port} is already in use`, { err });
          process.exit(1);
        default:
          reject(err);
      }
    });

    // Listen on provided port, on all network interfaces
    server.listen(port, () => {
      const addr = server.address();
      debug(`Listening on ${addr.port}`);
      resolve(app);
    });
  });
