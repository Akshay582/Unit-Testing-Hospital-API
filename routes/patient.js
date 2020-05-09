const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patient');

const reportController = require('../controllers/report');

router.post('/register', patientController.create);

router.post('/:id/create_report', reportController.create);
router.post('/:id/all_reports', reportController.allReports);

module.exports = router;