const router = require("express").Router();

const { CityController } = require("../../controller/");
const { CityMiddlewares } = require("../../middleware/");

router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.cretaeCityHandler
);

module.exports = router;
