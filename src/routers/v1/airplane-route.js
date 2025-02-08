const router = require('express').Router();

const {AirPlaneController} =require('../../controller');
const {AirPlaneMiddlewares} = require('../../middleware')

router.post('/',
AirPlaneMiddlewares.validateCreateRequest,
AirPlaneController.cretaeAirPlane
);

router.get('/',AirPlaneController.getAllAirplanes);

router.get('/:id',AirPlaneController.getAirplane);

module.exports = router;