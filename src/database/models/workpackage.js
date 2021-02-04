'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workpackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workpackage.init({
    project_id: DataTypes.INTEGER,
    parent_workpackage_id: DataTypes.INTEGER,
    usecase_code: DataTypes.STRING,
    title: DataTypes.STRING,
    planned_effort: DataTypes.FLOAT,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'workpackage',
  });
  return workpackage;
};