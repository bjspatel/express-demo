/**
 * @file
 * @description Schema definition of 'test-attempt'
 */
'use strict';

const { Schema } = require('mongoose');

const testAttemptSchema = new Schema({
  userId: {
    type: String,
    required: true
  },

  testId: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ['ready', 'running', 'cancelled', 'finished'],
    default: 'ready'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = testAttemptSchema;
