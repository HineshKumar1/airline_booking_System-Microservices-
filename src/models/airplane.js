'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    modelNumber: {
      type:DataTypes.STRING,
      allowNull: true,
      validate:{
        isAlphanumeric: true
      }
    },
    capacity: {
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate:{
        max: 2000
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};