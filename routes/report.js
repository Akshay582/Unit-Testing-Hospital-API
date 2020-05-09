const express = require('express');
const router = express.Router();

const reportController = require('../controllers/report');

router.get('/:status', reportController.sameStatus);

module.exports = router;