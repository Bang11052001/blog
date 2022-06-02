const { Router } = require('express');
const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/newsController.js');

router.use('/detail', siteController.detail);
router.use('/', siteController.index);

module.exports = router;
