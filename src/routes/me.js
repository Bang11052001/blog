const { Router } = require('express');
const express = require('express');
const router = express.Router();
const courseController = require('../app/controller/courseController.js');

router.get('/course/stored', courseController.myStored);
router.put('/course/stored', courseController.update);
router.patch('/course/delete', courseController.delete);
router.delete('/course/forcdelete', courseController.forceDelete);
router.patch('/course/restore', courseController.restoreCourse);
router.get('/course/trash', courseController.trashCourse);

module.exports = router;
