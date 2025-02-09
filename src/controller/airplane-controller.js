const { StatusCodes } = require("http-status-codes");
const { AirPlaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

const cretaeAirPlane = async (req, res) => {
  try {
    const { modelNumber, capacity } = req.body;

    const airplane = await AirPlaneService.createAeroplane({
      modelNumber: modelNumber,
      capacity: capacity,
    });
    SuccessResponse.data = airplane;
    SuccessResponse.message = "Airplane Create Successfuly";
    return res.status(StatusCodes.CREATED).json({
      SuccessResponse,
    });
  } catch (error) {
    ErrorResponse.error = error;
    console.log(error);
    ErrorResponse.message = "Something went wrong while creating airplane";
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ErrorResponse,
    });
  }
};

const getAllAirplanes = async (req, res) => {
  try {
    const airplanes = await AirPlaneService.getAllAirplanes();

    SuccessResponse.data = airplanes;
    SuccessResponse.message = "Airplanes Record fetch successfully";
    return res.status(StatusCodes.OK).json({
      SuccessResponse,
    });
  } catch (error) {
    ErrorResponse.error = error;
    console.log(error);
    ErrorResponse.message = "Something went wrong while getting airplane";
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ErrorResponse,
    });
  }
};

const getAirplane = async (req, res) => {
  try {

    const {id} = req.params;

    const airplanes = await AirPlaneService.getAirplane(id);

    SuccessResponse.data = airplanes;
    SuccessResponse.message = "Airplane Record fetch successfully";
    return res.status(StatusCodes.OK).json({
      SuccessResponse,
    });
  } catch (error) {
    ErrorResponse.error = error;
    console.log(error);
    ErrorResponse.message = "Something went wrong while fetching airplane";
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ErrorResponse,
    });
  }
};

const deleteAirplane = async (req, res) => {
  try {
    const { id } = req.params;

    const airplane = await AirPlaneService.deleteAirplaneById(id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airplane record deleted successfully",
      data: airplane,
    });
  } catch (error) {
    console.error(error);

    return res.status(
      error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    ).json({
      success: false,
      message: error.message || "Something went wrong while deleting the airplane",
    });
  }
};



module.exports = {
  cretaeAirPlane,
  getAllAirplanes,
  getAirplane,
  deleteAirplane
};
