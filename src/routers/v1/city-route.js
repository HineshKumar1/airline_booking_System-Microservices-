const router = require('express').Router();

const {CityController} = require('../../controller/');
const { validateCreateRequest } = require('../../middleware/airplane-middleware');

router.post('/',CityController.cretaeCityHandler);

module.exports = router;