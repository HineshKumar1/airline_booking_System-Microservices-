const { StatusCodes } = require("http-status-codes");
const {AirPlaneService} = require("../services");
const {SuccessResponse , ErrorResponse} = require("../utils/common")


const cretaeAirPlane = async(req,res)=>{
    try {

        const {modelNumber, capacity} = req.body;

        const airplane = await AirPlaneService.createAeroplane({
            modelNumber : modelNumber,
            capacity: capacity
        });
        SuccessResponse.data = airplane;
        SuccessResponse.message = "Airplane Create Successfuly";
        return res.status(StatusCodes.CREATED).json({   
            SuccessResponse
        });
    } catch (error) {
        ErrorResponse.error = error
        ErrorResponse.message = "Something went wrong will creating airplane"
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          ErrorResponse
        })
    }
}

module.exports = {
     cretaeAirPlane
}