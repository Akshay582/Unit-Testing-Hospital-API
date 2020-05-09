const express = require('express');
const router = express.Router();
const passport = require('passport');

router.use('/reports', require('./report'));
router.use('/patients', require('./patient'));
router.use('/doctors', require('./doctors'));

module.exports = router;