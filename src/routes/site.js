const { Router } = require('express');
const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/siteController.js');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
