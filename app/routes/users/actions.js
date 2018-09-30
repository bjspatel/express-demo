/**
 * @file
 * @description Defines actions for users
 */
'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const debug = require('debug')('app:routes');
const { isObjectId } = require('../../lib/util');
const { NotFoundError } = require('../../lib/errors');
const userActions = {};

userActions.create = async (req, res, next) => {
  try {
    const UserModel = mongoose.model('user');
    const result = await UserModel.create(req.body);

    res.data = result;
    debug('User created', result);
    next();
  } catch (err) {
    next(err);
  }
};

userActions.list = async (req, res, next) => {
  try {
    const UserModel = mongoose.model('user');
    res.data = await UserModel.find({});

    debug('Users retrieved', result);
    next();
  } catch (err) {
    next(err);
  }
};

userActions.get = async (req, res, next) => {
  try {
    let result = null;

    if (isObjectId(req.params.id)) {
      const UserModel = mongoose.model('user');
      result = await UserModel.findById(req.params.user_id);
    }

    if (result === null) {
      throw new NotFoundError('user');
    }

    res.data = result;
    debug('User retrieved', result);
    next();
  } catch (err) {
    next(err);
  }
};

userActions.edit = async (req, res, next) => {
  try {
    let result = null;

    if (isObjectId(req.params.id)) {
      const UserModel = mongoose.model('user');
      result = await UserModel.findById(req.params.user_id);
    }

    if (result === null) {
      throw new NotFoundError('user');
    }

    _.merge(result, req.body);
    await result.save();

    res.data = result;
    debug('User updated', result);
    next();
  } catch (err) {
    next(err);
  }
};

userActions.delete = async (req, res, next) => {
  try {
    let result = null;

    if (isObjectId(req.params.id)) {
      const UserModel = mongoose.model('user');
      result = await UserModel.findByIdAndDelete(req.params.id);
    }

    if (result === null) {
      throw new NotFoundError('user');
    }

    debug('User deleted', result);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userActions;
