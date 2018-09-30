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

  password_hash: {
    type: String,
    required: true
  },

  first_name: String,

  last_name: String,

  status: {
    type: String,
    enum: ['inactive', 'active', 'suspended', 'archieved'],
    default: 'inactive'
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date,
    default: Date.now
  },

  last_login_at: Date
});

module.exports = userSchema;
