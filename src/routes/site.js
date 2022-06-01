const { Router } = require('express');
const express = require('express');
const router = express.Router();
const  siteController = require('../app/controller/siteController.js')


router.use('/search',siteController.search);
router.use('/',siteController.index);

module.exports = router;
