const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");
const {CityService} = require('../services/')

const cretaeCityHandler = async (req, res) => {
    try {
      const {name } = req.body;
  
     const city = await CityService.createCity({name})
      SuccessResponse.data = city;
      SuccessResponse.message = "City Create Successfuly";
      return res.status(StatusCodes.CREATED).json({
        SuccessResponse,
      });
    } catch (error) {
      ErrorResponse.error = error;
      console.log(error);
      ErrorResponse.message = "Something went wrong while creating city";
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        ErrorResponse,
      });
    }
  };

  module.exports = {
    cretaeCityHandler
  }