const express = require('express');

const airPlaneRoutes  = require('./airplane-route');
const cityRoute = require('./city-route')

const router = express.Router();

router.use('/airplanes',airPlaneRoutes)

router.use('/cities',cityRoute)

module.exports = router;