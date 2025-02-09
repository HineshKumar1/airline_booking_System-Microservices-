const router = require('express').Router();

const {AirPlaneController} =require('../../controller');
const {AirPlaneMiddlewares} = require('../../middleware')

router.post('/',
AirPlaneMiddlewares.validateCreateRequest,
AirPlaneController.cretaeAirPlane
);

router.get('/',AirPlaneController.getAllAirplanes);

router.get('/:id',AirPlaneController.getAirplane);

router.delete('/:id',AirPlaneController.deleteAirplane);

router.patch('/:id',AirPlaneController.updateAirplane)

module.exports = router;