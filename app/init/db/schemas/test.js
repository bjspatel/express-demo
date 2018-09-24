/**
 * @file
 * @description Schema definition of 'test'
 */
'use strict';

const { Schema } = require('mongoose');

const testSchema = new Schema({
  name: String,

  subject: String,

  maxScore: Number,

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = testSchema;
