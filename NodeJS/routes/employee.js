const express = require('express');
const router = express.Router();
const Enployee = require('../models/Employee');
const multer = require('multer');
const EmployeeContoller = require('../controllers/EmployeeController')
const upload = require('../middleware/upload')


router.get('/', EmployeeContoller.index)
router.post('/show', EmployeeContoller.show)
router.post('/store',upload.single('avatar'), EmployeeContoller.store)
router.post('/store', EmployeeContoller.store)


module.exports = router