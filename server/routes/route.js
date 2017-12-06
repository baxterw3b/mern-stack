const express = require('express');
const router = require('express-promise-router')();
const CampaignsController = require('../controllers/controllers');

router.route('/')
    .get(CampaignsController.getAll);

module.exports = router;