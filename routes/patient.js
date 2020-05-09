const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patient');

router.post('/register', patientController.create);

module.exports = router;