const express = require('express');
const router = express.Router();

const reportController = require('../controllers/report');

router.post('/:id/create_report', reportController.create);
router.post('/:id/all_reports', reportController.allReports);
router.get('/:status', reportController.sameStatus);

module.exports = router;