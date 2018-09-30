/**
 * @file
 * @description Schema definition of 'test-attempt'
 */
'use strict';

const { Schema } = require('mongoose');

const testAttemptSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },

  test_id: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ['ready', 'running', 'cancelled', 'finished'],
    default: 'ready'
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = testAttemptSchema;
