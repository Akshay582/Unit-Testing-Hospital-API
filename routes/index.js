const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../controllers/patient');
const reportController = require('../controllers/report');

router.use('/patients', require('./patients'));
router.use('/doctors', require('./doctors'));
router.post('/register_patient', patientController.create);
router.get('/reports/:status', reportController.sameStatus);

module.exports = router;