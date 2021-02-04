'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project.init({
    client_id: DataTypes.INTEGER,
    project_type_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    planned_effort: DataTypes.FLOAT,
    active: DataTypes.BOOLEAN,
    freezing_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};