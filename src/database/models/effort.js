'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class effort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  effort.init({
    activity_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    duration: DataTypes.FLOAT,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'effort',
  });
  return effort;
};