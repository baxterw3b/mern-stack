const express = require('express');
const router = require('express-promise-router')();
const Controller = require('../controllers/controllers');

router.route('/')
    .get(Controller.getAll);

module.exports = router;