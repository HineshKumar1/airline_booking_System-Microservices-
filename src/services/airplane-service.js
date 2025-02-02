const {AirplaceRepisotory} = require('../repositories');
const {StatusCodes} = require('http-status-codes')
const {AppError} = require("../utils/errors")

const airplaneRepository = new AirplaceRepisotory();

const createAeroplane = async(data)=>{
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if(error.name === 'TypeError'){
            throw new AppError('Cannot create a new Airplan object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw error
    }
}

module.exports = { createAeroplane};