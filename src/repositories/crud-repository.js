const {Logger } = require("../config")

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        
            const response = await this.model.create(data);
            return response;
    }

    async destory(){
        try {
            const response = await this.model.destory({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo: destory');
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo: get');
            throw error;
        }
    }

    async getAll(){
        try {
            const response = await this.model.findAll(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo: get All');
            throw error;
        }
    }

    async update(id, data){ // data --> {col: value, ....}
        try {
            const response = await this.model.update(data,{
                where:{
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo: get All');
            throw error;
        }
    }
    
}

module.exports = CrudRepository;