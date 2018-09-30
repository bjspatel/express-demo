/**
 * @file
 * @description Sets all routes to express app
 */
'use strict';

const router = require('express').Router();
const usersRoutes = require('./users');

router.use('/users', usersRoutes);

module.exports = router;
