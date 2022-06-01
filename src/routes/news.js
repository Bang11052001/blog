const { Router } = require('express');
const express = require('express');
const router = express.Router();
const  SiteController = require('../app/controller/newsController.js')


router.use('/detail',SiteController.detail);
router.use('/',SiteController.index);

module.exports = router;
