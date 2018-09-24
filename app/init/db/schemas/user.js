/**
 * @file
 * @description Schema definition of 'user'
 */
'use strict';

const { Schema } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  firstName: String,

  lastName: String,

  status: {
    type: String,
    enum: ['inactive', 'active', 'suspended'],
    default: 'inactive'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  },

  lastLoginAt: Date
});

module.exports = userSchema;
