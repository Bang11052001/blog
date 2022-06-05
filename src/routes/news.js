const { Router } = require('express');
const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/newsController.js');

router.get('/detail', siteController.detail);
router.get('/', siteController.index);

module.exports = router;
