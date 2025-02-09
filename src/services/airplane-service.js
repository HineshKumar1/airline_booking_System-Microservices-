const { AirplaneRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

const createAeroplane = async (data) => {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create a new Airplan object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAllAirplanes = async () => {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    console.log("Error");
    throw new AppError(
      "Cannot fetch data of all Airplane record",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAirplane = async (id) => {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {

    if (error.StatusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Cannot fetch data of airplane record",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const deleteAirplaneById = async (id) => {
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested to delete is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Cannot delete data of airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const updateAirplaneById = async(id,data)=>{
  try {
    const response = await airplaneRepository.update(id,data);
    return response;
  } catch (error) {
    throw new AppError(
      "Cannot update data of airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createAeroplane, 
  getAllAirplanes, 
  getAirplane, 
  deleteAirplaneById,
  updateAirplaneById
};
