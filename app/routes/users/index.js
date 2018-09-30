/**
 * @file
 * @description Sets routes related to users
 */
'use strict';

const router = require('express').Router();
const userActions = require('./actions');

router.post('/', userActions.create);

router.get('/', userActions.list);

router.get('/:id', userActions.get);

router.put('/:id', userActions.edit);

router.delete('/:id', userActions.delete);

module.exports = router;
