const {AirplaneRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes')
const AppError = require('../utils/errors/app-error')

const airplaneRepository = new AirplaneRepository();

const createAeroplane = async(data)=>{
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {

        if(error.name == "SequelizeValidationError"){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError('Cannot create a new Airplan object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = { createAeroplane};