const { Router } = require('express');
const express = require('express');
const router = express.Router();
const courseController = require('../app/controller/courseController.js');

router.get('/create', courseController.create);
router.get('/edit', courseController.edit);

router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
