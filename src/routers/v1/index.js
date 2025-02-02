const express = require('express');

const airPlaneRoutes  = require('./airplane-route');

const router = express.Router();

router.use('/airplanes',airPlaneRoutes)

module.exports = router;