const express = require('express');
const router = express.Router();
const passport = require('passport');

router.use('/reports', 
        passport.authenticate('jwt', {session: false}), require('./report'));
router.use('/patients',
        passport.authenticate('jwt', {session: false}), require('./patient'));
router.use('/doctors', require('./doctors'));

module.exports = router;