/**
 * @file
 * @description Starts application
 */
'use strict';

require('../config');
const debug = require('debug')('app:init');
const db = require('./init/db');
const server = require('./init/server');

const SIGNALS = ['SIGINT', 'SIGTERM'];

class App {
  constructor() {
    this.start();
  }

  async start() {
    try {
      this.db = await db();
      this.app = await server();
      this.handleSignals();
    } catch (err) {
      debug('Start failed', { err });
      process.exit(1);
    }
  }

  handleSignals() {
    const gracefullyShutdown = signal => {
      debug(
        `Process received ${signal} signal: gracefully shutting down http server and database connection`
      );
      const server = this.app.get('server');
      server.close(async err => {
        if (err) {
          debug('Error shutting down the server', { err });
          process.exit(1);
        }

        try {
          await this.db.disconnect();
        } catch (err) {
          debug('Error closing connection to the database', { err });
          process.exit(1);
        }

        process.exit(0);
      });
    };

    ['SIGINT', 'SIGTERM'].forEach(signal =>
      process.on(signal, gracefullyShutdown.bind(null, signal))
    );
  }
}

module.exports = new App();
