const express = require('express');
const router = express.Router();

const reportController = require('../../controllers/api/report');

router.get('/:status', reportController.sameStatus);

module.exports = router;