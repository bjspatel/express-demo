/**
 * @file
 * @description Schema definition of 'test'
 */
'use strict';

const { Schema } = require('mongoose');

const testSchema = new Schema({
  name: String,

  subject: String,

  max_score: Number,

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = testSchema;
