const CrudRepository = require("./crud-repository")
const {Airplane} = require('../models');

class AirplaceRepisotory extends CrudRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaceRepisotory;