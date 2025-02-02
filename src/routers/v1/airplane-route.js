const router = require('express').Router();

const {AirPlaneController} =require('../../controller');
const {AirPlaneMiddlewares} = require('../../middleware')

router.post('/',
AirPlaneMiddlewares.validateCreateRequest,
AirPlaneController.cretaeAirPlane
);

module.exports = router;