const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctor');

router.post('/create', doctorController.create);
router.post('/login', doctorController.createSession);

module.exports = router;